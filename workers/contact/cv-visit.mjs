const hosts = new Set(['diegoromero.dev', 'www.diegoromero.dev', 'storefrontpos.com', 'www.storefrontpos.com']);
const reply = (status, message) => Response.json({ message }, { status, headers: { 'Cache-Control': 'no-store' } });

export async function handleCvVisit(request, env, send) {
  if (request.method !== 'POST') return reply(405, 'Method not allowed.');
  if (!env.CV_WEBHOOK_SECRET) return reply(503, 'Notifications unavailable.');
  if (request.headers.get('Authorization') !== `Bearer ${env.CV_WEBHOOK_SECRET}`) return reply(401, 'Unauthorized.');
  let body;
  try {
    const raw = await request.text();
    if (raw.length > 12000) return reply(413, 'Request too large.');
    body = JSON.parse(raw);
  } catch {
    return reply(400, 'Invalid event.');
  }
  if (!body || body.event !== 'cv_link_open' || body.utm_source !== 'cv') return reply(400, 'Invalid event.');
  let url;
  try { url = new URL(body.url); } catch { return reply(400, 'Invalid URL.'); }
  if (url.protocol !== 'https:' || !hosts.has(url.hostname)) return reply(400, 'Invalid website.');
  const validId = value => typeof value === 'string' && /^[a-zA-Z0-9._:-]{1,200}$/.test(value);
  if (!validId(body.distinct_id) || !validId(body.session_id)) return reply(400, 'Missing analytics identity.');
  const project = 'https://us.posthog.com/project/226810';
  const site = url.hostname.includes('storefrontpos.com') ? 'Storefront POS' : 'Diego Romero portfolio';
  const cleanUrl = new URL(url.pathname, url.origin);
  for (const key of ['utm_source', 'utm_medium', 'utm_campaign', 'utm_content']) {
    const value = url.searchParams.get(key);
    if (value) cleanUrl.searchParams.set(key, value.slice(0, 200));
  }
  const text = [
    `Someone opened ${site} using a link in your CV.`,
    '',
    `Page: ${cleanUrl}`,
    `PostHog distinct ID: ${body.distinct_id}`,
    `PostHog session ID: ${body.session_id}`,
    `Session recording: ${project}/replay/${encodeURIComponent(body.session_id)}`,
    `Person: ${project}/person/${encodeURIComponent(body.distinct_id)}`,
    '',
    'The recording may take a few moments to become available. Browser privacy tools can prevent recording.',
  ].join('\n');
  try {
    await send({ subject: `CV visit — ${site}`, text });
    return reply(200, 'Notification sent.');
  } catch {
    return reply(503, 'Notification delivery failed.');
  }
}

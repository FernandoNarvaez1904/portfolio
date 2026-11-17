export async function onRequest(context) {
  const response = await context.next();
  if (!response.headers.get('Content-Type')?.includes('text/html')) return response;
  const key = context.env.NEXT_PUBLIC_POSTHOG_KEY;
  const host = context.env.NEXT_PUBLIC_POSTHOG_HOST;
  if (typeof key !== 'string' || !/^phc_[a-zA-Z0-9_-]+$/.test(key) || typeof host !== 'string') return response;
  let apiHost;
  try { apiHost = new URL(host); } catch { return response; }
  if (apiHost.protocol !== 'https:') return response;
  const escape = value => value.replaceAll('&', '&amp;').replaceAll('"', '&quot;').replaceAll('<', '&lt;');
  return new HTMLRewriter().on('head', {
    element(element) {
      element.prepend(`<meta name="posthog-project-key" content="${escape(key)}"><meta name="posthog-api-host" content="${escape(apiHost.origin)}">`, { html: true });
    },
  }).transform(response);
}

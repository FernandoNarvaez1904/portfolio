const origins = new Set(['https://diegoromero.dev', 'https://www.diegoromero.dev']);
const response = (status, message) => Response.json({ message }, { status, headers: { 'Cache-Control': 'no-store' } });
export async function handleContact(request, env, send, verifyFetch = fetch) {
  if (request.method !== 'POST') return response(405, 'Method not allowed.');
  if (!origins.has(request.headers.get('Origin'))) return response(403, 'Please send your message from this website.');
  if (!request.headers.get('Content-Type')?.startsWith('application/json')) return response(415, 'Please submit the contact form.');
  const reader = request.body?.getReader();
  if (!reader) return response(400, 'Please complete the form.');
  let chunks = [], size = 0;
  while (true) { const {done, value} = await reader.read(); if(done) break; size += value.length; if(size > 16000) { await reader.cancel(); return response(413, 'Your message is too long.'); } chunks.push(value); }
  let body;
  try { const bytes = new Uint8Array(size); let offset=0; for(const c of chunks) {bytes.set(c,offset);offset+=c.length;} body=JSON.parse(new TextDecoder().decode(bytes)); } catch { return response(400, 'Please complete the form.'); }
  if (!body || typeof body !== 'object' || Array.isArray(body)) return response(400, 'Please complete the form.');
  const {name,email,message,token,website} = body;
  if(website) return response(400, 'Unable to send this message.');
  if(typeof name !== 'string' || name.trim().length < 2 || name.length > 100 || typeof email !== 'string' || email.length > 254 || !/^[^\s<>@,;]+@[^\s<>@,;]+\.[^\s<>@,;]+$/.test(email) || typeof message !== 'string' || message.trim().length < 10 || message.length > 5000) return response(400, 'Check your name, email, and message (10–5,000 characters).');
  if(typeof token !== 'string' || !token || token.length > 2048) return response(400, 'Please complete the security check.');
  if(!env.TURNSTILE_SECRET || !env.RATE_LIMITER) return response(503, 'Contact form unavailable. Please email me directly.');
  const ip=request.headers.get('CF-Connecting-IP');
  if(!ip) return response(403, 'Please submit your message from the website.');
  try {
    const limit = await env.RATE_LIMITER.limit({key:ip});
    if(!limit.success) return response(429, 'Too many attempts. Please try again in a minute.');
    const result=await verifyFetch('https://challenges.cloudflare.com/turnstile/v0/siteverify',{method:'POST',body:new URLSearchParams({secret:env.TURNSTILE_SECRET,response:token,remoteip:ip}),signal:AbortSignal.timeout(10000)});
    if(!result.ok) return response(503,'Security check unavailable. Please try again.');
    const check=await result.json();
    if(!check.success || !['diegoromero.dev','www.diegoromero.dev'].includes(check.hostname) || check.action !== 'contact') return response(400, 'Security check expired or failed. Please try again.');
    await send({name:name.trim(),email:email.trim(),message:message.trim()});
    return response(200, 'Your message was sent. Thank you for getting in touch.');
  } catch { return response(503, 'Your message could not be sent. Please try again or email me directly.'); }
}

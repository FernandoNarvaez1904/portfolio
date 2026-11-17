import test from 'node:test';
import assert from 'node:assert/strict';
import { handleCvVisit } from './cv-visit.mjs';
const env = { CV_WEBHOOK_SECRET: 'test-secret' };
const event = { event: 'cv_link_open', utm_source: 'cv', url: 'https://diegoromero.dev/?utm_source=cv&email=private@example.com', distinct_id: 'visitor-id', session_id: 'session-id' };
const request = (body = event, secret = env.CV_WEBHOOK_SECRET) => new Request('https://diegoromero.dev/api/cv-visit', { method: 'POST', headers: { Authorization: `Bearer ${secret}` }, body: JSON.stringify(body) });
test('CV alert includes matching identity and recording, and strips unrelated URL parameters', async () => {
  let sent;
  const response = await handleCvVisit(request(), env, async message => { sent = message; });
  assert.equal(response.status, 200);
  assert.match(sent.text, /PostHog distinct ID: visitor-id/);
  assert.match(sent.text, /replay\/session-id/);
  assert.doesNotMatch(sent.text, /private@example/);
});
test('unauthenticated request cannot send email', async () => {
  let sent = false;
  assert.equal((await handleCvVisit(request(event, 'wrong'), env, async () => { sent = true; })).status, 401);
  assert.equal(sent, false);
});
for (const patch of [{ url: 'https://evil.example/' }, { utm_source: 'other' }, { session_id: '' }, { distinct_id: 'bad\r\nvalue' }]) {
  test(`invalid CV event ${JSON.stringify(patch)} cannot send`, async () => {
    let sent = false;
    assert.equal((await handleCvVisit(request({ ...event, ...patch }), env, async () => { sent = true; })).status, 400);
    assert.equal(sent, false);
  });
}
test('send failure permits retry instead of reporting delivery', async () => {
  assert.equal((await handleCvVisit(request(), env, async () => { throw Error('send failed'); })).status, 503);
});

import test from 'node:test';
import assert from 'node:assert/strict';
import { deliverCvOnce } from './cv-delivery.mjs';
function state() {
  const values = new Map();
  let pending = Promise.resolve();
  return {
    storage: {
      async get(key) { return values.get(key); },
      async put(key, value) { values.set(key, value); },
      async setAlarm() {},
    },
    blockConcurrencyWhile(callback) {
      const result = pending.then(callback);
      pending = result.catch(() => {});
      return result;
    },
  };
}
test('simultaneous deliveries and retries send only one accepted email', async () => {
  const context = state();
  let sent = 0;
  const send = async () => { sent++; await new Promise(resolve => setTimeout(resolve, 20)); };
  await Promise.all([deliverCvOnce(context, send), deliverCvOnce(context, send)]);
  await deliverCvOnce(context, send);
  assert.equal(sent, 1);
});
test('failed delivery remains retryable', async () => {
  const context = state();
  await assert.rejects(deliverCvOnce(context, async () => { throw Error('send unavailable'); }));
  let sent = 0;
  await deliverCvOnce(context, async () => { sent++; });
  assert.equal(sent, 1);
});

export async function deliverCvOnce(state, send) {
  return state.blockConcurrencyWhile(async () => {
    if (await state.storage.get('sent')) return;
    await send();
    await state.storage.put('sent', true);
    await state.storage.setAlarm(Date.now() + 7 * 24 * 60 * 60 * 1000);
  });
}

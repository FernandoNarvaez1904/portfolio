export async function onRequest(context) {
  return context.env.CONTACT.fetch(context.request);
}

import { EmailMessage } from 'cloudflare:email';
import { DurableObject } from 'cloudflare:workers';
import { deliverCvOnce } from './cv-delivery.mjs';
import { handleContact } from './handler.mjs';
import { handleCvVisit } from './cv-visit.mjs';

function encode(value) {
  return btoa(String.fromCharCode(...new TextEncoder().encode(value)));
}

export default {
  fetch(request, env) {
    if (new URL(request.url).pathname === '/api/cv-visit') {
      return handleCvVisit(request, env, async ({ subject, text, deliveryKey }) => {
        const id = env.CV_DELIVERIES.idFromName(deliveryKey);
        const result = await env.CV_DELIVERIES.get(id).fetch('https://cv-delivery.internal/', {
          method: 'POST',
          body: JSON.stringify({ subject, text }),
        });
        if (!result.ok) throw new Error('CV notification delivery failed.');
      });
    }
    return handleContact(request, env, async ({ name, email, message }) => {
      const raw = [
        'From: Portfolio contact <contact@diegoromero.dev>',
        'To: dfrn2003@gmail.com',
        `Reply-To: ${email}`,
        'Subject: New portfolio contact message',
        'MIME-Version: 1.0',
        'Content-Type: text/plain; charset=UTF-8',
        'Content-Transfer-Encoding: base64',
        '',
        encode(`Name: ${name}\nEmail: ${email}\n\n${message}`),
      ].join('\r\n');
      await env.EMAIL.send(new EmailMessage('contact@diegoromero.dev', 'dfrn2003@gmail.com', raw));
    });
  },
};


export class CvVisitDelivery extends DurableObject {
  async fetch(request) {
    const { subject, text } = await request.json();
    await deliverCvOnce(this.ctx, async () => {
      const raw = [
        'From: Portfolio notifications <contact@diegoromero.dev>',
        'To: dfrn2003@gmail.com',
        `Subject: =?UTF-8?B?${encode(subject)}?=`,
        'MIME-Version: 1.0',
        'Content-Type: text/plain; charset=UTF-8',
        'Content-Transfer-Encoding: base64',
        '',
        encode(text),
      ].join('\r\n');
      await this.env.EMAIL.send(new EmailMessage('contact@diegoromero.dev', 'dfrn2003@gmail.com', raw));
    });
    return new Response('Delivered.');
  }

  async alarm() {
    await this.ctx.storage.deleteAll();
  }
}

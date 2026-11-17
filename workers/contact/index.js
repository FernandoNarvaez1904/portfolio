import { EmailMessage } from 'cloudflare:email';
import { handleContact } from './handler.mjs';
import { handleCvVisit } from './cv-visit.mjs';

function encode(value) {
  return btoa(String.fromCharCode(...new TextEncoder().encode(value)));
}

export default {
  fetch(request, env) {
    if (new URL(request.url).pathname === '/api/cv-visit') {
      return handleCvVisit(request, env, async ({ subject, text }) => {
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
        await env.EMAIL.send(new EmailMessage('contact@diegoromero.dev', 'dfrn2003@gmail.com', raw));
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

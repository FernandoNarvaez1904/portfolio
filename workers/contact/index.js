import { EmailMessage } from 'cloudflare:email';
import { handleContact } from './handler.mjs';
export default {
  fetch(request, env) {
    return handleContact(request, env, async ({ name, email, message }) => {
      const raw = ['From: Portfolio contact <contact@diegoromero.dev>', 'To: dfrn2003@gmail.com', `Reply-To: ${email}`, 'Subject: New portfolio contact message', 'MIME-Version: 1.0', 'Content-Type: text/plain; charset=UTF-8', 'Content-Transfer-Encoding: base64', '', btoa(String.fromCharCode(...new TextEncoder().encode(`Name: ${name}\nEmail: ${email}\n\n${message}`)))].join('\r\n');
      await env.EMAIL.send(new EmailMessage('contact@diegoromero.dev', 'dfrn2003@gmail.com', raw));
    });
  }
};

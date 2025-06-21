import { sendEmail } from '@netlify/emails';

export async function handler(event) {
  const data = JSON.parse(event.body);

  await sendEmail({
    from: 'noreply@yoursite.com',
    to: 'youremail@domain.com',
    subject: 'New contact form submission!',
    template: 'contact',
    parameters: {
      name: data.name,
      email: data.email,
      message: data.message
    }
  });

  return {
    statusCode: 200,
    body: JSON.stringify({ message: 'Email sent!' })
  };
}
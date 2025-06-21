const sgMail = require("@sendgrid/mail");
sgMail.setApiKey(process.env.SENDGRID_API_KEY);

exports.handler = async (event) => {
  const { name, email, message } = JSON.parse(event.body);

  const msg = {
    to: process.env.TO_EMAIL,
    from: process.env.FROM_EMAIL,
    subject: `New message from ${name}`,
    text: message,
    html: `<p><strong>From:</strong> ${name} (${email})</p><p>${message}</p>`,
  };

  try {
    await sgMail.send(msg);
    return { statusCode: 200, body: JSON.stringify({ success: true }) };
  } catch (error) {
    console.error("SendGrid error:", error.response?.body || error.message);
    return { statusCode: 500, body: JSON.stringify({ error: "Email failed to send." }) };
  }
};
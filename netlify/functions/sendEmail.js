const sgMail = require("@sendgrid/mail");
sgMail.setApiKey(process.env.SENDGRID_API_KEY);

exports.handler = async (event) => {
  let parsed;
  try {
    parsed = JSON.parse(event.body);
  } catch (err) {
    console.error("Invalid JSON:", event.body);
    return {
      statusCode: 400,
      body: JSON.stringify({ error: "Invalid or missing JSON body" }),
    };
  }

  const { name: senderName, email, message } = parsed;
  if (!senderName || !email || !message) {
    return {
      statusCode: 400,
      body: JSON.stringify({ error: "Missing required fields: name, email, message" }),
    };
  }

  const msg = {
    to: "coderwagner@gmail.com",
    from: "coderwagner@gmail.com",
    subject: `New message from ${senderName}`,
    text: message,
    html: `<p><strong>From:</strong> ${senderName} (${email})</p><p>${message}</p>`,
  };

  try {
    await sgMail.send(msg);
    return { statusCode: 200, body: JSON.stringify({ success: true }) };
  } catch (error) {
    console.error("SendGrid error:", error.response?.body || error.message);
    return { statusCode: 500, body: JSON.stringify({ error: "Email failed to send." }) };
  }
};
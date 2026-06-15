import nodemailer from "nodemailer";

const transporter =
  process.env.GMAIL_USER && process.env.GMAIL_APP_PASSWORD
    ? nodemailer.createTransport({
        host: "smtp.gmail.com",
        port: 587,
        secure: false,
        auth: {
          user: process.env.GMAIL_USER,
          pass: process.env.GMAIL_APP_PASSWORD,
        },
        family: 4,
      })
    : null;

export async function sendContactNotification(contact) {
  if (!transporter) return;

  const { name, business_name, email, phone, services, message, interest } = contact;

  await transporter.sendMail({
    from: process.env.GMAIL_USER,
    to: process.env.NOTIFY_EMAIL || process.env.GMAIL_USER,
    replyTo: email,
    subject: `New lead: ${name} - ${interest || "Free Demo"}`,
    text: [
      `Interest: ${interest || "Free Demo"}`,
      `Name: ${name}`,
      `Business: ${business_name}`,
      `Email: ${email}`,
      `Phone: ${phone || "-"}`,
      `Services: ${services || "-"}`,
      "",
      "Message:",
      message || "-",
    ].join("\n"),
  });
}

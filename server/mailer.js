export async function sendContactNotification(contact) {
  const apiKey = process.env.RESEND_API_KEY;
  if (!apiKey) return;

  const { name, business_name, email, phone, services, message, interest } = contact;

  const text = [
    `Interest: ${interest || "Free Demo"}`,
    `Name: ${name}`,
    `Business: ${business_name}`,
    `Email: ${email}`,
    `Phone: ${phone || "-"}`,
    `Services: ${services || "-"}`,
    "",
    "Message:",
    message || "-",
  ].join("\n");

  const res = await fetch("https://api.resend.com/emails", {
    method: "POST",
    headers: {
      Authorization: `Bearer ${apiKey}`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      from: "Clierge <onboarding@resend.dev>",
      to: [process.env.NOTIFY_EMAIL || "clierge.solution@gmail.com"],
      reply_to: email,
      subject: `New lead: ${name} - ${interest || "Free Demo"}`,
      text,
    }),
  });

  if (!res.ok) {
    const err = await res.text();
    throw new Error(`Resend API error: ${err}`);
  }
}

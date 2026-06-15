import "dotenv/config";
import express from "express";
import cors from "cors";
import { pool } from "./db.js";
import { sendContactNotification } from "./mailer.js";

const app = express();
const port = process.env.PORT || process.env.API_PORT || 3001;

app.use(cors({ origin: process.env.CORS_ORIGIN || "*" }));
app.use(express.json());

app.post("/api/contacts", async (req, res) => {
  const { name, business_name, email, phone, services, message, interest } = req.body;

  if (!name || !business_name || !email) {
    return res.status(400).json({ error: "name, business_name and email are required" });
  }

  try {
    await pool.query(
      "INSERT INTO contacts (name, business_name, email, phone, services, message, interest) VALUES (?, ?, ?, ?, ?, ?, ?)",
      [name, business_name, email, phone || null, services || null, message || null, interest || null]
    );
    res.status(201).json({ success: true });
  } catch (error) {
    console.error("Error saving contact:", error);
    return res.status(500).json({ error: "Failed to save contact" });
  }

  sendContactNotification({ name, business_name, email, phone, services, message, interest }).catch((error) => {
    console.error("Error sending notification email:", error);
  });
});

app.listen(port, () => {
  console.log(`API server listening on port ${port}`);
});

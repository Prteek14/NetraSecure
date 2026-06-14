const fs = require("fs");
const path = require("path");

const FILE = path.join(__dirname, "../contacts.json");

const submitContact = (req, res) => {
  const { name, email, subject, message } = req.body;

  // validation
  if (!name || !email || !subject || !message) {
    return res.status(400).json({ error: "All fields are required." });
  }

  // file read karo
  const existing = JSON.parse(fs.readFileSync(FILE, "utf-8") || "[]");

  // naya entry push karo
  existing.push({
    id: Date.now(),
    name,
    email,
    subject,
    message,
    date: new Date().toISOString(),
  });

  // file mein save karo
  fs.writeFileSync(FILE, JSON.stringify(existing, null, 2));

  return res.status(200).json({
    success: true,
    message: "Message sent successfully! Our team will respond within 24 hours.",
  });
};


module.exports = { submitContact };
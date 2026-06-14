const getReplies = (input) => {
  const msg = input.toLowerCase();

  if (msg.includes("password"))
    return "Use 12+ characters with uppercase, lowercase, numbers and symbols. Never reuse passwords across sites.";

  if (msg.includes("phishing"))
    return "Phishing is a cyberattack where hackers trick you into revealing personal info via fake emails or websites.";

  if (msg.includes("2fa") || msg.includes("two factor") || msg.includes("two-factor"))
    return "Two-Factor Authentication adds an extra layer of security. Enable it in your account settings under Security.";

  if (msg.includes("safe") || msg.includes("url") || msg.includes("website"))
    return "Please use our URL Scanner below to check if a website is safe.";

  if (msg.includes("malware") || msg.includes("virus"))
    return "Malware is malicious software designed to damage or gain unauthorized access to systems. Use a trusted antivirus and avoid downloading files from unknown sources.";

  if (msg.includes("vpn"))
    return "A VPN (Virtual Private Network) encrypts your internet connection, keeping your data private and secure especially on public Wi-Fi.";

  if (msg.includes("firewall"))
    return "A firewall monitors and controls incoming and outgoing network traffic. Always keep your system firewall enabled.";

  if (msg.includes("hack") || msg.includes("hacked"))
    return "If you think you've been hacked, immediately change your passwords, enable 2FA, and scan your device with a trusted antivirus.";

  return "Great question! Always keep your software updated, use strong passwords, and avoid clicking unknown links.";
};

const sendMessage = (req, res) => {
  const { message } = req.body;

  if (!message || message.trim() === "") {
    return res.status(400).json({ error: "Message is required." });
  }

  const reply = getReplies(message);

  return res.status(200).json({
    success: true,
    reply,
  });
};

module.exports = { sendMessage };
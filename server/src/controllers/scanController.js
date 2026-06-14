const getResult = (url) => {
  const u = url.toLowerCase();

  const dangerous = [
    "malware",
    "phishing",
    "hack",
    "virus",
    "free-money",
    "click-here",
    "bit.ly",
    "tinyurl",
  ];
  const suspicious = [
    "login-",
    "secure-",
    "verify-",
    "account-",
    "update-",
    "confirm-",
    ".xyz",
    ".tk",
    ".ml",
  ];

  if (dangerous.some((k) => u.includes(k))) return "dangerous";
  if (suspicious.some((k) => u.includes(k))) return "suspicious";
  return "safe";
};

const scanURL = (req, res) => {
  const { url } = req.body;

  if (!url || url.trim() === "") {
    return res.status(400).json({ error: "URL is required." });
  }

  const result = getResult(url);

  return res.status(200).json({ success: true, result });
};

module.exports = { scanURL };

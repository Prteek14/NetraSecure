# NetraSecure AI 🛡️

> **Beyond Technology. Towards Tomorrow.**

A modern AI-powered cybersecurity platform built to protect individuals and businesses from digital threats — in real time.

---

## 🌐 Live Demo

> Coming Soon

---


## 🧠 About The Project

NetraSecure AI is a full-stack cybersecurity web application that provides:
- AI-driven threat detection
- Real-time URL scanning
- An intelligent security chatbot
- A unified security dashboard

Built for everyone — from individuals to enterprise teams — with a clean, modern UI and a powerful Node.js backend.

---

## ⚙️ Tech Stack

### Frontend
| Technology | Usage |
|------------|-------|
| React.js (Vite) | UI Framework |
| Tailwind CSS | Styling |
| React Icons | Icon Library |

### Backend
| Technology | Usage |
|------------|-------|
| Node.js | Runtime |
| Express.js | Server Framework |
| CORS | Cross-Origin Requests |
| dotenv | Environment Variables |
| File System (fs) | Data Storage (JSON) |

---

## 📁 Project Structure

```
NetraSecure-AI/
│
├── frontend/                   # React Vite App
│   ├── public/
│   │   ├── platform.jpg
│   │   ├── desktop_view.png
│   │   ├── mobile_view.png
│   │   ├── cyber_img.jpg
│   │   └── ai_img.png
│   │
│   ├── src/
│   │   ├── components/
│   │   │   ├── Navbar.jsx
│   │   │   ├── Hero.jsx
│   │   │   ├── Introduction.jsx
│   │   │   ├── Features.jsx
│   │   │   ├── WhyChooseUs.jsx
│   │   │   ├── PlatformShowcase.jsx
│   │   │   ├── HowItWorks.jsx
│   │   │   ├── TrustSecurity.jsx
│   │   │   ├── Chatbot.jsx
│   │   │   ├── URLScanner.jsx
│   │   │   ├── Testimonials.jsx
│   │   │   ├── ContactForm.jsx
│   │   │   ├── FinalCTA.jsx
│   │   │   └── Footer.jsx
│   │   │
│   │   ├── App.jsx
│   │   ├── main.jsx
│   │   └── index.css
│   │
│   ├── index.html
│   ├── tailwind.config.js
│   ├── vite.config.js
│   └── package.json
│
├── backend/                    # Node + Express API
│   ├── src/
│   │   ├── controllers/
│   │   │   ├── contactController.js
│   │   │   ├── chatController.js
│   │   │   └── scanController.js
│   │   │
│   │   └── routes/
│   │       ├── contactRoute.js
│   │       ├── chatRoute.js
│   │       └── scanRoute.js
│   │
│   ├── contacts.json
│   ├── server.js
│   ├── .env
│   └── package.json
│
└── README.md
```

---

## 🚀 Getting Started

### Prerequisites

Make sure you have these installed:
- [Node.js](https://nodejs.org/) v18+
- [npm](https://www.npmjs.com/) v9+

---

### 🖥️ Frontend Setup

```bash
# 1. Go to frontend folder
cd frontend

# 2. Install dependencies
npm install

# 3. Start dev server
npm run dev
```

Frontend runs on → `http://localhost:5173`

---

### 🛠️ Backend Setup

```bash
# 1. Go to backend folder
cd backend

# 2. Install dependencies
npm install

# 3. Create .env file
touch .env
```

Add this to `.env`:
```env
PORT=5000
```

```bash
# 4. Create contacts.json (empty array)
echo "[]" > contacts.json

# 5. Start server
node server.js
```

Backend runs on → `http://localhost:5000`

---

## 🔌 API Endpoints

### Contact Form
| Method | Endpoint | Description |
|--------|----------|-------------|
| `POST` | `/contact` | Submit contact form |
| `GET` | `/contact` | Get all contacts |

**Request Body:**
```json
{
  "name": "Rahul Sharma",
  "email": "rahul@example.com",
  "subject": "Help needed",
  "message": "I need support with my account."
}
```

**Response:**
```json
{
  "success": true,
  "message": "Message sent successfully! Our team will respond within 24 hours."
}
```

---

### AI Chatbot
| Method | Endpoint | Description |
|--------|----------|-------------|
| `POST` | `/chat` | Send message, get AI reply |

**Request Body:**
```json
{
  "message": "What is phishing?"
}
```

**Response:**
```json
{
  "success": true,
  "reply": "Phishing is a cyberattack where hackers trick you into revealing personal info via fake emails or websites."
}
```

---

### URL Scanner
| Method | Endpoint | Description |
|--------|----------|-------------|
| `POST` | `/scan` | Scan a URL for threats |

**Request Body:**
```json
{
  "url": "https://example.com"
}
```

**Response:**
```json
{
  "success": true,
  "result": "safe"
}
```

**Result values:** `safe` | `suspicious` | `dangerous`

---

## 🤖 Chatbot Keywords

| Keyword | Reply Topic |
|---------|-------------|
| `password` | Strong password advice |
| `phishing` | Phishing explanation |
| `2fa` / `two factor` | 2FA setup guide |
| `safe` / `url` / `website` | URL Scanner redirect |
| `malware` / `virus` | Malware protection |
| `vpn` | VPN explanation |
| `firewall` | Firewall advice |
| `hack` / `hacked` | Immediate recovery steps |
| *(default)* | General security tips |

---

## 🔍 URL Scanner Logic

| URL Pattern | Result |
|-------------|--------|
| Contains `malware`, `phishing`, `hack`, `virus`, `bit.ly` | 🚨 Dangerous |
| Contains `login-`, `secure-`, `.xyz`, `.tk`, `.ml` | ⚠️ Suspicious |
| No matches | ✅ Safe |

---

## 🎨 Components Overview

| Component | Description |
|-----------|-------------|
| `Navbar` | Sticky navigation with smooth scroll links |
| `Hero` | Landing section with CTA buttons |
| `Introduction` | Brief platform introduction |
| `Features` | Key features of NetraSecure AI |
| `WhyChooseUs` | 6 reasons with icons |
| `PlatformShowcase` | Screenshots of the platform |
| `HowItWorks` | Step-by-step process |
| `TrustSecurity` | Trust badges and security stats |
| `Chatbot` | Live AI chatbot with backend |
| `URLScanner` | URL threat scanner with backend |
| `Testimonials` | User reviews carousel |
| `ContactForm` | Support form with data persistence |
| `FinalCTA` | Final call to action |
| `Footer` | Links, social, copyright |

---

## 🌟 Features

- ✅ AI-powered security chatbot
- ✅ Real-time URL threat scanner
- ✅ Contact form with data persistence
- ✅ Fully responsive design
- ✅ Smooth scroll navigation
- ✅ Modern dark UI with Tailwind CSS
- ✅ MVC architecture on backend
- ✅ Animated components

---

## 🔮 Future Improvements

- [ ] MongoDB integration for real data storage
- [ ] Real URL scanning via VirusTotal API
- [ ] User authentication (Login / Signup)
- [ ] Admin dashboard to view contacts
- [ ] Email notifications via Nodemailer
- [ ] Deploy frontend on Vercel
- [ ] Deploy backend on Render

---

## 👨‍💻 Author

**AnantNetra Technologies**
- 🌐 Website: Coming Soon
- 📧 Email: support@netrasecure.ai
- 📞 Phone: +91 (7200) 479501

---

## 📄 License

This project is licensed under the **MIT License**.

---

> © 2025 NetraSecure AI by AnantNetra Technologies. All rights reserved.

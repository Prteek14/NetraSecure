import { useState } from "react";
import { FaEnvelope, FaPhone, FaClock } from "react-icons/fa";

function ContactForm() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [submitted, setSubmitted] = useState(false);
  const [successMsg, setSuccessMsg] = useState("");

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.id]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      // ContactForm.jsx
      const res = await fetch("http://localhost:5000/contact", {
        // /contact ✅
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      const data = await res.json();

      if (res.ok) {
        setSubmitted(true); // success banner dikhao
        setSuccessMsg(data.message); // server ka message
        alert(successMsg);
        setFormData({ name: "", email: "", subject: "", message: "" });
      } else {
        alert(data.error);
      }
    } catch {
      alert("Internal Server Error. Please try again.");
    }
  };

  return (
    <section className="px-6 py-20 sm:px-8 lg:px-12 bg-slate-900">
      <div className="mx-auto max-w-5xl">
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-2 items-start">
          {/* Left — Info */}
          <div>
            <p className="mb-2 text-xs font-semibold uppercase tracking-widest text-sky-400">
              Contact Us
            </p>
            <h3 className="text-3xl font-bold text-white sm:text-4xl">
              Get Support
            </h3>
            <p className="mt-4 text-sm text-slate-400 leading-relaxed">
              We're here to help you 24/7. Fill out the form and our team will
              get back to you.
            </p>

            <div className="mt-8 space-y-4">
              <div className="flex items-center gap-4">
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-sky-500/10 border border-sky-500/20 text-sky-400">
                  <FaEnvelope />
                </div>
                <div>
                  <p className="text-xs text-slate-500 uppercase tracking-wider">
                    Email
                  </p>
                  <p className="text-sm text-white mt-0.5">
                    support@netrasecure.ai
                  </p>
                </div>
              </div>

              <div className="flex items-center gap-4">
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-sky-500/10 border border-sky-500/20 text-sky-400">
                  <FaPhone />
                </div>
                <div>
                  <p className="text-xs text-slate-500 uppercase tracking-wider">
                    Phone
                  </p>
                  <p className="text-sm text-white mt-0.5">+91 (1234) 567890</p>
                </div>
              </div>

              <div className="flex items-center gap-4">
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-sky-500/10 border border-sky-500/20 text-sky-400">
                  <FaClock />
                </div>
                <div>
                  <p className="text-xs text-slate-500 uppercase tracking-wider">
                    Response Time
                  </p>
                  <p className="text-sm text-white mt-0.5">Within 24 Hours</p>
                </div>
              </div>
            </div>
          </div>

          {/* Right — Form */}
          <form onSubmit={handleSubmit} className="space-y-5">
            <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
              <div className="flex flex-col gap-1.5">
                <label
                  htmlFor="name"
                  className="text-xs font-medium text-slate-400 uppercase tracking-wider"
                >
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="Your name"
                  required
                  className="rounded-lg border border-slate-700 bg-slate-900 px-4 py-3 text-sm text-white placeholder-slate-500 outline-none focus:border-sky-500 focus:ring-1 focus:ring-sky-500 transition"
                />
              </div>

              <div className="flex flex-col gap-1.5">
                <label
                  htmlFor="email"
                  className="text-xs font-medium text-slate-400 uppercase tracking-wider"
                >
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="you@example.com"
                  required
                  className="rounded-lg border border-slate-700 bg-slate-900 px-4 py-3 text-sm text-white placeholder-slate-500 outline-none focus:border-sky-500 focus:ring-1 focus:ring-sky-500 transition"
                />
              </div>
            </div>

            <div className="flex flex-col gap-1.5">
              <label
                htmlFor="subject"
                className="text-xs font-medium text-slate-400 uppercase tracking-wider"
              >
                Subject
              </label>
              <input
                type="text"
                id="subject"
                value={formData.subject}
                onChange={handleChange}
                placeholder="How can we help?"
                required
                className="rounded-lg border border-slate-700 bg-slate-900 px-4 py-3 text-sm text-white placeholder-slate-500 outline-none focus:border-sky-500 focus:ring-1 focus:ring-sky-500 transition"
              />
            </div>

            <div className="flex flex-col gap-1.5">
              <label
                htmlFor="message"
                className="text-xs font-medium text-slate-400 uppercase tracking-wider"
              >
                Message
              </label>
              <textarea
                id="message"
                rows={5}
                value={formData.message}
                onChange={handleChange}
                placeholder="Write your message here..."
                required
                className="rounded-lg border border-slate-700 bg-slate-900 px-4 py-3 text-sm text-white placeholder-slate-500 outline-none focus:border-sky-500 focus:ring-1 focus:ring-sky-500 transition resize-none"
              />
            </div>

            <button
              type="submit"
              className="w-full rounded-lg bg-blue-600 py-3 text-sm font-semibold text-white hover:bg-blue-500 active:scale-95 transition"
            >
              Send Message
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}

export default ContactForm;

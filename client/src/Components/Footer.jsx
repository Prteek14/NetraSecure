import { FaTwitter, FaLinkedinIn, FaGithub } from "react-icons/fa";

const links = {
  Product: [
    { label: "Features", href: "#features" },
    { label: "URL Scanner", href: "#url-scanner" },
    { label: "AI Chatbot", href: "#chatbot" },
    { label: "Pricing", href: "#" },
  ],
  Company: [
    { label: "About", href: "#about" },
    { label: "Blog", href: "#" },
    { label: "Careers", href: "#" },
    { label: "Press", href: "#" },
  ],
  Support: [
    { label: "Help Center", href: "#" },
    { label: "Contact", href: "#contact" },
    { label: "Privacy Policy", href: "#" },
    { label: "Terms", href: "#" },
  ],
};

function Footer() {
  return (
    <footer className="relative border-t border-slate-800 px-6 py-16 sm:px-8 lg:px-12 overflow-hidden">
      {/* subtle bg glow */}
      <div className="pointer-events-none absolute bottom-0 left-1/2 -translate-x-1/2 w-150 h-48 rounded-full bg-blue-600/5 blur-3xl -z-10" />

      <div className="mx-auto max-w-6xl">
        <div className="grid grid-cols-1 gap-12 sm:grid-cols-2 lg:grid-cols-5">
          {/* Brand column */}
          <div className="lg:col-span-2">
            <div className="flex items-center gap-2 mb-3">
              {/* Logo icon */}
              <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-blue-600">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-4 w-4 text-white"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={2}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"
                  />
                </svg>
              </div>
              <span className="text-lg font-bold text-white">
                NetraSecure AI
              </span>
            </div>
            <p className="text-xs font-medium tracking-widest text-blue-400 uppercase mb-4">
              Beyond Technology. Towards Tomorrow.
            </p>
            <p className="text-sm text-slate-500 leading-relaxed max-w-xs">
              AI-powered protection for your digital world — real-time,
              reliable, and always on.
            </p>

            {/* Social icons */}
            <div className="mt-6 flex gap-3">
              {[
                { icon: <FaTwitter />, href: "#" },
                { icon: <FaLinkedinIn />, href: "#" },
                { icon: <FaGithub />, href: "#" },
              ].map((s, i) => (
                <a
                  key={i}
                  href={s.href}
                  className="flex h-8 w-8 items-center justify-center rounded-lg border border-slate-700 text-slate-500 transition hover:border-slate-500 hover:text-slate-300"
                >
                  {s.icon}
                </a>
              ))}
            </div>
          </div>

          {/* Link columns */}
          {Object.entries(links).map(([col, items]) => (
            <div key={col}>
              <p className="mb-4 text-xs font-semibold uppercase tracking-widest text-slate-400">
                {col}
              </p>
              <ul className="space-y-3">
                {items.map((item) => (
                  <li key={item.label}>
                    <a
                      href={item.href}
                      className="text-sm text-slate-500 transition hover:text-white"
                    >
                      {item.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom bar */}
        <div className="mt-14 flex  items-center justify-center gap-4 border-t border-slate-800 pt-6 sm:flex-row">
          <p className="text-xs text-slate-600">
            © 2025 NetraSecure AI by AnantNetra Technologies. All rights
            reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;

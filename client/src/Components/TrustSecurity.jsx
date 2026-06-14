import {
  FaBuilding,
  FaCheckCircle,
  FaDatabase,
  FaLock,
  FaRocket,
  FaShieldAlt,
} from "react-icons/fa";

function TrustSecurity() {
  const badges = [
    {
      icon: FaShieldAlt,
      label: "AI-Powered Architecture",
      text: "Built on enterprise-grade AI infrastructure for maximum reliability.",
      accent: "blue",
    },
    {
      icon: FaLock,
      label: "Security-First Design",
      text: "Every feature is designed with protection as the top priority.",
      accent: "orange",
    },
    {
      icon: FaDatabase,
      label: "Privacy-Focused Infrastructure",
      text: "Encrypted workflows designed to keep sensitive data protected.",
      accent: "blue",
    },
    {
      icon: FaRocket,
      label: "Startup-Ready Ecosystem",
      text: "Lightweight, fast, and practical for growing teams and founders.",
      accent: "orange",
    },
  ];

  const trustMarks = [
    "Startup Ready",
    "MCA Aligned",
    "SSL Secured",
    "Privacy First",
  ];

  return (
    <section className="px-6 py-20 sm:px-8 lg:px-12">
      <div className="mx-auto max-w-7xl overflow-hidden border border-slate-700/80 bg-slate-950 shadow-2xl shadow-slate-950/40 lg:grid lg:grid-cols-[0.9fr_1.1fr]">
        <div className="border-b border-slate-700/80 p-6 sm:p-8 lg:border-b-0 lg:border-r lg:p-10">
          <p className="mb-3 text-sm font-semibold uppercase tracking-[0.24em] text-orange-300">
            Built for Trust
          </p>
          <h3 className="text-3xl font-bold leading-tight text-white sm:text-4xl">
            Security you can explain, trust you can show
          </h3>
          <p className="mt-5 text-base leading-7 text-slate-300">
            NetraSecure AI is designed around practical security principles:
            protected data flow, reliable threat intelligence, and clear
            controls for teams that need confidence before they scale.
          </p>

          <div className="mt-8 grid grid-cols-2 gap-3">
            {trustMarks.map((mark, index) => (
              <div
                key={mark}
                className="flex items-center gap-3 border border-slate-700 bg-slate-950/50 px-4 py-3"
              >
                <span
                  className={`flex h-9 w-9 items-center justify-center rounded-full ${
                    index % 2 === 0
                      ? "bg-sky-500/15 text-sky-300"
                      : "bg-orange-500/15 text-orange-300"
                  }`}
                >
                  {index === 1 ? <FaBuilding /> : <FaCheckCircle />}
                </span>
                <span className="text-sm font-semibold text-slate-200">
                  {mark}
                </span>
              </div>
            ))}
          </div>
        </div>

        <div className="grid gap-4 p-6 sm:grid-cols-2 sm:p-8 lg:p-10">
          {badges.map((badge) => {
            const Icon = badge.icon;
            const isBlue = badge.accent === "blue";

            return (
              <article
                key={badge.label}
                className="group border border-slate-700/80 bg-slate-950/45 p-5 transition duration-300 hover:-translate-y-1 hover:border-slate-500 hover:bg-slate-950/70"
              >
                <div
                  className={`mb-5 flex h-12 w-12 items-center justify-center rounded-full border text-xl transition duration-300 ${
                    isBlue
                      ? "border-sky-400/50 bg-sky-500/10 text-sky-300 group-hover:bg-sky-400 group-hover:text-slate-950"
                      : "border-orange-400/50 bg-orange-500/10 text-orange-300 group-hover:bg-orange-400 group-hover:text-slate-950"
                  }`}
                >
                  <Icon />
                </div>

                <h4 className="text-lg font-semibold text-white">
                  {badge.label}
                </h4>
                <p className="mt-3 text-sm leading-6 text-slate-300">
                  {badge.text}
                </p>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}

export default TrustSecurity;

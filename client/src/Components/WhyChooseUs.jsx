import {
  FaBrain,
  FaShieldAlt,
  FaHandPointer,
  FaChartLine,
  FaLock,
  FaRocket
} from "react-icons/fa";
function WhyChooseUs() {
  const reason = [
    {
      icon: FaBrain,
      label: "AI-Driven Protection",
      text: "Intelligent algorithms that learn and adapt to new threats automatically.",
      accent: "blue",
    },
    {
      icon: FaShieldAlt,
      label: "Unified Security Ecosystem",
      text: "All your security tools in one place — no switching between apps.",
      accent: "orange",
    },
    {
      icon: FaHandPointer,
      label: "User-Friendly Experience",
      text: "Designed for everyone, from individuals to enterprise teams.",
      accent: "blue",
    },
    {
      icon: FaChartLine,
      label: "Scalable Infrastructure",
      text: "Grows with your business. Handle millions of scans without slowdown.",
      accent: "orange",
    },
    {
      icon: FaLock,
      label: "Privacy Focused",
      text: "Your data stays yours. Zero data selling, full encryption always.",
      accent: "orange",
    },
    {
      icon: FaRocket,
      label: "Lightning Fast Scans",
      text: "Get results in milliseconds. No waiting, no delays — instant threat detection at scale.",
      accent: "blue",
    },
  ];

  return (
    <section className="px-6 py-20 sm:px-8 lg:px-12">
      <div className="mx-auto max-w-7xl">
        <div className="mx-auto max-w-3xl text-center ">
          <p className="mb-3 text-sm font-semibold uppercase tracking-[0.24em] text-orange-300">
            Why Choose NetraSecure AI?
          </p>
          <h3 className="text-3xl font-bold leading-tight text-white sm:text-4xl lg:text-5xl">
            A connected process from scan to protection
          </h3>
          <p className="mt-5 text-base leading-7 text-slate-300 sm:text-lg">
            Unified Platform. Complete Protection.
          </p>
        </div>

        <div className="relative mt-14 grid gap-6 md:grid-cols-3 md:gap-4 ">
          {reason.map((item) => {
            const Icon = item.icon;
            const isBlue = item.accent === "blue";
            const accentClasses = isBlue
              ? "border-sky-400/60 bg-sky-500/10 text-sky-300 shadow-sky-500/20 group-hover:bg-sky-400 group-hover:text-slate-950"
              : "border-orange-400/60 bg-orange-500/10 text-orange-300 shadow-orange-500/20 group-hover:bg-orange-400 group-hover:text-slate-950";

            return (
              <article
                key={item.label}
                className="group relative z-10 flex gap-5 border border-slate-700/80 bg-cyan-950/75 p-5 shadow-lg shadow-slate-950/30 transition duration-300 hover:-translate-y-1 hover:border-slate-500 md:flex-col md:items-center md:text-center rounded-2xl"
              >
                <div
                  className={`flex h-16 w-16 shrink-0 items-center justify-center border text-2xl shadow-lg transition duration-300 ${accentClasses} rounded-full`}
                >
                  <Icon />
                </div>

                <div>
                  <h4 className="mt-2 text-lg font-semibold text-white">
                    {item.label}
                  </h4>
                  <p className="mt-3 text-sm leading-6 text-slate-300">
                    {item.text}
                  </p>
                </div>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}

export default WhyChooseUs;

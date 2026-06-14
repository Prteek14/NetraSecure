import { FaChartPie, FaRobot, FaSearch, FaShieldAlt } from "react-icons/fa";

function HowItWorks() {
  const process = [
    {
      icon: FaSearch,
      label: "Use Your Tool",
      text: "Submit a URL, ask the AI chatbot, or enable real-time monitoring.",
      accent: "blue",
    },
    {
      icon: FaRobot,
      label: "AI Analysis",
      text: "Our intelligent engine checks behavior, signals, and patterns using advanced AI models.",
      accent: "orange",
    },
    {
      icon: FaChartPie,
      label: "Smart Insights",
      text: "NetraSecure generates clear security insights, risk scores, and threat context.",
      accent: "blue",
    },
    {
      icon: FaShieldAlt,
      label: "Actionable Protection",
      text: "Block, report, or follow guided recommendations before the risk reaches you.",
      accent: "orange",
    },
  ];

  return (
    <section className="px-6 py-20 sm:px-8 lg:px-12 bg-blue-950/85">
      <div className="mx-auto max-w-7xl">
        <div className="mx-auto max-w-3xl text-center ">
          <p className="mb-3 text-sm font-semibold uppercase tracking-[0.24em] text-orange-300">
            How It Works
          </p>
          <h3 className="text-3xl font-bold leading-tight text-white sm:text-4xl lg:text-5xl">
            A connected process from scan to protection
          </h3>
          <p className="mt-5 text-base leading-7 text-slate-300 sm:text-lg">
            NetraSecure keeps every step connected, so your data moves from
            input to analysis, insight, and protection without confusion.
          </p>
        </div>

        <div className="relative mt-14 grid gap-6 md:grid-cols-4 md:gap-4 ">
          {process.map((item, index) => {
            const Icon = item.icon;
            const isBlue = item.accent === "blue";
            const accentClasses = isBlue
              ? "border-sky-400/60 bg-sky-500/10 text-sky-300 shadow-sky-500/20 group-hover:bg-sky-400 group-hover:text-slate-950"
              : "border-orange-400/60 bg-orange-500/10 text-orange-300 shadow-orange-500/20 group-hover:bg-orange-400 group-hover:text-slate-950";
            const numberClasses = isBlue ? "text-sky-300" : "text-orange-300";

            return (
              <article
                key={item.label}
                className="group relative z-10 flex gap-5 border border-slate-700/80 bg-slate-900/75 p-5 shadow-lg shadow-slate-950/30 transition duration-300 hover:-translate-y-1 hover:border-slate-500 md:flex-col md:items-center md:text-center rounded-2xl"
              >
                <div
                  className={`flex h-16 w-16 shrink-0 items-center justify-center border text-2xl shadow-lg transition duration-300 ${accentClasses} rounded-full`}
                >
                  <Icon />
                </div>

                <div>
                  <p
                    className={`font-mono text-sm font-semibold ${numberClasses}`}
                  >
                    Step {index + 1}
                  </p>
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

export default HowItWorks;

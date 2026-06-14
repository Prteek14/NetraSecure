import {
  FaBolt,
  FaChartLine,
  FaComments,
  FaLink,
  FaMask,
  FaMobileAlt,
} from "react-icons/fa";

function Features() {
  const features = [
    {
      icon: FaComments,
      label: "AI Chatbot",
      text: "Get expert answers to your cybersecurity questions 24/7. Powered by advanced AI language models.",
    },
    {
      icon: FaLink,
      label: "URL Scanner",
      text: "Instantly check if a website is safe or potentially malicious. Scan before you click.",
    },
    {
      icon: FaBolt,
      label: "Smart Threat Detection",
      text: "AI-powered real-time threat analysis across all your devices. Stay one step ahead of attackers.",
    },
    {
      icon: FaMobileAlt,
      label: "Mobile Security Scanner",
      text: "Analyze apps and device permissions for suspicious behavior. Keep your phone safe.",
    },
    {
      icon: FaMask,
      label: "Deepfake Detector",
      text: "Identify manipulated images and videos using AI detection. Don't get fooled by fake content.",
    },
    {
      icon: FaChartLine,
      label: "Real-Time Monitoring",
      text: "Live dashboard with instant threat alerts and security reports. Always know your security status.",
    },
  ];

  return (
    <section id="features" className="px-6 py-20 sm:px-8 lg:px-12 bg-sky-950/75">
      <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-[0.8fr_1.2fr] lg:items-start">
        <div className="lg:sticky lg:top-28">
          <p className="mb-3 text-sm font-semibold uppercase tracking-[0.24em] text-sky-300">
            Core Features
          </p>
          <h3 className="text-3xl font-bold leading-tight text-white sm:text-4xl lg:text-5xl">
            Powerful AI security tools in one place
          </h3>
          <p className="mt-5 max-w-xl text-base leading-7 text-slate-300 sm:text-lg">
            Scan links, ask security questions, monitor threats, and detect
            suspicious digital activity with focused tools built for everyday
            protection.
          </p>
          <button className="mt-2 rounded border border-sky-400 px-5 py-3 font-semibold text-white transition-colors duration-200 hover:bg-sky-500/15 hover:text-sky-300 focus:outline-none focus:ring-2 focus:ring-sky-300">View All Features</button>
        </div>

        <div className="grid gap-4 sm:grid-cols-2">
          {features.map((feature, index) => {
            const Icon = feature.icon;

            return (
              <article
                key={feature.label}
                className="group relative overflow-hidden border border-slate-700/80 bg-slate-900/70 p-5 shadow-lg shadow-slate-950/30 transition duration-300 hover:-translate-y-1 hover:border-sky-400/70 hover:bg-slate-900"
              >
                <div className="absolute right-4 top-4 font-mono text-xs text-slate-700 transition-colors duration-300 group-hover:text-sky-500/40">
                  0{index + 1}
                </div>

                <div className="mb-5 flex h-12 w-12 items-center justify-center border border-sky-400/40 bg-sky-500/10 text-xl text-sky-300 transition duration-300 group-hover:bg-sky-400 group-hover:text-slate-950">
                  <Icon />
                </div>

                <h4 className="text-lg font-semibold text-white">
                  {feature.label}
                </h4>
                <p className="mt-3 text-sm leading-6 text-slate-300">
                  {feature.text}
                </p>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}

export default Features;

import HeroBg from "./HeroBG";

function Hero() {
  return (
    <section
      id="home"
      className="relative flex min-h-screen items-center overflow-hidden px-6 pb-16 pt-28 sm:px-8 lg:px-12"
    >
      <HeroBg />

      <div className="relative z-20 mx-auto flex w-full max-w-7xl">
        <div className="mx-auto max-w-3xl text-center md:mx-0 md:max-w-2xl md:text-left">
          <p className="mb-4 text-sm font-semibold uppercase tracking-[0.24em] text-sky-300">
            AI-Powered Cybersecurity Platform
          </p>

          <h1 className="text-4xl font-bold leading-tight text-white sm:text-5xl lg:text-6xl">
            AI-Powered Cybersecurity for the Modern Digital World
          </h1>

          <p className="mt-6 text-base leading-7 text-slate-300 sm:text-lg">
            NetraSecure AI protects your digital assets with intelligent threat
            detection, real-time scanning, and advanced AI technology. Trusted
            by startups, businesses & security-conscious individuals worldwide.
          </p>

          <div className="mt-8 flex flex-wrap gap-3 justify-center md:justify-start">
            <button className="rounded bg-sky-500 px-5 py-3 font-semibold text-slate-950 transition-colors duration-200 hover:bg-sky-300 focus:outline-none focus:ring-2 focus:ring-sky-200">
              Explore Platform
            </button>
            <button className="rounded border border-sky-400 px-5 py-3 font-semibold text-white transition-colors duration-200 hover:bg-sky-500/15 hover:text-sky-300 focus:outline-none focus:ring-2 focus:ring-sky-300">
              Start Scanning
            </button>
            <button className="rounded border border-slate-500 px-5 py-3 font-semibold text-white transition-colors duration-200 hover:border-sky-400 hover:bg-sky-500/15 hover:text-sky-300 focus:outline-none focus:ring-2 focus:ring-sky-300">
              Try AI Chatbot
            </button>
          </div>

          <div className=" mt-8 grid gap-3 text-sm font-medium text-slate-300 sm:grid-cols-3">
            <p>
              <span className="block text-xl font-bold text-sky-300">10K+</span>
              Active Users
            </p>
            <p>
              <span className="block text-xl font-bold text-sky-300">5K+</span>
              Threats Blocked
            </p>
            <p>
              <span className="block text-xl font-bold text-sky-300">99.9%</span>
              Uptime
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero;

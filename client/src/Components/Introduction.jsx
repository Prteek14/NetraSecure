function Introduction() {
  const cards = [
    {
      img: "intro_img_1.jpg",
      label: "Smart Protection System",
      text: "Automatically detects and neutralizes threats before they reach you.",
    },
    {
      img: "intro_img.gif",
      label: "AI Assistant",
      text: "Get instant cybersecurity guidance from our intelligent AI chatbot.",
    },
    {
      img: "intro_img_3.jpg",
      label: "Threat Detection",
      text: "Real-time analysis of URLs, files, and network activity.",
    },
    {
      img: "intro_img_4.jpg",
      label: "User-Friendly Experience",
      text: "No technical expertise required. Simple, clean, and powerful interface.",
    },
  ];

  return (
    <section id="about" className="px-6 py-20 sm:px-8 lg:px-12">
      <div className="mx-auto max-w-7xl">
        <div className="mx-auto max-w-3xl text-center">
          <p className="mb-3 text-sm font-semibold uppercase tracking-[0.24em] text-sky-300">
            Intelligent Defense
          </p>
          <h2 className="text-3xl font-bold leading-tight text-white sm:text-4xl lg:text-5xl">
            Curious about NetraSecure AI?
          </h2>
          <p className="mt-4 text-base leading-7 text-slate-300 sm:text-lg">
            NetraSecure AI is an intelligent cybersecurity platform designed to
            simplify digital protection using advanced artificial intelligence
            technologies.
          </p>
        </div>

        <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {cards.map((card) => (
            <article
              key={card.label}
              className="group flex h-full flex-col items-center border border-cyan-400/30 bg-slate-900/60 p-5 text-center shadow-lg shadow-cyan-950/20 backdrop-blur transition duration-300 hover:-translate-y-1 hover:border-sky-300/70 hover:bg-slate-900/90 hover:shadow-sky-500/20"
            >
              <div className="relative mb-5 h-36 w-36 overflow-hidden rounded-full border border-sky-400/40 bg-slate-950 p-1 shadow-[0_0_35px_rgba(14,165,233,0.18)] transition duration-300 group-hover:border-sky-300 group-hover:shadow-[0_0_45px_rgba(14,165,233,0.32)]">
                <img
                  src={card.img}
                  alt={card.label}
                  className="h-full w-full rounded-full object-cover"
                />
              </div>

              <h3 className="text-lg font-semibold text-white transition-colors duration-300 group-hover:text-sky-300">
                {card.label}
              </h3>
              <p className="mt-3 text-sm leading-6 text-slate-300">{card.text}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Introduction;

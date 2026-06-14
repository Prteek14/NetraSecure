function PlatformShowcase() {
  const cards = [
    { img: "/desktop_view.png", label: "Desktop Site" },
    { img: "/mobile_view.png", label: "Mobile Application" }, // space hata diya
    { img: "/cyber_img.jpg", label: "Cybersecurity" },
    { img: "/chatbot.png", label: "AI Chatbot" },
  ];

  return (
    <div
      className="relative w-full min-h-screen bg-cover bg-center bg-no-repeat"
      style={{ backgroundImage: "url('/platform.jpg')" }}
    >
      {/* dark overlay */}
      <div className="absolute inset-0 bg-slate-950/70" />

      {/* content */}
      <div className="relative z-10 px-6 py-20 sm:px-8 lg:px-12">
        <div className="mx-auto max-w-5xl text-center">
          <p className="mb-3 text-xs font-semibold uppercase tracking-widest text-sky-400">
            Our Platform
          </p>
          <h2 className="text-3xl font-bold text-white sm:text-4xl">
            Platform Showcase
          </h2>
        </div>

        <div className="mx-auto mt-12 max-w-5xl grid grid-cols-1 gap-6 sm:grid-cols-2">
          {cards.map((card) => (
            <div
              key={card.label}
              className="group rounded-2xl border border-slate-700/80 overflow-hidden shadow-lg shadow-slate-950/30 transition duration-300 hover:-translate-y-1 hover:border-slate-500"
            >
              <img
                src={card.img}
                alt={card.label}
                className="w-full h-94 object-fit object-top"
              />
              <div className="p-4 text-center border-t border-slate-700/50 bg-slate-800/35">
                <h4 className="text-base font-semibold text-white ">
                  {card.label}
                </h4>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default PlatformShowcase;

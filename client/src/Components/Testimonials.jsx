// Testimonials.jsx
import { useState, useEffect, useRef } from "react";

const testimonials = [
  { quote: "NetraSecure AI has been a game changer for our startup's security. The URL scanner alone has saved us multiple times!", name: "Rahul Sharma", role: "CTO at TechVentures" },
  { quote: "The AI chatbot is incredibly helpful for quick security advice. It feels like having a security expert available 24/7.", name: "Priya Mehta", role: "Cybersecurity Analyst" },
  { quote: "Finally, a security platform that's both powerful and simple to use. Highly recommend for any business owner.", name: "Vikram Patel", role: "Founder at DigiSafe Co." },
  { quote: "The real-time alerts helped our team respond faster without needing a large security department.", name: "Ananya Rao", role: "Operations Lead at CloudNest" },
  { quote: "Clean interface, strong AI insights, and quick scans. It made security checks part of our daily workflow.", name: "Arjun Malhotra", role: "Product Manager at WebForge" },
  { quote: "Onboarding took minutes and the dashboard gave us instant clarity on our threat landscape.", name: "Sneha Iyer", role: "IT Lead at BrightOps" },
];

const PER_PAGE = 3;

function TestimonialCard({ testimonial, highlight, delay }) {
  const ref = useRef(null);

  useEffect(() => {
    const el = ref.current;
    el.style.opacity = "0";
    el.style.transform = "translateY(24px)";
    const t = setTimeout(() => {
      el.style.transition = "opacity 0.4s ease, transform 0.4s ease";
      el.style.opacity = "1";
      el.style.transform = "translateY(0)";
    }, delay);
    return () => clearTimeout(t);
  }, [delay]);

  return (
    <div
      ref={ref}
      className={`flex flex-col rounded-xl p-5 text-left border transition-colors duration-300 ${
        highlight
          ? "bg-blue-950/50 border-blue-500/30"
          : "bg-slate-900/70 border-slate-700/40"
      }`}
    >
      <div className="text-amber-400 text-xs mb-3">★★★★★</div>
      <p className={`text-sm leading-relaxed flex-1 ${highlight ? "text-blue-100" : "text-slate-400"}`}>
        "{testimonial.quote}"
      </p>
      <hr className={`my-3 border-0 border-t ${highlight ? "border-blue-500/20" : "border-slate-700/60"}`} />
      <p className="text-sm font-medium text-white">{testimonial.name}</p>
      <p className="text-xs text-slate-400 mt-0.5">{testimonial.role}</p>
    </div>
  );
}

export default function Testimonials() {
  const [page, setPage] = useState(0);
  const [renderKey, setRenderKey] = useState(0);
  const totalPages = Math.ceil(testimonials.length / PER_PAGE);
  const slice = testimonials.slice(page * PER_PAGE, page * PER_PAGE + PER_PAGE);

  const go = (p) => {
    setPage(p);
    setRenderKey((k) => k + 1);
  };

  return (
    <section id="reviews" className="relative px-6 py-20 sm:px-8 lg:px-12 overflow-hidden">
      {/* bg glow blobs */}
      <div className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute -top-20 left-1/4 w-96 h-96 rounded-full bg-blue-600/10 blur-3xl" />
        <div className="absolute bottom-0 right-1/4 w-80 h-80 rounded-full bg-violet-600/10 blur-3xl" />
      </div>

      <div className="mx-auto max-w-5xl text-center">
        <p className="mb-2 text-xs font-semibold uppercase tracking-widest text-sky-400">
          Reviews
        </p>
        <h2 className="text-3xl font-bold text-white sm:text-4xl">
          What our users say
        </h2>

        {/* Cards grid */}
        <div
          key={renderKey}
          className="mt-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4"
        >
          {slice.map((t, i) => (
            <TestimonialCard
              key={`${page}-${i}`}
              testimonial={t}
              highlight={i === 1}
              delay={i * 90}
            />
          ))}
        </div>

        {/* Controls */}
        <div className="mt-8 flex items-center justify-center gap-3">
          <button
            onClick={() => go(page - 1)}
            disabled={page === 0}
            aria-label="Previous page"
            className="flex h-9 w-9 items-center justify-center rounded-full border border-slate-600 text-white transition hover:bg-slate-800 disabled:opacity-30 disabled:cursor-not-allowed"
          >
            ‹
          </button>

          {Array.from({ length: totalPages }).map((_, i) => (
            <button
              key={i}
              onClick={() => go(i)}
              aria-label={`Page ${i + 1}`}
              className={`h-1.5 rounded-full transition-all duration-200 ${
                i === page ? "w-5 bg-white" : "w-1.5 bg-slate-600 hover:bg-slate-400"
              }`}
            />
          ))}

          <button
            onClick={() => go(page + 1)}
            disabled={page >= totalPages - 1}
            aria-label="Next page"
            className="flex h-9 w-9 items-center justify-center rounded-full border border-slate-600 text-white transition hover:bg-slate-800 disabled:opacity-30 disabled:cursor-not-allowed"
          >
            ›
          </button>
        </div>
      </div>
    </section>
  );
}
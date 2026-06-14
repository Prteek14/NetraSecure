// Components/HeroBg.jsx
import { useEffect, useRef } from "react";
import heroImg from "/hero_img.jpg";

const HeroBg = () => {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");
    canvas.width = canvas.offsetWidth;
    canvas.height = canvas.offsetHeight;

    // Grid draw
    const spacing = 40;
    ctx.strokeStyle = "rgba(0,180,255,0.12)";
    ctx.lineWidth = 0.5;
    for (let x = 0; x <= canvas.width; x += spacing) {
      ctx.beginPath(); ctx.moveTo(x, 0); ctx.lineTo(x, canvas.height); ctx.stroke();
    }
    for (let y = 0; y <= canvas.height; y += spacing) {
      ctx.beginPath(); ctx.moveTo(0, y); ctx.lineTo(canvas.width, y); ctx.stroke();
    }
  }, []);

  return (
    <div className="absolute inset-0 h-full w-full overflow-hidden bg-[#050a14]">
      <canvas ref={canvasRef} className="absolute inset-0 w-full h-full opacity-35" />

      <div className="absolute left-1/2 top-[62%] h-90 w-90 -translate-x-1/2 -translate-y-1/2 opacity-45 sm:h-110 sm:w-110 md:left-[68%] md:top-1/2 md:h-130 md:w-130 md:opacity-60 lg:opacity-100 lg:left-[70%]">
        {/* Radial glow */}
        <div
          className="absolute inset-0 rounded-full"
          style={{
            background:
              "radial-gradient(circle, rgba(0,180,255,0.13), transparent 70%)",
          }}
        />

        {/* Rings */}
        <div className="absolute left-1/2 top-1/2 h-[52%] w-[52%] -translate-x-1/2 -translate-y-1/2 rounded-full border border-cyan-500/20 animate-pulse" />
        <div className="absolute left-1/2 top-1/2 h-[68%] w-[68%] -translate-x-1/2 -translate-y-1/2 rounded-full border border-orange-500/15 animate-pulse [animation-delay:0.8s]" />
        <div className="absolute left-1/2 top-1/2 h-[84%] w-[84%] -translate-x-1/2 -translate-y-1/2 rounded-full border border-cyan-500/10 animate-pulse [animation-delay:1.6s]" />

        {/* Hero Image */}
        <div className="absolute left-1/2 top-1/2 z-10 -translate-x-1/2 -translate-y-1/2">
          <img
            src={heroImg}
            alt="shield"
            className="h-44 w-44 rounded-full object-cover sm:h-56 sm:w-56 md:h-64 md:w-64"
            style={{
              filter: "drop-shadow(0 0 28px rgba(0,180,255,0.6))",
              maskImage: "radial-gradient(circle, black 55%, transparent 80%)",
              WebkitMaskImage:
                "radial-gradient(circle, black 55%, transparent 80%)",
            }}
          />
        </div>
      </div>

      {/* Corner labels */}
      <span className="absolute top-8 left-8 text-cyan-500/50 font-mono text-xs">SYS_SECURE</span>
      <span className="absolute top-8 right-8 text-cyan-500/50 font-mono text-xs">AI_ACTIVE</span>
      <span className="absolute bottom-8 left-8 text-cyan-500/50 font-mono text-xs">THREAT::0</span>
      <span className="absolute bottom-8 right-8 text-cyan-500/50 font-mono text-xs">SHIELD_ON</span>
    </div>
  );
};

export default HeroBg;

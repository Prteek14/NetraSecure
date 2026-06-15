import { useState } from "react";
import { FaShieldAlt, FaExclamationTriangle, FaSkull, FaSearch } from "react-icons/fa";

const results = {
  safe: {
    icon: <FaShieldAlt />,
    label: "SAFE",
    status: "Safe Website",
    risk: "Low Risk",
    message: "This website appears to be safe. No threats detected.",
    border: "border-green-500/40",
    bg: "bg-green-500/10",
    text: "text-green-400",
    glow: "shadow-green-500/20",
  },
  suspicious: {
    icon: <FaExclamationTriangle />,
    label: "SUSPICIOUS",
    status: "Suspicious Link",
    risk: "Medium Risk",
    message: "This URL shows some suspicious patterns. Proceed with caution.",
    border: "border-orange-500/40",
    bg: "bg-orange-500/10",
    text: "text-orange-400",
    glow: "shadow-orange-500/20",
  },
  dangerous: {
    icon: <FaSkull />,
    label: "DANGEROUS",
    status: "Dangerous Website",
    risk: "High Risk",
    message: "Warning! This URL is potentially malicious. Do not visit this site.",
    border: "border-red-500/40",
    bg: "bg-red-500/10",
    text: "text-red-400",
    glow: "shadow-red-500/20",
  },
};

function ResultCard({ result }) {
  return (
    <div
      className={`mt-8 rounded-2xl border ${result.border} ${result.bg} p-6 shadow-lg ${result.glow} transition-all duration-500`}
    >
      <div className="flex items-center gap-4">
        {/* Icon */}
        <div
          className={`flex h-14 w-14 shrink-0 items-center justify-center rounded-full border ${result.border} ${result.text} text-2xl`}
        >
          {result.icon}
        </div>

        {/* Info */}
        <div className="flex-1">
          <div className="flex items-center gap-3 flex-wrap">
            <span
              className={`text-xs font-bold uppercase tracking-widest ${result.text}`}
            >
              {result.label}
            </span>
            <span
              className={`rounded-full border ${result.border} px-3 py-0.5 text-xs font-medium ${result.text}`}
            >
              {result.risk}
            </span>
          </div>
          <p className="mt-1 text-base font-semibold text-white">
            {result.status}
          </p>
          <p className="mt-1 text-sm text-slate-400">{result.message}</p>
        </div>
      </div>
    </div>
  );
}

function URLScanner() {
  const [url, setUrl] = useState("");
  const [result, setResult] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const handleScan = async () => {
    if (!url.trim()) {
      setError("Please enter a URL to scan.");
      return;
    }
    setError("");
    setResult(null);
    setLoading(true);

    try {
      const res = await fetch(`${import.meta.env.VITE_API_URL}/scan`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ url }),
      });

      const data = await res.json();
      setLoading(false);

      if (res.ok) {
        setResult(results[data.result]);
      } else {
        setError(data.error || "Something went wrong.");
      }
    } catch {
      setLoading(false);
      setError("Internal Server Error. Please try again.");
    }
  };

  const handleKeyDown = (e) => {
    if (e.key === "Enter") handleScan();
  };

  return (
    <section id="url-scanner" className="px-6 py-20 sm:px-8 lg:px-12 bg-sky-950/40">
      <div className="mx-auto max-w-2xl">

        {/* Heading */}
        <div className="text-center mb-8">
          <p className="mb-2 text-xs font-semibold uppercase tracking-widest text-sky-400">
            URL Scanner
          </p>
          <h3 className="text-3xl font-bold text-white sm:text-4xl">
            Scan Your URL
          </h3>
          <p className="mt-4 text-sm text-slate-400">
            Check if a website is safe or potentially malicious. Instant results.
          </p>
        </div>

        {/* Input */}
        <div className="flex flex-col gap-3 sm:flex-row">
          <input
            type="url"
            value={url}
            onChange={(e) => setUrl(e.target.value)}
            onKeyDown={handleKeyDown}
            placeholder="Enter URL to scan... (e.g. https://example.com)"
            className="flex-1 rounded-lg border border-slate-700 bg-slate-900 px-4 py-3 text-sm text-white placeholder-slate-500 outline-none focus:border-sky-500 focus:ring-1 focus:ring-sky-500 transition"
          />
          <button
            onClick={handleScan}
            disabled={loading}
            className="flex items-center justify-center gap-2 rounded-lg bg-blue-600 px-6 py-3 text-sm font-semibold text-white hover:bg-blue-500 disabled:opacity-50 disabled:cursor-not-allowed active:scale-95 transition"
          >
            {loading ? (
              <>
                <span className="h-4 w-4 rounded-full border-2 border-white/30 border-t-white animate-spin" />
                Scanning...
              </>
            ) : (
              <>
                <FaSearch className="text-xs" />
                Scan Now
              </>
            )}
          </button>
        </div>

        {/* Error */}
        {error && (
          <p className="mt-3 text-xs text-red-400">{error}</p>
        )}

        {/* Result */}
        {result && <ResultCard result={result} />}

      </div>
    </section>
  );
}

export default URLScanner;
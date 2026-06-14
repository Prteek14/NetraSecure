import { useState, useEffect, useRef } from "react";
import { FaPaperPlane, FaRobot, FaUser } from "react-icons/fa";

const suggestions = [
  "How to create a strong password?",
  "Is this website safe to visit?",
  "What is phishing?",
  "How to enable 2FA?",
];

const initialMessages = [
  {
    from: "bot",
    text: "Hello! I'm NetraSecure AI Assistant. How can I help you stay safe online today?",
  },
];

function ChatBubble({ msg }) {
  const isBot = msg.from === "bot";
  return (
    <div className={`flex items-end gap-2.5 ${isBot ? "" : "flex-row-reverse"}`}>
      <div
        className={`flex h-8 w-8 shrink-0 items-center justify-center rounded-full text-xs
          ${isBot
            ? "bg-sky-500/20 border border-sky-500/30 text-sky-400"
            : "bg-slate-700 border border-slate-600 text-slate-300"
          }`}
      >
        {isBot ? <FaRobot /> : <FaUser />}
      </div>

      <div
        className={`max-w-[75%] rounded-2xl px-4 py-3 text-sm leading-relaxed
          ${isBot
            ? "bg-slate-800 border border-slate-700 text-slate-200 rounded-bl-sm"
            : "bg-blue-600 text-white rounded-br-sm"
          }`}
      >
        {msg.text}
      </div>
    </div>
  );
}

function Chatbot() {
  const [messages, setMessages] = useState(initialMessages);
  const [input, setInput] = useState("");
  const [isTyping, setIsTyping] = useState(false);
  const bottomRef = useRef(null);

  // auto scroll to bottom on new message
  useEffect(() => {
    bottomRef.current?.scrollIntoView({ behavior: "smooth", block: "nearest" });
  }, [messages, isTyping]);

  const sendMessage = async (text) => {
    const userMsg = text || input.trim();
    if (!userMsg) return;

    setMessages((prev) => [...prev, { from: "user", text: userMsg }]);
    setInput("");
    setIsTyping(true);

    try {
      const res = await fetch("http://localhost:5000/chat", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ message: userMsg }),
      });

      const data = await res.json();
      setIsTyping(false);

      if (res.ok) {
        setMessages((prev) => [...prev, { from: "bot", text: data.reply }]);
      } else {
        setMessages((prev) => [
          ...prev,
          { from: "bot", text: data.error || "Something went wrong." },
        ]);
      }
    } catch {
      setIsTyping(false);
      setMessages((prev) => [
        ...prev,
        {
          from: "bot",
          text: "Internal Server Error. Please try again.",
        },
      ]);
    }
  };

  const handleKeyDown = (e) => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault();
      sendMessage();
    }
  };

  return (
    <section id="chatbot" className="px-6 py-20 sm:px-8 lg:px-12 bg-slate-900/80">
      <div className="mx-auto max-w-3xl">

        {/* Heading */}
        <div className="text-center mb-8">
          <p className="mb-2 text-xs font-semibold uppercase tracking-widest text-sky-400">
            AI Assistant
          </p>
          <h3 className="text-3xl font-bold text-white sm:text-4xl">
            Try NetraSecure AI Now
          </h3>
          <p className="mt-4 text-sm text-slate-400">
            Ask our AI assistant your cybersecurity questions instantly.
          </p>
        </div>

        {/* Chat Window */}
        <div className="rounded-2xl border border-slate-700/80 bg-slate-900 overflow-hidden">

          {/* Chat Header */}
          <div className="flex items-center gap-3 border-b border-slate-700/80 px-5 py-3.5">
            <div className="flex h-8 w-8 items-center justify-center rounded-full bg-sky-500/20 border border-sky-500/30 text-sky-400">
              <FaRobot />
            </div>
            <div>
              <p className="text-sm font-semibold text-white">NetraSecure AI</p>
              <div className="flex items-center gap-1.5 mt-0.5">
                <span className="h-1.5 w-1.5 rounded-full bg-green-400 animate-pulse" />
                <span className="text-xs text-slate-500">Online</span>
              </div>
            </div>

            {/* Clear chat */}
            <button
              onClick={() => setMessages(initialMessages)}
              className="ml-auto text-xs text-slate-500 hover:text-slate-300 transition border border-slate-700 rounded-lg px-3 py-1.5"
            >
              Clear Chat
            </button>
          </div>

          {/* Messages */}
          <div className="flex flex-col gap-4 p-5 h-72 overflow-y-auto">
            {messages.map((msg, i) => (
              <ChatBubble key={i} msg={msg} />
            ))}

            {/* Typing indicator */}
            {isTyping && (
              <div className="flex items-end gap-2.5">
                <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-sky-500/20 border border-sky-500/30 text-sky-400">
                  <FaRobot />
                </div>
                <div className="bg-slate-800 border border-slate-700 rounded-2xl rounded-bl-sm px-4 py-3">
                  <div className="flex gap-1 items-center h-4">
                    <span className="h-1.5 w-1.5 rounded-full bg-slate-400 animate-bounce [animation-delay:0ms]" />
                    <span className="h-1.5 w-1.5 rounded-full bg-slate-400 animate-bounce [animation-delay:150ms]" />
                    <span className="h-1.5 w-1.5 rounded-full bg-slate-400 animate-bounce [animation-delay:300ms]" />
                  </div>
                </div>
              </div>
            )}

            <div ref={bottomRef} />
          </div>

          {/* Suggestions */}
          <div className="flex flex-wrap gap-2 px-5 pb-3 border-t border-slate-700/50 pt-3">
            {suggestions.map((s) => (
              <button
                key={s}
                onClick={() => sendMessage(s)}
                className="rounded-full border border-slate-700 bg-slate-800 px-3 py-1.5 text-xs text-slate-300 hover:border-sky-500/50 hover:text-sky-300 transition"
              >
                {s}
              </button>
            ))}
          </div>

          {/* Input */}
          <div className="flex items-center gap-3 border-t border-slate-700/80 px-4 py-3">
            <input
              type="text"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyDown={handleKeyDown}
              placeholder="Type your question..."
              className="flex-1 rounded-lg border border-slate-700 bg-slate-800 px-4 py-2.5 text-sm text-white placeholder-slate-500 outline-none focus:border-sky-500 focus:ring-1 focus:ring-sky-500 transition"
            />
            <button
              onClick={() => sendMessage()}
              disabled={!input.trim() || isTyping}
              className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-blue-600 text-white hover:bg-blue-500 disabled:opacity-40 disabled:cursor-not-allowed transition active:scale-95"
            >
              <FaPaperPlane className="text-sm" />
            </button>
          </div>

        </div>
      </div>
    </section>
  );
}

export default Chatbot;
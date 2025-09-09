"use client";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { getBotReply } from "./ChatbotLogic";

export default function Chatbot({
  isOpen,
  onClose,
}: {
  isOpen: boolean;
  onClose: () => void;
}) {
  const [messages, setMessages] = useState<{ sender: string; text: string }[]>([]);
  const [input, setInput] = useState("");
  const [isTyping, setIsTyping] = useState(false);

  const sendMessage = async () => {
    if (!input.trim()) return;

    const userMessage = { sender: "user", text: input };
    setMessages((prev) => [...prev, userMessage]);
    setInput("");

    setIsTyping(true);

    try {
      const reply = await getBotReply(input);
      setMessages((prev) => [...prev, { sender: "bot", text: reply }]);
    } catch (err) {
      console.error("Chatbot error:", err);
      setMessages((prev) => [
        ...prev,
        { sender: "bot", text: "⚠️ Sorry, something went wrong." },
      ]);
    } finally {
      setIsTyping(false);
    }
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0, scale: 0.8, y: 50 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.8, y: 50 }}
          transition={{ duration: 0.3, ease: "easeOut" }}
          className="fixed bottom-28 right-6 w-80 h-96 rounded-2xl shadow-2xl flex flex-col z-[100] 
          backdrop-blur-lg bg-white/90 border border-gray-200"
        >
          {/* Header */}
          <div className="p-3 bg-green-800 text-white font-semibold flex justify-between items-center rounded-t-2xl">
            <span>QuickMenuX Assistant</span>
            <button onClick={onClose} className="text-white text-lg">
              ✕
            </button>
          </div>

          {/* Messages */}
          <div className="flex-1 overflow-y-auto p-3 space-y-3 text-sm">
            {messages.map((msg, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.2 }}
                className={`p-2 rounded-xl max-w-[80%] ${
                  msg.sender === "user"
                    ? "bg-green-100 text-black ml-auto"
                    : "bg-gray-100 text-gray-800"
                }`}
              >
                {msg.text}
              </motion.div>
            ))}

            {isTyping && (
              <div className="bg-gray-200 text-gray-700 px-3 py-2 rounded-xl w-fit">
                <span className="dot-typing"></span>
              </div>
            )}
          </div>

          {/* Input */}
          <div className="p-3 border-t flex gap-2">
            <input
              value={input}
              onChange={(e) => setInput(e.target.value)}
              placeholder="Ask me anything..."
              className="flex-1 border px-3 py-2 rounded-lg text-sm focus:outline-green-800"
              onKeyDown={(e) => e.key === "Enter" && sendMessage()}
            />
            <button
              onClick={sendMessage}
              className="bg-green-800 hover:bg-green-900 transition text-white px-4 py-2 rounded-lg text-sm"
            >
              Send
            </button>
          </div>

          {/* Inline CSS for typing dots */}
          <style jsx>{`
            .dot-typing {
              position: relative;
              left: 4px;
              width: 6px;
              height: 6px;
              border-radius: 50%;
              background-color: #4b5563;
              color: #4b5563;
              box-shadow: 12px 0 0 0 #4b5563, 24px 0 0 0 #4b5563;
              animation: dot-typing 1s infinite linear alternate;
            }
            @keyframes dot-typing {
              0% {
                box-shadow: 12px 0 0 0 #4b5563, 24px 0 0 0 #4b5563;
              }
              25% {
                box-shadow: 12px -4px 0 0 #4b5563, 24px 0 0 0 #4b5563;
              }
              50% {
                box-shadow: 12px 0 0 0 #4b5563, 24px -4px 0 0 #4b5563;
              }
              75% {
                box-shadow: 12px 0 0 0 #4b5563, 24px 0 0 0 #4b5563;
              }
              100% {
                box-shadow: 12px 0 0 0 #4b5563, 24px 0 0 0 #4b5563;
              }
            }
          `}</style>
        </motion.div>
      )}
    </AnimatePresence>
  );
}

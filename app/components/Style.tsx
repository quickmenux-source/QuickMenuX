"use client";

import { motion } from "framer-motion";

const rows = [
  ["DIGITAL MENU", "QR ORDERING", "CONTACTLESS PAY"],
  ["FAST SERVICE", "CUSTOMER EXPERIENCE", "TABLE MANAGEMENT"],
  ["SMART DINING", "MENU DESIGN", "LOYALTY PROGRAMS"],
  ["INSIGHTS", "DATA ANALYTICS", "GROWTH STRATEGY"],
];

export default function Style() {
  const speeds = [18, 22, 20, 25]; // Different scroll speeds
  const shimmerDelay = [0, 0.3, 0.6, 0.9]; // Delay shimmer per row

  return (
    <section className="w-full bg-white py-20 overflow-hidden">
      {rows.map((words, index) => (
        <motion.div
          key={index}
          className="flex whitespace-nowrap"
          initial={{ x: index % 2 === 0 ? "0%" : "-50%" }}
          animate={{ x: index % 2 === 0 ? "-50%" : "0%" }}
          transition={{
            repeat: Infinity,
            ease: "linear",
            duration: speeds[index],
          }}
        >
          {[...Array(2)].map((_, i) => (
            <div
              key={i}
              className="flex items-center text-black text-6xl md:text-8xl font-light tracking-wide uppercase"
            >
              {words.map((word, j) => (
                <span
                  key={j}
                  className={`mx-8 ${
                    j % 2 === 1
                      ? `italic shimmer-text shimmer-delay-${index}`
                      : "font-outline-black"
                  }`}
                >
                  {word}
                </span>
              ))}
            </div>
          ))}
        </motion.div>
      ))}
    </section>
  );
}

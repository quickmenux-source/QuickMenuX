"use client";

import Image from "next/image";
import { motion } from "framer-motion";

const reasons = [
  {
    left: "Unmatched reliability and uptime for your peace of mind.",
    right: "We guarantee 99.9% uptime, so downtime is virtually non-existent.",
    image: "/image7.png",
  },
  {
    left: "Lightning-fast performance designed for modern customers.",
    right: "Speed isn't just a feature — it's your competitive advantage.",
    image: "/image8.png",
  },
];

const splitTextIntoWords = (text: string, baseDelay = 0) =>
  text.split(" ").map((word, idx) => (
    <motion.span
      key={idx}
      initial={{ y: "100%", opacity: 0 }}
      whileInView={{ y: "0%", opacity: 1 }}
      viewport={{ once: true }}
      transition={{
        duration: 0.6,
        delay: baseDelay + idx * 0.07,
        ease: [0.25, 0.1, 0.25, 1],
      }}
      className="inline-block overflow-hidden"
    >
      <span className="inline-block">{word}&nbsp;</span>
    </motion.span>
  ));

export default function WhyChooseUs() {
  return (
    <section className="w-full py-24 bg-white text-black">
      {/* Heading */}
      <div className="text-center mb-20">
        <motion.h2
          className="relative text-5xl md:text-7xl font-extrabold tracking-tight inline-block text-orange-500"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={{
            visible: { transition: { staggerChildren: 0.04, delayChildren: 0 } },
          }}
        >
          {"Why Choose Us".split("").map((char, i) => (
            <motion.span
              key={i}
              variants={{
                hidden: { opacity: 0, y: 40 },
                visible: { opacity: 1, y: 0 },
              }}
              transition={{
                duration: 0.6,
                ease: [0.16, 1, 0.3, 1],
              }}
              whileHover={{
                y: -5,
                scale: 1.1,
                transition: { duration: 0.3, ease: "easeOut" },
              }}
              className="inline-block cursor-pointer"
            >
              {char}
            </motion.span>
          ))}

          {/* Shimmer sweep AFTER reveal */}
          <motion.span
            initial={{ x: "-100%", opacity: 0 }}
            whileInView={{ x: "100%", opacity: 1 }}
            viewport={{ once: true }}
            transition={{
              duration: 1.6,
              ease: "easeInOut",
              delay: 0.6,
            }}
            className="absolute inset-0 bg-gradient-to-r from-transparent via-white/40 to-transparent pointer-events-none"
          />
        </motion.h2>
      </div>

      {/* Paragraphs + Images */}
      <div className="max-w-7xl mx-auto px-6 space-y-24">
        {reasons.map((reason, idx) => (
          <motion.div
            key={idx}
            className={`flex flex-col md:flex-row ${
              idx % 2 !== 0 ? "md:flex-row-reverse" : ""
            } gap-10 items-center`}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={{
              hidden: {},
              visible: { transition: { staggerChildren: 0.2 } },
            }}
          >
            {/* Text Side */}
            <motion.div
              className="flex-1 space-y-8"
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{
                duration: 1,
                ease: [0.45, 0, 0.55, 1],
              }}
            >
              <p className="text-xl md:text-2xl font-medium leading-relaxed relative group overflow-hidden">
                {splitTextIntoWords(reason.left, 0)}
                <span className="block h-[3px] w-0 bg-gradient-to-r from-green-800 to-orange-500 mt-3 group-hover:w-full transition-all duration-700"></span>
              </p>
              <motion.p
                className="text-xl md:text-2xl font-medium leading-relaxed relative group overflow-hidden"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{
                  duration: 0.8,
                  delay: 0.6,
                  ease: [0.25, 0.1, 0.25, 1],
                }}
              >
                {splitTextIntoWords(reason.right, 0.4)}
                <span className="block h-[3px] w-0 bg-gradient-to-r from-orange-500 to-green-800 mt-3 group-hover:w-full transition-all duration-700"></span>
              </motion.p>
            </motion.div>

            {/* Image Side */}
            <motion.div
              className="flex-1 relative overflow-hidden rounded-2xl shadow-lg"
              initial={{ opacity: 0, scale: 0.92 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{
                duration: 1,
                ease: [0.45, 0, 0.55, 1],
              }}
              whileHover={{ scale: 1.03, rotate: 1 }}
            >
              <Image
                src={reason.image}
                alt="Why Choose Us visual"
                width={600}
                height={400}
                className="object-cover w-full h-full"
              />
              <motion.div
                className="absolute inset-0 bg-gradient-to-tr from-transparent via-white/20 to-transparent"
                initial={{ x: "-100%" }}
                whileHover={{ x: "100%" }}
                transition={{ duration: 1.2, ease: "easeInOut" }}
              />
            </motion.div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}

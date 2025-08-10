"use client";

import Image from "next/image";
import { motion, useScroll, useTransform, useMotionValue } from "framer-motion";
import { useRef } from "react";

function TiltParallaxImage({ src, alt }: { src: string; alt: string }) {
  const ref = useRef<HTMLDivElement>(null);
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });

  const parallaxY = useTransform(scrollYProgress, [0, 1], ["-20px", "20px"]);
  const rotateX = useTransform(y, [-0.5, 0.5], [8, -8]);
  const rotateY = useTransform(x, [-0.5, 0.5], [-8, 8]);

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!ref.current) return;
    const rect = ref.current.getBoundingClientRect();
    const offsetX = (e.clientX - rect.left) / rect.width - 0.5;
    const offsetY = (e.clientY - rect.top) / rect.height - 0.5;
    x.set(offsetX);
    y.set(offsetY);
  };

  const handleMouseLeave = () => {
    x.set(0);
    y.set(0);
  };

  return (
    <motion.div
      ref={ref}
      style={{ y: parallaxY, rotateX, rotateY }}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      transition={{ type: "spring", stiffness: 150, damping: 20 }}
      className="w-full h-full shadow-xl shadow-black/10"
    >
      <Image
        src={src}
        alt={alt}
        width={800}
        height={800}
        className="w-full h-full object-cover"
      />
    </motion.div>
  );
}

export default function Aboutus() {
  return (
    <section className="relative w-full px-6 md:px-20 py-20 bg-white text-black font-[Inter] overflow-hidden">
      {/* Background Glow */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.15, scale: [1, 1.1, 0.95, 1] }}
        transition={{ repeat: Infinity, duration: 12, ease: "easeInOut" }}
        className="absolute top-[-80px] left-[-80px] w-[250px] h-[250px] bg-gradient-to-br from-orange-300 via-yellow-200 to-transparent rounded-full blur-3xl z-0"
      />

      {/* Heading */}
      <motion.h2
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        whileHover={{
          x: 8,
          letterSpacing: "2px",
          fontWeight: 800,
          color: "#FF6600",
          fontFamily: "'Merriweather', serif",
          transition: { duration: 0.4 },
        }}
        className="relative z-10 text-5xl font-black mb-10 tracking-tight text-center cursor-pointer transition-all"
        style={{ fontFamily: "'Inter', sans-serif" }}
      >
        About <span className="italic">QuickMenuX</span>
      </motion.h2>

      {/* Short Intro */}
      <motion.p
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="relative z-10 text-lg leading-relaxed mb-20 text-gray-800 max-w-4xl mx-auto text-center"
      >
        QuickMenuX blends innovation with dining, creating a seamless experience
        where menus come alive, orders move faster, and customers feel more
        connected to their food.
      </motion.p>

      {/* First Block */}
      <motion.div
        initial={{ opacity: 0, x: -50 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="relative flex flex-col md:flex-row items-stretch gap-0 z-10"
      >
        <div className="flex-1 relative z-10">
          <TiltParallaxImage src="/image2.png" alt="QR Code Stand Ordering" />
        </div>
        <div className="flex-1 flex flex-col justify-center p-10 bg-gradient-to-br from-orange-500 to-orange-700 shimmer text-white">
          <motion.h3
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="text-3xl font-semibold mb-4"
          >
            Easy QR Ordering
          </motion.h3>
          {[
            "Scan, browse, and order in seconds — no queues, no waiting.",
            "Menus update instantly, showcasing specials in real-time.",
            "Perfect for busy restaurants aiming to serve faster and smarter.",
          ].map((line, i) => (
            <motion.p
              key={i}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.4, delay: i * 0.15 }}
              viewport={{ once: true }}
              className="text-lg leading-relaxed mb-2"
            >
              {line}
            </motion.p>
          ))}
        </div>
      </motion.div>

      {/* Connector Line */}
      <motion.div
        initial={{ width: 0 }}
        whileInView={{ width: "2px" }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        className="mx-auto h-12 bg-gradient-to-b from-orange-500 to-black"
      />

      {/* Second Block with Overlap */}
      <motion.div
        initial={{ opacity: 0, x: 50 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="relative flex flex-col md:flex-row items-stretch gap-0 z-10 -mt-14"
      >
        <div className="flex-1 flex flex-col justify-center p-10 bg-gradient-to-br from-black to-gray-800 shimmer text-white shadow-lg shadow-black/20">
          <motion.h3
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="text-3xl font-semibold mb-4"
          >
            Smart Application
          </motion.h3>
          {[
            "Loads instantly upon scanning — no apps, no friction.",
            "Interactive design makes exploring the menu exciting.",
            "Customization and checkout happen right at the table.",
          ].map((line, i) => (
            <motion.p
              key={i}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.4, delay: i * 0.15 }}
              viewport={{ once: true }}
              className="text-lg leading-relaxed mb-2"
            >
              {line}
            </motion.p>
          ))}
        </div>
        <div className="flex-1 relative z-20">
          <TiltParallaxImage src="/image3.png" alt="App Menu Showcase" />
        </div>
      </motion.div>

      {/* Shimmer Effect Style */}
      <style jsx>{`
        .shimmer {
          background-size: 200% 200%;
          animation: shimmerMove 6s ease infinite;
        }
        @keyframes shimmerMove {
          0% {
            background-position: 0% 50%;
          }
          50% {
            background-position: 100% 50%;
          }
          100% {
            background-position: 0% 50%;
          }
        }
      `}</style>
    </section>
  );
}

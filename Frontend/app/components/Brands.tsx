"use client";
import { useEffect, useRef } from "react";
import { motion, useAnimation, useInView } from "framer-motion";
import Image from "next/image";

const brands = [
  { name: "Marriott", logo: "/marriott.png", desc: "Luxury hotel experience" },
  { name: "Hilton", logo: "/hilton.png", desc: "Global hospitality leader" },
  { name: "Accor", logo: "/accor.png", desc: "Hospitality innovation hub" },
  { name: "Wyndham", logo: "/wyndham.png", desc: "Trusted for comfort" },
  { name: "The Ritz", logo: "/ritz.png", desc: "World-class elegance" },
  { name: "Kempinski", logo: "/kempinski.png", desc: "European luxury" },
];

export default function Brands() {
  const sectionRef = useRef(null);
  const inView = useInView(sectionRef, { once: true });
  const controls = useAnimation();
  const scrollControls = useAnimation();

  useEffect(() => {
    if (inView) controls.start("visible");
  }, [inView]);

  useEffect(() => {
    const loop = async () => {
      while (true) {
        await scrollControls.start({
          x: "-50%",
          transition: { duration: 20, ease: "linear" },
        });
        scrollControls.set({ x: "0%" });
      }
    };
    loop();
  }, []);

  return (
    <motion.section
      ref={sectionRef}
      className="snap-start h-screen w-full bg-white flex flex-col justify-center items-center relative overflow-hidden"
      initial="hidden"
      animate={controls}
      variants={{
        hidden: { opacity: 0, y: 60 },
        visible: { opacity: 1, y: 0, transition: { duration: 1.2, ease: "easeOut" } },
      }}
    >
      {/* Heading */}
      <div className="text-center px-6 mb-12">
        <h2 className="text-4xl sm:text-5xl font-bold text-[#013220]">
          Trusted by the World’s Leading Hospitality Brands
        </h2>
        <p className="text-gray-600 mt-4">
          Powering seamless dining experiences for renowned hotels worldwide
        </p>
      </div>

      {/* Brand */}
      <div className="relative w-full overflow-x-auto max-w-7xl px-6 scroll-smooth snap-x scrollbar-hide">
        <motion.div
          className="flex gap-16 min-w-max"
          animate={scrollControls}
          drag="x"
          dragConstraints={{ left: -1000, right: 0 }}
          whileTap={{ cursor: "grabbing" }}
        >
          {[...brands, ...brands].map((brand, i) => (
            <motion.div
              key={`${brand.name}-${i}`}
              className="group relative flex-shrink-0 w-44 h-24 sm:w-52 sm:h-28 flex items-center justify-center snap-start"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={controls}
              variants={{
                visible: {
                  opacity: 1,
                  scale: 1,
                  transition: { delay: i * 0.1, duration: 0.5 },
                },
              }}
            >
              {/* brand card */}
              <div className="relative w-full h-full flex items-center justify-center bg-white/10 rounded-lg shadow-md overflow-hidden backdrop-blur-md border border-white/20 group-hover:scale-105 transition duration-500">
                <Image
                  src={brand.logo}
                  alt={brand.name}
                  width={120}
                  height={60}
                  className="grayscale group-hover:grayscale-0 object-contain"
                  loading="eager"
                />
                {/* Hover */}
                <motion.div
                  className="absolute inset-0 bg-white/40 backdrop-blur-lg flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                >
                  <p className="text-center text-sm px-2 text-gray-900 font-medium">
                    {brand.desc}
                  </p>
                </motion.div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>

      {/* Hide scrollbar cross-browser */}
      <style jsx>{`
        .scrollbar-hide::-webkit-scrollbar {
          display: none;
        }
        .scrollbar-hide {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }
      `}</style>
    </motion.section>
  );
}

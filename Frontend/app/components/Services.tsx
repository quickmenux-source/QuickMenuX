"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { useState } from "react";

export default function Services() {
  const [hovered, setHovered] = useState(false);

  return (
    <section className="w-full px-6 md:px-20 py-20 bg-white text-gray-900 relative">
      {/* Heading + description */}
      <div className="grid md:grid-cols-2 gap-4 items-start">
        <div className="flex flex-col items-start md:ml-4 max-w-sm">
          <motion.h2
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-5xl font-bold mb-6 tracking-tight text-orange-600"
          >
            Our Services
          </motion.h2>
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-lg text-black leading-relaxed"
          >
            We provide next-gen restaurant technology solutions that simplify
            ordering, enhance customer experiences, and amplify your brand in
            a competitive digital space.
          </motion.p>
        </div>
        <div />
      </div>

      {/* Images row */}
      <div className="grid md:grid-cols-2 gap-2 mt-16 items-start">
        {/* Left Image & Text */}
        <div className="flex flex-col items-start md:ml-4">
          <motion.div
            whileHover={{ rotateY: 8, rotateX: 4, scale: 1.02 }}
            transition={{ type: "spring", stiffness: 100 }}
            className="shadow-lg rounded-2xl overflow-hidden"
          >
            <Image
              src="/image4.png"
              alt="Service 1"
              width={320}
              height={320}
              className="w-full max-w-[320px] h-auto object-cover"
            />
          </motion.div>

          <div className="mt-2">
            <h3 className="text-2xl font-semibold mb-3 text-orange-500">
              Digital Menu Creation
            </h3>
            {[
              "Interactive, dynamic menus in stunning 3D.",
              "Customers can explore dishes visually.",
              "Seamless ordering at the table.",
              "Boost your brand’s visual appeal.",
            ].map((line, i) => (
              <motion.p
                key={i}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.4, delay: i * 0.15 }}
                viewport={{ once: true }}
                className="text-black leading-relaxed mb-1"
              >
                {line}
              </motion.p>
            ))}
          </div>
        </div>

        {/* Right images + text */}
        <div className="flex flex-col items-start relative space-y-6">
          <motion.div
            whileHover={{ rotateY: -8, rotateX: 4, scale: 1.02 }}
            transition={{ type: "spring", stiffness: 100 }}
            className="shadow-lg rounded-2xl overflow-hidden"
          >
            <Image
              src="/image5.png"
              alt="Service 2"
              width={320}
              height={320}
              className="w-full max-w-[320px] h-auto object-cover"
            />
          </motion.div>

          <div>
            <h3 className="text-2xl font-semibold mb-3 text-orange-500">
              Smart Order Management
            </h3>
            {[
              "Real-time tracking of all orders.",
              "From preparation to delivery accuracy.",
              "Streamlined kitchen communication.",
              "Faster, more reliable service.",
            ].map((line, i) => (
              <motion.p
                key={i}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.4, delay: i * 0.15 }}
                viewport={{ once: true }}
                className="text-black leading-relaxed mb-1"
              >
                {line}
              </motion.p>
            ))}
          </div>

          <motion.div
            whileHover={{ rotateY: 8, rotateX: -4, scale: 1.02 }}
            transition={{ type: "spring", stiffness: 100 }}
            className="shadow-lg rounded-2xl overflow-hidden"
          >
            <Image
              src="/image6.png"
              alt="Service 3"
              width={320}
              height={320}
              className="w-full max-w-[320px] h-auto object-cover"
            />
          </motion.div>

          <div>
            <h3 className="text-2xl font-semibold mb-3 text-orange-500">
              Immersive Menu Analytics
            </h3>
            {[
              "Track customer behavior in detail.",
              "Insights on most popular dishes.",
              "Predict trends and demands.",
              "Data-driven growth strategies.",
            ].map((line, i) => (
              <motion.p
                key={i}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.4, delay: i * 0.15 }}
                viewport={{ once: true }}
                className="text-black leading-relaxed mb-1"
              >
                {line}
              </motion.p>
            ))}
          </div>
        </div>
      </div>

      {/* Centered button with white bg and dark green bubbling fill on hover */}
      <div className="flex justify-center mt-16">
        <motion.button
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          onMouseEnter={() => setHovered(true)}
          onMouseLeave={() => setHovered(false)}
          className={`relative overflow-hidden px-8 py-4 rounded-full border border-[#064e3b] font-medium
            bg-white
            text-[#064e3b]
            transition-colors duration-500 ease-out hover:text-white
            hover:scale-105
            before:absolute before:left-0 before:right-0 before:bottom-0 before:h-0 before:bg-[#064e3b] before:z-0 before:transition-[height] before:duration-700
            ${hovered ? "before:h-full" : ""}
          `}
          style={{ WebkitTapHighlightColor: "transparent" }}
        >
          <span className="relative z-10">
            {hovered ? "Explore Now" : "View All Services"}
          </span>
        </motion.button>
      </div>
    </section>
  );
}

"use client";

import { motion } from "framer-motion";
import Image from "next/image";

const blogPosts = [
  {
    title: "The Best Digital Menu",
    description:
      "Discover how a high-quality digital menu can transform your customer experience and streamline operations.",
    date: "08/10/2025",
    image: "/image9.png",
    tag: "RESTAURANT TECH",
  },
  {
    title: "How to Generate a QR with Just One Click",
    description:
      "Learn the simplest way to create QR codes instantly for your restaurant, café, or event.",
    date: "08/05/2025",
    image: "/image10.png",
    tag: "HOW TO",
  },
  {
    title: "The Future of Contactless Dining",
    description:
      "Explore the innovations making contactless ordering the standard for the dining industry.",
    date: "07/28/2025",
    image: "/image11.png",
    tag: "INNOVATION",
  },
];

export default function Blog() {
  return (
    <section className="w-full bg-gradient-to-b from-black via-neutral-900 to-black py-20 px-6 md:px-20">
      {/* Heading */}
      <motion.h2
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        viewport={{ once: true }}
        className="text-4xl md:text-5xl font-extrabold text-white text-center mb-14 drop-shadow-lg transition-colors duration-300 hover:text-orange-500"
      >
        Blog
      </motion.h2>

      {/* Blog List */}
      <div className="flex flex-col gap-24">
        {blogPosts.map((post, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: index * 0.15, ease: "easeOut" }}
            viewport={{ once: true }}
            className="flex flex-col md:flex-row md:items-center gap-8 group"
          >
            {/* Image */}
            <motion.div
              whileHover={{ scale: 1.03 }}
              transition={{ duration: 0.4, ease: "easeOut" }}
              className="relative flex-shrink-0 w-full md:w-[45%] overflow-hidden rounded-3xl shadow-xl"
            >
              <Image
                src={post.image}
                alt={post.title}
                width={600}
                height={400}
                className="rounded-3xl object-cover w-full h-64 md:h-80 transition-transform duration-700 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            </motion.div>

            {/* Content */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: index * 0.15 + 0.2 }}
              viewport={{ once: true }}
              className="flex flex-col justify-center w-full md:w-[55%] h-auto"
            >
              <span className="border border-white/40 text-white text-xs px-4 py-1 rounded-full w-fit mb-4 tracking-wider bg-white/5 backdrop-blur-sm hover:bg-white/10 transition-colors duration-300">
                {post.tag}
              </span>
              <h3 className="text-2xl md:text-3xl font-semibold text-white leading-snug group-hover:text-orange-500 transition-colors duration-300">
                {post.title}
              </h3>
              <p className="text-white/80 mt-3 leading-relaxed">
                {post.description}
              </p>
              <span className="text-gray-400 text-sm mt-3 italic tracking-wide">
                {post.date}
              </span>
            </motion.div>
          </motion.div>
        ))}
      </div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.3 }}
        viewport={{ once: true }}
        className="flex justify-center mt-16"
      >
        <button className="relative overflow-hidden border border-white px-8 py-3 rounded-full text-lg font-medium bg-black text-white group">
          <span className="relative z-10 transition-colors duration-500 group-hover:text-black">
            Visit Our Blog
          </span>
          <span className="absolute inset-0 bg-white scale-x-0 origin-left transition-transform duration-500 ease-out group-hover:scale-x-100"></span>
        </button>
      </motion.div>
    </section>
  );
}

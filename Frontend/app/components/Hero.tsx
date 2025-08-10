"use client";
import { motion } from "framer-motion";
import Image from "next/image";

export default function Hero() {
  return (
    <section className="relative overflow-hidden min-h-screen flex flex-col md:flex-row items-center justify-between px-6 sm:px-16 py-20 bg-white perspective-3d font-[Inter]">
      
      {/* Animated Background Blobs */}
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.4, scale: [1, 1.05, 0.95, 1] }}
        transition={{ repeat: Infinity, duration: 10, ease: "easeInOut" }}
        className="absolute top-[-100px] left-[-100px] w-[300px] h-[300px] bg-gradient-to-br from-orange-100 via-yellow-100 to-transparent rounded-full filter blur-3xl z-0 animate-blob animation-delay-2000"
      />
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.4, scale: [1, 0.95, 1.1, 1] }}
        transition={{ repeat: Infinity, duration: 12, ease: "easeInOut" }}
        className="absolute bottom-[-100px] right-[-100px] w-[300px] h-[300px] bg-gradient-to-br from-green-100 via-lime-100 to-transparent rounded-full filter blur-2xl z-0 animate-blob"
      />
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.3, scale: [1, 1.1, 0.9, 1] }}
        transition={{ repeat: Infinity, duration: 14, ease: "easeInOut" }}
        className="absolute top-[40%] left-[50%] w-[200px] h-[200px] bg-gradient-to-br from-yellow-100 via-orange-100 to-transparent rounded-full filter blur-2xl z-0 animate-blob animation-delay-4000"
      />
      <motion.div
        initial={{ opacity: 0, rotateY: 0 }}
        animate={{ opacity: 0.2, rotateY: [0, 360] }}
        transition={{ repeat: Infinity, duration: 20, ease: "linear" }}
        className="absolute top-[20%] left-[30%] w-[250px] h-[250px] bg-gradient-to-br from-purple-200 via-pink-200 to-transparent rounded-full blur-3xl z-0"
        style={{ transformStyle: "preserve-3d" }}
      />

      {/* Content */}
      <div className="relative z-10 w-full flex flex-col md:flex-row justify-between items-center">
        
        {/* Left Side */}
        <motion.div 
          initial={{ opacity: 0, x: -50 }} 
          animate={{ opacity: 1, x: 0 }} 
          transition={{ duration: 0.8 }} 
          className="md:w-1/2 space-y-6"
        >
          <h1 className="text-4xl sm:text-6xl font-black leading-tight tracking-tight">
            <span className="text-[#006400] drop-shadow-[1px_1px_1px_rgba(0,0,0,0.1)]">Quick</span>
            <span className="text-[#013220] drop-shadow-[1px_1px_1px_rgba(0,0,0,0.15)]">Menu</span>
            <span className="text-black drop-shadow-[1px_1px_2px_rgba(0,0,0,0.1)]">X</span>
          </h1>
          <p className="text-xl sm:text-2xl font-semibold leading-tight tracking-wide text-orange-500 drop-shadow-sm">
            Ditch the Paper Menu. Scan, Browse & Order in Seconds.
          </p>
          <p className="text-lg sm:text-xl font-medium leading-relaxed tracking-wide text-gray-600">
            Experience smart dining with <span className="font-semibold text-green-800">QuickMenuX</span> — scan a QR code, explore the menu, and order instantly from your phone. No apps. No waiting. Just food, fast.
          </p>

          <motion.a 
            href="#features"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="inline-block bg-green-800 hover:bg-green-700 text-white px-7 py-3 rounded-lg font-semibold shadow-md transition duration-300"
          >
            Get Started
          </motion.a>
        </motion.div>

        {/* Right Side */}
        <motion.div 
          initial={{ opacity: 0, x: 50 }} 
          animate={{ opacity: 1, x: 0 }} 
          transition={{ duration: 0.8, delay: 0.2 }}
          className="mt-10 md:mt-0 md:w-1/2 flex justify-center"
        >
          <Image 
            src="/image1.png" 
            alt="QR Scan animation" 
            width={400} 
            height={400} 
            className="rounded-none shadow-none bg-transparent"
          />
        </motion.div>
      </div>

      {/* Styles */}
      <style jsx>{`
        .hover\\:shadow-orange-glow:hover {
          box-shadow: 0 0 10px rgba(255, 165, 0, 0.7), 0 0 20px rgba(255, 165, 0, 0.5);
        }
        .animate-blob {
          animation: blob 8s infinite;
        }
        .animation-delay-2000 {
          animation-delay: 2s;
        }
        .animation-delay-4000 {
          animation-delay: 4s;
        }
        @keyframes blob {
          0%, 100% {
            transform: translate(0px, 0px) scale(1);
          }
          33% {
            transform: translate(30px, -20px) scale(1.1);
          }
          66% {
            transform: translate(-20px, 20px) scale(0.9);
          }
        }
        .perspective-3d {
          perspective: 1000px;
        }
      `}</style>
    </section>
  );
}

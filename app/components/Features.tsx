"use client";
import { motion } from "framer-motion";
import { 
  FaQrcode, FaClipboardList, FaUsersCog, FaStore, 
  FaRobot, FaCommentDots, FaChartLine, FaCloudUploadAlt
} from "react-icons/fa";

const iconColor = "text-orange-500"; // Brand orange

const features = [
  {
    icon: <FaQrcode className={`${iconColor} text-5xl mb-4`} />,
    title: "QR Code Menu Creation",
    short: "Create scannable menus instantly.",
    details: "Generate QR codes for your restaurant’s menu so customers can scan and order directly from their phones."
  },
  {
    icon: <FaClipboardList className={`${iconColor} text-5xl mb-4`} />,
    title: "Ordering Dashboard",
    short: "Manage orders in real-time.",
    details: "Track all incoming orders from a single dashboard with live status updates."
  },
  {
    icon: <FaUsersCog className={`${iconColor} text-5xl mb-4`} />,
    title: "Customer Order Management",
    short: "Keep customers happy.",
    details: "Easily view, modify, and update customer orders for faster service."
  },
  {
    icon: <FaStore className={`${iconColor} text-5xl mb-4`} />,
    title: "Restaurant Branding",
    short: "Match your style.",
    details: "Customize your menu design and colors to fit your restaurant’s brand."
  },
  {
    icon: <FaRobot className={`${iconColor} text-5xl mb-4`} />,
    title: "AI Support",
    short: "Smart recommendations.",
    details: "Get AI-driven menu suggestions, upselling ideas, and automated responses."
  },
  {
    icon: <FaCommentDots className={`${iconColor} text-5xl mb-4`} />,
    title: "Customer Feedback",
    short: "Learn from guests.",
    details: "Collect and analyze customer reviews to improve your service."
  },
  {
    icon: <FaChartLine className={`${iconColor} text-5xl mb-4`} />,
    title: "Analytics & Insights",
    short: "Track performance.",
    details: "View sales trends, popular items, and customer behaviors in real time."
  },
  {
    icon: <FaCloudUploadAlt className={`${iconColor} text-5xl mb-4`} />,
    title: "Easy Updates",
    short: "Edit anytime.",
    details: "Update your menu instantly without printing new copies."
  }
];

export default function Features() {
  return (
    <section className="py-20 bg-white" id="features">
      <div className="max-w-7xl mx-auto px-6 text-center">
        
        {/* Heading */}
        <motion.h2 
          initial={{ opacity: 0, y: -30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-3xl sm:text-4xl font-extrabold mb-6"
        >
          Powering Modern Restaurants With Smart Digital Solutions
        </motion.h2>
        <motion.p 
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          viewport={{ once: true }}
          className="text-gray-600 max-w-2xl mx-auto mb-12"
        >
          From QR menus to AI-powered insights — QuickMenuX gives you every tool to run your restaurant smarter and faster.
        </motion.p>

        {/* Feature Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.4 }}
              viewport={{ once: true }}
              className="relative bg-white border border-gray-200 rounded-xl shadow-md p-6 text-center cursor-pointer overflow-hidden group"
            >
              {/* Icon */}
              <div className="flex justify-center">{feature.icon}</div>
              <h3 className="text-lg font-bold mb-2">{feature.title}</h3>
              <p className="text-gray-600">{feature.short}</p>

             {/* Glass Hover Layer */}
<div className="absolute inset-0 bg-white/20 backdrop-blur-md flex flex-col items-center justify-center p-4 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
  <motion.p 
    initial={{ y: 20, opacity: 0 }}
    whileInView={{ y: 0, opacity: 1 }}
    transition={{ duration: 0.4 }}
    className="text-black text-center font-medium"
  >
    {feature.details}
  </motion.p>
  <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent animate-shimmer"></div>
</div>

            </motion.div>
          ))}
        </div>
      </div>

      {/* Extra Styles */}
      <style jsx>{`
        @keyframes shimmer {
          0% { transform: translateX(-100%); }
          100% { transform: translateX(100%); }
        }
        .animate-shimmer {
          animation: shimmer 2s infinite;
          background-size: 200% 100%;
        }
      `}</style>
    </section>
  );
}

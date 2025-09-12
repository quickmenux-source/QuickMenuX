'use client'
import React, { useEffect, useRef, useState } from "react";
import Chatbot from "./Chatbot"; // import chatbot

const Avatar: React.FC = () => {
  const avatarRef = useRef<HTMLDivElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const [blink, setBlink] = useState(false);
  const [isHovering, setIsHovering] = useState(false);
  const [chatOpen, setChatOpen] = useState(false); // 👈 chatbot toggle

  useEffect(() => {
    const interval = setInterval(() => {
      setBlink(true);
      setTimeout(() => setBlink(false), 150);
    }, Math.random() * 2000 + 3000);
    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (!avatarRef.current || !isHovering) return;

      const { left, top, width, height } = avatarRef.current.getBoundingClientRect();
      const x = (e.clientX - (left + width / 2)) / 50;
      const y = (e.clientY - (top + height / 2)) / 50;
      avatarRef.current.style.transform = `translate(${x}px, ${y}px)`;
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, [isHovering]);

  return (
    <>
      <div
        ref={containerRef}
        className="fixed bottom-6 right-6 w-40 h-40 flex items-center justify-center z-50 cursor-pointer"
        style={{ pointerEvents: "auto" }}
        onMouseEnter={() => setIsHovering(true)}
        onMouseLeave={() => {
          setIsHovering(false);
          if (avatarRef.current) avatarRef.current.style.transform = "translate(0,0)";
        }}
        onClick={() => setChatOpen(!chatOpen)} // 👈 open chatbot
      >
        {/* Rotating text */}
        <svg
          viewBox="0 0 200 200"
          className="absolute w-full h-full"
          style={{
            animation: "spin-slow 10s linear infinite",
          }}
        >
          <defs>
            <path
              id="circlePath"
              d="M 100, 100 m -75, 0 a 75,75 0 1,1 150,0 a 75,75 0 1,1 -150,0"
            />
          </defs>
          <text fill="black" fontSize="14" letterSpacing="3">
            <textPath href="#circlePath" startOffset="0%">
              contact • contact • contact • contact • contact • contact •
            </textPath>
          </text>
        </svg>

        <div
          ref={avatarRef}
          className="relative w-24 h-24 rounded-full overflow-hidden shadow-lg"
          style={{
            backgroundColor: "white",
            borderRadius: "50%",
            pointerEvents: "none",
          }}
        >
          <img
            src={blink ? "/avatar-blink.png" : "/avatar.png"}
            alt="My Avatar"
            className="w-full h-full object-cover"
          />
        </div>
      </div>

      <Chatbot isOpen={chatOpen} onClose={() => setChatOpen(false)} />

      <style jsx>{`
        @keyframes spin-slow {
          from {
            transform: rotate(0deg);
          }
          to {
            transform: rotate(360deg);
          }
        }
      `}</style>
    </>
  );
};

export default Avatar;

"use client";

import Link from "next/link";

export default function LetsCreate() {
  return (
    <section className="bg-black text-white py-20 px-6 md:px-20">
      <div className="max-w-7xl mx-auto">
        {/* Heading */}
        <div className="flex items-center justify-between mb-12">
          <h2 className="heading">
            LET’S INNOVATE <span className="arrow">→</span>
          </h2>
        </div>

        <hr className="border-t border-white mb-10" />

        {/* Content */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 md:gap-20">
          {/* Socials */}
          <div>
            <h3 className="font-semibold mb-4">Socials</h3>
            <ul className="space-y-2">
              <li>
                <Link href="https://instagram.com" target="_blank" className="glow-text interactive-link">
                  Instagram
                </Link>
              </li>
              <li>
                <Link href="https://linkedin.com" target="_blank" className="glow-text interactive-link">
                  LinkedIn
                </Link>
              </li>
              <li>
                <Link href="https://twitter.com" target="_blank" className="glow-text interactive-link">
                  Twitter
                </Link>
              </li>
              <li>
                <Link href="https://facebook.com" target="_blank" className="glow-text interactive-link">
                  Facebook
                </Link>
              </li>
            </ul>
          </div>

          {/* Address */}
          <div>
            <h3 className="font-semibold mb-4 glow-text">Address</h3>
            <p className="glow-text" tabIndex={0} role="text">
              Serving restaurants worldwide,<br />
              proudly remote-first
            </p>
          </div>

          {/* Contact */}
          <div>
            <h3 className="font-semibold mb-4 glow-text">Say Hi!</h3>
            <Link href="mailto:quickmenux@gmail.com" className="underline glow-text interactive-link">
              quickmenux@gmail.com
            </Link>
          </div>
        </div>

        <hr className="border-t border-white mt-10" />

        {/* Footer bottom */}
        <p className="text-sm mt-6 glow-text">
          QuickMenuX © {new Date().getFullYear()}
        </p>
      </div>

      {/* Scoped CSS */}
      <style jsx>{`
        .heading {
          font-size: clamp(2.5rem, 6vw, 5rem);
          font-weight: 300;
          font-style: italic;
          color: transparent;
          -webkit-text-stroke: 1px white;
          display: flex;
          align-items: center;
          gap: 0.5rem;
          cursor: pointer;
          transition: color 0.3s ease, -webkit-text-stroke-color 0.3s ease, text-shadow 0.3s ease;
        }

        .arrow {
          display: inline-block;
          transition: transform 0.3s ease, text-shadow 0.3s ease;
        }

        .heading:hover {
          color: white;
          -webkit-text-stroke: 0;
          text-shadow:
            0 0 8px #a8d0ff,
            0 0 15px #a8d0ff,
            0 0 20px #4e7efc;
        }

        .heading:hover .arrow {
          transform: translateX(8px);
          text-shadow:
            0 0 10px #a8d0ff,
            0 0 20px #4e7efc;
        }

        /* Base glow effect for all glow-text elements */
        .glow-text {
          color: white;
          transition: color 0.3s ease, text-shadow 0.3s ease;
        }

        .glow-text:hover,
        .glow-text:focus {
          color: #a8d0ff;
          text-shadow:
            0 0 8px #a8d0ff,
            0 0 15px #a8d0ff,
            0 0 25px #4e7efc,
            0 0 40px #3a62cc;
          outline: none;
        }

        /* Interactive link styling */
        .interactive-link {
          text-decoration: none;
          cursor: pointer;
        }

        /* Keep underline on email hover/focus */
        .underline:hover,
        .underline:focus {
          text-decoration: underline;
        }
      `}</style>
    </section>
  );
}

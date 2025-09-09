"use client";
import { useEffect, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { FaUtensils } from "react-icons/fa";
import { X, Menu } from "lucide-react";

// Pages expected:
// /features, /learn, /blog, /pricing, /faq, /login, /signup, /contact

type NavItem = { label: string; href: string };

const MAIN_LINKS: NavItem[] = [
  { label: "Features", href: "/features" },
  { label: "Learn", href: "/learn" },
  { label: "Blog", href: "/blog" },
  { label: "Pricing", href: "/pricing" },
  { label: "FAQ", href: "/faq" },
];

const AUTH_LINKS: NavItem[] = [
  { label: "Login", href: "/login" },
  { label: "Signup", href: "/signup" },
];

const MOBILE_LINKS: NavItem[] = [
  ...MAIN_LINKS,
  ...AUTH_LINKS,
  { label: "Contact", href: "/contact" },
];

export default function Navbar() {
  const pathname = usePathname();
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  // Shadow/blur after scroll
  useEffect(() => {
    const onScroll = () => setIsScrolled(window.scrollY > 10);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Lock body scroll when the mobile menu is open
  useEffect(() => {
    if (!mobileOpen) return;
    const { overflow } = document.body.style;
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = overflow;
    };
  }, [mobileOpen]);

  const isActive = (href: string) => {
    if (href === "/") return pathname === "/";
    return pathname === href || pathname.startsWith(href + "/");
  };

  return (
    <>
      {/* Skip link for accessibility */}
      <a
        href="#main"
        className="sr-only focus:not-sr-only focus:fixed focus:top-3 focus:left-3 focus:z-[60] focus:bg-white focus:text-black focus:px-3 focus:py-2 focus:rounded-lg focus:shadow"
      >
        Skip to content
      </a>

      <nav
        role="navigation"
        aria-label="Primary"
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          isScrolled ? "backdrop-blur bg-white/85 shadow-sm" : "bg-white/95"
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="h-16 flex items-center justify-between">
            {/* Logo */}
            <Link
              href="/"
              className="flex items-center gap-2 font-bold text-xl group"
              aria-label="QuickMenuX home"
            >
              <FaUtensils className="text-orange-500" aria-hidden />
              <span className="tracking-tight transition duration-300 group-hover:[text-shadow:0_0_8px_rgba(255,165,0,0.8),0_0_16px_rgba(255,165,0,0.6)]">
                <span className="text-[#006400]">Quick</span>
                <span className="text-[#013220]">Menu</span>
                <span className="text-[#006400]">X</span>
              </span>
            </Link>

            {/* Desktop nav */}
            <div className="hidden md:flex items-center gap-6">
              {MAIN_LINKS.map(({ label, href }) => (
                <Link
                  key={href}
                  href={href}
                  prefetch
                  aria-current={isActive(href) ? "page" : undefined}
                  className={`relative font-medium transition-colors duration-200 hover:text-orange-600 ${
                    isActive(href) ? "text-orange-600" : "text-black"
                  }`}
                >
                  {label}
                  <span
                    className={`absolute left-0 -bottom-1 h-0.5 bg-orange-600 transition-all duration-300 ${
                      isActive(href) ? "w-full" : "w-0 group-hover:w-full"
                    }`}
                  />
                </Link>
              ))}

              {/* Auth + contact */}
              <div className="flex items-center gap-3">
                <Link
                  href="/login"
                  prefetch
                  className={`font-semibold hover:text-orange-600 ${
                    isActive("/login") ? "text-orange-600" : "text-black"
                  }`}
                >
                  Login
                </Link>
                <Link
                  href="/signup"
                  prefetch
                  className="bg-orange-600 hover:bg-orange-500 text-white px-4 py-2 rounded-xl font-semibold shadow transition-shadow hover:shadow-[0_0_16px_rgba(255,165,0,0.5)]"
                >
                  Signup
                </Link>
                <Link
                  href="/contact"
                  prefetch
                  className={`hidden lg:inline-flex border border-orange-600 text-orange-700 hover:bg-orange-50 px-4 py-2 rounded-xl font-semibold ${
                    isActive("/contact") ? "bg-orange-50" : ""
                  }`}
                >
                  Contact Us
                </Link>
              </div>
            </div>

            {/* Mobile hamburger */}
            <button
              type="button"
              className="md:hidden inline-flex items-center justify-center rounded-xl p-2 focus:outline-none focus:ring-2 focus:ring-orange-600"
              aria-expanded={mobileOpen}
              aria-controls="mobile-menu"
              onClick={() => setMobileOpen((v) => !v)}
            >
              <span className="sr-only">Toggle menu</span>
              {mobileOpen ? <X aria-hidden /> : <Menu aria-hidden />}
            </button>
          </div>
        </div>

        {/* Mobile menu overlay */}
        <div
          id="mobile-menu"
          className={`md:hidden fixed inset-0 z-40 transition-opacity ${
            mobileOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
          }`}
          aria-hidden={!mobileOpen}
        >
          <div
            className="absolute inset-0 bg-black/40"
            onClick={() => setMobileOpen(false)}
          />
          <div
            className={`absolute top-0 right-0 h-full w-80 max-w-[85vw] bg-white shadow-xl transition-transform duration-300 ${
              mobileOpen ? "translate-x-0" : "translate-x-full"
            }`}
          >
            <div className="p-4 flex items-center justify-between border-b">
              <Link
                href="/"
                className="flex items-center gap-2 font-bold text-lg"
                onClick={() => setMobileOpen(false)}
              >
                <FaUtensils className="text-orange-500" aria-hidden />
                <span>
                  <span className="text-[#006400]">Quick</span>
                  <span className="text-[#013220]">Menu</span>
                  <span className="text-[#006400]">X</span>
                </span>
              </Link>
              <button
                type="button"
                className="rounded-xl p-2 focus:outline-none focus:ring-2 focus:ring-orange-600"
                onClick={() => setMobileOpen(false)}
              >
                <span className="sr-only">Close menu</span>
                <X aria-hidden />
              </button>
            </div>

            <div className="p-4 flex flex-col gap-1">
              {MOBILE_LINKS.map(({ label, href }) => (
                <Link
                  key={href}
                  href={href}
                  prefetch
                  onClick={() => setMobileOpen(false)}
                  className={`rounded-lg px-3 py-2 font-medium transition-colors ${
                    isActive(href)
                      ? "bg-orange-50 text-orange-700"
                      : "text-gray-800 hover:bg-gray-100"
                  }`}
                >
                  {label}
                </Link>
              ))}
            </div>
          </div>
        </div>
      </nav>

      {/* Page top spacer so content isn't hidden behind the fixed nav */}
      <div aria-hidden className="h-16" />

      <style jsx global>{`
        /* Respect users who prefer less motion */
        @media (prefers-reduced-motion: reduce) {
          html:focus-within {
            scroll-behavior: auto !important;
          }
          *,
          *::before,
          *::after {
            animation-duration: 0.01ms !important;
            animation-iteration-count: 1 !important;
            transition-duration: 0.01ms !important;
          }
        }
      `}</style>
    </>
  );
}

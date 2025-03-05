"use client";

import Link from "next/link";
import { useState, useEffect } from "react";
import { FiX, FiMenu } from "react-icons/fi";
import { usePathname } from "next/navigation";
import { useLockBodyScroll } from "react-use";
import useResponsive from "@/hooks/useResponsive";
import { motion, AnimatePresence } from "framer-motion";

const pathnames = ["about", "contact-us"];

export default function NavBar() {
  const pathname = usePathname();
  const { isLgScreen } = useResponsive();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useLockBodyScroll(isMenuOpen);

  useEffect(() => {
    if (isLgScreen) {
      setIsMenuOpen(false);
    }
  }, [isLgScreen]);

  useEffect(() => {
    if (!isLgScreen) {
      const handleScroll = () => {
        setIsScrolled(window.scrollY > 10);
      };
      window.addEventListener("scroll", handleScroll);
      return () => window.removeEventListener("scroll", handleScroll);
    }
  }, [isLgScreen]);

  return (
    <nav
      aria-label="Main Navigation"
      className={`bg-brand top-0 z-40 flex w-full items-center justify-center transition-all duration-300 ${
        isLgScreen ? "h-24" : isScrolled ? "sticky h-20" : "h-24"
      }`}
    >
      <div className="brand-width flex w-full items-center justify-between font-light tracking-wider text-white capitalize">
        {/* LOGO */}
        <Link
          href="/"
          className="brand-animate text-3xl font-bold tracking-tighter uppercase hover:scale-105"
        >
          AGDF
        </Link>

        {/* DESKTOP MENU */}
        <div className="hidden items-center gap-x-10 lg:flex">
          {pathnames.map((path) => (
            <Link
              key={path}
              href={`/${path}`}
              className={`${
                pathname === `/${path}` ? "bg-black/10" : "hover:bg-black/10"
              } brand-animate rounded px-4 py-2`}
            >
              {path.replace("-", " ")}
            </Link>
          ))}
        </div>

        {/* MOBILE MENU BUTTON */}
        <motion.button
          onClick={() => setIsMenuOpen((prev) => !prev)}
          aria-expanded={isMenuOpen}
          aria-label="Toggle Mobile Menu"
          className="z-50 text-3xl lg:hidden"
          initial={{ opacity: 0, scale: 0.8 }}
          whileHover={{ scale: 1.1 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          whileTap={{ rotate: 360 }}
        >
          {isMenuOpen ? <FiX /> : <FiMenu />}
        </motion.button>

        {/* MOBILE MENU */}
        <AnimatePresence>
          {isMenuOpen && (
            <motion.div
              role="dialog"
              key="mobile-menu"
              aria-modal="true"
              className="fixed inset-0 z-40 flex flex-col items-center justify-center gap-12 bg-black text-2xl font-bold text-white"
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "tween", duration: 0.4 }}
            >
              {pathnames.map((path) => (
                <Link
                  key={path}
                  href={`/${path}`}
                  className={`${
                    pathname === `/${path}`
                      ? "text-brand bg-white/10"
                      : "hover:text-brand hover:bg-white/10"
                  } brand-animate rounded px-6 py-3`}
                >
                  {path.replace("-", " ")}
                </Link>
              ))}
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </nav>
  );
}

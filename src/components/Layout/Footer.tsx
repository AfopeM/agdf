import Link from "next/link";
import Logo from "../Typography/Logo";
import { FaFacebookF, FaInstagram, FaYoutube } from "react-icons/fa";

export default function Footer() {
  const socialStyling =
    "text-white hover:text-black brand-animate hover:scale-110";
  return (
    <footer className="mt-20 w-full bg-[url('/footer.png')] bg-cover bg-center pt-40 pb-12 md:bg-contain lg:mt-0">
      <div className="brand-width flex flex-col items-center justify-center gap-4">
        <div className="text-center text-white/75 lg:max-w-4xl">
          {/* LOGO */}
          <Logo />
          {/* CONTENT */}
          <p className="mt-2 text-sm lg:text-base">
            African Green Growth and Development Forum (AGDF) is dedicated to
            advancing Africa’s transition to a greener economy. Our
            multidisciplinary team collaborates across the public, private, and
            civil society sectors to promote sustainable practices, robust
            governance, and innovative research initiatives.
          </p>
        </div>

        {/* SOCIAL MEDIA LINKS */}
        <nav aria-label="Social Media Links">
          <div className="flex items-center gap-6">
            <Link
              href="https://www.facebook.com"
              target="_blank"
              aria-label="Facebook"
            >
              <FaFacebookF className={socialStyling} size={20} />
            </Link>
            <Link
              href="https://www.instagram.com"
              target="_blank"
              aria-label="Instagram"
            >
              <FaInstagram className={socialStyling} size={24} />
            </Link>
            <Link
              href="https://www.youtube.com"
              target="_blank"
              aria-label="YouTube"
            >
              <FaYoutube className={socialStyling} size={22} />
            </Link>
          </div>
        </nav>

        {/* COPYRIGHT NOTICE */}
        <p className="brand-animate text-center text-xs font-light text-white/50 capitalize">
          Copyright © {new Date().getFullYear()} African Green Growth and
          Development Forum (AGDF). <br className="hidden md:block" />
          All rights reserved. Site design by
          <Link href="/" className="brand-animate hover:text-black">
            {" "}
            Afope Matilukuro
          </Link>
        </p>
      </div>
    </footer>
  );
}

import Link from "next/link";
import { FaFacebookF, FaInstagram, FaYoutube } from "react-icons/fa";

export default function Footer() {
  const socialStyling =
    "text-white hover:text-brand brand-animate hover:scale-110";
  return (
    <footer className="w-full bg-black py-12">
      <div className="brand-width flex flex-col items-center justify-center gap-4">
        <div className="text-center text-white/75 lg:max-w-4xl">
          {/* LOGO */}
          <Link
            href="/"
            className="brand-animate text-4xl font-bold tracking-tighter text-white uppercase hover:scale-105"
          >
            AGDF
          </Link>
          <p className="mt-2">
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
          Development Forum (AGDF). <br />
          All rights reserved. Site design by
          <Link href="/" className="hover:text-brand brand-animate">
            {" "}
            Afope Matilukuro
          </Link>
        </p>
      </div>
    </footer>
  );
}

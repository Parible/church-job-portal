import React from "react";
import Logo from "@/assets/images/my-avatar.jpg";
import Image from "next/image";

function Footer() {
  return (
    <footer className="bg-[#01102d] dark:bg-black text-gray-400 py-10 px-2 md:px-24 lg:px-24">
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-3 gap-8 text-center md:text-left">
        {/* Logo */}
        <div className="flex flex-col items-center md:items-start">
          <h3 className="text-xl font-bold">The Vine Network</h3>
          <Image
            src={Logo}
            alt="JobSewa Logo"
            width={120}
            height={60}
            className="my-2"
          />
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="text-xl font-bold">Quick Links</h3>
          <ul className="mt-4 space-y-2 text-sm">
            {["About Us", "Services", "Contact", "FAQ"].map((link, idx) => (
              <li key={idx}>
                <a
                  href={`#${link.toLowerCase().replace(" ", "")}`}
                  className="hover:text-white transition"
                >
                  {link}
                </a>
              </li>
            ))}
          </ul>
        </div>

        {/* Social */}
        <div>
          <h3 className="text-xl font-bold">Connect with Us</h3>
          <div className="flex justify-center md:justify-start gap-4 mt-4">
            <a
              href="https://x.com/devmangrani"
              target="_blank"
              aria-label="Twitter"
              className="hover:-translate-y-1 transition-transform"
            >
              X
            </a>
            <a
              href="https://www.linkedin.com/in/dev-mangrani/"
              target="_blank"
              aria-label="LinkedIn"
              className="hover:-translate-y-1 transition-transform"
            >
              LinkedIn
            </a>
            <a
              href="https://facebook.com"
              target="_blank"
              aria-label="Facebook"
              className="hover:-translate-y-1 transition-transform"
            >
              Facebook
            </a>
          </div>
        </div>
      </div>

      <div className="border-t border-gray-600 mt-8 pt-4 text-center text-sm">
        &copy; {new Date().getFullYear()} The Vine Network. All rights reserved.
      </div>
    </footer>
  );
}

export default Footer;

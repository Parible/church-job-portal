// import React from "react";
// import Logo from "@/assets/images/piwc-logo.png";
// import Image from "next/image";
// import { FaFacebook, FaInstagram } from "react-icons/fa";

// function Footer() {
//   return (
//     <footer className="bg-[#01102d] dark:bg-black text-gray-400 py-10 px-2 md:px-24 lg:px-24">
//       <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-3 gap-8 text-center md:text-left">
//         {/* Logo */}
//         <div className="flex flex-col items-center md:items-start">
//           {/* <h3 className="text-xl font-bold text-white">Job Portal</h3> */}
//           <Image
//             src={Logo}
//             alt="JobSewa Logo"
//             width={120}
//             height={60}
//             className="my-2"
//           />
//         </div>

//         {/* Quick Links */}
//         <div>
//           <h3 className="text-xl font-bold text-white">Quick Links</h3>
//           <ul className="mt-4 space-y-2 text-sm">
//             {["About Us", "Services", "Contact", "FAQ"].map((link, idx) => (
//               <li key={idx}>
//                 <a
//                   href={`#${link.toLowerCase().replace(" ", "")}`}
//                   className="hover:text-white transition"
//                 >
//                   {link}
//                 </a>
//               </li>
//             ))}
//           </ul>
//         </div>

//         {/* Social Links */}
//         <div>
//           <h3 className="text-xl font-bold text-white">Connect with Us</h3>
//           <div className="mt-4 flex flex-col md:flex-row items-center md:items-start gap-3 md:gap-5">
//             <a
//               href="https://www.instagram.com/piwcodorkor/?hl=en"
//               target="_blank"
//               rel="noopener noreferrer"
//               aria-label="Visit our Instagram"
//               className="flex items-center gap-2 hover:text-pink-500 hover:-translate-y-1 transition-transform"
//             >
//               <FaInstagram className="w-6 h-6" />
//               <span className="text-base font-medium">Instagram</span>
//             </a>

//             <a
//               href="https://www.facebook.com/piwcodk/"
//               target="_blank"
//               rel="noopener noreferrer"
//               aria-label="Visit our Facebook"
//               className="flex items-center gap-2 hover:text-blue-500 hover:-translate-y-1 transition-transform"
//             >
//               <FaFacebook className="w-6 h-6" />
//               <span className="text-base font-medium">Facebook</span>
//             </a>
//           </div>
//         </div>
//       </div>

//       <div className="border-t border-gray-600 mt-8 pt-4 text-center text-sm">
//         &copy; {new Date().getFullYear()} The PIWC Network. All rights reserved.
//       </div>
//     </footer>
//   );
// }

// export default Footer;
"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import Logo from "@/assets/images/piwc-logo.png";
import { FaFacebook, FaInstagram } from "react-icons/fa";

function Footer() {
  return (
    <footer className="bg-[#01102d] dark:bg-black text-gray-400 py-10 px-4 md:px-24">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-10 text-center md:text-left">
        {/* Logo */}
        <div className="flex flex-col items-center md:items-start">
          <div className="relative w-[120px] h-[60px]">
            <Image
              src={Logo}
              alt="PIWC Logo"
              fill
              className="object-contain"
              priority
            />
          </div>
        </div>

        {/* Quick Links */}
        {/* <div>
          <h3 className="text-xl font-bold text-white">Quick Links</h3>
          <ul className="mt-4 space-y-2 text-sm">
            {[
              { label: "About Us", href: "/about" },
              { label: "Services", href: "/services" },
              { label: "Contact", href: "/contact" },
              { label: "FAQ", href: "/faq" },
            ].map(({ label, href }) => (
              <li key={label}>
                <Link href={href} className="hover:text-white transition">
                  {label}
                </Link>
              </li>
            ))}
          </ul>
        </div> */}

        {/* Social Links */}
        <div>
          <h3 className="text-xl font-bold text-white">Connect with Us</h3>
          <div className="mt-4 flex flex-col md:flex-row items-center md:items-start gap-3 md:gap-5">
            <a
              href="https://www.instagram.com/piwcodorkor/?hl=en"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Instagram"
              className="flex items-center gap-2 hover:text-pink-500 transition-transform transform hover:-translate-y-1"
            >
              <FaInstagram className="w-6 h-6" />
              <span className="text-base font-medium">Instagram</span>
            </a>
            <a
              href="https://www.facebook.com/piwcodk/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Facebook"
              className="flex items-center gap-2 hover:text-blue-500 transition-transform transform hover:-translate-y-1"
            >
              <FaFacebook className="w-6 h-6" />
              <span className="text-base font-medium">Facebook</span>
            </a>
          </div>
        </div>
      </div>

      <div className="border-t border-gray-600 mt-10 pt-4 text-center text-sm text-gray-500">
        &copy; {new Date().getFullYear()} The PIWC Network. All rights reserved.
      </div>
    </footer>
  );
}

export default Footer;

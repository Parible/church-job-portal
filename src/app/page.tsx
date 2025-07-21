// import Image from "next/image";
// import ImageHero from "@/assets/images/hero-image-2.png";

// export default function Home() {
//   return (
//     <div className="w-full min-h-screen flex flex-col justify-between bg-[linear-gradient(89.9deg,_#d0f6ff_0.1%,_#ffeded_47.9%,_#ffffe7_100.2%)] bg-center bg-fixed">
//       <div className="flex min-h-screen flex-row items-center justify-between w-full px-8 py-6 gap-8 max-md:flex-col max-md:p-2">
//         <div className="pt-20 flex w-[60%] max-md:w-full flex-col items-center justify-center text-center">
//           <div className="w-full max-w-[1200px] p-4 flex flex-col items-center">
//             <h1 className="text-5xl font-bold text-black text-center mb-8 max-md:text-3xl">
//               Find Your Perfect Job with{" "}
//               <span className="text-transparent bg-gradient-to-r from-blue-500 via-indigo-500 to-indigo-700 bg-clip-text">
//                 The Vine Network
//               </span>
//             </h1>
//             <p className="text-xl text-gray-600 text-center mb-16 max-md:text-lg">
//               Connected to purpose. Rooted in Christ.
//             </p>

//             <div className="bg-white rounded-full shadow-md px-4 py-2 flex items-center justify-between flex-row gap-2 mb-8 w-full max-w-md max-md:flex-col">
//               <div className="flex items-center relative w-full">
//                 <span className="absolute left-2 text-blue-500 text-lg">
//                   {/* <BiSearchAlt /> */}
//                 </span>
//                 <input
//                   type="text"
//                   placeholder="Search job categories (e.g., electrician)"
//                   className="w-full px-8 py-2 rounded-full bg-gray-100 border-none outline-none"
//                 />
//                 <span className="absolute right-2 text-blue-900 text-lg cursor-pointer">
//                   {/* <RxCross2 /> */}
//                 </span>
//               </div>
//               <button className="px-6 py-2 bg-blue-900 text-white rounded-full font-medium text-sm hover:bg-black hover:text-white transition-colors duration-300">
//                 Search
//               </button>
//             </div>

//             <div className="flex items-center flex-wrap justify-center mb-8">
//               <span className="font-semibold text-lg text-gray-600 mr-2">
//                 Popular Tags:
//               </span>
//               {["Electrician", "Labourer", "Driver", "Plumber"].map((tag) => (
//                 <span
//                   key={tag}
//                   className="bg-blue-100 text-blue-900 px-4 py-2 rounded-full cursor-pointer hover:bg-blue-200 transition-colors duration-300 m-1"
//                 >
//                   {tag}
//                 </span>
//               ))}
//             </div>
//           </div>
//         </div>

//         <div className="pt-20 flex-1 flex justify-center items-center max-md:pt-0">
//           <Image
//             src={ImageHero}
//             alt="Hero Image"
//             className="max-w-[90%] h-auto animate-[moveUpDown_3s_ease-in-out_infinite]"
//           />
//         </div>
//       </div>

//       <div className="w-full py-8 mt-8 scroll-mt-8">
//         <div className="max-w-[1200px] mx-auto px-4">
//           <h2 className="text-3xl text-blue-900 mb-6 text-center font-semibold shadow-sm">
//             Search Results
//           </h2>
//           <div className="grid grid-cols-[repeat(auto-fill,minmax(300px,1fr))] gap-8 p-8 max-w-[1400px] mx-auto relative max-md:grid-cols-[repeat(auto-fill,minmax(250px,1fr))] max-md:p-4 max-md:gap-4">
//             {/* Example static job card wrapper */}
//             <div className="w-full h-full min-h-[200px] backdrop-blur-lg rounded-[12px] relative overflow-hidden shadow-md hover:shadow-2xl transform hover:-translate-y-1 hover:scale-[1.02] transition-all duration-300 before:absolute before:inset-0 before:bg-[linear-gradient(135deg,_rgba(255,255,255,0.1),_rgba(255,255,255,0.05))] before:rounded-[12px] before:opacity-0 hover:before:opacity-100">
//               {/* <JobsCard job={job} /> */}
//             </div>

//             {/* No jobs message example */}
//             <p className="w-full text-center text-gray-700 text-lg px-8 py-8 font-medium shadow-sm col-span-full">
//               Sorry, no jobs found in this category at the moment.
//             </p>
//           </div>
//         </div>
//       </div>

//       <footer className="w-full bg-[#01102d] text-[#d3d3d3] pt-5">
//         <div className="flex w-full justify-between gap-8 text-center max-md:flex-col max-md:gap-6">
//           <div className="flex-1 flex flex-col items-center">
//             <h3 className="text-xl font-bold text-gray-400 font-poppins">
//               JobSewa
//             </h3>
//             <img
//               src="/Jobsewa_logo.png"
//               alt="JobSewa Logo"
//               className="w-[120px] my-2"
//             />
//           </div>

//           <div className="flex-1 flex flex-col items-center">
//             <h3 className="text-xl font-bold text-gray-400 font-poppins">
//               Quick Links
//             </h3>
//             <ul className="list-none mt-4">
//               <li className="mb-2">
//                 <a
//                   href="#about"
//                   className="text-sm text-gray-300 hover:text-white transition"
//                 >
//                   About Us
//                 </a>
//               </li>
//               <li className="mb-2">
//                 <a
//                   href="#services"
//                   className="text-sm text-gray-300 hover:text-white transition"
//                 >
//                   Services
//                 </a>
//               </li>
//               <li className="mb-2">
//                 <a
//                   href="#contact"
//                   className="text-sm text-gray-300 hover:text-white transition"
//                 >
//                   Contact
//                 </a>
//               </li>
//               <li className="mb-2">
//                 <a
//                   href="#faq"
//                   className="text-sm text-gray-300 hover:text-white transition"
//                 >
//                   FAQ
//                 </a>
//               </li>
//             </ul>
//           </div>

//           <div className="flex-1 flex flex-col items-center">
//             <h3 className="text-xl font-bold text-gray-400 font-poppins">
//               Connect with Us
//             </h3>
//             <div className="mt-2 flex gap-4">
//               <a
//                 href="https://x.com/devmangrani"
//                 target="_blank"
//                 className="transition-transform hover:-translate-y-1"
//               >
//                 {/* <FiTwitter size={22} /> */}
//               </a>
//               <a
//                 href="https://www.linkedin.com/in/dev-mangrani/"
//                 target="_blank"
//                 className="transition-transform hover:-translate-y-1"
//               >
//                 {/* <GrLinkedin size={22} /> */}
//               </a>
//               <a
//                 href="https://facebook.com"
//                 target="_blank"
//                 className="transition-transform hover:-translate-y-1"
//               >
//                 {/* <BsFacebook size={22} /> */}
//               </a>
//             </div>
//           </div>
//         </div>

//         <div className="border-t border-gray-600 py-2 mt-4 text-center text-sm text-gray-400 font-poppins max-md:text-xs">
//           &copy; {new Date().getFullYear()} JobSewa. All rights reserved.
//         </div>
//       </footer>
//     </div>
//   );
// }

// "use client";

// import Image from "next/image";
// import { motion } from "framer-motion";
// import HeroImage from "@/assets/images/hero-image-2.png";

// const tags = ["Graduate trainee", "Labourer", "Driver", "internship"];

// export default function HomePage() {
//   return (
//     // <main className="w-full min-h-screen bg-gradient-to-r from-cyan-100 via-rose-100 to-yellow-100 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900 text-gray-800 dark:text-gray-100 transition-colors duration-500">
//     <main className="w-full min-h-screen  text-gray-800 dark:text-gray-100 transition-colors duration-500">
//       {/* HERO */}
//       <section className="flex flex-col md:flex-row items-center justify-between w-full px-6 py-12 gap-8 max-w-7xl mx-auto">
//         {/* TEXT CONTENT */}
//         <motion.div
//           initial={{ opacity: 0, x: -50 }}
//           animate={{ opacity: 1, x: 0 }}
//           transition={{ duration: 0.6 }}
//           className="w-full md:w-1/2 text-center md:text-left"
//         >
//           <h1 className="text-4xl md:text-5xl font-bold leading-tight mb-6">
//             Find Your Perfect Job
//           </h1>
//           <p className="text-lg md:text-xl text-gray-600 dark:text-gray-300 mb-8">
//             Connected to purpose. Rooted in Christ.
//           </p>

//           {/* SEARCH BAR */}
//           <div className="bg-white dark:bg-gray-800 shadow-lg rounded-full p-2 flex items-center w-full max-w-md mx-auto md:mx-0 mb-6">
//             <input
//               type="text"
//               aria-label="Search job categories"
//               placeholder="Search job categories (e.g., electrician)"
//               className="flex-1 px-4 py-2 bg-transparent focus:outline-none rounded-full text-sm placeholder:text-gray-400 dark:placeholder:text-gray-500"
//             />
//             <button
//               className="px-5 py-2 bg-blue-900 text-white rounded-full text-sm hover:bg-blue-700 transition"
//               aria-label="Search jobs"
//             >
//               Search
//             </button>
//           </div>

//           {/* TAGS */}
//           <div className="flex flex-wrap justify-center md:justify-start gap-2 mt-4">
//             <span className="font-semibold">Popular Tags:</span>
//             {tags.map((tag) => (
//               <button
//                 key={tag}
//                 className="px-4 py-1.5 rounded-full bg-blue-100 text-blue-800 dark:bg-blue-800 dark:text-white hover:bg-blue-200 dark:hover:bg-blue-700 transition text-sm"
//               >
//                 {tag}
//               </button>
//             ))}
//           </div>
//         </motion.div>

//         {/* IMAGE */}
//         <motion.div
//           initial={{ opacity: 0, y: 40 }}
//           animate={{ opacity: 1, y: 0 }}
//           transition={{ duration: 0.6, delay: 0.2 }}
//           className="w-full md:w-1/2 flex justify-center items-center"
//         >
//           <Image
//             src={HeroImage}
//             alt="Hero Image"
//             className="w-full max-w-[500px] h-auto"
//             priority
//             sizes="(max-width: 768px) 100vw, 50vw"
//           />
//         </motion.div>
//       </section>
//     </main>
//   );
// }
"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import Link from "next/link";
import HeroImage from "@/assets/images/hero-image-2.png";

const tags = ["Graduate trainee", "Labourer", "Driver", "Internship"];

export default function HomePage() {
  return (
    <main className="w-full min-h-screen text-gray-800 dark:text-gray-100 transition-colors duration-500">
      {/* Hero Section */}
      <section className="flex flex-col md:flex-row items-center justify-between w-full px-6 py-16 gap-10 max-w-7xl mx-auto">
        {/* Hero Text */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          className="w-full md:w-1/2 text-center md:text-left space-y-6"
        >
          <h1 className="text-4xl md:text-5xl font-bold leading-tight">
            Find Your Perfect Job
          </h1>
          <p className="text-lg md:text-xl text-gray-600 dark:text-gray-300">
            Connected to purpose. Rooted in Christ.
          </p>

          {/* Search */}
          <div className="bg-white dark:bg-gray-800 shadow-lg rounded-full px-4 py-2 flex items-center w-full max-w-md mx-auto md:mx-0">
            <input
              type="text"
              aria-label="Search job categories"
              placeholder="Search job categories (e.g., electrician)"
              className="flex-1 px-3 py-2 bg-transparent focus:outline-none rounded-full text-sm placeholder:text-gray-400 dark:placeholder:text-gray-500"
            />
            <button
              className="ml-2 px-5 py-2 bg-blue-900 text-white rounded-full text-sm hover:bg-blue-700 transition"
              aria-label="Search jobs"
            >
              Search
            </button>
          </div>

          {/* Tags */}
          <div className="flex flex-wrap justify-center md:justify-start gap-2 pt-2">
            <span className="text-sm font-semibold text-gray-600 dark:text-gray-400">
              Popular Tags:
            </span>
            {tags.map((tag) => (
              <button
                key={tag}
                className="px-4 py-1.5 rounded-full bg-blue-100 text-blue-800 dark:bg-blue-800 dark:text-white hover:bg-blue-200 dark:hover:bg-blue-700 transition text-sm"
              >
                {tag}
              </button>
            ))}
          </div>

          {/* CTA Buttons */}
          <div className="pt-6 flex flex-col sm:flex-row items-center justify-center md:justify-start gap-4">
            <Link href="/jobs">
              <button className="px-6 py-2 rounded-full text-white bg-blue-900 hover:bg-blue-800 text-sm font-semibold transition">
                View Jobs
              </button>
            </Link>
            <Link href="/post">
              <button className="px-6 py-2 rounded-full border border-blue-900 text-blue-900 hover:bg-blue-900 hover:text-white text-sm font-semibold transition">
                Post a Job
              </button>
            </Link>
          </div>
        </motion.div>

        {/* Hero Image */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="w-full md:w-1/2 flex justify-center"
        >
          <Image
            src={HeroImage}
            alt="Hero Image"
            className="w-full max-w-[500px] h-auto"
            priority
            sizes="(max-width: 768px) 100vw, 50vw"
          />
        </motion.div>
      </section>
    </main>
  );
}

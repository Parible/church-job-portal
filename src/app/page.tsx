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
//               <span className="text-transparent bg-gradient-to-r from-zinc-500 via-indigo-500 to-indigo-700 bg-clip-text">
//                 The Vine Network
//               </span>
//             </h1>
//             <p className="text-xl text-gray-600 text-center mb-16 max-md:text-lg">
//               Connected to purpose. Rooted in Christ.
//             </p>

//             <div className="bg-white rounded-full shadow-md px-4 py-2 flex items-center justify-between flex-row gap-2 mb-8 w-full max-w-md max-md:flex-col">
//               <div className="flex items-center relative w-full">
//                 <span className="absolute left-2 text-zinc-500 text-lg">
//                   {/* <BiSearchAlt /> */}
//                 </span>
//                 <input
//                   type="text"
//                   placeholder="Search job categories (e.g., electrician)"
//                   className="w-full px-8 py-2 rounded-full bg-gray-100 border-none outline-none"
//                 />
//                 <span className="absolute right-2 text-zinc-900 text-lg cursor-pointer">
//                   {/* <RxCross2 /> */}
//                 </span>
//               </div>
//               <button className="px-6 py-2 bg-zinc-900 text-white rounded-full font-medium text-sm hover:bg-black hover:text-white transition-colors duration-300">
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
//                   className="bg-zinc-100 text-zinc-900 px-4 py-2 rounded-full cursor-pointer hover:bg-zinc-200 transition-colors duration-300 m-1"
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
//           <h2 className="text-3xl text-zinc-900 mb-6 text-center font-semibold shadow-sm">
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

// // // // "use client";

// // // // import Image from "next/image";
// // // // import { motion } from "framer-motion";
// // // // import HeroImage from "@/assets/images/hero-image-2.png";

// // // // const tags = ["Graduate trainee", "Labourer", "Driver", "internship"];

// // // // export default function HomePage() {
// // // //   return (
// // // //     // <main className="w-full min-h-screen bg-gradient-to-r from-cyan-100 via-rose-100 to-yellow-100 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900 text-gray-800 dark:text-gray-100 transition-colors duration-500">
// // // //     <main className="w-full min-h-screen  text-gray-800 dark:text-gray-100 transition-colors duration-500">
// // // //       {/* HERO */}
// // // //       <section className="flex flex-col md:flex-row items-center justify-between w-full px-6 py-12 gap-8 max-w-7xl mx-auto">
// // // //         {/* TEXT CONTENT */}
// // // //         <motion.div
// // // //           initial={{ opacity: 0, x: -50 }}
// // // //           animate={{ opacity: 1, x: 0 }}
// // // //           transition={{ duration: 0.6 }}
// // // //           className="w-full md:w-1/2 text-center md:text-left"
// // // //         >
// // // //           <h1 className="text-4xl md:text-5xl font-bold leading-tight mb-6">
// // // //             Find Your Perfect Job
// // // //           </h1>
// // // //           <p className="text-lg md:text-xl text-gray-600 dark:text-gray-300 mb-8">
// // // //             Connected to purpose. Rooted in Christ.
// // // //           </p>

// // // //           {/* SEARCH BAR */}
// // // //           <div className="bg-white dark:bg-gray-800 shadow-lg rounded-full p-2 flex items-center w-full max-w-md mx-auto md:mx-0 mb-6">
// // // //             <input
// // // //               type="text"
// // // //               aria-label="Search job categories"
// // // //               placeholder="Search job categories (e.g., electrician)"
// // // //               className="flex-1 px-4 py-2 bg-transparent focus:outline-none rounded-full text-sm placeholder:text-gray-400 dark:placeholder:text-gray-500"
// // // //             />
// // // //             <button
// // // //               className="px-5 py-2 bg-zinc-900 text-white rounded-full text-sm hover:bg-zinc-700 transition"
// // // //               aria-label="Search jobs"
// // // //             >
// // // //               Search
// // // //             </button>
// // // //           </div>

// // // //           {/* TAGS */}
// // // //           <div className="flex flex-wrap justify-center md:justify-start gap-2 mt-4">
// // // //             <span className="font-semibold">Popular Tags:</span>
// // // //             {tags.map((tag) => (
// // // //               <button
// // // //                 key={tag}
// // // //                 className="px-4 py-1.5 rounded-full bg-zinc-100 text-zinc-800 dark:bg-zinc-800 dark:text-white hover:bg-zinc-200 dark:hover:bg-zinc-700 transition text-sm"
// // // //               >
// // // //                 {tag}
// // // //               </button>
// // // //             ))}
// // // //           </div>
// // // //         </motion.div>

// // // //         {/* IMAGE */}
// // // //         <motion.div
// // // //           initial={{ opacity: 0, y: 40 }}
// // // //           animate={{ opacity: 1, y: 0 }}
// // // //           transition={{ duration: 0.6, delay: 0.2 }}
// // // //           className="w-full md:w-1/2 flex justify-center items-center"
// // // //         >
// // // //           <Image
// // // //             src={HeroImage}
// // // //             alt="Hero Image"
// // // //             className="w-full max-w-[500px] h-auto"
// // // //             priority
// // // //             sizes="(max-width: 768px) 100vw, 50vw"
// // // //           />
// // // //         </motion.div>
// // // //       </section>
// // // //     </main>
// // // //   );
// // // // }

// // // // "use client";

// // // // import Image from "next/image";
// // // // import { motion } from "framer-motion";
// // // // import Link from "next/link";
// // // // import HeroImage from "@/assets/images/hero-image.jpg";

// // // // const tags = ["Graduate trainee", "Labourer", "Driver", "Internship"];

// // // // export default function HomePage() {
// // // //   return (
// // // //     <main className="w-full min-h-screen  text-gray-800 dark:text-gray-100 transition-colors duration-500  px-2 md:px-24 lg:px-24 py-24 md:py-5">
// // // //       {/* Hero Section */}
// // // //       <section className="flex flex-col md:flex-row items-center justify-between w-full px-6 py-16 gap-10 max-w-7xl mx-auto">
// // // //         {/* Hero Text */}
// // // //         <motion.div
// // // //           initial={{ opacity: 0, y: 0 }}
// // // //           animate={{ opacity: 1, y: -50 }}
// // // //           transition={{ duration: 0.6 }}
// // // //           className="w-full md:w-1/2 text-center md:text-left space-y-6"
// // // //         >
// // // //           <h1 className="text-4xl md:text-5xl font-bold leading-tight">
// // // //             Connecting Members
// // // //           </h1>
// // // //           <p className="text-lg md:text-xl text-gray-600 dark:text-gray-300">
// // // //             Connected to purpose. Rooted in Christ.
// // // //           </p>

// // // //           {/* Search */}
// // // //           <div className="bg-white dark:bg-gray-800 shadow-md border border-gray-200 rounded-full px-4 py-2 flex items-center w-full max-w-md mx-auto md:mx-0">
// // // //             <input
// // // //               type="text"
// // // //               aria-label="Search job categories"
// // // //               placeholder="Search job categories (e.g., electrician)"
// // // //               className="flex-1 px-3 py-2 bg-transparent focus:outline-none rounded-full text-sm placeholder:text-gray-400 dark:placeholder:text-gray-500"
// // // //             />
// // // //             <button
// // // //               className="ml-2 px-5 py-2 bg-zinc-700 text-white rounded-full text-sm hover:bg-zinc-800 transition"
// // // //               aria-label="Search jobs"
// // // //             >
// // // //               Search
// // // //             </button>
// // // //           </div>

// // // //           {/* Tags */}
// // // //           <div className="flex flex-wrap justify-center md:justify-start gap-2 pt-2">
// // // //             <span className="text-sm font-semibold text-gray-600 dark:text-gray-400">
// // // //               Popular Tags:
// // // //             </span>
// // // //             {tags.map((tag) => (
// // // //               <button
// // // //                 key={tag}
// // // //                 className="px-4 py-1.5 rounded-full bg-zinc-100 text-zinc-800 dark:bg-zinc-800 dark:text-white hover:bg-zinc-200 dark:hover:bg-zinc-700 transition text-sm"
// // // //               >
// // // //                 {tag}
// // // //               </button>
// // // //             ))}
// // // //           </div>

// // // //           {/* CTA Buttons */}
// // // //           <div className="pt-6 flex flex-col sm:flex-row items-center justify-center md:justify-start gap-4">
// // // //             <Link href="/jobs">
// // // //               <button className="px-6 py-2 rounded-full text-white bg-zinc-700 hover:bg-zinc-800 text-sm font-semibold transition">
// // // //                 View Jobs
// // // //               </button>
// // // //             </Link>
// // // //             <Link href="/post-job">
// // // //               <button className="px-6 py-2 rounded-full border border-zinc-900 text-zinc-900 hover:bg-zinc-700 hover:text-white text-sm font-semibold transition">
// // // //                 Post a Job
// // // //               </button>
// // // //             </Link>
// // // //           </div>
// // // //         </motion.div>

// // // //         {/* Hero Image */}
// // // //         <motion.div
// // // //           initial={{ opacity: 0, y: 40 }}
// // // //           animate={{ opacity: 1, y: 0 }}
// // // //           transition={{ duration: 0.6, delay: 0.2 }}
// // // //           className="w-full md:w-1/2 flex justify-center"
// // // //         >
// // // //           <Image
// // // //             src={HeroImage}
// // // //             alt="Hero Image"
// // // //             className="w-full max-w-[500px] h-auto"
// // // //             priority
// // // //             sizes="(max-width: 768px) 100vw, 50vw"
// // // //           />
// // // //         </motion.div>
// // // //       </section>
// // // //     </main>
// // // //   );
// // // // }
// // // "use client";

// import Image from "next/image";
// import { motion } from "framer-motion";
// import Link from "next/link";
// import HeroImage from "@/assets/images/hero-image.jpg";

// const tags = ["Graduate trainee", "Labourer", "Driver", "Internship"];

// export default function HomePage() {
//   return (
//     <main className="w-full min-h-screen bg-white dark:bg-black text-gray-800 dark:text-gray-100 transition-colors duration-500 px-4 md:px-24 py-24 md:py-8">
//       {/* Hero Section */}
//       <section className="flex flex-col md:flex-row items-center justify-between w-full gap-12 max-w-7xl mx-auto">
//         {/* Hero Content */}
//         <motion.div
//           initial={{ opacity: 0, y: 30 }}
//           animate={{ opacity: 1, y: 0 }}
//           transition={{ duration: 0.6 }}
//           className="w-full md:w-1/2 text-center md:text-left space-y-6"
//         >
//           <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight leading-snug">
//             Your Purpose. <br className="hidden md:block" /> Your Calling.
//           </h1>
//           <p className="text-lg md:text-xl text-gray-600 dark:text-gray-300">
//             Grounded in Christ and connected to purpose.
//           </p>

//           {/* Search Bar */}
//           <div className="bg-white dark:bg-gray-800 shadow-md border border-gray-200 dark:border-gray-700 rounded-full px-4 py-2 flex items-center w-full max-w-md mx-auto md:mx-0">
//             <input
//               type="text"
//               aria-label="Search job categories"
//               placeholder="Search roles like electrician, driver, etc."
//               className="flex-1 px-3 py-2 bg-transparent focus:outline-none text-sm placeholder:text-gray-400 dark:placeholder:text-gray-500"
//             />
//             <button
//               className="ml-2 px-5 py-2 bg-zinc-800 text-white rounded-full text-sm hover:bg-zinc-900 transition"
//               aria-label="Search jobs"
//             >
//               Search
//             </button>
//           </div>

//           {/* Popular Tags */}
//           <div className="flex flex-wrap justify-center md:justify-start items-center gap-2 pt-4">
//             <span className="text-sm font-semibold text-gray-600 dark:text-gray-400">
//               Trending:
//             </span>
//             {tags.map((tag) => (
//               <Link key={tag} href={`/jobs?tag=${encodeURIComponent(tag)}`}>
//                 <button className="px-4 py-1.5 rounded-full bg-zinc-100 text-zinc-800 dark:bg-zinc-800 dark:text-white hover:bg-zinc-200 dark:hover:bg-zinc-700 transition text-sm capitalize">
//                   {tag}
//                 </button>
//               </Link>
//             ))}
//           </div>

//           {/* Call To Actions */}
//           <div className="pt-6 flex flex-col sm:flex-row items-center justify-center md:justify-start gap-4">
//             <Link href="/jobs">
//               <button className="px-6 py-2 rounded-full text-white bg-zinc-800 hover:bg-zinc-900 text-sm font-semibold transition">
//                 Browse Jobs
//               </button>
//             </Link>
//             <Link href="/post-job">
//               <button className="px-6 py-2 rounded-full border border-zinc-900 dark:border-zinc-100 text-zinc-900 dark:text-white hover:bg-zinc-800 hover:text-white text-sm font-semibold transition">
//                 Post a Job
//               </button>
//             </Link>
//           </div>
//         </motion.div>

//         {/* Hero Image */}
//         <motion.div
//           initial={{ opacity: 0, y: 40 }}
//           animate={{ opacity: 1, y: 0 }}
//           transition={{ duration: 0.6, delay: 0.2 }}
//           className="w-full md:w-1/2 flex justify-center"
//         >
//           <Image
//             src={HeroImage}
//             alt="Community-focused job search"
//             className="w-full max-w-[500px] h-auto rounded-xl "
//             priority
//             sizes="(max-width: 768px) 100vw, 50vw"
//           />
//         </motion.div>
//       </section>
//     </main>
//   );
// }
// // "use client";

// import Link from "next/link";
// import { motion } from "framer-motion";
// import AbstractGraphic from "@/components/ui/AbstractGraphic";

// const tags = ["Graduate trainee", "Labourer", "Driver", "Internship"];

// export default function HomePage() {
//   return (
//     <main className="w-full min-h-screen bg-white dark:bg-neutral-950 text-neutral-900 dark:text-white transition-colors px-4 md:px-8 py-24">
//       <div className="max-w-6xl mx-auto flex flex-col-reverse md:flex-row items-center justify-between gap-16 md:gap-24">
//         {/* Text Block */}
//         <motion.div
//           initial={{ opacity: 0, y: 20 }}
//           animate={{ opacity: 1, y: 0 }}
//           transition={{ duration: 0.6 }}
//           className="w-full md:w-1/2 space-y-6 text-center md:text-left"
//         >
//           <h1 className="text-4xl md:text-5xl font-semibold tracking-tight leading-tight">
//             Purpose-Driven Work,
//             <br />
//             Rooted in Faith.
//           </h1>

//           <p className="text-lg text-neutral-600 dark:text-neutral-400 max-w-md md:max-w-none mx-auto md:mx-0">
//             Discover job opportunities tailored for a mission-driven community.
//             Focused, faithful, and future-forward.
//           </p>

//           {/* Search Input */}
//           <div className="bg-neutral-100 dark:bg-neutral-900 border border-neutral-300 dark:border-neutral-700 rounded-xl flex items-center px-4 py-2 max-w-md mx-auto md:mx-0">
//             <input
//               type="text"
//               placeholder="Search roles like 'driver' or 'intern'"
//               className="flex-1 bg-transparent focus:outline-none px-2 py-1 text-sm text-neutral-900 dark:text-white placeholder:text-neutral-500"
//               aria-label="Search job categories"
//             />
//             <button className="px-4 py-1.5 bg-neutral-900 dark:bg-white text-white dark:text-neutral-900 text-sm font-medium rounded-md hover:opacity-90 transition">
//               Search
//             </button>
//           </div>

//           {/* Tag Filters */}
//           <div className="flex flex-wrap justify-center md:justify-start gap-2 pt-4">
//             {tags.map((tag) => (
//               <Link href={`/jobs?tag=${encodeURIComponent(tag)}`} key={tag}>
//                 <button className="px-4 py-1.5 bg-neutral-200 dark:bg-neutral-800 text-neutral-800 dark:text-white rounded-full text-xs font-medium hover:bg-neutral-300 dark:hover:bg-neutral-700 transition">
//                   {tag}
//                 </button>
//               </Link>
//             ))}
//           </div>

//           {/* CTA Buttons */}
//           <div className="pt-6 flex flex-col sm:flex-row items-center justify-center md:justify-start gap-3">
//             <Link href="/jobs">
//               <button className="px-6 py-2 bg-neutral-900 dark:bg-white text-white dark:text-neutral-900 text-sm rounded-md font-semibold hover:opacity-90 transition">
//                 Explore Jobs
//               </button>
//             </Link>
//             <Link href="/post-job">
//               <button className="px-6 py-2 border border-neutral-900 dark:border-white text-neutral-900 dark:text-white text-sm rounded-md hover:bg-neutral-100 dark:hover:bg-neutral-800 transition">
//                 Post a Job
//               </button>
//             </Link>
//           </div>
//         </motion.div>

//         {/* Abstract Illustration */}
//         <motion.div
//           initial={{ opacity: 0, y: 40 }}
//           animate={{ opacity: 1, y: 0 }}
//           transition={{ duration: 0.6, delay: 0.1 }}
//           className="w-full md:w-1/2 flex items-center justify-center"
//         >
//           <AbstractGraphic />
//         </motion.div>
//       </div>
//     </main>
//   );
// }

// "use client";

// import Link from "next/link";
// import { motion } from "framer-motion";

// const tags = ["Trainee", "Electrician", "Remote", "Driver", "Internship"];

// export default function HomePage() {
//   return (
//     <main className="relative w-full min-h-screen overflow-hidden bg-neutral-950 text-white px-6 py-32 flex items-center justify-center">
//       {/* Background ambient gradient */}
//       <div
//         aria-hidden
//         className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[800px] bg-gradient-radial from-zinc-700/20 via-transparent to-transparent rounded-full pointer-events-none blur-3xl"
//       />

//       {/* Content */}
//       <div className="relative z-10 flex flex-col items-center text-center max-w-3xl space-y-8">
//         <motion.h1
//           initial={{ opacity: 0, y: 10 }}
//           animate={{ opacity: 1, y: 0 }}
//           transition={{ duration: 0.6 }}
//           className="text-5xl md:text-6xl font-light leading-tight tracking-tight"
//         >
//           Faith-Focused
//           <br className="hidden md:inline" />
//           Work for the Mission-Aligned
//         </motion.h1>

//         <motion.p
//           initial={{ opacity: 0, y: 10 }}
//           animate={{ opacity: 1, y: 0 }}
//           transition={{ duration: 0.6, delay: 0.2 }}
//           className="text-lg text-neutral-400 max-w-xl"
//         >
//           Discover meaningful roles. Hire with purpose. Built for teams that
//           lead with integrity and conviction.
//         </motion.p>

//         {/* Tag bar */}
//         <motion.div
//           initial={{ opacity: 0, y: 10 }}
//           animate={{ opacity: 1, y: 0 }}
//           transition={{ duration: 0.6, delay: 0.4 }}
//           className="flex overflow-x-auto gap-2 pt-2 scrollbar-none"
//         >
//           {tags.map((tag) => (
//             <Link href={`/jobs?tag=${encodeURIComponent(tag)}`} key={tag}>
//               <span className="inline-block whitespace-nowrap px-4 py-1.5 bg-neutral-800 hover:bg-neutral-700 rounded-full text-sm text-white/80 transition">
//                 {tag}
//               </span>
//             </Link>
//           ))}
//         </motion.div>

//         {/* CTAs */}
//         <motion.div
//           initial={{ opacity: 0, y: 10 }}
//           animate={{ opacity: 1, y: 0 }}
//           transition={{ duration: 0.6, delay: 0.6 }}
//           className="pt-8 flex flex-col sm:flex-row gap-4"
//         >
//           <Link href="/jobs">
//             <button className="px-6 py-3 rounded-md bg-white text-black text-sm font-medium hover:bg-neutral-200 transition">
//               Browse Jobs
//             </button>
//           </Link>
//           <Link href="/post-job">
//             <button className="px-6 py-3 rounded-md border border-white/20 text-white text-sm font-medium hover:bg-white/5 transition">
//               Post a Job
//             </button>
//           </Link>
//         </motion.div>
//       </div>
//     </main>
//   );
// }

// // "use client";

// // import Link from "next/link";
// // import { useState } from "react";
// // import { motion } from "framer-motion";
// // import { SearchIcon } from "lucide-react";

// // const tags = ["Remote", "Trainee", "Electrician", "Construction", "Internship"];

// // export default function HomePage() {
// //   const [query, setQuery] = useState("");

// //   const handleSearch = () => {
// //     if (!query) return;
// //     window.location.href = `/jobs?search=${encodeURIComponent(query)}`;
// //   };

// //   return (
// //     <main className="relative w-full min-h-screen bg-white text-neutral-900 px-6 py-32 flex items-center justify-center">
// //       {/* Ambient blurred circle */}
// //       <div
// //         aria-hidden
// //         className="absolute top-[-10%] left-1/2 -translate-x-1/2 w-[800px] h-[800px] bg-gradient-radial from-zinc-200/50 to-transparent blur-3xl"
// //       />

// //       <div className="relative z-10 flex flex-col items-center text-center max-w-2xl w-full space-y-8">
// //         <motion.p
// //           initial={{ opacity: 0, y: 10 }}
// //           animate={{ opacity: 1, y: 0 }}
// //           transition={{ duration: 0.6, delay: 0.2 }}
// //           className="text-lg text-neutral-600 max-w-xl"
// //         >
// //           Search for anything...
// //         </motion.p>

// //         {/* Surprise Search: Premium input */}
// //         <motion.div
// //           initial={{ opacity: 0, y: 10 }}
// //           animate={{ opacity: 1, y: 0 }}
// //           transition={{ duration: 0.6, delay: 0.3 }}
// //           className="w-full max-w-xl bg-white border border-neutral-300 rounded-xl shadow-md flex items-center px-4 py-2"
// //         >
// //           <SearchIcon className="w-5 h-5 text-neutral-400" />
// //           <input
// //             type="text"
// //             value={query}
// //             onChange={(e) => setQuery(e.target.value)}
// //             placeholder="Search roles, companies or keywords..."
// //             className="flex-1 px-3 py-2 text-sm bg-transparent focus:outline-none"
// //           />
// //           <button
// //             onClick={handleSearch}
// //             className="text-sm px-4 py-1.5 bg-black text-white rounded-md hover:bg-neutral-800 transition"
// //           >
// //             Search
// //           </button>
// //         </motion.div>

// //         {/* Smart Tag Drawer */}
// //         <motion.div
// //           initial={{ opacity: 0, y: 10 }}
// //           animate={{ opacity: 1, y: 0 }}
// //           transition={{ duration: 0.6, delay: 0.4 }}
// //           className="flex flex-wrap justify-center gap-2 pt-1"
// //         >
// //           {tags.map((tag) => (
// //             <Link href={`/jobs?tag=${encodeURIComponent(tag)}`} key={tag}>
// //               <button className="px-3 py-1.5 rounded-full border border-neutral-200 text-sm text-neutral-700 hover:bg-neutral-100 transition">
// //                 {tag}
// //               </button>
// //             </Link>
// //           ))}
// //         </motion.div>

// //         {/* CTA Row */}
// //         <motion.div
// //           initial={{ opacity: 0, y: 10 }}
// //           animate={{ opacity: 1, y: 0 }}
// //           transition={{ duration: 0.6, delay: 0.5 }}
// //           className="pt-8 flex flex-col sm:flex-row gap-4"
// //         >
// //           <Link href="/jobs">
// //             <button className="px-6 py-3 rounded-md bg-black text-white text-sm font-medium hover:bg-neutral-800 transition">
// //               Browse Jobs
// //             </button>
// //           </Link>
// //           <Link href="/post-job">
// //             <button className="px-6 py-3 rounded-md border border-neutral-900 text-neutral-900 text-sm font-medium hover:bg-neutral-100 transition">
// //               Post a Job
// //             </button>
// //           </Link>
// //         </motion.div>
// //       </div>
// //     </main>
// //   );
// // }
// "use client";

// import Link from "next/link";
// import { useState } from "react";
// import { motion } from "framer-motion";
// import { SearchIcon } from "lucide-react";

// const tags = ["Remote", "Trainee", "Electrician", "Construction", "Internship"];

// export default function HomePage() {
//   const [query, setQuery] = useState("");

//   const handleSearch = () => {
//     if (!query.trim()) return;
//     window.location.href = `/jobs?search=${encodeURIComponent(query.trim())}`;
//   };

//   return (
//     <main className="relative w-full min-h-screen bg-white text-neutral-900 px-6 py-32 flex items-center justify-center">
//       {/* Ambient blurred circle */}
//       <div
//         aria-hidden
//         className="absolute top-[-10%] left-1/2 -translate-x-1/2 w-[900px] h-[900px] bg-gradient-radial from-zinc-200/60 to-transparent blur-3xl"
//       />

//       <div className="relative z-10 flex flex-col items-center text-center max-w-2xl w-full space-y-6">
//         {/* Mini headline */}
//         <motion.h1
//           initial={{ opacity: 0, y: 6 }}
//           animate={{ opacity: 1, y: 0 }}
//           transition={{ duration: 0.5 }}
//           className="text-4xl md:text-5xl font-light tracking-tight"
//         >
//           Find work that matters.
//         </motion.h1>

//         {/* Premium Search Box */}
//         <motion.div
//           initial={{ opacity: 0, y: 6 }}
//           animate={{ opacity: 1, y: 0 }}
//           transition={{ duration: 0.5, delay: 0.1 }}
//           className="w-full max-w-xl bg-white border border-neutral-300 rounded-xl shadow-sm flex items-center px-4 py-3"
//         >
//           <SearchIcon className="w-5 h-5 text-neutral-400" />
//           <input
//             type="text"
//             value={query}
//             onChange={(e) => setQuery(e.target.value)}
//             placeholder="Title, company, keyword"
//             className="flex-1 px-3 py-1 text-sm bg-transparent focus:outline-none text-neutral-900"
//           />
//           <button
//             onClick={handleSearch}
//             className="text-sm px-4 py-1.5 bg-black text-white rounded-md hover:bg-neutral-800 transition"
//           >
//             Search
//           </button>
//         </motion.div>

//         {/* Tags - inline visual variety */}
//         <motion.div
//           initial={{ opacity: 0, y: 6 }}
//           animate={{ opacity: 1, y: 0 }}
//           transition={{ duration: 0.5, delay: 0.2 }}
//           className="flex flex-wrap justify-center gap-2"
//         >
//           {tags.map((tag) => (
//             <Link href={`/jobs?tag=${encodeURIComponent(tag)}`} key={tag}>
//               <button className="px-4 py-1.5 rounded-full bg-neutral-100 hover:bg-neutral-200 text-sm text-neutral-700 transition">
//                 {tag}
//               </button>
//             </Link>
//           ))}
//         </motion.div>

//         {/* Divider */}
//         <motion.div
//           initial={{ scaleX: 0 }}
//           animate={{ scaleX: 1 }}
//           transition={{ duration: 0.4, delay: 0.3 }}
//           className="w-8 h-px bg-neutral-300 my-2 origin-center"
//         />

//         {/* CTA Row */}
//         <motion.div
//           initial={{ opacity: 0, y: 6 }}
//           animate={{ opacity: 1, y: 0 }}
//           transition={{ duration: 0.5, delay: 0.35 }}
//           className="flex flex-col sm:flex-row gap-4"
//         >
//           <Link href="/jobs">
//             <button className="px-6 py-3 rounded-md bg-black text-white text-sm font-medium hover:bg-neutral-800 transition">
//               Browse Jobs
//             </button>
//           </Link>
//           <Link href="/post-job">
//             <button className="px-6 py-3 rounded-md border border-neutral-300 text-neutral-900 text-sm font-medium hover:bg-neutral-100 transition">
//               Post a Job
//             </button>
//           </Link>
//         </motion.div>
//       </div>
//     </main>
//   );
// }

// import Image from "next/image";
// import ImageHero from "@/assets/images/2025bannner.jpg";

// export default function Home() {
//   return (
//     <div className="w-full min-h-screen flex flex-col justify-between bg-[linear-gradient(89.9deg,_#d0f6ff_0.1%,_#ffeded_47.9%,_#ffffe7_100.2%)] bg-center bg-fixed">
//       <div className="flex min-h-screen flex-row items-center justify-between w-full px-8 py-6 gap-8 max-md:flex-col max-md:p-2">
//         <div className="pt-20 flex w-[60%] max-md:w-full flex-col items-center justify-center text-center">
//           <div className="w-full max-w-[1200px] p-4 flex flex-col items-center">
//             <h1 className="text-5xl font-bold text-black text-center mb-8 max-md:text-3xl">
//               Find Your Perfect Job with{" "}
//               <span className="text-transparent bg-gradient-to-r from-zinc-500 via-indigo-500 to-indigo-700 bg-clip-text">
//                 PIWC Odokor Job Portal
//               </span>
//             </h1>
//             <p className="text-xl text-gray-600 text-center mb-16 max-md:text-lg">
//               Connected to purpose. Rooted in Christ.
//             </p>
//           </div>
//         </div>

//         <div className="pt-20 flex-1 flex justify-center items-center max-md:pt-0">
//           <Image
//             src={ImageHero}
//             alt="Hero Image"
//             className="max-w-[90%] h-auto rounded-4xl animate-[moveUpDown_3s_ease-in-out_infinite]"
//           />
//         </div>
//       </div>
//     </div>
//   );
// }

// "use client";

// import Image from "next/image";
// import Link from "next/link";
// import { motion } from "framer-motion";
// import ImageHero from "@/assets/images/2025bannner.jpg";

// export default function Home() {
//   return (
//     <main>
//       <section className="flex flex-col-reverse md:flex-row items-center justify-between px-6 md:px-16 py-24 gap-10">
//         {/* Text Content */}
//         <motion.div
//           className="flex-1 text-center md:text-left"
//           initial={{ opacity: 0, y: 40 }}
//           animate={{ opacity: 1, y: 0 }}
//           transition={{ duration: 0.8 }}
//         >
//           <h1 className="text-4xl md:text-6xl font-extrabold leading-tight text-gray-900 dark:text-white">
//             Find Your Perfect Job with the{" "}
//             <span className="text-transparent bg-clip-text bg-blue-900 dark:from-indigo-300 dark:to-indigo-600">
//               PIWC Odokor Job Portal
//             </span>
//           </h1>
//           <p className="mt-6 text-lg md:text-xl text-gray-600 dark:text-gray-300">
//             Connected to purpose. Rooted in Christ.
//           </p>

//           {/* Buttons */}
//           <div className="mt-10 flex flex-wrap gap-4 justify-center md:justify-start">
//             <Link href="/jobs" passHref>
//               <motion.a
//                 whileHover={{ scale: 1.05 }}
//                 whileTap={{ scale: 0.95 }}
//                 className="inline-block px-6 py-3 rounded-lg bg-indigo-800 text-white font-medium shadow-md hover:bg-indigo-900 focus:outline-none focus:ring-2 focus:ring-indigo-400 transition-all"
//               >
//                 Browse Jobs
//               </motion.a>
//             </Link>

//             <Link href="/jobs/post" passHref>
//               <motion.a
//                 whileHover={{ scale: 1.05 }}
//                 whileTap={{ scale: 0.95 }}
//                 className="inline-block px-6 py-3 rounded-lg border border-indigo-600 text-indigo-900 dark:text-indigo-300 dark:border-indigo-400 font-medium hover:bg-indigo-100 dark:hover:bg-indigo-900 transition-all"
//               >
//                 Post a Job
//               </motion.a>
//             </Link>
//           </div>
//         </motion.div>

//         {/* Hero Image */}
//         <motion.div
//           className="flex-1 flex justify-center items-center"
//           initial={{ opacity: 0, scale: 0.9 }}
//           animate={{ opacity: 1, scale: 1 }}
//           transition={{ delay: 0.2, duration: 0.8 }}
//         >
//           <Image
//             src={ImageHero}
//             alt="Job portal hero"
//             priority
//             placeholder="blur"
//             className="w-full max-w-[500px] rounded-3xl shadow-xl object-contain"
//           />
//         </motion.div>
//       </section>
//     </main>
//   );
// }

// // app/page.tsx
// // import JobSearch from "@/components/JobSearch";

// // export default function HomePage() {
// //   return <JobSearch />;
// // }

"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import ImageHero from "@/assets/images/2025bannner.jpg";

const MotionLink = motion(Link); // ✔️ Motion-wrapped Link

export default function Home() {
  return (
    <main>
      <section className="flex flex-col-reverse md:flex-row items-center justify-between px-6 md:px-16 py-16 md:py-24 gap-10">
        {/* Text Content */}
        <motion.div
          className="flex-1 text-center md:text-left"
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h1 className="text-3xl md:text-5xl font-bold leading-snug text-blue-950 dark:text-white">
            Connected to purpose. Rooted in Christ.{" "}
            {/* <span className="text-transparent bg-clip-text bg-blue-900">
              PIWC Odokor
            </span> */}
          </h1>

          <div className="mt-4 space-y-3">
            <p className="text-base md:text-lg text-gray-700 dark:text-gray-300">
              Welcome to the PIWC Odokor Job Portal.
            </p>
            <p className="text-sm md:text-base text-gray-600 dark:text-gray-400 italic">
              Lending a helping hand to our members - let’s grow together in
              faith and opportunity.
            </p>
          </div>

          {/* Buttons */}
          <div className="mt-8 flex flex-wrap gap-4 justify-center md:justify-start">
            <MotionLink
              href="/jobs"
              className="inline-block px-6 py-3 rounded-lg bg-blue-900 text-white font-medium shadow-md hover:bg-blue-950 focus:outline-none focus:ring-2 focus:ring-indigo-400 transition-all"
            >
              Browse Jobs
            </MotionLink>

            <MotionLink
              href="/post-job"
              className="inline-block px-6 py-3 rounded-lg border border-indigo-900 text-indigo-900 dark:text-indigo-300 dark:border-indigo-400 font-medium hover:bg-indigo-100 dark:hover:bg-indigo-900 transition-all"
            >
              Post a Job
            </MotionLink>
          </div>
        </motion.div>

        {/* Hero Image */}
        <motion.div
          className="flex-1 flex justify-center items-center"
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.2, duration: 0.8 }}
        >
          <Image
            src={ImageHero}
            alt="Job portal hero"
            priority
            placeholder="blur"
            className="w-full max-w-[650px] md:max-w-[720px] lg:max-w-[800px] rounded-3xl shadow-xl object-contain"
          />
        </motion.div>
      </section>
    </main>
  );
}

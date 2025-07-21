// "use client";

// import { useState, useRef, useEffect } from "react";
// import Link from "next/link";
// import { BiLogOut } from "react-icons/bi";
// import { AiFillCaretDown, AiFillCaretUp } from "react-icons/ai";
// import { GiHamburgerMenu } from "react-icons/gi";
// import { usePathname } from "next/navigation";

// export default function Navbar() {
//   const [isOpen, setIsOpen] = useState(false);
//   const [openJobs, setOpenJobs] = useState(false);
//   const [scrolled, setScrolled] = useState(false);

//   const pathname = usePathname();
//   const dropdownRef = useRef<HTMLDivElement>(null);
//   const hamburgerRef = useRef<HTMLDivElement>(null);

//   const user = { name: "John Doe" }; // Replace with actual auth

//   useEffect(() => {
//     const handleScroll = () => {
//       setScrolled(window.scrollY > 10);
//     };
//     window.addEventListener("scroll", handleScroll);
//     return () => window.removeEventListener("scroll", handleScroll);
//   }, []);

//   useEffect(() => {
//     const handleClickOutside = (event: MouseEvent) => {
//       if (
//         dropdownRef.current &&
//         !dropdownRef.current.contains(event.target as Node) &&
//         hamburgerRef.current &&
//         !hamburgerRef.current.contains(event.target as Node)
//       ) {
//         setIsOpen(false);
//         setOpenJobs(false);
//       }
//     };
//     document.addEventListener("mousedown", handleClickOutside);
//     return () => document.removeEventListener("mousedown", handleClickOutside);
//   }, []);

//   return (
//     <nav
//       className={`fixed top-0 left-0 w-full z-50 px-6 py-4 flex items-center justify-between transition-all duration-300 ${
//         scrolled ? "bg-white shadow-md" : "bg-transparent"
//       }`}
//     >
//       {/* Logo */}
//       <div className="flex-shrink-0">
//         <Link href="/">
//           <img
//             src=""
//             alt="The Vine Network Logo"
//             className="h-10 w-auto object-contain"
//           />
//         </Link>
//       </div>

//       {/* Desktop Links */}
//       <div className="hidden lg:flex gap-6 items-center">
//         {[
//           { href: "/post-job", label: "Post Jobs" },
//           { href: "/jobs", label: "View Jobs" },

//           { href: "/dashboard", label: "Dashboard" },
//         ].map(({ href, label }) => (
//           <Link
//             key={href}
//             href={href}
//             className={`text-gray-600 font-medium transition hover:text-zinc-700 ${
//               pathname === href ? "text-zinc-900 font-semibold" : ""
//             }`}
//           >
//             {label}
//           </Link>
//         ))}
//       </div>

//       {/* Desktop User Actions */}
//       <div className="hidden lg:flex items-center gap-4">
//         {user ? (
//           <>
//             <BiLogOut className="text-blue-900 text-xl cursor-pointer" />
//             <p className="text-gray-800 font-medium">{user.name}</p>
//           </>
//         ) : (
//           <div className="flex items-center gap-2">
//             <button className="px-4 py-1 rounded-full border border-blue-800 text-blue-800 font-medium text-sm hover:bg-blue-800 hover:text-white transition">
//               Log in
//             </button>
//             <button className="px-4 py-1 rounded-full bg-blue-800 text-white font-medium text-sm hover:bg-black transition">
//               Sign Up
//             </button>
//           </div>
//         )}
//       </div>

//       {/* Hamburger */}
//       <div
//         ref={hamburgerRef}
//         onClick={() => setIsOpen(!isOpen)}
//         className="lg:hidden text-2xl text-gray-800 cursor-pointer"
//       >
//         <GiHamburgerMenu />
//       </div>

//       {/* Mobile Menu */}
//       {isOpen && (
//         <div
//           ref={dropdownRef}
//           className="absolute top-full left-0 w-full bg-white shadow-md flex flex-col p-4 gap-2 lg:hidden"
//         >
//           <Link
//             href="/"
//             onClick={() => setIsOpen(false)}
//             className={`text-gray-700 font-medium transition hover:text-blue-800 ${
//               pathname === "/" ? "text-blue-900 font-semibold" : ""
//             }`}
//           >
//             Home
//           </Link>

//           <button
//             onClick={() => setOpenJobs(!openJobs)}
//             className="flex items-center justify-between text-gray-700 font-medium hover:text-blue-800 transition"
//           >
//             Jobs {openJobs ? <AiFillCaretUp /> : <AiFillCaretDown />}
//           </button>

//           {openJobs && (
//             <div className="pl-4 flex flex-col gap-1">
//               <Link
//                 href="/frontend/displayJobs"
//                 onClick={() => setIsOpen(false)}
//                 className="text-gray-600 hover:text-blue-700 text-sm transition"
//               >
//                 View Jobs
//               </Link>
//               <Link
//                 href="/frontend/postAJob"
//                 onClick={() => setIsOpen(false)}
//                 className="text-gray-600 hover:text-blue-700 text-sm transition"
//               >
//                 Post Jobs
//               </Link>
//               <Link
//                 href="/frontend/postedJob"
//                 onClick={() => setIsOpen(false)}
//                 className="text-gray-600 hover:text-blue-700 text-sm transition"
//               >
//                 Posted Jobs
//               </Link>
//             </div>
//           )}

//           <Link
//             href="/frontend/dashboard"
//             onClick={() => setIsOpen(false)}
//             className={`text-gray-700 font-medium transition hover:text-blue-800 ${
//               pathname === "/frontend/dashboard"
//                 ? "text-blue-900 font-semibold"
//                 : ""
//             }`}
//           >
//             Dashboard
//           </Link>
//           <Link
//             href="/frontend/organizations"
//             onClick={() => setIsOpen(false)}
//             className={`text-gray-700 font-medium transition hover:text-blue-800 ${
//               pathname === "/frontend/organizations"
//                 ? "text-blue-900 font-semibold"
//                 : ""
//             }`}
//           >
//             Organizations
//           </Link>
//         </div>
//       )}
//     </nav>
//   );
// }

// "use client";

// import { useEffect, useState } from "react";
// import { supabase } from "@/lib/supabase";
// import { useRouter } from "next/navigation";
// import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
// import {
//   DropdownMenu,
//   DropdownMenuContent,
//   DropdownMenuItem,
//   DropdownMenuTrigger,
// } from "@/components/ui/dropdown-menu";
// import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
// import { Button } from "@/components/ui/button";
// import { MenuIcon } from "lucide-react";

// export default function Navbar() {
//   const router = useRouter();
//   const [user, setUser] = useState<any>(null);

//   useEffect(() => {
//     const getUser = async () => {
//       const { data } = await supabase.auth.getUser();
//       setUser(data.user);
//     };
//     getUser();

//     const {
//       data: { subscription },
//     } = supabase.auth.onAuthStateChange((_event, session) => {
//       setUser(session?.user ?? null);
//     });

//     return () => subscription.unsubscribe();
//   }, []);

//   const handleLogin = async (provider: "google" | "facebook") => {
//     await supabase.auth.signInWithOAuth({
//       provider,
//       options: {
//         redirectTo: `${location.origin}/auth/callback`,
//       },
//     });
//   };

//   const handleLogout = async () => {
//     await supabase.auth.signOut();
//   };

//   return (
//     <header className="w-full border-b sticky top-0 z-50 bg-white dark:bg-black">
//       <div className="flex items-center justify-between max-w-7xl mx-auto p-4">
//         {/* Logo */}
//         <div
//           className="font-bold text-xl cursor-pointer"
//           onClick={() => router.push("/")}
//         >
//           Church Jobs
//         </div>

//         {/* Desktop Nav */}
//         <nav className="hidden md:flex gap-6 items-center">
//           <a href="/" className="hover:underline">
//             Home
//           </a>
//           <a href="/jobs" className="hover:underline">
//             Jobs
//           </a>
//           <a href="/post" className="hover:underline">
//             Post a Job
//           </a>

//           {!user ? (
//             <>
//               <Button onClick={() => handleLogin("google")} variant="outline">
//                 Login with Google
//               </Button>
//               <Button
//                 onClick={() => handleLogin("facebook")}
//                 variant="secondary"
//               >
//                 Login with Facebook
//               </Button>
//             </>
//           ) : (
//             <DropdownMenu>
//               <DropdownMenuTrigger>
//                 <Avatar>
//                   <AvatarImage src={user?.user_metadata?.avatar_url} />
//                   <AvatarFallback>
//                     {user?.email?.[0]?.toUpperCase()}
//                   </AvatarFallback>
//                 </Avatar>
//               </DropdownMenuTrigger>
//               <DropdownMenuContent align="end">
//                 <DropdownMenuItem onClick={() => router.push("/dashboard")}>
//                   Dashboard
//                 </DropdownMenuItem>
//                 <DropdownMenuItem onClick={handleLogout}>
//                   Logout
//                 </DropdownMenuItem>
//               </DropdownMenuContent>
//             </DropdownMenu>
//           )}
//         </nav>

//         {/* Mobile Nav */}
//         <Sheet>
//           <SheetTrigger className="md:hidden">
//             <MenuIcon className="w-6 h-6" />
//           </SheetTrigger>
//           <SheetContent>
//             <nav className="flex flex-col gap-4 mt-8">
//               <a href="/" className="hover:underline">
//                 Home
//               </a>
//               <a href="/jobs" className="hover:underline">
//                 Jobs
//               </a>
//               <a href="/post" className="hover:underline">
//                 Post a Job
//               </a>

//               {!user ? (
//                 <>
//                   <Button
//                     onClick={() => handleLogin("google")}
//                     variant="outline"
//                   >
//                     Login with Google
//                   </Button>
//                   <Button
//                     onClick={() => handleLogin("facebook")}
//                     variant="secondary"
//                   >
//                     Login with Facebook
//                   </Button>
//                 </>
//               ) : (
//                 <>
//                   <Button
//                     onClick={() => router.push("/dashboard")}
//                     variant="outline"
//                   >
//                     Dashboard
//                   </Button>
//                   <Button onClick={handleLogout} variant="destructive">
//                     Logout
//                   </Button>
//                 </>
//               )}
//             </nav>
//           </SheetContent>
//         </Sheet>
//       </div>
//     </header>
//   );
// }
"use client";

import { useEffect, useState } from "react";
import { supabase } from "@/lib/supabase";
import { useRouter } from "next/navigation";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { MenuIcon, XIcon } from "lucide-react";
import { FaFacebook, FaGoogle } from "react-icons/fa";

export default function Navbar() {
  const router = useRouter();
  const [user, setUser] = useState<any>(null);
  const [isMobileOpen, setIsMobileOpen] = useState(false);
  const [email, setEmail] = useState("");

  useEffect(() => {
    const getUser = async () => {
      const { data } = await supabase.auth.getUser();
      setUser(data.user);
    };
    getUser();

    const {
      data: { subscription },
    } = supabase.auth.onAuthStateChange((_event, session) => {
      setUser(session?.user ?? null);
    });

    return () => subscription.unsubscribe();
  }, []);

  const handleLogin = async (provider: "google" | "facebook") => {
    await supabase.auth.signInWithOAuth({
      provider,
      options: { redirectTo: `${location.origin}/auth/callback` },
    });
  };

  const handleEmailLogin = async () => {
    if (!email) return;
    await supabase.auth.signInWithOtp({
      email,
      options: { emailRedirectTo: `${location.origin}/auth/callback` },
    });
    alert("Check your email for a magic login link.");
    setEmail("");
  };

  const handleLogout = async () => {
    await supabase.auth.signOut();
    setUser(null);
  };

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-white/90 backdrop-blur-md transition-all">
      <div className="max-w-7xl mx-auto px-4 py-3 flex items-center justify-between">
        {/* Logo */}
        <div
          onClick={() => router.push("/")}
          className="text-xl font-bold cursor-pointer text-primary"
        >
          The Church Network
        </div>

        {/* Desktop */}
        <div className="hidden md:flex items-center gap-6">
          <NavLinks />
          {user ? (
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Avatar className="cursor-pointer transition hover:ring-2 hover:ring-muted">
                  <AvatarImage src={user?.user_metadata?.avatar_url} />
                  <AvatarFallback>
                    {user?.email?.[0]?.toUpperCase()}
                  </AvatarFallback>
                </Avatar>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="end">
                <DropdownMenuItem onClick={() => router.push("/dashboard")}>
                  Dashboard
                </DropdownMenuItem>
                <DropdownMenuItem onClick={handleLogout}>
                  Logout
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          ) : (
            <div className="flex items-center gap-3">
              <Button
                variant="outline"
                className="flex items-center gap-2 px-4 py-1 text-sm rounded-full border-zinc-700 text-zinc-700 hover:bg-zinc-700 hover:text-white"
                onClick={() => handleLogin("google")}
              >
                <FaGoogle className="w-4 h-4" />
                Google
              </Button>
              <Button
                className="flex items-center gap-2 px-4 py-1 text-sm rounded-full bg-zinc-700 hover:bg-zinc-800 text-white"
                onClick={() => handleLogin("facebook")}
              >
                <FaFacebook className="w-4 h-4" />
                Facebook
              </Button>
              <form
                onSubmit={(e) => {
                  e.preventDefault();
                  handleEmailLogin();
                }}
                className="flex items-center gap-2"
              >
                <Input
                  type="email"
                  placeholder="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="h-9 w-48"
                />
                <Button type="submit" size="sm">
                  Login
                </Button>
              </form>
            </div>
          )}
        </div>

        {/* Mobile */}
        <button
          onClick={() => setIsMobileOpen((open) => !open)}
          className="md:hidden transition"
        >
          {isMobileOpen ? (
            <XIcon className="w-6 h-6 text-muted-foreground transition-transform rotate-90" />
          ) : (
            <MenuIcon className="w-6 h-6 text-muted-foreground" />
          )}
        </button>
      </div>

      {/* Mobile Menu */}
      {isMobileOpen && (
        <div className="md:hidden bg-white border-t px-4 pb-6 space-y-4 animate-in fade-in slide-in-from-top-2">
          <NavLinks onClick={() => setIsMobileOpen(false)} />
          {user ? (
            <>
              <Button
                variant="outline"
                className="w-full"
                onClick={() => {
                  router.push("/dashboard");
                  setIsMobileOpen(false);
                }}
              >
                Dashboard
              </Button>
              <Button
                variant="destructive"
                className="w-full"
                onClick={() => {
                  handleLogout();
                  setIsMobileOpen(false);
                }}
              >
                Logout
              </Button>
            </>
          ) : (
            <>
              <Button
                variant="outline"
                className="w-full flex items-center justify-center gap-2 border-zinc-700 text-zinc-700 hover:bg-zinc-700 hover:text-white"
                onClick={() => {
                  handleLogin("google");
                  setIsMobileOpen(false);
                }}
              >
                <FaGoogle className="w-4 h-4" />
                Login with Google
              </Button>
              <Button
                className="w-full flex items-center justify-center gap-2 bg-zinc-700 text-white hover:bg-zinc-800"
                onClick={() => {
                  handleLogin("facebook");
                  setIsMobileOpen(false);
                }}
              >
                <FaFacebook className="w-4 h-4" />
                Login with Facebook
              </Button>
              <form
                onSubmit={(e) => {
                  e.preventDefault();
                  handleEmailLogin();
                  setIsMobileOpen(false);
                }}
                className="flex flex-col gap-2"
              >
                <Input
                  type="email"
                  placeholder="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="h-10"
                />
                <Button type="submit" className="w-full">
                  Login with Email
                </Button>
              </form>
            </>
          )}
        </div>
      )}
    </header>
  );
}

function NavLinks({ onClick }: { onClick?: () => void }) {
  return (
    <nav className="flex flex-col md:flex-row gap-4 md:gap-6 text-sm font-medium text-muted-foreground">
      <a
        href="/"
        className="hover:text-foreground transition"
        onClick={onClick}
      >
        Home
      </a>
      <a
        href="/jobs"
        className="hover:text-foreground transition"
        onClick={onClick}
      >
        Jobs
      </a>
      <a
        href="/post"
        className="hover:text-foreground transition"
        onClick={onClick}
      >
        Post a Job
      </a>
    </nav>
  );
}

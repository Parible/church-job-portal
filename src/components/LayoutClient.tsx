import React from "react";
import Navbar from "./NavBar";
import Footer from "./Footer";

function LayoutClient({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <main>
      <Navbar />
      {/* bg-gray-100/50 */}
      {/* <div className="w-full min-h-screen flex flex-col justify-between bg-[linear-gradient(89.9deg,_#d0f6ff_0.1%,_#ffeded_47.9%,_#ffffe7_100.2%)] bg-center bg-fixed"> */}

      <div className="antialiased min-h-screen bg-gradient-to-b from-white to-neutral-50 w-full px-6 py-14 md:py-10">
        {children}
      </div>
      <Footer />
    </main>
  );
}

export default LayoutClient;

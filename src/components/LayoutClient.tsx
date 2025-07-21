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
      <div className="antialiased min-h-screen px-2 md:px-24 lg:px-24 py-32 bg-gray-100/50 ">
        {children}
      </div>
      <Footer />
    </main>
  );
}

export default LayoutClient;

import React from "react";
import Navbar from "./NavBar";
// import Footer from "./Footer";

function LayoutClient({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <main>
      <Navbar />
      {/* bg-gray-100/50 */}
      <div className="antialiased min-h-screen bg-white ">{children}</div>
      {/* <Footer /> */}
    </main>
  );
}

export default LayoutClient;

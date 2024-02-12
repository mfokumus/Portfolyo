import React from "react";
import Navbar from "./Navbar";
import Footer from "./Footer";

const SideBar = () => {
  return (
    <div className="flex flex-col h-full bg-white">
      <div className="flex-3 flex flex-col items-center justify-center ">
        <Navbar />
      </div>
      <div className="flex-1">
        <Footer />
      </div>
    </div>
  );
};

export default SideBar;

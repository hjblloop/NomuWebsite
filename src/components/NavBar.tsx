import React from 'react';

const Navbar: React.FC = () => {
  return (
    <nav className="fixed top-0 left-0 w-full bg-black bg-opacity-70 backdrop-blur-md text-white z-50 bg-transparent">
      <div className="w-full h-24 flex items-center justify-between">
        <div className="flex justify-start ">
          {/* <img src="/nomuIP.png" alt="IP" className="h-32 w-32" /> */}
          <img src="/nomulogo.png" alt="logo" className="h-32 w-50"></img>
        </div>

        <div className="space-x-4 justify-end text-sm font-medium mr-4">
          <a href="#home" className="hover:text-red-400 text-red-500 text-xl transition">Home</a>
          <a href="#viewmenu" className="hover:text-red-400 text-xl text-red-500 transition">View Menu</a>
          <a href="#reservenow" className="hover:text-red-400 text-xl text-red-500 transition">Reserve Now</a>
          <a href="#orderonline" className="hover:text-red-400 text-xl text-red-500 transition">Order Online</a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
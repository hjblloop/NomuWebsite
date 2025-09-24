import React from 'react';

const Navbar: React.FC = () => {
  return (
    <nav className="fixed top-0 left-0 w-full bg-opacity-70 backdrop-blur-md text-white z-50 bg-transparent">
      <div className="w-full h-24 flex items-center justify-between">
        <div className="flex justify-start ">
          {/* <img src="/nomuIP.png" alt="IP" className="h-32 w-32" /> */}
          <img src="/nomulogo.png" alt="logo" className="h-32 w-50"></img>
        </div>

        <div className="space-x-7 justify-end text-[1.375rem] font-medium mr-4 text-nomu-red font-nomu">
          <a href="#home" className=" transition">Home</a>
          <a href="/menu.pdf" target="_blank" rel="noopener noreferrer" className=" transition">View Menu</a>
          <a href="https://tables.toasttab.com/restaurants/6ea514eb-e69f-4b84-b316-6496873b74ca/reserve?partySize=2&dateTime=2025-09-10T13:30:00.000-04:00" className="transition">Reserve Now</a>
          <a href="https://order.toasttab.com/online/nomu-7540-gate-parkway-suite-101" className="transition">Order Online</a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
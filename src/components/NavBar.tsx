import React, {useEffect, useState} from 'react';
import MobileMenu from './MobileMenu';

const Navbar: React.FC = () => {
  const [isAtTop, setIsAtTop] = useState(true);

  useEffect(() => {
    const handleScroll = () => {
      setIsAtTop(window.scrollY === 0);
    };
    window.addEventListener("scroll", handleScroll);

    handleScroll();

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <nav className={`fixed flex top-0 left-0 w-full transition-all duration-500 z-50 h-25 ease-in-out ${isAtTop ? "bg-transparent" :"bg-neutral-900"} pointer-events-none`}>
      <div className="w-full h-auto flex items-center justify-between pointer-events-auto">
        <div className="flex justify-start items-start">
          <img src="/nomulogo.png" alt="logo" className="h-32 w-auto"></img>
        </div>        
      </div>
      <div className="hidden lg:block">
          <div className="w-full justify-end text-center text-sm font-medium mr-4 text-nomu-red font-nomu flex flex-row pointer-events-auto -ml-px -mt-px">
            <a href="#home" className="text-xl transition block border border-red-500 hover:bg-red-300 p-9">Home</a>
            <a href="/menu.pdf" target="_blank" rel="noopener noreferrer" className="transition text-xl block border border-red-500 hover:bg-red-300 p-9 -ml-px whitespace-nowrap">View Menu</a>
            <a href="https://tables.toasttab.com/restaurants/6ea514eb-e69f-4b84-b316-6496873b74ca/reserve?partySize=2&dateTime=2025-09-10T13:30:00.000-04:00" className="text-xl transition block border border-red-500 hover:bg-red-300 p-9 -ml-px whitespace-nowrap" target="_blank" rel="noopener noreferrer">Reserve Now</a>
            <a href="https://order.toasttab.com/online/nomu-7540-gate-parkway-suite-101" className="text-xl transition block border border-red-500 hover:bg-red-300 p-9 -ml-px whitespace-nowrap" target="_blank" rel="noopener noreferrer">Order Online</a>
          </div>
        </div>
        <div className="block lg:hidden">
          <MobileMenu />
        </div>
    </nav>
  );
};

export default Navbar;
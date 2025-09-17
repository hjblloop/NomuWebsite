import { useState } from 'react';

const MobileMenu = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="relative md:hidden">
      {/* Hamburger Button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="flex flex-col items-end justify-center space-y-1.5 p-2"
        aria-label={isOpen ? "Close menu" : "Open menu"}
        title={isOpen ? "Close menu" : "Open menu"}
      >
        <span
          className={`w-8 h-0.5 bg-nomu-red rounded transition-all duration-300 ${
            isOpen ? 'rotate-45 translate-y-2.5' : ''
          }`}
        ></span>
        <span
          className={`w-8 h-0.5 bg-nomu-red rounded transition-all duration-300 ${
            isOpen ? 'opacity-0' : ''
          }`}
        ></span>
        <span
          className={`w-8 h-0.5 bg-nomu-red rounded transition-all duration-300 ${
            isOpen ? '-rotate-45 -translate-y-2.5' : ''
          }`}
        ></span>
      </button>

      {/* Dropdown Menu */}
      <div
        className={`absolute right-0 mt-2 w-48 bg-nomu-orange text-nomu-red rounded shadow-lg overflow-hidden transition-all duration-300 ease-in-out origin-top transform ${
          isOpen ? 'max-h-96 opacity-100 scale-y-100' : 'max-h-0 opacity-0 scale-y-95'
        }`}
      >
        <div className="flex flex-col py-2 px-4">
          <a href="#home" className=" text-xl transition">Home</a>
            <a href="/menu.pdf" target="_blank" rel="noopener noreferrer" className=" transition text-xl">View Menu</a>
            <a href="https://tables.toasttab.com/restaurants/6ea514eb-e69f-4b84-b316-6496873b74ca/reserve?partySize=2&dateTime=2025-09-10T13:30:00.000-04:00" className="text-xl transition">Reserve Now</a>
            <a href="https://order.toasttab.com/online/nomu-7540-gate-parkway-suite-101" className="text-xl transition">Order Online</a>
        </div>
      </div>
    </div>
  );
};

export default MobileMenu;
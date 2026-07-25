//<div className="flex-1 h-0.5 bg-red-500" /> red line on one side
//motion.div 
              // initial={{ rotateY: 90, opacity: 0 }}
              // animate={{ rotateY: 0, opacity: 1}}
              // transition={{ duration: 3 }}
              // style={{transformStyle: "preserve-3d" }}
              // viewport={{ once: true, amount: 0.3 }}
import { motion } from "framer-motion";

const InfoFooter: React.FC = () => {
  return (
    <footer className="mt-20 flex flex-col items-center justify-center relative bg-neutral-900 text-white pb-10 w-full">
      <motion.div
        initial={{ scale: 1.5, opacity: 0 }}
        animate={{ scale: 1, opacity: 1}}
        transition={{ duration: 2 }}
        style={{transformStyle: "preserve-3d" }}
        viewport={{ once: true, amount: 0.3 }} 
        className="hidden md:block flex items-center justify-center flex-col border w-4/5 border-red-500">
        <div className="relative w-full flex justify-center px-4 py-8 -translate-y-18.5">
          <div className="relative z-10 px-4 bg-neutral-900 rounded-full shadow-md">
            <img
              src="/nomulogosmall.png"
              alt="Nomu Izakaya"
              className="max-w-1/2 mx-auto object-contain"
            />
          </div>
        </div>
        <div className="max-w-6xl mx-auto flex flex-row text-center justify-center text-xl font-kaisei -translate-y-18.5 w-full">
          <a href="#" className="transition flex-1 cursor-pointer">Home</a>
          <a href="/menu.pdf" target="_blank" rel="noopener noreferrer" className="transition flex-1 cursor-pointer">Menu</a>
          <a href="https://tables.toasttab.com/restaurants/6ea514eb-e69f-4b84-b316-6496873b74ca/reserve?partySize=2&dateTime=2025-09-10T13:30:00.000-04:00" className="transition flex-1 cursor-pointer" target="_blank" rel="noopener noreferrer">Reservation</a>
          <a href="https://order.toasttab.com/online/nomu-7540-gate-parkway-suite-101" className="transition flex-1 cursor-pointer" target="_blank" rel="noopener noreferrer">Order Now</a>
          <a href="tel:+19045666735" className="flex-1 cursor-pointer">Contact</a>
        </div>
        <div className="text-xs font-kaisei sm:text-sm lg:text-md text-center -translate-y-9 whitespace-pre">
          7540 Gate Parkway Suite 103   |   Jacksonville, FL 32256   |   Copyright 2025
        </div>
        {/* <div className="max-w-6xl mx-auto text-center grid grid-cols-1 sm:grid-cols-3 gap-8 text-sm -translate-y-18.5">
          <div className="font-hans">
            <h3 className="text-lg font-semibold mb-2">Hours of Operation</h3>
            <ul>
              <li>Sun–Thur: 4:00pm – 12:00am</li>
              <li>Fri–Sat: 4:00pm – 2:00am</li>
            </ul>
          </div>

          <div className="font-hans">
            <h3 className="text-lg font-semibold mb-2">Socials</h3>
            <ul className="space-y-1">
              <li><a href="https://www.instagram.com/nomuizakaya/" target="_blank" rel="noopener noreferrer" className="hover:underline">Instagram</a></li>
            </ul>
          </div>

          <div className="font-hans">
            <h3 className="text-lg font-semibold mb-2">Address</h3>
            <address className="not-italic">
              7540 Gate Parkway Suite 103<br />
              Jacksonville, FL 32256<br />
            </address>
          </div>
        </div> */}
      </motion.div>
      <div className="block md:hidden flex items-center justify-center flex-col border w-4/5 border-red-500">
          <div className="relative w-full flex justify-center px-4 py-8 -translate-y-18.5">
          <div className="relative z-10 px-4 bg-neutral-900 rounded-full shadow-md">
            <img
              src="/nomulogosmall.png"
              alt="Nomu Izakaya"
              className="max-w-1/2 mx-auto object-contain"
            />
          </div>
        </div>
        <div className="max-w-6xl mx-auto flex flex-col text-center justify-center text-xl font-kaisei -translate-y-18.5 w-full">
          <a href="#" className="transition flex-1 cursor-pointer p-2">Home</a>
          <a href="/menu.pdf" target="_blank" rel="noopener noreferrer" className="transition flex-1 cursor-pointer p-2">Menu</a>
          <a href="https://tables.toasttab.com/restaurants/6ea514eb-e69f-4b84-b316-6496873b74ca/reserve?partySize=2&dateTime=2025-09-10T13:30:00.000-04:00" className="transition flex-1 cursor-pointer p-2" target="_blank" rel="noopener noreferrer">Reservation</a>
          <a href="https://order.toasttab.com/online/nomu-7540-gate-parkway-suite-101" className="transition flex-1 cursor-pointer p-2" target="_blank" rel="noopener noreferrer">Order Now</a>
          <a href="tel:+19045666735" className="flex-1 cursor-pointer mt-2">Contact</a>
        </div>
        <div className="text-xs font-kaisei sm:text-sm lg:text-md text-center -translate-y-9 md:whitespace-pre">
          <div>7540 Gate Parkway Suite 103</div>
          <div className="p-2">Jacksonville, FL 3225</div>
        </div>
      </div>
      <div className="text-center text-lg font-kaisei mt-4">
        Sunday - Thursday: 4:00PM - 12:00AM
      </div>
      <div className="text-center text-lg font-kaisei">
        Friday - Saturday: 4:00PM - 2:00AM
      </div>
      <div className="text-center text-xs mt-8">
          &copy; {new Date().getFullYear()} Nomu Izakaya. All rights reserved. | Developed by JC Software 
      </div>
      
    </footer>
  );
};

export default InfoFooter;

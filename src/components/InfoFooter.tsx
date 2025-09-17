const InfoFooter: React.FC = () => {
  return (
    <footer className="relative bg-neutral-900 text-white pb-10 w-full">
      <div className="border-red-500">
        <div className="relative w-full flex items-center justify-center px-4 py-8">
          {/* Line on left */}
          <div className="flex-1 h-0.5 bg-red-500" />

          {/* Icon overlapping the line */}
          <div className="relative z-10 px-4 bg-neutral-900 rounded-full shadow-md">
            <img
              src="/nomulogo.png"
              alt="Nomu Izakaya"
              className="max-w-md mx-auto object-contain"
            />
          </div>

          {/* Line on right */}
          <div className="flex-1 h-0.5 bg-red-500" />
        </div>
        {/* <div className="flex-1 h-0.5 bg-red-500">
          <div className="absolute left-1/2 -translate-x-1/2 w-[20vw] h-0.5 bg-neutral-900" />
        </div> */}
        {/* ICON */}
        {/* <div className="relative left-1/2 transform -translate-x-1/2 w-full rounded-full bg-transparent flex items-center justify-center shadow-md">
          <img src="/nomulogo.png" alt="Nomu Izakaya" className="w-full max-w-md mx-auto object-contain"  />
        </div> */}

        {/* Footer Content */}
        <div className="max-w-6xl mx-auto text-center grid grid-cols-1 sm:grid-cols-3 gap-8 text-sm -translate-y-10">
          
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
        </div>

        <div className="text-center text-xs mt-8">
          &copy; {new Date().getFullYear()} Nomu Izakaya. All rights reserved. | Developed by JC Software 
        </div>
      </div>
      
    </footer>
  );
};

export default InfoFooter;
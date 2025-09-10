const InfoFooter: React.FC = () => {
  return (
    <footer className="relative bg-neutral text-white px-6 pt-16 pb-10 mt-20">
      {/* ICON */}
      <div className="absolute -top-8 left-1/2 transform -translate-x-1/2 w-16 h-16 rounded-full bg-nomu-salmon flex items-center justify-center shadow-md">
        <img src="/nomuIP.png" alt="Nomu Izakaya" className="w-10 h-10" />
      </div>

      {/* Footer Content */}
      <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-3 gap-8 text-sm">
        
        <div className="text-nomu-black font-hans">
          <h3 className="text-lg font-semibold mb-2">Hours of Operation</h3>
          <ul>
            <li>Sun–Thur: 4:00pm – 12:00am</li>
            <li>Fri–Sat: 4:00pm – 2:00am</li>
          </ul>
        </div>

        <div className="text-nomu-black font-hans">
          <h3 className="text-lg font-semibold mb-2">Socials</h3>
          <ul className="space-y-1">
            <li><a href="https://www.instagram.com/nomuizakaya/" target="_blank" rel="noopener noreferrer" className="hover:underline">Instagram</a></li>
            <li><a href="#" className="hover:underline">Twitter</a></li>
            <li><a href="#" className="hover:underline">LinkedIn</a></li>
          </ul>
        </div>

        <div className="text-nomu-black font-hans">
          <h3 className="text-lg font-semibold mb-2">Address</h3>
          <address className="not-italic">
            7540 Gate Parkway Suite 103<br />
            Jacksonville, FL 32256<br />
          </address>
        </div>
      </div>

      <div className="text-center text-xs text-gray-400 mt-8">
        &copy; {new Date().getFullYear()} Nomu Izakaya. All rights reserved. | Developed by me 
      </div>
    </footer>
  );
};

export default InfoFooter;
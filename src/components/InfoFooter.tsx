//<div className="flex-1 h-0.5 bg-red-500" /> red line on one side

const InfoFooter: React.FC = () => {
  return (
    <footer className=" flex flex-col items-center justify-center relative bg-neutral-900 text-white pb-10 w-full">
      <div className="flex items-start justify-center flex-col border w-4/5 border-red-500">
        <div className="relative w-full flex justify-center px-4 py-8 -translate-y-18.5">
          <div className="relative z-10 px-4 bg-neutral-900 rounded-full shadow-md">
            <img
              src="/nomulogosmall.png"
              alt="Nomu Izakaya"
              className="max-w-1/2 mx-auto object-contain"
            />
          </div>
        </div>
        <div className="max-w-6xl mx-auto text-center grid grid-cols-1 sm:grid-cols-3 gap-8 text-sm -translate-y-18.5">
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
      </div>
      <div className="text-center text-xs mt-8">
          &copy; {new Date().getFullYear()} Nomu Izakaya. All rights reserved. | Developed by JC Software 
      </div>
      
    </footer>
  );
};

export default InfoFooter;
import React from 'react';

const Navbar: React.FC = () => {
  return (
    <nav className="fixed top-0 left-0 w-full bg-black bg-opacity-70 backdrop-blur-md text-white z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
        {/* Business Icon */}
        <div className="flex items-center space-x-2">
          {/* Replace with your actual icon or logo */}
          <img src="/logo.png" alt="Logo" className="h-8 w-8" />
          <span className="text-xl font-bold">MyBusiness</span>
        </div>

        {/* Navigation Links */}
        <div className="flex space-x-6 text-sm font-medium">
          <a href="#home" className="hover:text-gray-300 transition">Home</a>
          <a href="#thing1" className="hover:text-gray-300 transition">Thing1</a>
          <a href="#thing2" className="hover:text-gray-300 transition">Thing2</a>
          <a href="#thing3" className="hover:text-gray-300 transition">Thing3</a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
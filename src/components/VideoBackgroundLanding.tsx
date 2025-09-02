
import React from 'react';
import { ChevronDownIcon } from '@heroicons/react/24/solid';

const VideoBackgroundLanding: React.FC = () => {
  const handleScroll = () => {
    const element = document.getElementById('main-content');
    element?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="relative h-screen w-full overflow-hidden">
      <video
        autoPlay
        loop
        muted
        playsInline
        className="absolute top-0 left-0 w-full h-full object-cover z-[-1]"
      >
        <source src="/nomuvideo.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>

      {/* Overlay */}
      {/* <div className="absolute top-0 left-0 w-full h-full bg-black bg-opacity-50 z-0" /> */}

      {/* Content */}
      <div className="relative z-10 flex flex-col items-center justify-end mb-2 h-full text-white text-center px-4">
        {/* <div className="flex items-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-4 text-red-500">Welcome to </h1>
          <img src="/nomulogocut.PNG" alt="Nomu" className="h-20 w-48"></img>
        </div> */}

        {/* Smooth Scroll Button */}
        <ChevronDownIcon
          onClick={handleScroll}
          className="w-10 h-10 text-white mt-6 cursor-pointer justify-end hover:scale-110 transition"
        />
      </div>
    </div>
  );
};

export default VideoBackgroundLanding;
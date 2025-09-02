
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
        <source src="/video.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>

      {/* Overlay */}
      <div className="absolute top-0 left-0 w-full h-full bg-black bg-opacity-50 z-0" />

      {/* Content */}
      <div className="relative z-10 flex flex-col items-center justify-center h-full text-white text-center px-4">
        <h1 className="text-4xl md:text-6xl font-bold mb-4">Welcome to Nomu</h1>
        <p className="text-lg md:text-2xl mb-6">Add video background plz</p>

        {/* Smooth Scroll Button */}
        <ChevronDownIcon
          onClick={handleScroll}
          className="w-10 h-10 text-white mt-6 cursor-pointer hover:scale-110 transition"
        />
      </div>
    </div>
  );
};

export default VideoBackgroundLanding;
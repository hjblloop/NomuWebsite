
import React from 'react';
import { ChevronDownIcon } from '@heroicons/react/24/solid';

const VideoBackgroundLanding: React.FC = () => {
  const handleScroll = () => {
    const element = document.getElementById('main-content');
    element?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="relative w-full h-screen overflow-hidden">
      <video
        autoPlay
        loop
        muted
        playsInline
        className="absolute top-0 left-0 -z-10 object-cover w-full h-full"
      >
        <source src="/nomuvideo.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>
      <div className="relative z-10 flex flex-col items-center justify-end mb-2 h-full text-white text-center px-4">  
        <ChevronDownIcon
          onClick={handleScroll}
          className="w-10 h-10 text-white mt-6 cursor-pointer justify-end hover:scale-110 transition"
        />
      </div>
    </div>
  );
};

export default VideoBackgroundLanding;
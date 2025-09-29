
import React from 'react';
//import { ChevronDownIcon } from '@heroicons/react/24/solid';

const VideoBackgroundLanding: React.FC = () => {
  // const handleScroll = () => {
  //   const element = document.getElementById('main-content');
  //   element?.scrollIntoView({ behavior: 'smooth' });
  // };

  return (
    <div className="w-screen h-auto overflow-hidden ">
      <img alt="Nomu Izakaya" src="/outdoorcut.jpg" className="-z-10 object-cover"/>
    </div>
  );
};

export default VideoBackgroundLanding;
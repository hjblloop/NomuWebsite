import React, {useEffect, useState} from 'react';
import Navbar from './components/NavBar';
import VideoBackgroundLanding from './components/VideoBackgroundLanding';
import {Helmet} from 'react-helmet';

function App() {
  const [loading, setLoading] = useState(true);

  const [fadeOut, setFadeOut] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setFadeOut(true); 

      setTimeout(() => {
        setLoading(false);
      }, 1000); 
    }, 500); 

    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="App scroll-smooth">
      <Helmet>
        <title>Delicious Japanese Food | Best Restaurant in Jacksonville, FL</title>
        <meta name="description" content="A modern Japanese izakaya focused on food, drinks, and late-night hospitality." />
        <meta name="keywords" content="Japanese Food, Jacksonville restaurant, sushi, izakaya, dine-in, takeout" />
        <meta property="og:title" content="Nomu Izakaya" />
        <meta property="og:description" content="Come try our japanese food!" />
        <meta property="og:image" content="https://yourdomain.com/og-image.jpg" />
      </Helmet>
      <Navbar />

      {loading && (
        <div
          className={`fixed inset-0 z-50 flex items-center justify-center bg-white transition-opacity duration-1000 ${
            fadeOut ? "opacity-0 pointer-events-none" : "opacity-100"
          }`}
        >
          <img
            src="/nomuIP.png" 
            alt="Loading..."
            className="w-40 h-40 object-contain"
          />
        </div>
      )}

      <main>
        {/* Hero Section with Background Video */}
        <section id="home">
          <VideoBackgroundLanding />
        </section>

        {/* Scroll Target Sections */}
        <section
          id="viewmenu"
          className="h-screen flex items-center justify-center bg-white text-black"
        >
          <h2 className="text-4xl">Thing1 Section</h2>
        </section>

        <section
          id="reservenow"
          className="h-screen flex items-center justify-center bg-gray-100 text-black"
        >
          <h2 className="text-4xl">Thing2 Section</h2>
        </section>

        <section
          id="ordernow"
          className="h-screen flex items-center justify-center bg-gray-200 text-black"
        >
          <h2 className="text-4xl">Thing3 Section</h2>
        </section>
      </main>


    </div>
  );
}

export default App;
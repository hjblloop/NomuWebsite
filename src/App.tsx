import {useEffect, useState} from 'react';
import Navbar from './components/NavBar';
import VideoBackgroundLanding from './components/VideoBackgroundLanding';
import {Helmet} from 'react-helmet';
import FloatingCards from './components/FloatingCard';
import InfoFooter from './components/InfoFooter';

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
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
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
        <section id="home">
          <VideoBackgroundLanding />
        </section>
        
          <div
            className="relative z-0 w-screen bg-white min-h-screen flex items-center justify-center text-black px-4"
          >
            <div className="flex flex-col items-center justify-center w-full max-w-4xl sm:max-w-4xl space-y-6 bg-gray-500">
              <div className="text-3xl sm:text-4xl font-hans text-nomu-orange">Our Mission</div>
              <div className="text-3xl max-w-3xl font-din text-nomu-red">At Nomu, we keep things simple: good food, good drinks, good company. Our goal is to make dining fun, welcoming, and something everyone can enjoy together. Let's turn ordinary moments into unforgettable memories.</div>
              <div className="text-2xl max-w-3xl font-din text-nomu-red">This is din font, nomu red</div>
              <div className="text-2xl max-w-3xl font-nomu text-nomu-orange">This is nomu font, nomu orange</div>
              <div className="text-2xl max-w-3xl font-hans text-nomu-black">This is hans font, nomu black</div>
              <div className="text-2xl max-w-3xl text-nomu-salmon">This is default font, nomu salmon</div>
            </div>
          </div>

          <FloatingCards />
          <InfoFooter />
        
      </main>


    </div>
  );
}

export default App;
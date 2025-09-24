import {useEffect, useState} from 'react';
import Navbar from './components/NavBar';
import VideoBackgroundLanding from './components/VideoBackgroundLanding';
import {Helmet} from 'react-helmet';
import FloatingCards from './components/FloatingCard';
import InfoFooter from './components/InfoFooter';
import SpinningImage from './components/SpinningImage';
import NotFloatingCards from './components/NotFloatingCard';
import { motion } from 'framer-motion';

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
      {/* <div className="row-span-1 bg-purple-600 text-white flex items-center justify-center text-xl">
        Side Hero
      </div> */}

      <main className="overflow-hidden">
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
        <section id="home" className="relative">
          <VideoBackgroundLanding />
          {/* <div className="absolute top-0 left-0 w-1/25 h-full flex flex-col z-10 border border-red-500 items-center justify-center text-2xl font-kaisei text-nomu-red">
            <span>N</span>
            <span>O</span>
            <span>M</span>
            <span>U</span>
            <span className="h-4"></span>
            <span>I</span>
            <span>Z</span>
            <span>A</span>
            <span>K</span>
            <span>A</span>
            <span>Y</span>
            <span>A</span>
          </div> */}
        </section>
        <div className="bg-neutral-900">
          <div className="relative flex flex-col items-center justify-center">
            <div
              className="relative z-0 min-h-[60vh] w-full bg-neutral-900 flex flex-col items-start justify-center"
            >
              <motion.div 
                initial={{ rotateY: 90, opacity: 0 }}
                animate={{ rotateY: 0, opacity: 1}}
                transition={{ duration: 3 }}
                style={{transformStyle: "preserve-3d" }}
                viewport={{ once: true, amount: 0.3 }}
                className="flex flex-col items-center w-full h-screen space-y-6 max-w-7xl bg-neutral-800 -translate-y-20"
              >
                <div className="text-8xl font-kaisei text-gray-300 w-full mt-10 ml-20 px-4">Our Mission</div>
                <div className="text-2xl max-w-3xl font-kaisei text-gray-300">At Nomu, we keep things simple: good food, good drinks, good company. Our goal is to make dining fun, welcoming, and something everyone can enjoy together. Let's turn ordinary moments into unforgettable memories.</div>
                <a 
                  href="/menu.pdf" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="group relative inline-block px-4 py-2 rounded-md text-3xl max-w-3xl font-kaisei text-gray-300 ml-auto mr-40"
                  >
                  <span className="border-2 border-nomu-red rounded-md absolute inset-0 scale-0 group-hover:scale-100 transition-transform duration-300 ease-out pointer-events-none"></span>
                  View Our Menu
                </a>
              </motion.div>
              {/* <img alt="Nomu Family" src="/nomuFamily.jpg" className="mt-30 w-[40vw] h-auto max-w-full"/> */}
            </div>
            <img src="foodflip1.jpg" className="absolute z-10 w-1/3 h-auto transform rotate-90 top-[10%] left-[33%]" />
          </div>
          

          <div
            className="relative z-0 min-h-[80vh] w-screen bg-neutral-900 flex items-center justify-start px-4 mt-30"
          >
            <div 
              className="flex flex-col items-center min-h-screen justify-start w-full max-w-4xl sm:max-w-4xl space-y-6 bg-neutral-900 mt-20">
              <motion.div 
                initial={{ x: -400, opacity: 0 }}
                animate={{ x:0, opacity: 1 }}
                transition={{ duration: 2, ease: 'easeOut' }}
                viewport={{ once: true, amount: 0.3 }}
                className="relative text-6xl sm:text-8xl font-kaisei text-nomu-orange w-full px-4 z-10 max-w-2xl">
                Authentic Japanese Small Plates

              </motion.div>
              {/* <SpinningImage src="matcha.png" alt="matcha" speed="medium" className="w-[25vw] h-auto mt-10 absolute z-0 top-[45%] left-[90%]"/>
              <SpinningImage src="kushiyakiReal.png" alt="matcha" speed="slow" className="w-[20vw] h-auto mt-10 absolute z-0 top-[50%] left-[40%]"/>
              <SpinningImage src="sushi.webp" alt="matcha" speed="medium" className="w-[20vw] h-auto mt-10 absolute z-0 top-[40%] left-[70%]"/> */}
              
              <img src="food1.jpg" className="absolute w-[15vw] h-auto z-50 top-[50%] left-[20%] z-0"/>
              <img src="food2.jpg" className="absolute w-[15vw] h-auto z-50 top-[30%] left-[50%] z-0"/>
              
            </div>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: 'easeOut' }}
            viewport={{ once: true, amount: 0.3 }}
            className="flex flex-col items-center justify-center bg-neutral-900 text-black"
          >
            <div className="hidden lg:block">
              <div className="w-full text-9xl text-nomu-red font-kaisei text-center mt-0">View Our Menu</div>
              <FloatingCards />
            </div>
            <div className="block lg:hidden">
              <div className="w-full text-7xl text-nomu-red font-kaisei text-center mt-0">View Our Menu</div>
              <NotFloatingCards />
            </div>
          </motion.div>        
          <InfoFooter />
        </div>
        
      </main>


    </div>
  );
}

export default App;
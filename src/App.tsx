import {useEffect, useState} from 'react';
import Navbar from './components/NavBar';
import VideoBackgroundLanding from './components/VideoBackgroundLanding';
import {Helmet} from 'react-helmet';
import FloatingCards from './components/FloatingCard';
import InfoFooter from './components/InfoFooter';
//import SpinningImage from './components/SpinningImage';
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
          <div className="relative flex flex-col items-center justify-center h-screen">
            <div
              className="relative z-0 w-full h-screen bg-transparent flex flex-col items-start justify-between translate-y-4/10"
            >
              <motion.div 
                initial={{ rotateY: 90, opacity: 0 }}
                animate={{ rotateY: 0, opacity: 1}}
                transition={{ duration: 3 }}
                style={{transformStyle: "preserve-3d" }}
                viewport={{ once: true, amount: 0.3 }}
                className="flex flex-col items-center w-full lg:w-3/4 h-screen space-y-6 max-w-7xl bg-neutral-800 text-center -translate-y-1/12"
              >
                <div className="text-6xl md:text-8xl font-kaisei text-gray-300 w-full mt-10 px-4">Our Mission</div>
                {/* <div className="text-2xl max-w-3xl font-kaisei text-gray-300">
                  At Nomu, we keep things simple: good food, good drinks, good company. Our goal is to make dining fun, welcoming, and something everyone can enjoy together. Let's turn ordinary moments into unforgettable memories.
                </div> */}
                <div className="text-2xl md:text-3xl w-full max-w-2xl md:max-w-4xl mt-20 font-kaisei text-gray-300 space-y-4 text-center">
                  {/* <div className="mr-10 space-y-4">
                    <div>
                      At Nomu, our goal is simple: great food, great people, and a great time. We believe that high-quality dining doesn’t need to feel intimidating or out of reach. That’s why we put so much care into every dish — keeping it fresh, flavorful, and made to be enjoyed. Whether it’s your first visit or your fiftieth, we want every plate to feel like something special.
                    </div>
                    <div>
                      We see Nomu as more than just a place to eat — it’s a place to connect. Maybe you’re grabbing a quick bite after work, catching up with friends over skewers and sake, or making a night of it with family. However you come in, we want you to feel like you’ve stepped into a space that’s lively, welcoming, and made for sharing moments that matter.                  
                    </div>
                  </div>
                  <div className="space-y-4">
                    <div>
                      For us, food has always been about community. It’s the conversations across the table, the laughter that lingers longer than the meal, and the comfort of knowing there’s always a spot here for you. That’s why we put so much energy into creating an atmosphere that’s inclusive, fun, and designed to bring people together.                  </div>
                    <div>
                      At the end of the day, Nomu is about more than filling a table — it’s about creating memories. The flavors, the people, the late-night energy — they all come together to make each visit something worth holding onto. Because when you’re here, it’s not just dinner or drinks. It’s a moment you’ll want to come back to again and again.
                    </div>
                  </div> */}
                  {/* three */}
                  {/* <div className="mr-10 space-y-4">
                    <div>
                      At Nomu, our goal is simple: great food, great people, and a great time. We believe that high-quality dining doesn’t need to be out of reach, and we’re committed to serving dishes that are fresh, thoughtful, and full of flavor.
                    </div>
                    <div>
                      We see Nomu as more than just a place to eat — it’s a place to connect. Whether you’re stopping in for a quick bite, sharing skewers and sake with friends, or celebrating with family, we want you to feel at home in a lively and welcoming space.
                    </div>
                  </div>
                  <div className="space-y-4 flex flex-col items-center">
                    <div>
                      For us, food is about community. That’s why we work to create an atmosphere that’s inclusive, fun, and built around bringing people together. We look forward to sharing meals and memories with you!
                    </div>
                    <a 
                      href="/menu.pdf" 
                      target="_blank" 
                      rel="noopener noreferrer" 
                      className="mt-4 group relative inline-block px-4 py-2 rounded-md text-3xl max-w-3xl font-kaisei text-gray-300 ml-auto mr-40"
                      >
                      <span className="border-2 border-nomu-red rounded-md absolute inset-0 scale-0 group-hover:scale-100 transition-transform duration-300 ease-out pointer-events-none"></span>
                      View Our Menu
                    </a>
                  </div> */}
                  Small plates, good company, and a welcoming vibe - turning every meal into a shared experience
                </div>
                <a 
                  href="/menu.pdf" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="group relative inline-block px-4 py-2 rounded-md text-3xl max-w-3xl font-kaisei text-gray-300 ml-auto mr-40"
                  >
                  <span className="border-2 border-nomu-red rounded-md absolute inset-0 scale-0 group-hover:scale-100 transition-transform duration-300 ease-out pointer-events-none"></span>
                  View Our Menu
                </a>
                {/* <img alt="food" src="foodflip1.jpg" className="ml-auto z-10 w-1/3 h-auto transform rotate-90 -translate-y-1/10 -translate-x-4/10" /> */}
              </motion.div>
              {/* <img alt="Nomu Family" src="/nomuFamily.jpg" className="mt-30 w-[40vw] h-auto max-w-full"/> */}
            </div>
            <img alt="food" src="foodflip1.jpg" className="z-10 w-1/3 h-auto transform rotate-90 -translate-y-2/10" />
          </div>
          <div
            className="relative z-0 min-h-[80vh] w-screen bg-neutral-900 flex flex-col justify-between px-4 translate-y-1/10"
          >
            <div 
              className="flex flex-col items-center justify-start w-full max-w-4xl sm:max-w-4xl space-y-6 bg-neutral-900">
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
                      
              
            </div>
            <div className="flex flex-wrap p-2 justify-center m-2 items-start ">
                <img alt="food1" src="food1.jpg" className="w-auto h-[60vh] z-50 p-2"/>
                <img alt="food2" src="food2.jpg" className="w-auto h-[60vh] z-50 p-2"/>
                <img alt="food3" src="vertical.jpg" className="w-auto h-[60vh] z-50 p-2" />
                <img alt="food4" src="udon.jpg" className="w-auto h-[60vh] z-50 p-2" />
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
              <div className="w-full text-9xl text-white font-kaisei text-center mt-40">View Our Menu</div>
              <FloatingCards />
            </div>
            <div className="block lg:hidden">
              <div className="w-full text-7xl text-white font-kaisei text-center mt-40">View Our Menu</div>
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
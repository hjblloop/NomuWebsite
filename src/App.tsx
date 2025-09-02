import React from 'react';
import Navbar from './components/NavBar';
import VideoBackgroundLanding from './components/VideoBackgroundLanding';
import {Helmet} from 'react-helmet';

function App() {
  return (
    <div className="App scroll-smooth">
      <Helmet>
        <title>Delicious Bites | Best Restaurant in New York</title>
        <meta name="description" content="Authentic japanese bites in the heart of Jacksonville. Visit Nomu Izakaya today!" />
        <meta name="keywords" content="Japanese Food, Jacksonville restaurant, sushi, izakaya, dine-in, takeout" />
        <meta property="og:title" content="Nomu Izakaya" />
        <meta property="og:description" content="Come try our japanese food!" />
        <meta property="og:image" content="https://yourdomain.com/og-image.jpg" />
      </Helmet>
      <Navbar />
      
      {/* Hero Section with Background Video */}
      <section id="home">
        <VideoBackgroundLanding />
      </section>

      {/* Scroll Target Sections */}
      <section
        id="main-content"
        className="h-screen flex items-center justify-center bg-white text-black"
      >
        <h2 className="text-4xl">Thing1 Section</h2>
      </section>

      <section
        id="thing2"
        className="h-screen flex items-center justify-center bg-gray-100 text-black"
      >
        <h2 className="text-4xl">Thing2 Section</h2>
      </section>

      <section
        id="thing3"
        className="h-screen flex items-center justify-center bg-gray-200 text-black"
      >
        <h2 className="text-4xl">Thing3 Section</h2>
      </section>
    </div>
  );
}

export default App;
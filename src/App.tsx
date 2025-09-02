import React from 'react';
import Navbar from './components/NavBar';
import VideoBackgroundLanding from './components/VideoBackgroundLanding';

function App() {
  return (
    <div className="App scroll-smooth">
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
import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Features from './components/Features';
import Courses from './components/Courses';
import Testimonials from './components/Testimonials';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen bg-slate-950 font-sans selection:bg-brand-blue/30 selection:text-brand-blue">
      <Navbar />
      <main>
        <Hero />
        <About />
        <Features />
        <Courses />
        <Testimonials />
      </main>
      <Footer />
    </div>
  );
}

export default App;

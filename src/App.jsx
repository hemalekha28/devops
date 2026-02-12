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
    <div className="min-h-screen font-sans"
      style={{
        backgroundColor: 'var(--bg-primary)',
        color: 'var(--text-primary)'
      }}>
      <style>{`
        ::selection {
          background: linear-gradient(to right, #a855f7, #06b6d4);
          color: white;
        }
      `}</style>
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

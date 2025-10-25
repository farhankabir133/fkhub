import React, { useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import '@/index.css';
import CustomCursor from './components/CustomCursor';
import Navigation from './components/Navigation';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Portfolio from './components/Portfolio';
import Testimonials from './components/Testimonials';
import Blog from './components/Blog';
import Contact from './components/Contact';
import Footer from './components/Footer';
import Chatbot from './components/Chatbot';
import AdminDashboard from './components/AdminDashboard';

function App() {
  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: 'auto' });
  }, []);

  return (
    <div className="min-h-screen bg-white dark:bg-slate-900 transition-colors duration-500 light-mode">
      {/* Custom animated cursor */}
      <CustomCursor />

      {/* Site Navigation Bar */}
      <Navigation />

      {/* Animated Main Content */}
      <AnimatePresence mode="wait">
        <motion.main
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.6, ease: 'easeInOut' }}
          className="section-container"
        >
          {/* Hero Section */}
          <Hero />

          {/* About Section */}
          <About />

          {/* Skills Section */}
          <Skills />

          {/* Portfolio Section */}
          <Portfolio />

          {/* Testimonials Section */}
          <Testimonials />

          {/* Blog Section */}
          <Blog />

          {/* Contact Section */}
          <Contact />
        </motion.main>
      </AnimatePresence>

      {/* Footer Section */}
      <Footer />

      {/* Chatbot Widget */}
      <Chatbot />

      {/* Admin Dashboard (optional visibility logic can be added later) */}
      <AdminDashboard />
    </div>
  );
}

export default App;

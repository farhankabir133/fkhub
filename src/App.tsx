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
      <CustomCursor />
      <Navigation />
      <AnimatePresence>
        <motion.main initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.6 }} className="section-container">
          <Hero />
          <About />
          <Skills />
          <Portfolio />
          <Testimonials />
          <Blog />
          <Contact />
        </motion.main>
      </AnimatePresence>
      <Footer />
      <Chatbot />
      <AdminDashboard />
    </div>
  );
}

export default App;

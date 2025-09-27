import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X } from 'lucide-react';
import ThemeToggle from './ThemeToggle';

const Navigation: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  const navItems = [
    { name: 'Home', href: '#home' },
    { name: 'About', href: '#about' },
    { name: 'Skills', href: '#skills' },
    { name: 'Portfolio', href: '#portfolio' },
    { name: 'Testimonials', href: '#testimonials' },
    { name: 'Blog', href: '#blog' },
    { name: 'Contact', href: '#contact' },
  ];

  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsOpen(false);
  };

  const menuVariants = {
    open: { opacity: 1, scale: 1, transition: { staggerChildren: 0.07, delayChildren: 0.2 } },
    closed: { opacity: 0, scale: 0.95 },
  };

  const navItemVariants = {
    open: { y: 0, opacity: 1, transition: { y: { stiffness: 1000, velocity: -100 } } },
    closed: { y: 50, opacity: 0, transition: { y: { stiffness: 1000 } } },
  };

  return (
    <>
      {/* --- Desktop Floating Capsule Nav --- */}
      <motion.nav
        className="hidden md:flex fixed top-4 left-1/2 z-50 items-center justify-between p-2 rounded-full border shadow-lg
                   bg-white/60 border-slate-200/80 backdrop-blur-lg
                   dark:bg-slate-800/60 dark:border-slate-700/70"
        style={{ transform: 'translateX(-50%)' }}
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, type: 'spring', stiffness: 120, damping: 20 }}
      >
        <motion.div className="text-lg font-bold tracking-wide bg-gradient-to-r from-amber-400 to-orange-500 bg-clip-text text-transparent pl-4 pr-2">
          Farhan Kabir
        </motion.div>

        <div className="flex items-center space-x-1 pr-1">
          {navItems.map((item) => (
            <motion.button
              key={item.name}
              onClick={() => scrollToSection(item.href)}
              className="text-slate-800 dark:text-slate-200 hover:text-amber-500 dark:hover:text-amber-400 transition-colors duration-200 font-medium tracking-wide px-3 py-2 rounded-full focus:outline-none focus:ring-2 focus:ring-amber-400"
              whileHover={{ y: -2 }}
              data-cursor="pointer"
            >
              {item.name}
            </motion.button>
          ))}
          <ThemeToggle />
        </div>
      </motion.nav>

      {/* --- Mobile Floating Menu Button --- */}
      <motion.button
        onClick={() => setIsOpen(!isOpen)}
        className="md:hidden fixed top-5 right-5 z-50 p-3 rounded-full shadow-lg
                   bg-white/80 dark:bg-slate-800/80 backdrop-blur-md
                   focus:outline-none ring-2 ring-amber-400/50"
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.95 }}
        data-cursor="pointer"
      >
        <AnimatePresence mode="wait">
          <motion.div
            key={isOpen ? 'x' : 'menu'}
            initial={{ rotate: 45, opacity: 0 }}
            animate={{ rotate: 0, opacity: 1 }}
            exit={{ rotate: -45, opacity: 0 }}
            transition={{ duration: 0.2 }}
          >
            {isOpen ? <X className="w-6 h-6 text-slate-800 dark:text-slate-200" /> : <Menu className="w-6 h-6 text-slate-800 dark:text-slate-200" />}
          </motion.div>
        </AnimatePresence>
      </motion.button>

      {/* --- Mobile Full-Screen Overlay Menu --- */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            className="md:hidden fixed inset-0 z-40 bg-slate-100 dark:bg-slate-900 flex flex-col items-center justify-center"
            variants={menuVariants}
            initial="closed"
            animate="open"
            exit="closed"
          >
            <motion.div className="text-3xl font-bold tracking-wide bg-gradient-to-r from-amber-400 to-orange-500 bg-clip-text text-transparent absolute top-16">
              Farhan Kabir
            </motion.div>

            <motion.ul
              className="flex flex-col items-center justify-center space-y-4"
              variants={menuVariants}
            >
                {navItems.map((item) => (
                <motion.li key={item.name} variants={navItemVariants}>
                  <button
                      onClick={() => scrollToSection(item.href)}
                      className="w-full text-center py-3 text-2xl text-slate-700 dark:text-slate-300 hover:text-amber-500 dark:hover:text-amber-400 font-semibold tracking-wider"
                      data-cursor="pointer"
                  >
                      {item.name}
                  </button>
                </motion.li>
                ))}
            </motion.ul>
            <div className="absolute bottom-8">
              <ThemeToggle />
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Navigation;
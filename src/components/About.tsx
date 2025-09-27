import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Calendar, MapPin, Award, Users } from 'lucide-react';
import { experiences } from '../data/portfolio';

const About: React.FC = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const stats = [
    { icon: Award, label: 'Years Experience', value: '3+' },
    { icon: Users, label: 'Projects Completed', value: '50+' },
    { icon: Calendar, label: 'Happy Clients', value: '15+' },
    { icon: MapPin, label: 'Countries Served', value: '12+' },
  ];

  return (
    <section id="about" className="relative overflow-hidden py-20 bg-slate-50 dark:bg-slate-900 transition-colors duration-300">
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-slate-900 dark:text-white mb-4">
            About Me
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-amber-400 to-orange-500 mx-auto rounded-full" />
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Profile Image */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative order-last lg:order-first"
          >
            <div className="relative w-full max-w-md mx-auto">
              <motion.div
                className="absolute inset-0 bg-gradient-to-r from-amber-400 to-orange-500 rounded-2xl"
                animate={{ rotate: [0, 5, 0] }}
                transition={{ duration: 6, repeat: Infinity, repeatType: 'mirror' }}
              />
              <img
                src="https://images.pexels.com/photos/33137271/pexels-photo-33137271.png?auto=compress&cs=tinysrgb&w=600&h=600&fit=crop"
                alt="Farhan Kabir"
                className="relative w-full h-auto object-cover rounded-2xl shadow-2xl transform md:rotate-3 hover:rotate-0 transition-transform duration-300"
              />
              
              <motion.div
                className="absolute -top-4 -right-4 w-16 h-16 md:w-20 md:h-20 bg-amber-400 rounded-full flex items-center justify-center shadow-lg"
                animate={{ y: [0, -10, 0] }}
                transition={{ duration: 3, repeat: Infinity, repeatType: 'mirror' }}
              >
                <span className="text-2xl">🚀</span>
              </motion.div>
              
              <motion.div
                className="absolute -bottom-4 -left-4 w-14 h-14 md:w-16 md:h-16 bg-blue-500 rounded-full flex items-center justify-center shadow-lg"
                animate={{ y: [0, 10, 0] }}
                transition={{ duration: 3, repeat: Infinity, delay: 1, repeatType: 'mirror' }}
              >
                <span className="text-xl">💡</span>
              </motion.div>
            </div>
          </motion.div>

          {/* Content */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="space-y-6"
          >
            <h3 className="text-3xl font-bold text-slate-900 dark:text-white">
              Passionate Developer & Designer
            </h3>
            
            <div className="space-y-4 text-lg text-slate-600 dark:text-slate-300 leading-relaxed">
              <p>
                With over 3.5 years of experience in full-stack development and UI/UX design, 
                I specialize in creating digital experiences that are both beautiful and functional.
              </p>
              
              <p>
                My journey began with a curiosity about how things work, which led me to explore 
                the intersection of technology and design. Today, I help businesses and startups 
                bring their ideas to life through innovative web and mobile solutions.
              </p>
              
              <p>
                When I'm not coding or designing, you can find me exploring new technologies, 
                contributing to open-source projects, or sharing knowledge with the developer community.
              </p>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-2 gap-4 md:gap-6 pt-8">
              {stats.map((stat, index) => (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, y: 20 }}
                  animate={inView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.6, delay: 0.6 + index * 0.1 }}
                  className="text-center p-4 bg-slate-100 dark:bg-slate-800/50 rounded-xl hover:shadow-lg transition-shadow duration-300"
                >
                  <stat.icon className="w-8 h-8 text-amber-500 mx-auto mb-2" />
                  <div className="text-xl md:text-2xl font-bold text-slate-900 dark:text-white mb-1">
                    {stat.value}
                  </div>
                  <div className="text-sm text-slate-600 dark:text-slate-400">
                    {stat.label}
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>

        {/* Timeline */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="mt-20"
        >
          <h3 className="text-3xl font-bold text-slate-900 dark:text-white text-center mb-12">
            My Journey
          </h3>
          
          <div className="relative">
            {/* Desktop Timeline Line */}
            <div className="hidden md:block absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-gradient-to-b from-amber-400 to-orange-500 rounded-full" />
            {/* Mobile Timeline Line */}
            <div className="md:hidden absolute left-4 w-1 h-full bg-gradient-to-b from-amber-400 to-orange-500 rounded-full" />
            
            {experiences.map((exp, index) => (
              <motion.div
                key={exp.id}
                initial={{ opacity: 0, x: -50 }}
                animate={inView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.6, delay: 1 + index * 0.2 }}
                className="relative flex md:items-center mb-12 md:flex-row"
              >
                {/* Desktop: Alternating Layout */}
                <div className="hidden md:flex w-1/2 pr-8 text-right">
                    {index % 2 === 0 && (
                        <div className="bg-white dark:bg-slate-800 p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300">
                            <div className="flex items-center gap-2 mb-2 justify-end">
                                <span className="text-amber-500 font-semibold">{exp.period}</span>
                                {exp.current && <span className="px-2 py-1 bg-green-100 text-green-800 text-xs font-semibold rounded-full">Current</span>}
                            </div>
                            <h4 className="text-xl font-bold text-slate-900 dark:text-white mb-1">{exp.title}</h4>
                            <p className="text-amber-600 dark:text-amber-400 font-semibold mb-3">{exp.company}</p>
                            <p className="text-slate-600 dark:text-slate-300">{exp.description}</p>
                        </div>
                    )}
                </div>

                <div className="absolute left-1/2 transform -translate-x-1/2 w-4 h-4 bg-amber-400 rounded-full border-4 border-white dark:border-slate-900 shadow-lg hidden md:block" />

                <div className="hidden md:flex w-1/2 pl-8">
                    {index % 2 !== 0 && (
                        <div className="bg-white dark:bg-slate-800 p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300">
                            <div className="flex items-center gap-2 mb-2">
                                {exp.current && <span className="px-2 py-1 bg-green-100 text-green-800 text-xs font-semibold rounded-full">Current</span>}
                                <span className="text-amber-500 font-semibold">{exp.period}</span>
                            </div>
                            <h4 className="text-xl font-bold text-slate-900 dark:text-white mb-1">{exp.title}</h4>
                            <p className="text-amber-600 dark:text-amber-400 font-semibold mb-3">{exp.company}</p>
                            <p className="text-slate-600 dark:text-slate-300">{exp.description}</p>
                        </div>
                    )}
                </div>

                {/* Mobile: Single Column Layout */}
                <div className="md:hidden flex-1 ml-10">
                    <div className="absolute left-4 transform -translate-x-1/2 w-4 h-4 bg-amber-400 rounded-full border-4 border-white dark:border-slate-900 shadow-lg" />
                    <div className="bg-white dark:bg-slate-800 p-6 rounded-xl shadow-lg">
                        <div className="flex items-center gap-2 mb-2">
                            {exp.current && <span className="px-2 py-1 bg-green-100 text-green-800 text-xs font-semibold rounded-full">Current</span>}
                            <span className="text-amber-500 font-semibold">{exp.period}</span>
                        </div>
                        <h4 className="text-xl font-bold text-slate-900 dark:text-white mb-1">{exp.title}</h4>
                        <p className="text-amber-600 dark:text-amber-400 font-semibold mb-3">{exp.company}</p>
                        <p className="text-slate-600 dark:text-slate-300">{exp.description}</p>
                    </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;

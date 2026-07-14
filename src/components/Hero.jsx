import React from 'react';
import { motion } from 'framer-motion';
import { Typewriter } from 'react-simple-typewriter';
import { FaGithub, FaLinkedin } from 'react-icons/fa';
import { SiLeetcode, SiCodeforces } from 'react-icons/si';

const Hero = () => {
  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden pt-20">
      {/* Background glowing effects */}
      <div className="absolute top-1/4 left-1/4 w-72 h-72 bg-blue-500 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob"></div>
      <div className="absolute top-1/3 right-1/4 w-72 h-72 bg-purple-500 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob animation-delay-2000"></div>
      <div className="absolute bottom-1/4 left-1/3 w-72 h-72 bg-indigo-500 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob animation-delay-4000"></div>

      <div className="container mx-auto px-6 md:px-12 z-10">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-12 text-center lg:text-left">
          
          {/* Text Content */}
          <motion.div
            className="flex-1 order-2 lg:order-1"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-xl md:text-2xl text-blue-400 font-semibold mb-4 tracking-wider">HELLO, WORLD!</h2>
            <h1 className="text-5xl md:text-7xl font-extrabold text-white mb-6">
              I'm <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-500">Pranshu Bodara</span>
            </h1>
            
            <div className="text-xl md:text-3xl text-gray-300 font-medium mb-10 h-10">
              <Typewriter
                words={['Computer Engineering Student', 'DSA Enthusiast', 'Full Stack Developer']}
                loop={true}
                cursor
                cursorStyle='_'
                typeSpeed={70}
                deleteSpeed={50}
                delaySpeed={1000}
              />
            </div>

            <motion.div 
              className="flex justify-center lg:justify-start space-x-6 mb-12"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5, duration: 0.8 }}
            >
              <a href="https://github.com/Pranshu8916" target="_blank" rel="noreferrer" className="text-gray-400 hover:text-white hover:scale-110 transition-all duration-300">
                <FaGithub size={32} />
              </a>
              <a href="https://linkedin.com/in/pranshu-bodara" target="_blank" rel="noreferrer" className="text-gray-400 hover:text-blue-500 hover:scale-110 transition-all duration-300">
                <FaLinkedin size={32} />
              </a>
              <a href="https://leetcode.com/u/Pranshu_2007/" target="_blank" rel="noreferrer" className="text-gray-400 hover:text-yellow-500 hover:scale-110 transition-all duration-300">
                <SiLeetcode size={32} />
              </a>
              <a href="https://codeforces.com/profile/_Pranshu5811" target="_blank" rel="noreferrer" className="text-gray-400 hover:text-blue-500 hover:scale-110 transition-all duration-300">
                <SiCodeforces size={32} />
              </a>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8, duration: 0.8 }}
              className="flex flex-col sm:flex-row justify-center lg:justify-start items-center gap-4"
            >
              <a href="#projects" className="bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 text-white font-bold py-3 px-8 rounded-full shadow-lg shadow-blue-500/30 transition-all hover:scale-105 inline-block w-full sm:w-auto">
                View My Work
              </a>
              <a href="/resume.pdf" download="Pranshu_Bodara_CV.pdf" className="bg-transparent border-2 border-purple-500 hover:bg-purple-500/20 text-white font-bold py-3 px-8 rounded-full shadow-lg shadow-purple-500/10 transition-all hover:scale-105 inline-block w-full sm:w-auto">
                Download Resume
              </a>
            </motion.div>
          </motion.div>

          {/* Profile Picture */}
          <motion.div
            className="flex-1 order-1 lg:order-2 flex justify-center items-center"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <div className="relative w-64 h-64 md:w-80 md:h-80 group">
              {/* Outer Glowing Rings */}
              <div className="absolute -inset-1.5 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full blur opacity-40 group-hover:opacity-75 transition duration-1000 group-hover:duration-200 animate-tilt"></div>
              <div className="absolute -inset-0.5 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full opacity-30 group-hover:opacity-50 transition duration-500"></div>
              
              {/* Image Container */}
              <div className="relative w-full h-full rounded-full overflow-hidden border-4 border-slate-900 bg-slate-800">
                <img 
                  src="/profile.jpg" 
                  alt="Pranshu Bodara" 
                  className="w-full h-full object-cover object-center scale-100 group-hover:scale-105 transition-transform duration-500"
                />
              </div>
            </div>

            {/* Name below photo */}
            <div className="mt-6 text-center">
              <h3 className="text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-500">Pranshu Bodara</h3>
              <p className="text-gray-400 text-sm mt-1 tracking-widest uppercase">Computer Engineering Student</p>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
};

export default Hero;

import React from 'react';
import { FaGithub, FaLinkedin, FaHeart } from 'react-icons/fa';
import { SiLeetcode, SiCodeforces } from 'react-icons/si';

const Footer = () => {
  return (
    <footer className="bg-[#060a16] border-t border-gray-800 py-10">
      <div className="container mx-auto px-6 md:px-12 flex flex-col items-center">
        <div className="flex space-x-6 mb-6">
          <a href="https://github.com/Pranshu8916" target="_blank" rel="noreferrer" className="text-gray-400 hover:text-white hover:scale-110 transition-all duration-300">
            <FaGithub size={24} />
          </a>
          <a href="https://linkedin.com/in/pranshu-bodara" target="_blank" rel="noreferrer" className="text-gray-400 hover:text-emerald-500 hover:scale-110 transition-all duration-300">
            <FaLinkedin size={24} />
          </a>
          <a href="https://leetcode.com/u/Pranshu_2007/" target="_blank" rel="noreferrer" className="text-gray-400 hover:text-yellow-500 hover:scale-110 transition-all duration-300">
            <SiLeetcode size={24} />
          </a>
          <a href="https://codeforces.com/profile/_Pranshu5811" target="_blank" rel="noreferrer" className="text-gray-400 hover:text-emerald-500 hover:scale-110 transition-all duration-300">
            <SiCodeforces size={24} />
          </a>
        </div>
        
        <p className="text-gray-500 text-sm flex items-center">
          Designed and Built with <FaHeart className="text-red-500 mx-1" /> by Pranshu Bodara
        </p>
        <p className="text-gray-600 text-xs mt-2">
          &copy; {new Date().getFullYear()} All Rights Reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;

import React from 'react';
import { motion } from 'framer-motion';
import { FaGraduationCap } from 'react-icons/fa';

const educationData = [
  {
    institution: 'Pandit Deendayal Energy University (PDEU)',
    degree: 'B.Tech Computer Engineering',
    duration: '2024 - 2028',
    score: 'CPI: 9.19/10',
    description: 'Focusing on Core Computer Science subjects including DSA, OOP, DAA, and Web Technologies.'
  },
  {
    institution: 'Kaushal Vidhyabhavan',
    degree: 'Class XII (GSEB)',
    duration: '2023 - 2024',
    score: '84.8%',
    description: 'Completed Higher Secondary Education with a strong foundation in Mathematics and Sciences.'
  },
  {
    institution: 'Kaushal Vidhyabhavan',
    degree: 'Class X (GSEB)',
    duration: '2021 - 2022',
    score: '93.0%',
    description: 'Completed Secondary Education.'
  }
];

const Education = () => {
  return (
    <section id="education" className="py-20 relative">
      <div className="container mx-auto px-6 md:px-12">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-5xl font-bold mb-4">
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-500">Education</span>
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-blue-500 to-purple-500 mx-auto rounded-full"></div>
        </motion.div>

        <div className="max-w-4xl mx-auto relative">
          {/* Timeline Line */}
          <div className="absolute left-0 md:left-1/2 transform md:-translate-x-1/2 h-full w-1 bg-gradient-to-b from-blue-500 to-purple-600 rounded-full opacity-30"></div>

          {educationData.map((edu, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              className={`mb-12 flex flex-col md:flex-row items-center justify-between w-full ${
                index % 2 === 0 ? 'md:flex-row-reverse' : ''
              }`}
            >
              <div className="hidden md:block w-5/12"></div>
              
              {/* Timeline Icon */}
              <div className="z-20 flex items-center justify-center w-12 h-12 rounded-full bg-gray-900 border-4 border-blue-500 shadow-lg shadow-blue-500/50 absolute left-[-22px] md:left-1/2 md:transform md:-translate-x-1/2">
                <FaGraduationCap className="text-white text-xl" />
              </div>

              <div className="w-full md:w-5/12 pl-8 md:pl-0">
                <div className="glass p-6 rounded-xl hover:scale-105 transition-transform duration-300 relative group">
                  <div className="absolute inset-0 bg-gradient-to-r from-blue-600 to-purple-600 rounded-xl opacity-0 group-hover:opacity-10 transition-opacity duration-300"></div>
                  <h3 className="text-xl font-bold text-white mb-1">{edu.degree}</h3>
                  <h4 className="text-blue-400 font-medium mb-3">{edu.institution}</h4>
                  <div className="flex justify-between items-center mb-4 text-sm text-gray-400">
                    <span className="bg-gray-800 px-3 py-1 rounded-full text-xs border border-gray-700">{edu.duration}</span>
                    <span className="font-semibold text-purple-400">{edu.score}</span>
                  </div>
                  <p className="text-gray-300 text-sm">
                    {edu.description}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Education;

import React from 'react';
import { motion } from 'framer-motion';
import { FaTrophy, FaMedal, FaStar, FaCertificate } from 'react-icons/fa';

const achievements = [
  {
    icon: <FaTrophy className="text-yellow-400 text-3xl" />,
    title: 'HACKOUT\'25',
    description: 'Participated in the prestigious Hackathon organized by DA-IICT.',
    link: '/hackout-certificate.pdf'
  },
  {
    icon: <FaStar className="text-blue-400 text-3xl" />,
    title: 'Codeforces Community',
    description: 'Active Doubt Solver helping peers understand complex algorithmic problems.'
  },
  {
    icon: <FaMedal className="text-purple-400 text-3xl" />,
    title: 'Extracurriculars',
    description: 'Civic Internship at Atmiya Trust, Gandhinagar. Regular Coding Contest Participant.',
    link: '/atmiya-certificate.pdf'
  },
  {
    icon: <FaCertificate className="text-green-400 text-3xl" />,
    title: 'MATLAB Innovation Challenge',
    description: 'Participated in "Code the Future" workshop organized by PDEU, sponsored by MathWorks & IEEE.',
    link: '/matlab-certificate.pdf'
  }
];

const Achievements = () => {
  return (
    <section id="achievements" className="py-20 relative bg-[#0c1222] z-10">
      <div className="container mx-auto px-6 md:px-12">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-5xl font-bold mb-4">
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-500">Achievements</span>
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-blue-500 to-purple-500 mx-auto rounded-full"></div>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {achievements.map((item, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.2 }}
              className="glass p-8 rounded-2xl flex flex-col items-center text-center hover:-translate-y-2 transition-transform duration-300"
            >
              <div className="w-16 h-16 rounded-full bg-gray-800 flex items-center justify-center mb-6 shadow-lg shadow-black/50">
                {item.icon}
              </div>
              <h3 className="text-xl font-bold text-white mb-3">{item.title}</h3>
              <p className="text-gray-400 mb-4">{item.description}</p>
              {item.link && (
                <a 
                  href={item.link} 
                  target="_blank" 
                  rel="noreferrer" 
                  className="mt-auto text-sm font-semibold text-blue-400 hover:text-blue-300 flex items-center transition-colors"
                >
                  View Certificate <span className="ml-1">&rarr;</span>
                </a>
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Achievements;

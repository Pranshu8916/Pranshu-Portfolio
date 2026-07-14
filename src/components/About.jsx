import React from 'react';
import { motion } from 'framer-motion';

const About = () => {
  return (
    <section id="about" className="py-20 relative z-10">
      <div className="container mx-auto px-6 md:px-12">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-5xl font-bold mb-4">
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-500">About Me</span>
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-blue-500 to-purple-500 mx-auto rounded-full"></div>
        </motion.div>

        <div className="flex flex-col md:flex-row items-center gap-12">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="w-full md:w-1/2"
          >
            <div className="relative group">
              <div className="absolute -inset-1 bg-gradient-to-r from-blue-600 to-purple-600 rounded-xl blur opacity-25 group-hover:opacity-50 transition duration-1000 group-hover:duration-200"></div>
              <div className="relative glass p-8 rounded-xl">
                <p className="text-gray-300 text-lg leading-relaxed mb-6">
                  I am a 3rd-year Computer Engineering student at Pandit Deendayal Energy University (PDEU) with a CPI of 9.19/10. I am passionate about Data Structures & Algorithms, Competitive Programming, Web Development, and building impactful software solutions.
                </p>
                <p className="text-gray-300 text-lg leading-relaxed mb-6">
                  My core strength lies in problem-solving and algorithmic thinking. Having solved over <strong className="text-white font-bold">600++</strong> data structure and algorithm problems across platforms like LeetCode, Codeforces, and Codechef, I have achieved a <strong className="text-white font-bold">DSA Rating of 1701</strong> (Global Rank: <strong className="text-white font-bold">598</strong>, Country Rank: <strong className="text-white font-bold">577</strong>) and developed a strong intuition for writing highly optimized and efficient code.
                </p>
                <p className="text-gray-300 text-lg leading-relaxed">
                  Beyond simply solving problems, I actively contribute to the competitive programming community as a doubt solver on Codeforces, helping peers break down complex logic. Whether it's dissecting intricate algorithms or architecting full-stack web applications, I bring logical precision, dedication, and a keen eye for detail to every project I take on.
                </p>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="w-full md:w-1/2 flex justify-center"
          >
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-6 w-full">
              {[
                { label: 'DSA Problems Solved', value: '600++' },
                { label: 'LeetCode Rating', value: '1680' },
                { label: 'Codeforces Rating', value: '960' },
                { label: 'Codechef Rating', value: '1275' },
                { label: 'DSA Rating (Highest)', value: '1701' },
                { label: 'CPI (PDEU)', value: '9.19/10' },
              ].map((stat, idx) => (
                <div key={idx} className="glass p-6 rounded-xl flex flex-col items-center justify-center text-center hover:scale-105 transition-transform duration-300">
                  <h3 className="text-2xl md:text-3xl font-bold text-white mb-2 bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-500">
                    {stat.value}
                  </h3>
                  <p className="text-gray-400 text-xs md:text-sm">{stat.label}</p>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;

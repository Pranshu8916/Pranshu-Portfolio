import React from 'react';
import { motion } from 'framer-motion';

const skillsData = [
  { category: 'Programming Languages', items: [
    { name: 'C++', level: 90 },
    { name: 'C', level: 85 },
    { name: 'JavaScript', level: 80 },
  ]},
  { category: 'Core Concepts', items: [
    { name: 'Data Structures & Algorithms', level: 95 },
    { name: 'Object Oriented Programming', level: 85 },
  ]},
  { category: 'Web Technologies', items: [
    { name: 'ReactJS', level: 55 },
    { name: 'NodeJS', level: 50 },
    { name: 'HTML/CSS', level: 60 },
  ]},
  { category: 'Database & Tools', items: [
    { name: 'MongoDB', level: 50 },
    { name: 'Git & GitHub', level: 60 },
  ]},
];

const SkillBar = ({ name, level }) => {
  return (
    <div className="mb-6">
      <div className="flex justify-between items-center mb-2">
        <span className="text-gray-300 font-medium">{name}</span>
        <span className="text-emerald-400 text-sm">{level}%</span>
      </div>
      <div className="w-full bg-gray-800 rounded-full h-2.5 overflow-hidden border border-gray-700">
        <motion.div
          initial={{ width: 0 }}
          whileInView={{ width: `${level}%` }}
          viewport={{ once: true }}
          transition={{ duration: 1, delay: 0.2, ease: "easeOut" }}
          className="h-2.5 rounded-full bg-gradient-to-r from-emerald-500 to-teal-500"
        ></motion.div>
      </div>
    </div>
  );
};

const Skills = () => {
  return (
    <section id="skills" className="py-20 relative z-10 bg-[#0c1222]">
      <div className="container mx-auto px-6 md:px-12">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-5xl font-bold mb-4">
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-emerald-400 to-teal-500">My Skills</span>
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-emerald-500 to-teal-500 mx-auto rounded-full"></div>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          {skillsData.map((skillGroup, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              className="glass p-8 rounded-xl"
            >
              <h3 className="text-xl font-bold text-white mb-6 border-b border-gray-700 pb-3">{skillGroup.category}</h3>
              <div>
                {skillGroup.items.map((skill, i) => (
                  <SkillBar key={i} name={skill.name} level={skill.level} />
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;

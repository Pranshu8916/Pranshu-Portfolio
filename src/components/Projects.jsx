import React from 'react';
import { motion } from 'framer-motion';
import { FaGithub, FaExternalLinkAlt } from 'react-icons/fa';

const projectsData = [
  {
    title: 'Student Management System',
    description: 'A comprehensive web-based student record management system with CRUD operations, search functionality, and a user-friendly dashboard.',
    tags: ['React', 'Node.js', 'MongoDB', 'Express'],
    github: '#',
    live: '#'
  },
  {
    title: 'Personal Portfolio Website',
    description: 'A modern, responsive portfolio website featuring advanced animations, glassmorphism UI, and dark theme to showcase skills and projects.',
    tags: ['React', 'Tailwind CSS', 'Framer Motion', 'Vite'],
    github: 'https://github.com/Pranshu8916/Pranshu-Portfolio',
    live: '#'
  },
  {
    title: 'DSA Visualizer',
    description: 'An interactive web application to visualize various Data Structures and Algorithms, helping students understand complex concepts through step-by-step graphical animations.',
    tags: ['JavaScript', 'HTML/CSS', 'Algorithms', 'Visualization'],
    github: 'https://github.com/Pranshu8916/DSA-Visualizer',
    live: '#'
  }
];

const Projects = () => {
  return (
    <section id="projects" className="py-20 relative">
      <div className="container mx-auto px-6 md:px-12">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-5xl font-bold mb-4">
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-500">My Projects</span>
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-blue-500 to-purple-500 mx-auto rounded-full"></div>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {projectsData.map((project, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: idx * 0.2 }}
              className="group relative"
            >
              <div className="absolute -inset-0.5 bg-gradient-to-r from-blue-500 to-purple-600 rounded-2xl blur opacity-30 group-hover:opacity-70 transition duration-500"></div>
              <div className="relative glass h-full p-8 rounded-2xl flex flex-col justify-between">
                <div>
                  <h3 className="text-2xl font-bold text-white mb-3 group-hover:text-blue-400 transition-colors duration-300">{project.title}</h3>
                  <p className="text-gray-300 mb-6 line-clamp-3">{project.description}</p>
                  
                  <div className="flex flex-wrap gap-2 mb-8">
                    {project.tags.map((tag, tagIdx) => (
                      <span key={tagIdx} className="text-xs font-semibold px-3 py-1 bg-gray-800 text-blue-300 rounded-full border border-gray-700">
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="flex space-x-4">
                  <a href={project.github} className="flex items-center text-gray-400 hover:text-white transition-colors duration-300">
                    <FaGithub className="mr-2" /> Code
                  </a>
                  <a href={project.live} className="flex items-center text-gray-400 hover:text-blue-400 transition-colors duration-300">
                    <FaExternalLinkAlt className="mr-2" /> Live Demo
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;

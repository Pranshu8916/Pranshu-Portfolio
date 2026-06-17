import React from 'react';
import { motion } from 'framer-motion';
import { FaEnvelope, FaPhone, FaMapMarkerAlt } from 'react-icons/fa';

const Contact = () => {
  return (
    <section id="contact" className="py-20 relative">
      <div className="container mx-auto px-6 md:px-12">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-5xl font-bold mb-4">
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-500">Get In Touch</span>
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-blue-500 to-purple-500 mx-auto rounded-full"></div>
        </motion.div>

        <div className="flex flex-col md:flex-row gap-12 max-w-5xl mx-auto">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="w-full md:w-1/3"
          >
            <div className="glass p-8 rounded-2xl h-full flex flex-col justify-center space-y-8">
              <h3 className="text-2xl font-bold text-white mb-2">Contact Info</h3>
              <div className="flex items-start space-x-4">
                <div className="text-blue-400 mt-1"><FaEnvelope size={20} /></div>
                <div>
                  <h4 className="text-gray-400 text-sm">Email</h4>
                  <a href="mailto:pranshubodara200@gmail.com" className="text-white hover:text-blue-400 transition-colors">pranshubodara200@gmail.com</a>
                </div>
              </div>
              <div className="flex items-start space-x-4">
                <div className="text-purple-400 mt-1"><FaPhone size={20} /></div>
                <div>
                  <h4 className="text-gray-400 text-sm">Phone</h4>
                  <a href="tel:+919712051337" className="text-white hover:text-purple-400 transition-colors">+91 9712051337</a>
                </div>
              </div>
              <div className="flex items-start space-x-4">
                <div className="text-indigo-400 mt-1"><FaMapMarkerAlt size={20} /></div>
                <div>
                  <h4 className="text-gray-400 text-sm">Location</h4>
                  <p className="text-white">PDEU, Gandhinagar, Gujarat</p>
                </div>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="w-full md:w-2/3"
          >
            <form className="glass p-8 rounded-2xl flex flex-col space-y-6" onSubmit={(e) => e.preventDefault()}>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="name" className="block text-gray-400 text-sm mb-2">Your Name</label>
                  <input type="text" id="name" className="w-full bg-gray-900/50 border border-gray-700 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-blue-500 transition-colors" placeholder="John Doe" />
                </div>
                <div>
                  <label htmlFor="email" className="block text-gray-400 text-sm mb-2">Your Email</label>
                  <input type="email" id="email" className="w-full bg-gray-900/50 border border-gray-700 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-blue-500 transition-colors" placeholder="john@example.com" />
                </div>
              </div>
              <div>
                <label htmlFor="message" className="block text-gray-400 text-sm mb-2">Message</label>
                <textarea id="message" rows="5" className="w-full bg-gray-900/50 border border-gray-700 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-blue-500 transition-colors" placeholder="Hello Pranshu, I would like to..."></textarea>
              </div>
              <button type="submit" className="bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 text-white font-bold py-3 px-8 rounded-lg shadow-lg shadow-blue-500/30 transition-all hover:scale-[1.02] active:scale-95">
                Send Message
              </button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;

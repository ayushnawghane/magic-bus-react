import React from 'react';
import { motion } from 'framer-motion';
import heroImg from '../../../public/ngo-images/1.JPG';

export default function HeroSection() {
  const fadeInUp = {
    initial: { opacity: 0, y: 30 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.6 }
  };

  const staggerContainer = {
    animate: {
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-yellow-400 via-yellow-400 to-amber-400 relative overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-24 -right-24 w-96 h-96 bg-yellow-300 rounded-full opacity-30 blur-3xl"></div>
        <div className="absolute -bottom-24 -left-24 w-96 h-96 bg-amber-400 rounded-full opacity-30 blur-3xl"></div>
      </div>

      <div className="relative max-w-7xl mx-auto px-6 py-12 lg:py-16">
        <div className="grid lg:grid-cols-5 gap-8 items-center">
          {/* Left Content - Smaller */}
          <motion.div 
            className="lg:col-span-2 space-y-6"
            variants={staggerContainer}
            initial="initial"
            animate="animate"
          >
            {/* Main Heading - Smaller */}
            <motion.div variants={fadeInUp} className="space-y-1">
              <h1 className="text-3xl lg:text-4xl xl:text-5xl font-bold leading-tight">
                <span className="text-black">Empowering</span>
                <br />
                <span className="text-red-500">Adolescents</span>
              </h1>
              <h2 className="text-3xl lg:text-4xl xl:text-5xl font-bold text-black">
                Through Technology
              </h2>
            </motion.div>

            {/* Description - Smaller */}
            <motion.p 
              variants={fadeInUp}
              className="text-sm lg:text-base text-gray-800 leading-relaxed"
            >
              India's first <span className="font-bold">AI-powered</span> platform transforming adolescents into skilled professionals.
            </motion.p>

            {/* Stats */}
            <motion.div 
              variants={fadeInUp}
              className="flex flex-wrap gap-6 lg:gap-8"
            >
              <div>
                <div className="text-3xl lg:text-4xl font-bold text-black">25+</div>
                <div className="text-xs text-gray-700 font-medium mt-1">Years Impact</div>
              </div>
              <div>
                <div className="text-3xl lg:text-4xl font-bold text-black">15</div>
                <div className="text-xs text-gray-700 font-medium mt-1">States</div>
              </div>
              <div>
                <div className="text-3xl lg:text-4xl font-bold text-black">92%</div>
                <div className="text-xs text-gray-700 font-medium mt-1">Job Placement</div>
              </div>
            </motion.div>

            {/* CTA Buttons - More spacing above */}
            <motion.div 
              variants={fadeInUp}
              className="flex flex-wrap gap-3 pt-4"
            >
              <motion.button
                className="bg-black text-yellow-400 px-6 py-3 rounded-full font-semibold text-sm shadow-lg hover:shadow-xl transition-all"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Donate
              </motion.button>
              <motion.button
                className="bg-transparent border-2 border-black text-black px-6 py-3 rounded-full font-semibold text-sm hover:bg-black hover:text-yellow-400 transition-all"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Partner With Us
              </motion.button>
              <motion.button
                className="bg-transparent border-2 border-black text-black px-6 py-3 rounded-full font-semibold text-sm hover:bg-black hover:text-yellow-400 transition-all"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Get Involved
              </motion.button>
            </motion.div>
          </motion.div>

          {/* Right Content - Larger Image Space */}
          <motion.div 
            className="lg:col-span-3 relative"
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <div className="relative">
              {/* Main Image with Textured Border */}
              <div className="relative rounded-[3rem] overflow-hidden shadow-2xl">
                <motion.img
                  src={heroImg}
                  alt="Youth empowerment"
                  className="w-full h-[600px] object-cover"
                  initial={{ opacity: 0, scale: 0.98 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.6, delay: 0.4 }}
                />
              </div>

              {/* Feature Cards - Positioned over image bottom */}
              <motion.div 
                className="absolute -bottom-6 left-1/2 transform -translate-x-1/2 w-11/12 grid grid-cols-3 gap-3"
                variants={staggerContainer}
                initial="initial"
                animate="animate"
              >
                <motion.div 
                  variants={fadeInUp}
                  className="bg-white rounded-xl p-3 text-center shadow-xl hover:shadow-2xl transition-shadow backdrop-blur-sm bg-opacity-95"
                  whileHover={{ y: -5 }}
                >
                  <div className="bg-purple-100 w-10 h-10 rounded-lg mx-auto mb-2 flex items-center justify-center">
                    <svg className="w-5 h-5 text-purple-600" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M10 3.5a1.5 1.5 0 013 0V4a1 1 0 001 1h3a1 1 0 011 1v3a1 1 0 01-1 1h-.5a1.5 1.5 0 000 3h.5a1 1 0 011 1v3a1 1 0 01-1 1h-3a1 1 0 01-1-1v-.5a1.5 1.5 0 00-3 0v.5a1 1 0 01-1 1H6a1 1 0 01-1-1v-3a1 1 0 00-1-1h-.5a1.5 1.5 0 010-3H4a1 1 0 001-1V6a1 1 0 011-1h3a1 1 0 001-1v-.5z"/>
                    </svg>
                  </div>
                  <div className="text-xs font-semibold text-gray-800">AI Training</div>
                </motion.div>

                <motion.div 
                  variants={fadeInUp}
                  className="bg-white rounded-xl p-3 text-center shadow-xl hover:shadow-2xl transition-shadow backdrop-blur-sm bg-opacity-95"
                  whileHover={{ y: -5 }}
                >
                  <div className="bg-blue-100 w-10 h-10 rounded-lg mx-auto mb-2 flex items-center justify-center">
                    <svg className="w-5 h-5 text-blue-600" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M3 5a2 2 0 012-2h10a2 2 0 012 2v8a2 2 0 01-2 2h-2.22l.123.489.804.804A1 1 0 0113 18H7a1 1 0 01-.707-1.707l.804-.804L7.22 15H5a2 2 0 01-2-2V5zm5.771 7H5V5h10v7H8.771z" clipRule="evenodd"/>
                    </svg>
                  </div>
                  <div className="text-xs font-semibold text-gray-800">Digital Skills</div>
                </motion.div>

                <motion.div 
                  variants={fadeInUp}
                  className="bg-white rounded-xl p-3 text-center shadow-xl hover:shadow-2xl transition-shadow backdrop-blur-sm bg-opacity-95"
                  whileHover={{ y: -5 }}
                >
                  <div className="bg-pink-100 w-10 h-10 rounded-lg mx-auto mb-2 flex items-center justify-center">
                    <svg className="w-5 h-5 text-pink-600" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M2 11a1 1 0 011-1h2a1 1 0 011 1v5a1 1 0 01-1 1H3a1 1 0 01-1-1v-5zM8 7a1 1 0 011-1h2a1 1 0 011 1v9a1 1 0 01-1 1H9a1 1 0 01-1-1V7zM14 4a1 1 0 011-1h2a1 1 0 011 1v12a1 1 0 01-1 1h-2a1 1 0 01-1-1V4z"/>
                    </svg>
                  </div>
                  <div className="text-xs font-semibold text-gray-800">Career Ready</div>
                </motion.div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
}
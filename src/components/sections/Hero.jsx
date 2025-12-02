import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-scroll';
import { ArrowRight, Github, Linkedin, Mail } from 'lucide-react';
import Button from '../ui/Button';
import { personalInfo } from '../../data';
// Import the Profile picture from assets
import ProfileImg from '../../assets/Photos/Profile.jpg';

const Hero = () => {
  return (
    <section id="home" className="min-h-screen flex items-center pt-20 bg-gradient-to-b from-blue-50 to-white overflow-hidden relative">
      {/* Background Elements */}
      <div className="absolute top-20 right-0 w-96 h-96 bg-blue-200 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-blob"></div>
      <div className="absolute top-40 -left-20 w-96 h-96 bg-purple-200 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-blob animation-delay-2000"></div>
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="flex flex-col-reverse lg:flex-row items-center justify-between gap-12">
          
          {/* Text Content */}
          <motion.div 
            className="lg:w-1/2 text-center lg:text-left"
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <span className="inline-block px-4 py-2 rounded-full bg-blue-100 text-primary font-semibold text-sm mb-6">
              👋 Hello, I'm
            </span>
            <h1 className="text-4xl md:text-6xl font-bold text-slate-900 mb-4 leading-tight">
              {personalInfo.name}
            </h1>
            <h2 className="text-2xl md:text-3xl text-slate-600 font-medium mb-6">
              {personalInfo.title}
            </h2>
            <p className="text-lg text-slate-600 mb-8 leading-relaxed max-w-2xl mx-auto lg:mx-0">
              {personalInfo.bio}
            </p>
            
            <div className="flex flex-wrap justify-center lg:justify-start gap-4 mb-10">
              <Button variant="primary" onClick={() => document.getElementById('contact').scrollIntoView({ behavior: 'smooth' })}>
                Contact Me
              </Button>
              <Button variant="outline" onClick={() => document.getElementById('projects').scrollIntoView({ behavior: 'smooth' })}>
                View Projects
              </Button>
            </div>

            <div className="flex justify-center lg:justify-start gap-6">
              <a href={personalInfo.github} target="_blank" rel="noopener noreferrer" className="text-slate-500 hover:text-primary transition-colors">
                <Github className="w-6 h-6" />
              </a>
              <a href={personalInfo.linkedin} target="_blank" rel="noopener noreferrer" className="text-slate-500 hover:text-primary transition-colors">
                <Linkedin className="w-6 h-6" />
              </a>
              <a href={`mailto:${personalInfo.email}`} className="text-slate-500 hover:text-primary transition-colors">
                <Mail className="w-6 h-6" />
              </a>
            </div>
          </motion.div>

          {/* Image Content */}
          <motion.div 
            className="lg:w-1/2 flex justify-center"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <div className="relative w-72 h-72 md:w-96 md:h-96">
              <div className="absolute inset-0 bg-gradient-to-tr from-primary to-purple-500 rounded-full opacity-20 blur-2xl animate-pulse"></div>
              <div className="relative w-full h-full rounded-full border-4 border-white shadow-2xl overflow-hidden bg-slate-200">
                {/* Placeholder for profile image */}
                <img 
                  src={ProfileImg}
                  alt="Profile" 
                  className="w-full h-full object-cover"
                />
              </div>
              
              {/* Floating Badges */}
              <motion.div 
                className="absolute -top-4 -right-4 bg-white p-4 rounded-xl shadow-lg flex items-center gap-3"
                animate={{ y: [0, -10, 0] }}
                transition={{ repeat: Infinity, duration: 3 }}
              >
                <div className="w-10 h-10 bg-orange-100 rounded-full flex items-center justify-center text-orange-600 font-bold">
                  AWS
                </div>
                <div>
                  <p className="text-xs text-slate-500">Certified</p>
                  <p className="font-bold text-slate-800">Solutions Architect</p>
                </div>
              </motion.div>

              <motion.div 
                className="absolute -bottom-4 -left-4 bg-white p-4 rounded-xl shadow-lg flex items-center gap-3"
                animate={{ y: [0, 10, 0] }}
                transition={{ repeat: Infinity, duration: 4, delay: 1 }}
              >
                <div className="w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center text-blue-600 font-bold">
                  Dev
                </div>
                <div>
                  <p className="text-xs text-slate-500">Full Stack</p>
                  <p className="font-bold text-slate-800">Engineer</p>
                </div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;

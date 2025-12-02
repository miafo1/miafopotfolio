import React from 'react';
import { motion } from 'framer-motion';
import SectionTitle from '../ui/SectionTitle';
import Card from '../ui/Card';
import { personalInfo } from '../../data';
import { GraduationCap, MapPin, Languages } from 'lucide-react';

const About = () => {
  return (
    <section id="about" className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <SectionTitle title="About Me" subtitle="Get to know me better" />
        
        <div className="flex flex-col md:flex-row gap-12 items-start">
          <div className="md:w-1/2">
            <h3 className="text-2xl font-bold text-slate-900 mb-4">Who am I?</h3>
            <p className="text-slate-600 mb-6 leading-relaxed">
              {personalInfo.bio}
            </p>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8">
              <div className="flex items-center gap-3 text-slate-700">
                <MapPin className="text-primary w-5 h-5" />
                <span>{personalInfo.location}</span>
              </div>
              <div className="flex items-center gap-3 text-slate-700">
                <Languages className="text-primary w-5 h-5" />
                <span>English & French (Bilingual)</span>
              </div>
            </div>
          </div>
          
          <div className="md:w-1/2 w-full">
            <h3 className="text-2xl font-bold text-slate-900 mb-6">Education</h3>
            <Card className="p-6 border-l-4 border-l-primary">
              <div className="flex items-start gap-4">
                <div className="bg-blue-100 p-3 rounded-full text-primary">
                  <GraduationCap className="w-6 h-6" />
                </div>
                <div>
                  <h4 className="text-xl font-bold text-slate-900">Bachelor’s Degree in Software Engineering</h4>
                  <p className="text-slate-600 mb-2">African Institute of Computer Sciences (IAI), Yaoundé</p>
                  <span className="inline-block bg-slate-100 text-slate-600 text-sm px-3 py-1 rounded-full">2024</span>
                </div>
              </div>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;

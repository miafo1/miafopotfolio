import React from 'react';
import SectionTitle from '../ui/SectionTitle';
import { experience } from '../../data';
import { Briefcase } from 'lucide-react';

const Experience = () => {
  return (
    <section id="experience" className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <SectionTitle title="Work Experience" subtitle="My professional journey" />
        
        <div className="max-w-3xl mx-auto relative border-l-2 border-slate-200 ml-4 md:ml-auto space-y-12">
          {experience.map((job, index) => (
            <div key={index} className="relative pl-8 md:pl-12">
              {/* Timeline Dot */}
              <div className="absolute -left-[9px] top-0 w-5 h-5 rounded-full bg-white border-4 border-primary"></div>
              
              <div className="flex flex-col md:flex-row md:items-start justify-between gap-2 mb-2">
                <h3 className="text-xl font-bold text-slate-900">{job.role}</h3>
                <span className="inline-block px-3 py-1 rounded-full bg-blue-50 text-primary text-sm font-medium whitespace-nowrap">
                  {job.period}
                </span>
              </div>
              
              <h4 className="text-lg font-medium text-slate-700 mb-3 flex items-center gap-2">
                <Briefcase className="w-4 h-4 text-slate-400" />
                {job.company}
              </h4>
              
              <p className="text-slate-600 mb-4">
                {job.description}
              </p>
              
              <div className="flex flex-wrap gap-2">
                {job.technologies.map((tech, techIndex) => (
                  <span key={techIndex} className="text-xs text-slate-500 bg-slate-100 px-2 py-1 rounded">
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;

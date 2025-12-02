import React from 'react';
import { motion } from 'framer-motion';
import SectionTitle from '../ui/SectionTitle';
import Card from '../ui/Card';
import { skills } from '../../data';

const SkillBar = ({ name, level }) => (
  <div className="mb-4">
    <div className="flex justify-between mb-1">
      <span className="text-base font-medium text-slate-700">{name}</span>
      <span className="text-sm font-medium text-slate-500">{level}%</span>
    </div>
    <div className="w-full bg-slate-200 rounded-full h-2.5">
      <motion.div 
        className="bg-primary h-2.5 rounded-full" 
        initial={{ width: 0 }}
        whileInView={{ width: `${level}%` }}
        viewport={{ once: true }}
        transition={{ duration: 1, ease: "easeOut" }}
      />
    </div>
  </div>
);

const Skills = () => {
  return (
    <section id="skills" className="py-20 bg-slate-50">
      <div className="container mx-auto px-6">
        <SectionTitle title="My Skills" subtitle="Technologies and tools I work with" />
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <Card className="p-8">
            <h3 className="text-xl font-bold text-slate-900 mb-6 border-b pb-2">Programming & Frameworks</h3>
            {skills.programming.map((skill) => (
              <SkillBar key={skill.name} name={skill.name} level={skill.level} />
            ))}
          </Card>
          
          <Card className="p-8">
            <h3 className="text-xl font-bold text-slate-900 mb-6 border-b pb-2">Cloud & Security</h3>
            {skills.cloudSecurity.map((skill) => (
              <SkillBar key={skill.name} name={skill.name} level={skill.level} />
            ))}
          </Card>
          
          <Card className="p-8">
            <h3 className="text-xl font-bold text-slate-900 mb-6 border-b pb-2">Other Skills</h3>
            {skills.other.map((skill) => (
              <SkillBar key={skill.name} name={skill.name} level={skill.level} />
            ))}
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Skills;

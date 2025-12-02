import React from 'react';
import SectionTitle from '../ui/SectionTitle';
import Card from '../ui/Card';
import Button from '../ui/Button';
import { projects } from '../../data';
import { Github, ExternalLink } from 'lucide-react';

const Projects = () => {
  return (
    <section id="projects" className="py-20 bg-slate-50">
      <div className="container mx-auto px-6">
        <SectionTitle title="Featured Projects" subtitle="Some of my recent work" />
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <Card key={index} className="flex flex-col h-full">
              <div className="h-48 bg-slate-200 relative overflow-hidden group">
                {/* Placeholder for project image */}
                <div className="absolute inset-0 flex items-center justify-center bg-slate-300 text-slate-500 font-medium text-lg">
                  {project.title} Image
                </div>
                <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center gap-4">
                  <a href={project.link} className="p-2 bg-white rounded-full hover:bg-primary hover:text-white transition-colors">
                    <Github className="w-6 h-6" />
                  </a>
                  <a href={project.link} className="p-2 bg-white rounded-full hover:bg-primary hover:text-white transition-colors">
                    <ExternalLink className="w-6 h-6" />
                  </a>
                </div>
              </div>
              
              <div className="p-6 flex flex-col flex-grow">
                <h3 className="text-xl font-bold text-slate-900 mb-2">{project.title}</h3>
                <p className="text-slate-600 mb-4 flex-grow">{project.description}</p>
                
                <div className="flex flex-wrap gap-2 mt-auto">
                  {project.tags.map((tag, tagIndex) => (
                    <span key={tagIndex} className="text-xs font-medium px-2.5 py-0.5 rounded bg-blue-100 text-blue-800">
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </Card>
          ))}
        </div>
        
        <div className="text-center mt-12">
          <Button variant="outline" onClick={() => window.open('https://github.com/miafo1', '_blank')}>
            View More on GitHub
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Projects;

import React from 'react';
import { Mail, Phone, MapPin, Linkedin, Github, Globe, ExternalLink } from 'lucide-react';
import { personalInfo, skills, experience, projects, certifications, education } from '../../data';

const CVPreview = () => {
  return (
    <div className="min-h-screen bg-gray-100 p-8 print:p-0 print:bg-white">
      {/* Print Instructions - Hidden when printing */}
      <div className="max-w-[21cm] mx-auto mb-6 bg-blue-50 border border-blue-200 rounded-lg p-4 print:hidden flex justify-between items-center">
        <div>
          <h2 className="text-lg font-semibold text-blue-800">Print Instructions</h2>
          <p className="text-blue-600 text-sm">
            1. Press <kbd className="px-2 py-1 bg-white rounded border border-blue-200 font-mono">Ctrl + P</kbd> (or Cmd + P)<br/>
            2. Set "Margins" to "None" or "Minimum"<br/>
            3. Check "Background graphics"<br/>
            4. Save as PDF
          </p>
        </div>
        <button 
          onClick={() => window.print()}
          className="px-6 py-2 bg-blue-600 text-white rounded-full hover:bg-blue-700 transition-colors font-medium shadow-lg"
        >
          Print / Save PDF
        </button>
      </div>

      {/* A4 Page Container */}
      <div className="max-w-[21cm] mx-auto bg-white shadow-2xl print:shadow-none print:w-full min-h-[29.7cm] flex flex-col md:flex-row">
        
        {/* Left Sidebar (Darker Background) */}
        <div className="w-full md:w-1/3 bg-slate-900 text-white p-8 print:w-1/3 print:bg-slate-900 print:text-white">
          {/* Profile Image */}
          <div className="mb-8 text-center">
            <div className="w-32 h-32 mx-auto bg-slate-800 rounded-full overflow-hidden border-4 border-slate-700 mb-4">
              {/* Placeholder for profile image if available, or initials */}
              <div className="w-full h-full flex items-center justify-center text-3xl font-bold text-slate-500">
                {personalInfo.name.split(' ').map(n => n[0]).join('').slice(0, 2)}
              </div>
            </div>
          </div>

          {/* Contact Info */}
          <div className="mb-8">
            <h3 className="text-lg font-bold border-b border-slate-700 pb-2 mb-4 uppercase tracking-wider text-blue-400">Contact</h3>
            <div className="space-y-3 text-sm text-slate-300">
              <div className="flex items-center gap-3">
                <Mail className="w-4 h-4 text-blue-400 shrink-0" />
                <a href={`mailto:${personalInfo.email}`} className="hover:text-white transition-colors">{personalInfo.email}</a>
              </div>
              <div className="flex items-center gap-3">
                <Phone className="w-4 h-4 text-blue-400 shrink-0" />
                <span>{personalInfo.phone}</span>
              </div>
              <div className="flex items-center gap-3">
                <MapPin className="w-4 h-4 text-blue-400 shrink-0" />
                <span>{personalInfo.location}</span>
              </div>
              <div className="flex items-center gap-3">
                <Linkedin className="w-4 h-4 text-blue-400 shrink-0" />
                <a href={personalInfo.linkedin} target="_blank" rel="noreferrer" className="hover:text-white transition-colors break-all">{personalInfo.linkedin}</a>
              </div>
              <div className="flex items-center gap-3">
                <Github className="w-4 h-4 text-blue-400 shrink-0" />
                <a href={personalInfo.github} target="_blank" rel="noreferrer" className="hover:text-white transition-colors break-all">{personalInfo.github}</a>
              </div>
              <div className="flex items-center gap-3">
                <Globe className="w-4 h-4 text-blue-400 shrink-0" />
                <a href="https://miafo.dev" target="_blank" rel="noreferrer" className="hover:text-white transition-colors">https://miafo.dev</a>
              </div>
            </div>
          </div>

          {/* Skills */}
          <div className="mb-8">
            <h3 className="text-lg font-bold border-b border-slate-700 pb-2 mb-4 uppercase tracking-wider text-blue-400">Skills</h3>
            
            <div className="mb-4">
              <h4 className="text-sm font-semibold text-white mb-2">Programming</h4>
              <div className="flex flex-wrap gap-2">
                {skills.programming.map(skill => (
                  <span key={skill.name} className="px-2 py-1 bg-slate-800 rounded text-xs text-slate-300">
                    {skill.name}
                  </span>
                ))}
              </div>
            </div>

            <div className="mb-4">
              <h4 className="text-sm font-semibold text-white mb-2">Cloud & Security</h4>
              <div className="flex flex-wrap gap-2">
                {skills.cloudSecurity.map(skill => (
                  <span key={skill.name} className="px-2 py-1 bg-slate-800 rounded text-xs text-slate-300">
                    {skill.name}
                  </span>
                ))}
              </div>
            </div>

            <div>
              <h4 className="text-sm font-semibold text-white mb-2">Tools & DevOps</h4>
              <div className="flex flex-wrap gap-2">
                {skills.other.map(skill => (
                  <span key={skill.name} className="px-2 py-1 bg-slate-800 rounded text-xs text-slate-300">
                    {skill.name}
                  </span>
                ))}
              </div>
            </div>
          </div>

          {/* Certifications */}
          <div className="mb-8">
            <h3 className="text-lg font-bold border-b border-slate-700 pb-2 mb-4 uppercase tracking-wider text-blue-400">Certifications</h3>
            <ul className="space-y-3 text-sm text-slate-300">
              {certifications.map(cert => (
                <li key={cert.id}>
                  <div className="font-medium text-white">{cert.name}</div>
                  <div className="text-xs text-slate-500">{cert.issuer}</div>
                </li>
              ))}
            </ul>
          </div>

          {/* Languages */}
          <div>
            <h3 className="text-lg font-bold border-b border-slate-700 pb-2 mb-4 uppercase tracking-wider text-blue-400">Languages</h3>
            <ul className="space-y-2 text-sm text-slate-300">
              <li className="flex justify-between">
                <span>French</span>
                <span className="text-slate-500">Native</span>
              </li>
              <li className="flex justify-between">
                <span>English</span>
                <span className="text-slate-500">Advanced</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Main Content (Right Side) */}
        <div className="w-full md:w-2/3 p-8 print:w-2/3">
          {/* Header Name */}
          <div className="mb-8">
            <h1 className="text-4xl font-bold text-slate-900 uppercase tracking-tight mb-2">{personalInfo.name}</h1>
            <h2 className="text-xl text-blue-600 font-medium">{personalInfo.title}</h2>
          </div>

          {/* Professional Summary */}
          <div className="mb-8">
            <h3 className="text-lg font-bold border-b-2 border-slate-200 pb-2 mb-4 uppercase tracking-wider text-slate-800">Professional Summary</h3>
            <p className="text-slate-600 leading-relaxed text-sm text-justify">
              {personalInfo.bio}
            </p>
          </div>

          {/* Experience */}
          <div className="mb-8">
            <h3 className="text-lg font-bold border-b-2 border-slate-200 pb-2 mb-4 uppercase tracking-wider text-slate-800">Experience</h3>
            <div className="space-y-6">
              {experience.map((job, index) => (
                <div key={index} className="break-inside-avoid">
                  <div className="flex justify-between items-baseline mb-1">
                    <h4 className="font-bold text-slate-800">{job.role}</h4>
                    <span className="text-sm font-medium text-blue-600 whitespace-nowrap">{job.period}</span>
                  </div>
                  <div className="text-sm font-medium text-slate-600 mb-2">{job.company}</div>
                  <p className="text-sm text-slate-600 leading-relaxed text-justify">
                    {job.description}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Projects */}
          <div className="mb-8">
            <h3 className="text-lg font-bold border-b-2 border-slate-200 pb-2 mb-4 uppercase tracking-wider text-slate-800">Key Projects</h3>
            <div className="space-y-4">
              {projects.slice(0, 3).map((project, index) => ( // Show top 3 projects to fit page
                <div key={index} className="break-inside-avoid">
                  <div className="flex justify-between items-baseline mb-1">
                    <h4 className="font-bold text-slate-800">{project.title}</h4>
                    {project.link !== "#" && (
                      <a href={project.link} target="_blank" rel="noreferrer" className="text-xs text-blue-500 flex items-center gap-1 hover:underline print:hidden">
                        View <ExternalLink className="w-3 h-3" />
                      </a>
                    )}
                  </div>
                  <p className="text-sm text-slate-600 mb-2">{project.description}</p>
                  <div className="flex flex-wrap gap-1">
                    {project.tags.map(tag => (
                      <span key={tag} className="px-1.5 py-0.5 bg-slate-100 text-slate-600 rounded text-[10px] font-medium border border-slate-200">
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>

        </div>
      </div>
    </div>
  );
};

export default CVPreview;

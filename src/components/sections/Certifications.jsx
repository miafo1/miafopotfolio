import React from 'react';
import { motion } from 'framer-motion';
import { ExternalLink } from 'lucide-react';
import SectionTitle from '../ui/SectionTitle';
import Card from '../ui/Card';
import { certifications } from '../../data';

const Certifications = () => {
  return (
    <section id="certifications" className="py-20 bg-slate-50">
      <div className="container mx-auto px-6">
        <SectionTitle title="View Certifications" subtitle="Verified expertise and credentials" />
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {certifications.map((cert, index) => {
            const Icon = cert.icon;
            return (
              <a 
                href={cert.pdf} 
                target="_blank" 
                rel="noopener noreferrer" 
                key={cert.id} 
                className="block group"
              >
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  whileHover={{ y: -8, scale: 1.02 }}
                  className="h-full"
                >
                  <Card className="relative p-8 flex flex-col items-center text-center h-full border-2 border-transparent hover:border-primary/20 transition-all duration-300 shadow-lg hover:shadow-2xl bg-white overflow-hidden">
                    
                    {/* Decorative Background Gradient */}
                    <div className="absolute inset-0 bg-gradient-to-br from-blue-50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                    
                    {/* Icon with Animation */}
                    <motion.div 
                      className="relative z-10 w-20 h-20 bg-white rounded-2xl shadow-md flex items-center justify-center mb-6 text-slate-700 group-hover:text-primary group-hover:shadow-primary/30 transition-all duration-300"
                      whileHover={{ rotate: [0, -10, 10, 0] }}
                      transition={{ duration: 0.5 }}
                    >
                      <Icon className="w-10 h-10" />
                    </motion.div>

                    {/* Content */}
                    <div className="relative z-10 flex-1 flex flex-col items-center w-full">
                      <h3 className="font-bold text-lg text-slate-900 mb-2 group-hover:text-primary transition-colors">
                        {cert.name}
                      </h3>
                      <p className="text-sm text-slate-500 font-medium mb-6">
                        {cert.issuer}
                      </p>
                      
                      {/* Call to Action */}
                      <div className="mt-auto flex items-center gap-2 text-sm font-semibold text-primary opacity-0 transform translate-y-4 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-300">
                        <span>View Certificate</span>
                        <ExternalLink className="w-4 h-4" />
                      </div>
                    </div>

                    {/* Bottom Highlight Line */}
                    <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-primary to-blue-400 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left" />
                  </Card>
                </motion.div>
              </a>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Certifications;

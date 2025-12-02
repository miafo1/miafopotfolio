import React from 'react';
import SectionTitle from '../ui/SectionTitle';
import Card from '../ui/Card';
import Button from '../ui/Button';
import { personalInfo } from '../../data';
import { Mail, Phone, MapPin, Send } from 'lucide-react';

const Contact = () => {
  const handleSubmit = (e) => {
    e.preventDefault();
    // Form submission logic would go here
    alert("Thanks for your message! This is a demo form.");
  };

  return (
    <section id="contact" className="py-20 bg-slate-50">
      <div className="container mx-auto px-6">
        <SectionTitle title="Get In Touch" subtitle="Let's discuss your next project" />
        
        <div className="flex flex-col lg:flex-row gap-12 max-w-5xl mx-auto">
          {/* Contact Info */}
          <div className="lg:w-1/3 space-y-6">
            <Card className="p-6 flex items-start gap-4">
              <div className="bg-blue-100 p-3 rounded-full text-primary">
                <Mail className="w-6 h-6" />
              </div>
              <div>
                <h4 className="font-bold text-slate-900">Email</h4>
                <a href={`mailto:${personalInfo.email}`} className="text-slate-600 hover:text-primary transition-colors">
                  {personalInfo.email}
                </a>
              </div>
            </Card>
            
            <Card className="p-6 flex items-start gap-4">
              <div className="bg-blue-100 p-3 rounded-full text-primary">
                <Phone className="w-6 h-6" />
              </div>
              <div>
                <h4 className="font-bold text-slate-900">Phone</h4>
                <a href={`tel:${personalInfo.phone}`} className="text-slate-600 hover:text-primary transition-colors">
                  {personalInfo.phone}
                </a>
              </div>
            </Card>
            
            <Card className="p-6 flex items-start gap-4">
              <div className="bg-blue-100 p-3 rounded-full text-primary">
                <MapPin className="w-6 h-6" />
              </div>
              <div>
                <h4 className="font-bold text-slate-900">Location</h4>
                <p className="text-slate-600">{personalInfo.location}</p>
              </div>
            </Card>
          </div>
          
          {/* Contact Form */}
          <Card className="lg:w-2/3 p-8">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-slate-700 mb-2">Name</label>
                  <input 
                    type="text" 
                    id="name" 
                    className="w-full px-4 py-3 rounded-lg border border-slate-300 focus:ring-2 focus:ring-primary focus:border-transparent outline-none transition-all"
                    placeholder="Your Name"
                    required
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-slate-700 mb-2">Email</label>
                  <input 
                    type="email" 
                    id="email" 
                    className="w-full px-4 py-3 rounded-lg border border-slate-300 focus:ring-2 focus:ring-primary focus:border-transparent outline-none transition-all"
                    placeholder="your@email.com"
                    required
                  />
                </div>
              </div>
              
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-slate-700 mb-2">Message</label>
                <textarea 
                  id="message" 
                  rows="4" 
                  className="w-full px-4 py-3 rounded-lg border border-slate-300 focus:ring-2 focus:ring-primary focus:border-transparent outline-none transition-all"
                  placeholder="How can I help you?"
                  required
                ></textarea>
              </div>
              
              <Button type="submit" className="w-full md:w-auto">
                <Send className="w-4 h-4 mr-2" />
                Send Message
              </Button>
            </form>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Contact;

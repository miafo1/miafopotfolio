import React from 'react';
import SectionTitle from '../ui/SectionTitle';
import Card from '../ui/Card';
import { Shield, Award } from 'lucide-react';

const Certifications = () => {
  const certs = [
    {
      name: "AWS Certified Solutions Architect – Associate",
      issuer: "Amazon Web Services",
      icon: CloudBadge
    },
    {
      name: "AWS Certified Security – Specialty",
      issuer: "Amazon Web Services",
      icon: ShieldBadge
    },
    {
      name: "Cisco Certified Network Associate (CCNA)",
      issuer: "Cisco",
      icon: NetworkBadge
    },
    {
      name: "CompTIA Security+",
      issuer: "CompTIA",
      icon: SecurityBadge
    }
  ];

  return (
    <section id="certifications" className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <SectionTitle title="Certifications" subtitle="Verified expertise and credentials" />
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {certs.map((cert, index) => {
            const Icon = cert.icon;
            return (
              <Card key={index} className="p-6 flex flex-col items-center text-center hover:border-primary transition-colors">
                <div className="w-16 h-16 bg-slate-100 rounded-full flex items-center justify-center mb-4 text-slate-700">
                  <Icon />
                </div>
                <h3 className="font-bold text-slate-900 mb-2">{cert.name}</h3>
                <p className="text-sm text-slate-500">{cert.issuer}</p>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
};

// Simple icon components for the badges
const CloudBadge = () => <Award className="w-8 h-8" />;
const ShieldBadge = () => <Shield className="w-8 h-8" />;
const NetworkBadge = () => <Award className="w-8 h-8" />;
const SecurityBadge = () => <Shield className="w-8 h-8" />;

export default Certifications;

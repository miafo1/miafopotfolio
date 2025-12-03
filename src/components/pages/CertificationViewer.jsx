import React, { useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';
import { certifications } from '../../data';

const CertificationViewer = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const cert = certifications.find(c => c.id === id);

  if (!cert) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-slate-50">
        <div className="text-center">
          <h2 className="text-2xl font-bold text-slate-800 mb-4">Certification Not Found</h2>
          <button 
            onClick={() => navigate('/')}
            className="px-6 py-2 bg-primary text-white rounded-full hover:bg-blue-700 transition-colors"
          >
            Go Back Home
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-slate-900 flex flex-col">
      {/* Header */}
      <div className="bg-white shadow-md p-4 flex items-center justify-between z-10">
        <button 
          onClick={() => navigate('/')}
          className="flex items-center gap-2 text-slate-600 hover:text-primary transition-colors font-medium"
        >
          <ArrowLeft className="w-5 h-5" />
          Back to Portfolio
        </button>
        <h1 className="text-lg font-bold text-slate-800">{cert.name}</h1>
        <div className="w-20"></div> {/* Spacer for centering */}
      </div>

      {/* PDF Viewer Container */}
      <div className="flex-1 relative bg-slate-800 flex items-center justify-center p-4 md:p-8 overflow-hidden">
        
        <div className="relative w-full max-w-5xl h-full bg-white shadow-2xl rounded-lg overflow-hidden">
          <iframe 
            src={cert.pdf}
            className="w-full h-full border-0"
            title={cert.name}
          />
        </div>
      </div>
    </div>
  );
};

export default CertificationViewer;

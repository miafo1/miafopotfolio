import React from 'react';
import { motion } from 'framer-motion';

const Card = ({ children, className = "", hover = true, ...props }) => {
  return (
    <motion.div 
      className={`bg-white rounded-2xl shadow-sm border border-slate-100 overflow-hidden ${hover ? 'hover:shadow-md hover:-translate-y-1 transition-all duration-300' : ''} ${className}`}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
      {...props}
    >
      {children}
    </motion.div>
  );
};

export default Card;

// components/Services.tsx
'use client';

import { motion } from 'framer-motion';
import { Code, PenTool, Smartphone, TrendingUp } from 'lucide-react';

const services = [
  {
    title: 'Web Development',
    description: 'Modern, scalable websites with Next.js and cutting-edge tech.',
    icon: Code,
  },
  {
    title: 'UI/UX Design',
    description: 'Beautiful and user-friendly interfaces built with precision.',
    icon: PenTool,
  },
  {
    title: 'Mobile Responsive',
    description: 'Fully responsive websites that work perfectly on any device.',
    icon: Smartphone,
  },
  {
    title: 'SEO & Analytics',
    description: 'Rank higher on search engines and track user behavior.',
    icon: TrendingUp,
  },
];

export default function Services() {
  return (
    <section className="max-w-7xl mx-auto px-6 py-24 bg-[#0f0f0f]">
      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        className="text-3xl md:text-5xl font-bold text-center mb-12"
      >
        Our <span className="text-blue-500">Services</span>
      </motion.h2>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        {services.map((service, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: index * 0.2 }}
            viewport={{ once: true }}
            className="bg-[#111] p-6 rounded-2xl shadow-lg border border-gray-800 hover:border-blue-500 transition-all"
          >
            <service.icon className="w-10 h-10 text-blue-400 mb-4" />
            <h3 className="text-xl font-semibold mb-2">{service.title}</h3>
            <p className="text-gray-300">{service.description}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}

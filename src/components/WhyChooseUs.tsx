// components/WhyChooseUs.tsx
'use client';

import { motion } from 'framer-motion';
import { CheckCircle, Rocket, Users, Shield } from 'lucide-react';

const features = [
  {
    title: 'Fast & Optimized',
    description: 'We deliver lightning-fast, SEO-optimized websites that perform well across all devices.',
    icon: Rocket,
  },
  {
    title: 'Trusted by Clients',
    description: 'We’ve built solutions trusted by businesses across 10+ countries.',
    icon: Users,
  },
  {
    title: 'Secure & Scalable',
    description: 'Our code is clean, secure, and scalable for growth.',
    icon: Shield,
  },
  {
    title: 'Always Available',
    description: '24/7 client support & regular updates — we’ve got your back.',
    icon: CheckCircle,
  },
];

export default function WhyChooseUs() {
  return (
    <section className="max-w-7xl mx-auto px-6 py-24">
      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        className="text-3xl md:text-5xl font-bold text-center mb-12"
      >
        Why Choose <span className="text-blue-500">WebAgency.Live</span>?
      </motion.h2>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
        {features.map((feature, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: index * 0.2 }}
            viewport={{ once: true }}
            className="bg-[#111] p-6 rounded-2xl shadow-md border border-gray-800 hover:border-blue-500 transition-all"
          >
            <feature.icon className="w-10 h-10 text-blue-400 mb-4" />
            <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
            <p className="text-gray-300">{feature.description}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}

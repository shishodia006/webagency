'use client';

import { motion } from 'framer-motion';

const projects = [
  {
    title: "Agency Landing Page",
    category: "Web Design",
    image: "https://cdn.pixabay.com/photo/2016/11/29/03/35/code-1869236_1280.jpg",
  },
  {
    title: "SaaS Dashboard",
    category: "Web App",
    image: "https://cdn.pixabay.com/photo/2017/08/10/03/47/web-2616557_1280.jpg",
  },
  {
    title: "Mobile App UI",
    category: "Mobile UI",
    image: "https://cdn.pixabay.com/photo/2020/08/01/09/54/smartphone-5450252_1280.jpg",
  },
  {
    title: "Branding Kit",
    category: "Brand Design",
    image: "https://cdn.pixabay.com/photo/2017/03/02/09/04/logo-2117857_1280.jpg",
  },
];

export default function Portfolio() {
  return (
    <section className="max-w-7xl mx-auto px-6 pb-24 bg-[#0d0d0d]">
      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        className="text-3xl md:text-5xl font-bold text-center mb-12"
      >
        Our <span className="text-blue-500">Work</span>
      </motion.h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {projects.map((project, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.4, delay: index * 0.2 }}
            viewport={{ once: true }}
            className="rounded-xl overflow-hidden group relative shadow-lg border border-gray-800"
          >
            <img
              src={project.image}
              alt={project.title}
              className="w-full h-56 object-cover group-hover:scale-105 transition-transform duration-300"
            />
            <div className="absolute bottom-0 left-0 right-0 bg-black/70 p-4">
              <h3 className="text-lg font-semibold text-white">{project.title}</h3>
              <p className="text-sm text-gray-400">{project.category}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}

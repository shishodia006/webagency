'use client';
import { motion } from 'framer-motion';
const projects = [
  {
    title: "Anantya.ai website",
    category: "Web Design & Development",
    image: "https://shishodia.netlify.app/asset/images/3.jpg",
  },
  {
    title: "SaaS Dashboard",
    category: "Web App",
    image: "https://shishodia.netlify.app/asset/images/2.jpg",
  },
  {
    title: "Trringme website Redesign",
    category: "Mobile UI",
    image: "https://shishodia.netlify.app//asset/images/1.jpg",
  },
  {
    title: "Bussiness Branding",
    category: "Brand Design",
    image: "https://shishodia.netlify.app/asset/images/4.jpg",
  },
];

export default function Portfolio() {
  return (
    <section className="max-w-7xl mx-auto px-6 py-24 bg-[#0d0d0d]">
      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        className="text-3xl md:text-5xl font-bold text-center mb-12 text-white"
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
            <div className="relative w-full h-56 overflow-hidden">
              <img
                src={project.image}
                alt={project.title}
                className="w-full object-cover transition-transform duration-[2000ms] ease-in-out group-hover:-translate-y-[40%]"
              />
            </div>


            <div className="absolute bottom-0 left-0 right-0 bg-black/70 p-4">
              <h3 className="text-lg font-semibold text-white">{project.title}</h3>
              <p className="text-sm text-gray-400">{project.category}</p>
            </div>
          </motion.div>
        ))}
      </div>


      <div className="flex justify-center mt-12">
        <button
          className="text-lg px-8 py-3 bg-white text-blue-700 font-semibold rounded-lg hover:bg-gray-200 transition"
          onClick={() => window.location.href = "/contact"}
        >
          Get Started
        </button>
        <button
          className="text-lg px-8 py-3 bg-white text-blue-700 font-semibold rounded-lg hover:bg-gray-200 transition ms-5"
          onClick={() => window.location.href = "/portfolio"}
        >
          View All Projects
        </button>
      </div>
    </section>
  );
}

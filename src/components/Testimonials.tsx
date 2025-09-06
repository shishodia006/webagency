'use client';

import { motion } from "framer-motion";

const testimonials = [
  {
    name: "Ananya Sharma",
    role: "Marketing Head, Digidart",
    image: "https://randomuser.me/api/portraits/women/68.jpg",
    quote:
      "They completely transformed our web presence! Fast, reliable and visually stunning results.",
  },
  {
    name: "Ravi Mehra",
    role: "CTO, TechNova",
    image: "https://randomuser.me/api/portraits/men/45.jpg",
    quote:
      "Working with this team was a game changer. Excellent communication and beautiful UI.",
  },
  {
    name: "Sarah Jain",
    role: "Founder, FitFusion",
    image: "https://randomuser.me/api/portraits/women/33.jpg",
    quote:
      "Absolutely loved the designs and their dedication. We now stand out from the competition!",
  },
];

export default function Testimonials() {
    
  return (
    <section className="max-w-6xl mx-auto px-6 py-24 bg-[#0f0f0f]">
      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        className="text-3xl md:text-5xl font-bold text-center mb-12"
      >
        What Our <span className="text-blue-500">Clients Say</span>
      </motion.h2>

      <div className="grid gap-10 md:grid-cols-3">
        {testimonials.map((t, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: i * 0.2 }}
            viewport={{ once: true }}
            className="bg-[#1a1a1a] p-6 rounded-xl shadow-md border border-gray-800"
          >
            <div className="flex items-center mb-4">
              <img
                src={t.image}
                alt={t.name}
                className="w-14 h-14 rounded-full object-cover border border-gray-700 mr-4"
              />
              <div>
                <h4 className="text-white font-semibold">{t.name}</h4>
                <p className="text-sm text-gray-400">{t.role}</p>
              </div>
            </div>
            <p className="text-gray-300 text-sm leading-relaxed">“{t.quote}”</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}

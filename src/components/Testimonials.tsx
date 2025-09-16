'use client';

import { motion } from "framer-motion";

const testimonials = [
{
  name: "Divniti Kothari",
  role: "Senior Research Associate — Politics for Impact",
  image: "https://www.politicsforimpact.com/static/media/Divniti.b91f7da5af23b1afe0ea.png",
  quote:
    "Working with Bhanu and the team at WebAgency.live was an outstanding experience. The designs I provided included several complex layouts and intricate elements, yet he developed everything exactly as envisioned. Not only did he bring the designs to life with precision, but he also added thoughtful touches that elevated the final output. His attention to detail, technical expertise, and commitment to quality truly make him an excellent web developer. Highly recommended!",
},

  {
    name: "RS & Associates",
    role: "founder Rahul Singh",
    image: "https://randomuser.me/api/portraits/men/45.jpg",
    quote:
      "I hired Bhanu through WebAgency.live for a challenging website rebuild. He translated complex designs into a pixel-perfect, responsive site, communicated clearly at every step, and turned feedback into improvements quickly. The result looked exactly like the mockups — plus thoughtful UX touches I hadn’t considered. Professional, reliable, and highly recommended.",
  },
  {
    name: "Meetanshi Jain",
    role: "Senior Associate",
    image: "https://www.politicsforimpact.com/static/media/Divniti.b91f7da5af23b1afe0ea.png",
    quote:
      "Absolutely loved the designs and their dedication. We now stand out from the competition!",
  },

];

export default function Testimonials() {
    
  return (
    <section className="max-w-7xl mx-auto px-6 pb-24 bg-[#0f0f0f]">
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

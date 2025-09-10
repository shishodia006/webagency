"use client";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { motion } from "framer-motion";
const services = [
  {
    title: "Web Development",
    description:
      "Custom websites and web apps with modern technologies to scale your business.",
    icon: "💻",
  },
  {
    title: "UI/UX Design",
    description:
      "Beautiful, user-friendly, and responsive designs that engage your audience.",
    icon: "🎨",
  },
  {
    title: "Cloud & Hosting",
    description:
      "Secure, scalable, and fast cloud hosting solutions for your business.",
    icon: "☁️",
  },

  // 🆕 Your Game Artist Services
  {
    title: "3D Modeling & Texturing",
    description:
      "High-quality 3D assets for games, films, and AR/VR experiences. Skilled in Autodesk Maya, 3ds Max, ZBrush, and Substance Painter.",
    icon: "🖌️",
  },
  {
    title: "Game Art & Animation",
    description:
      "Creating immersive 3D game environments, props, and characters with strong artistic and design foundation. Trained at MAAC South Ex.",
    icon: "🎮",
  },
  {
    title: "Digital Art & Editing",
    description:
      "Polished visuals with Adobe Illustrator, Photoshop, and Premiere Pro to enhance storytelling and branding.",
    icon: "✨",
  },
];


export default function ServicesPage() {
  return (
    <main className="bg-gradient-to-b from-[#0f172a] to-[#1e293b] text-white min-h-screen flex flex-col">
      <Header />

      {/* Hero Section */}
      <motion.section
        className="text-center py-20 px-6"
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <h1 className="text-5xl font-bold mb-4">Our Integration Services</h1>
        <p className="text-lg text-gray-300 max-w-2xl mx-auto">
          We provide end-to-end digital solutions that help businesses grow,
          innovate, and succeed in the modern world.
        </p>
      </motion.section>

      {/* Services Grid */}
      <section className="flex-1 max-w-7xl mx-auto px-6 pb-20">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
          {services.map((service, index) => (
            <motion.div
              key={index}
              className="bg-gray-900/60 backdrop-blur-xl rounded-2xl shadow-lg border border-gray-700 p-8 hover:shadow-2xl hover:-translate-y-2 transition transform"
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: index * 0.15 }}
              viewport={{ once: true }}
            >
              <div className="text-5xl mb-4">{service.icon}</div>
              <h3 className="text-2xl font-semibold mb-2">{service.title}</h3>
              <p className="text-gray-300">{service.description}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* CTA Section */}
      <motion.section
        className="bg-gradient-to-r from-blue-600 to-indigo-600 py-16 px-6 text-center rounded-t-3xl"
        initial={{ opacity: 0, y: 60 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >
        <h2 className="text-3xl font-bold mb-4">
          Ready to take your business to the next level?
        </h2>
        <p className="text-lg mb-6 max-w-2xl mx-auto text-gray-100">
          Let’s work together to build something amazing for your brand.
        </p>
        <a
          href="/contact"
          className="inline-block bg-white text-blue-700 font-semibold px-6 py-3 rounded-xl shadow-lg hover:scale-105 transition transform"
        >
          Get in Touch
        </a>
      </motion.section>
      <Footer />
    </main>
  );
}

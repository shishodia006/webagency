"use client";

import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { motion } from "framer-motion";

const portfolioItems = [
  {
    title: "3D Character Modeling",
    category: "Game Art",
    image: "/portfolio/character.jpg", // replace with your image path
    description:
      "High-poly and game-ready character created in Autodesk Maya, ZBrush, and textured in Substance Painter.",
  },
  {
    title: "Environment Design",
    category: "3D Art",
    image: "/portfolio/environment.jpg",
    description:
      "Immersive game environment built using Autodesk 3ds Max, textured in Substance Painter, rendered in Marmoset.",
  },
  {
    title: "Web Development Project",
    category: "Web",
    image: "/portfolio/webapp.jpg",
    description:
      "Responsive business web application with modern UI/UX and React + Next.js stack.",
  },
  {
    title: "Digital Illustration",
    category: "Art & Design",
    image: "/portfolio/illustration.jpg",
    description:
      "Custom illustrations and artworks created in Adobe Illustrator and Photoshop.",
  },
  {
    title: "3D Props & Assets",
    category: "Game Art",
    image: "/portfolio/props.jpg",
    description:
      "Game-ready props with optimized topology and realistic texturing.",
  },
];

export default function PortfolioPage() {
  return (
    <main className="bg-gradient-to-b from-[#0f172a] to-[#1e293b] text-white min-h-screen flex flex-col">
      <Header />

      {/* Hero Section */}
      <motion.section
        className="text-center py-20"
        initial={{ opacity: 0, y: -40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <h1 className="text-5xl font-bold mb-6">My Portfolio</h1>
        <p className="text-lg text-gray-300 max-w-3xl mx-auto">
          A showcase of my work in Web Development, 3D Game Art, Texturing, and
          Digital Design. Each project reflects creativity, skill, and
          dedication.
        </p>
      </motion.section>

      {/* Portfolio Grid */}
      <section className="max-w-7xl mx-auto px-6 pb-20">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
          {portfolioItems.map((item, index) => (
            <motion.div
              key={index}
              className="bg-gray-900/70 backdrop-blur-xl rounded-2xl shadow-lg overflow-hidden border border-gray-700 group cursor-pointer"
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              {/* Image */}
              <div className="overflow-hidden">
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-56 object-cover transition-transform duration-500 group-hover:scale-110"
                />
              </div>

              {/* Content */}
              <div className="p-6">
                <span className="text-orange-500 font-medium">
                  {item.category}
                </span>
                <h3 className="text-2xl font-bold mt-2 mb-3">{item.title}</h3>
                <p className="text-gray-300 text-sm">{item.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      <Footer />
    </main>
  );
}

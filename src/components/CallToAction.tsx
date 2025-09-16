'use client';
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
export default function CallToAction() {
  return (
    <section className="bg-gradient-to-br from-blue-600 via-blue-700 to-blue-900 py-20 px-6 text-white">
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: true }}
        className="max-w-6xl mx-auto flex flex-col md:flex-row items-center md:justify-between gap-12"
      >
        {/* Left Side Text */}
        <div className="text-left md:max-w-2xl">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 leading-tight">
            Ready to Embrace <br /> Digital Change?
          </h2>
          <p className="text-lg md:text-xl text-blue-100">
            Let's guide you through a seamless <br /> transformation process
          </p>
          <Button
            className="text-lg px-8 py-5 mt-6 bg-white text-blue-700 hover:bg-gray-200 transition"
            onClick={() => (window.location.href = "/contact")}
          >
            Get Started
          </Button>
        </div>

        {/* Right Side Stats */}
        <div className="grid grid-cols-3 gap-8 text-center">
          <div>
            <h2 className="text-4xl font-bold">14+</h2>
            <p className="text-blue-100">Years in Service</p>
          </div>
          <div>
            <h2 className="text-4xl font-bold">300+</h2>
            <p className="text-blue-100">Global Clients</p>
          </div>
          <div>
            <h2 className="text-4xl font-bold">250+</h2>
            <p className="text-blue-100">Tech Experts</p>
          </div>
        </div>
      </motion.div>
    </section>
  );
}

'use client';

import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";

export default function CallToAction() {
  return (
    <section className="bg-gradient-to-br from-blue-600 via-blue-700 to-blue-900 py-20 px-6 text-white text-center">
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: true }}
        className="max-w-3xl mx-auto"
      >
        <h2 className="text-4xl md:text-5xl font-bold mb-6">
          Ready to Skyrocket Your Online Presence?
        </h2>
        <p className="text-lg md:text-xl mb-10 text-blue-100">
          Let’s build something amazing together. Contact us for a free consultation and take the first step toward your digital success.
        </p>
        <Button
          className="text-lg px-8 py-5 bg-white text-blue-700 hover:bg-gray-200 transition"
          onClick={() => window.location.href = "/contact"}
        >
          Get Started
        </Button>
      </motion.div>
    </section>
  );
}

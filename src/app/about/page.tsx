"use client";

import React from "react";
import { motion } from "framer-motion";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const AboutPage = () => {
  return (
    <>
      <Header />

      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-600 to-indigo-700 text-white py-20">
        <div className="max-w-6xl mx-auto px-6 text-center">
          <motion.h1
            className="text-4xl md:text-5xl font-extrabold mb-4"
            initial={{ opacity: 0, y: -40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            About Our Agency
          </motion.h1>
        <motion.p
  className="text-lg md:text-xl text-gray-100 max-w-3xl mx-auto"
  initial={{ opacity: 0, y: 40 }}
  animate={{ opacity: 1, y: 0 }}
  transition={{ duration: 1 }}
>
  &quot;Your All-in-One Partner for Web, Design, 3D &amp; Cloud Solutions&quot;
</motion.p>


          
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-16 px-6 max-w-6xl mx-auto grid md:grid-cols-2 gap-10">
        <motion.div
          className="bg-white shadow-lg rounded-2xl p-8"
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className="text-2xl font-bold mb-4 text-blue-600">Our Mission</h2>
          <p className="text-gray-600 text-lg">
            To deliver innovative web development and design solutions that help businesses achieve their digital goals while ensuring excellence, creativity, and long-term value.
          </p>
        </motion.div>

        <motion.div
          className="bg-white shadow-lg rounded-2xl p-8"
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className="text-2xl font-bold mb-4 text-indigo-600">Our Vision</h2>
          <p className="text-gray-600 text-lg">
            To become a globally recognized digital agency that transforms ideas into impactful solutions while empowering businesses to embrace innovation.
          </p>
        </motion.div>
      </section>

      {/* Team Section */}
      <section className="bg-gray-50 py-16">
        <div className="max-w-6xl mx-auto px-6 text-center">
          <motion.h2
            className="text-3xl md:text-4xl font-bold text-gray-800 mb-12"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            Meet Our Team
          </motion.h2>

          <div className="grid md:grid-cols-3 gap-10">
            {[
              { name: "Manoj Rana", role: "Founder & CEO" },
              { name: "Gaurav Rana", role: "3D Artist Level 2" },
              { name: "Bhanu Shishodia", role: "Full Stack Developer" },
            ].map((member, index) => (
              <motion.div
                key={index}
                className="bg-white rounded-2xl shadow-lg p-6 hover:scale-105 transition-transform duration-300"
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.2 }}
                viewport={{ once: true }}
              >
                <div className="w-24 h-24 mx-auto bg-gradient-to-r from-blue-500 to-indigo-500 rounded-full flex items-center justify-center text-white text-2xl font-bold mb-4">
                  {member.name.charAt(0)}
                </div>
                <h3 className="text-xl font-semibold text-gray-800">
                  {member.name}
                </h3>
                <p className="text-gray-500">{member.role}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-indigo-600 to-blue-700 text-center text-white">
        <motion.h2
          className="text-3xl md:text-4xl font-bold mb-6"
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.7 }}
        >
          Let’s Build Something Great Together
        </motion.h2>
        <motion.a
          href="/contact"
          className="inline-block px-8 py-4 bg-white text-indigo-700 font-semibold rounded-xl shadow-md hover:bg-gray-100 transition"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.2 }}
        >
          Contact Us
        </motion.a>
      </section>

      <Footer />
    </>
  );
};

export default AboutPage;

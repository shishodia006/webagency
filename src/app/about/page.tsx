"use client";
import React from "react";
import { motion } from "framer-motion";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import AboutVideoSection from "@/components/AboutVideoSection";
import Image from "next/image"; 
const AboutPage = () => {
  return (
    <>
      <Header />
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-600 to-indigo-700 text-white py-20 ">
        <div className="max-w-6xl mx-auto px-6 text-center">
          <motion.h1
            className="text-4xl md:text-5xl font-extrabold my-4 pt-7"
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
         <AboutVideoSection />
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
           To help businesses reimagine and redefine what is possible through digital innovation. Our mission is to create impactful, future-proof digital solutions that drive transformation, provide competitive edge and stand the test of time in a rapidly evolving world.
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
            To be the global catalyst for digital excellence – where visionary design, intelligent engineering and business strategy converge to build the Future! To build digital solutions that unlock value, inspire innovation, and ultimately redefine industries.
          </p>
        </motion.div>
      </section>
  {/* Team Section */}
      <section className="bg-gray-50 py-16">
        <div className="max-w-6xl mx-auto px-6 text-center">
          <motion.h2
            className="text-3xl md:text-4xl font-bold text-gray-800 mb-4"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
           Who We Are
          </motion.h2>
          <p>Founded in the year 2025, the Web Agency has paved a strong foundation. With successful completion of over 100 projects across diverse verticals, we’re truly spreading our wings. We ensure 100% customer satisfaction with every project that we complete.</p>

        <div className="relative mt-12 mx-auto text-center w-[650px] h-[540px]">
  <Image 
    src="/images/industry-img.png" 
    alt="Industry" 
    className="mb-5 mx-auto d-block" 
    width={650} 
    height={540} 
  />

  {/* Overlay Texts */}
  <div className="absolute top-[25%] left-[50%] -translate-x-1/2 text-white font-bold">COMMERCIAL</div>
  <div className="absolute top-[42%] left-[68%] -translate-x-1/2 text-white font-bold">RESIDENTIAL</div>
  <div className="absolute top-[69%] left-[76%] -translate-x-1/2 text-white font-bold">EDUCATION</div>
  <div className="absolute top-[90%] left-[63%] -translate-x-1/2 text-white font-bold">HOSPITALITY</div>
  <div className="absolute top-[90%] left-[37%] -translate-x-1/2 text-white font-bold">AUTO MOBILE</div>
  <div className="absolute top-[69%] left-[22%] -translate-x-1/2 text-white font-bold">MARBLE</div>
  <div className="absolute top-[42%] left-[32%] -translate-x-1/2 text-white font-bold">HEALTHCARE</div>
</div>

        </div>
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

          <div className="grid md:grid-cols-4 gap-10">
            {[
              { name: "Manoj Rana", role: "Founder & CEO" },
             
              { name: "Bhanu Shishodia", role: "Full Stack Developer" },
              { name: "Vinayak Baranwal", role: "Technical Content Strategist Linux, DevOps & Server Admin" },
              { name: "Gaurav Rana", role: "3D Artist Level 2" },
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

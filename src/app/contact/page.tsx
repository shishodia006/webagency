"use client";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { motion } from "framer-motion";
export default function ContactPage() {
  return (
    <main className="bg-gradient-to-b from-[#0f172a] to-[#1e293b] text-white min-h-screen flex flex-col">
      <Header />
      <section className="flex-1 w-full  mx-auto px-6 py-16">
        {/* Heading */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: -40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h1 className="text-5xl font-bold mb-4">Contact Us</h1>
          <p className="text-lg text-gray-300">
            Have questions or need help? We’re here to assist you.
          </p>
        </motion.div>

        {/* Content Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 px-6 w-full">
          {/* Left Side - Contact Info */}
          <motion.div
            className="space-y-10 space-y-6 bg-gray-900/60 backdrop-blur-xl shadow-xl rounded-2xl p-8 border border-gray-700"
            initial={{ opacity: 0, x: -60 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <div className="flex items-center  h-screen">
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="text-3xl">📍</div>
                  <div>
                    <h6 className="font-semibold mb-1">Our Office</h6>
                    <p className="text-gray-300">Noida, Uttar Pradesh, India</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="text-3xl">📞</div>
                  <div>
                    <h6 className="font-semibold mb-1">Phone Number</h6>
                    <p className="text-gray-300">+91 9520477988</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="text-3xl">📧</div>
                  <div>
                    <h6 className="font-semibold mb-1">Email Address</h6>
                    <p className="text-gray-300">b.bhanushishodia123@gmail.com</p>
                  </div>
                </div>
              </div>
            </div>

          </motion.div>

          {/* Right Side - Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 60 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >


            <form className="space-y-6 bg-gray-900/60 backdrop-blur-xl shadow-xl rounded-2xl p-8 border border-gray-700">
              {/* Name */}
              <div>
                <label className="block text-sm font-medium mb-2">Your Name</label>
                <input
                  type="text"
                  className="w-full px-4 py-3 rounded-lg bg-gray-800 text-white border border-gray-700 shadow-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                  placeholder="Enter your name"
                  required
                />
              </div>

              {/* Email */}
              <div>
                <label className="block text-sm font-medium mb-2">Email Address</label>
                <input
                  type="email"
                  className="w-full px-4 py-3 rounded-lg bg-gray-800 text-white border border-gray-700 shadow-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                  placeholder="Enter your email"
                  required
                />
              </div>

              {/* Phone */}
              <div>
                <label className="block text-sm font-medium mb-2">Phone Number</label>
                <input
                  type="tel"
                  className="w-full px-4 py-3 rounded-lg bg-gray-800 text-white border border-gray-700 shadow-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                  placeholder="Enter your phone number"
                  pattern="[0-9]{10}"
                  required
                />
              </div>

              {/* Message */}
              <div>
                <label className="block text-sm font-medium mb-2">Message</label>
                <textarea
                  rows={5}
                  className="w-full px-4 py-3 rounded-lg bg-gray-800 text-white border border-gray-700 shadow-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                  placeholder="Write your message..."
                  required
                />
              </div>

              {/* Button */}
              <button
                type="submit"
                className="w-full bg-blue-600 hover:bg-blue-700 text-white font-medium py-3 rounded-lg shadow-lg transition transform hover:scale-105"
              >
                Send Message
              </button>
            </form>
          </motion.div>
        </div>
      </section>
      {/* Map Section */}
      <motion.section
        className="w-full h-[400px] mt-12 rounded-2xl overflow-hidden shadow-2xl border border-gray-700"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3512.642408253804!2d77.39102917537966!3d28.53551657571913!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390ce56c2f5a9c69%3A0x4b4f29e7d02e84b1!2sNoida%2C%20Uttar%20Pradesh%2C%20India!5e0!3m2!1sen!2sin!4v1694423039184!5m2!1sen!2sin"
          width="100%"
          height="100%"
          allowFullScreen
          loading="lazy"
        ></iframe>
      </motion.section>
      <Footer />
    </main>
  );
}

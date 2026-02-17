"use client";
import { motion, AnimatePresence } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useState, useEffect } from "react";

export default function Hero() {
  const headings = [
    "Transforming Ideas into Websites, Games & Digital Experiences",
    "From Web to Game Art – We Design, Build & Animate Your Vision",
    "Full-Stack Digital Solutions: Web, Design, 3D & Cloud",
    "Web Development Meets Game Art – Your Complete Digital Partner",
  ];

  const [index, setIndex] = useState(0);

  // Auto loop every 3 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % headings.length);
    }, 3000);
    return () => clearInterval(interval);
  }, [headings.length]);

  return (
    <section className="max-w-7xl mx-auto px-6 py-[120px] grid md:grid-cols-2 gap-10 items-center">
      {/* Hero Text */}
      <div>
        <AnimatePresence mode="wait">
          <motion.h1
            key={index}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.6 }}
            className="text-4xl md:text-6xl font-bold leading-tight text-center md:text-start"
          >
            {headings[index]}
          </motion.h1>
        </AnimatePresence>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="mt-6 text-lg text-gray-300 text-center md:text-start"
        >
          From stunning landing pages to full-scale web applications, we create
          digital products that drive results.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="mt-8 flex justify-center md:justify-start gap-4"
        >
          <Link href="/contact">
            <Button size="lg" className="bg-blue-500 hover:bg-blue-600">
              Get a Quote <ArrowRight className="ml-2 w-4 h-4" />
            </Button>
          </Link>
        </motion.div>
      </div>

      {/* Hero Image */}
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8 }}
      >
        <Image
          src="/images/home-baner.webp"
          alt="Digital solutions hero banner showing web and game design"
          width={600}
          height={400}
          priority
          className="w-full h-auto rounded-2xl shadow-lg"
        />
      </motion.div>
    </section>
  );
}

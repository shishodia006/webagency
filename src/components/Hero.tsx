'use client';

import { motion } from 'framer-motion';
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import Image from "next/image"; 
import { useState, useEffect } from "react"; // ✅ Missing imports added
export default function Hero() {

    const headings = [
    "Transforming Ideas into Websites, Games & Digital Experiences",
    "From Web to Game Art – We Design, Build & Animate Your Vision",
    "Full-Stack Digital Solutions: Web, Design, 3D & Cloud",
    "Web Development Meets Game Art – Your Complete Digital Partner",
  ];

  const [index, setIndex] = useState(0);

  // 👇 Auto loop every 3 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % headings.length);
    }, 3000);
    return () => clearInterval(interval);
  }, [headings.length]);
    return (
        <section className="max-w-7xl mx-auto px-6 py-30 grid md:grid-cols-2 gap-10  items-center">
            {/* Hero Text */}
            <div>
               <motion.h1
      key={index} // Important: re-trigger animation when index changes
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      className="text-4xl md:text-6xl font-bold leading-tight text-start"
    >
      {headings[index]}
    </motion.h1>

                <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    className="mt-6 text-lg text-gray-300"
                >
                    From stunning landing pages to full-scale web applications, we create digital products that drive results.
                </motion.p>

                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1 }}
                    className="mt-8 flex gap-4"
                >
                    <Button size="lg" className="bg-blue-500 hover:bg-blue-600">
                        Get a Quote <ArrowRight className="ml-2 w-4 h-4" />
                    </Button>
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
                    alt="Hero"
                    width={600}
                    height={400}
                    className="w-full h-auto rounded-2xl shadow-lg"
                />

            </motion.div>
        </section>
    );
}

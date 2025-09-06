'use client';

import { motion } from 'framer-motion';
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import Image from "next/image"; 
export default function Hero() {
    return (
        <section className="max-w-7xl mx-auto px-6 py-20 grid md:grid-cols-2 gap-10 items-center">
            {/* Hero Text */}
            <div>
                <motion.h1
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    className="text-4xl md:text-6xl font-bold leading-tight"
                >
                    Custom Web Design and <span className="text-blue-400">Development Services</span>
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

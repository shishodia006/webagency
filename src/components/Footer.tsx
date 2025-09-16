'use client';
import { Facebook, Instagram, Linkedin, Mail } from "lucide-react";
import Link from "next/link";
import Image from "next/image"; 

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white px-6 py-14">
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-10">
        
        {/* Brand */}
        <div>

            <Image src="/images/Web Agency logo.png" alt="WebAgency Logo" className=" mb-5" width={150} height={40}/>
          <p className="text-gray-400">Crafting digital experiences that convert, inspire, and lead globally.</p>
        </div>

        {/* Quick Links */}
        <div>
          <h4 className="text-lg font-semibold mb-3">Quick Links</h4>
          <ul className="space-y-2 text-gray-300">
           
            <li><Link href="/about">About</Link></li>
            <li><Link href="/services">Services</Link></li>
            <li><Link href="/portfolio">Portfolio</Link></li>
            <li><Link href="/contact">Contact</Link></li>
          </ul>
        </div>

        {/* Contact + Social */}
        <div>
         <h4 className="text-lg font-semibold mb-3">Connect</h4>
<p className="text-gray-400 mb-3">
  <a
    href="mailto:b.bhanushishodia123@gmail.com"
    className="text-blue-400 hover:underline block"
  >
    b.bhanushishodia123@gmail.com
  </a>
  <a
    href="tel:+919520477988"
    className="text-blue-400 hover:underline block"
  >
   +91 9520477988
  </a>
</p>
      <div className="flex gap-4 text-white pt-3">
             <a href="https://instagram.com" target="_blank" rel="noopener noreferrer"><Instagram /></a>
            <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer"><Linkedin /></a>
            <a href="mailto:b.bhanushishodia123@gmail.com"><Mail /></a>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="text-center text-sm text-gray-500 mt-10 border-t pt-6">
        © {new Date().getFullYear()} WebAgency.Live — All rights reserved.
      </div>
    </footer>
  );
}

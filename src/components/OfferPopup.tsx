"use client";
import React, { useEffect, useState } from "react";
import { X } from "lucide-react";

export default function OfferPopup() {
    const [isOpen, setIsOpen] = useState(false);

    useEffect(() => {
        // Check agar user already close kar chuka hai
        // const closed = localStorage.getItem("offerPopupClosed");
        // if (closed) return;

        // 10 sec baad popup show karo
        const timer = setTimeout(() => {
            setIsOpen(true);
        }, 10000);

        return () => clearTimeout(timer);
    }, []);

    const handleClose = () => {
        setIsOpen(false);
        localStorage.setItem("offerPopupClosed", "true");
    };

    if (!isOpen) return null;

    return (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50">
            <div className="relative bg-white rounded-2xl shadow-xl w-[90%] md:w-[800px] max-h-[90vh] overflow-hidden animate-fadeInUp">
                {/* Close Button */}
                <button
                    onClick={handleClose}
                    className="absolute top-3 right-3 text-gray-500 hover:text-gray-700"
                >
                    <X size={24} />
                </button>

                <div className="grid md:grid-cols-2">
                    {/* Left Gradient Content */}
                    <div className="p-6 bg-gradient-to-br from-blue-500 via-purple-500 to-indigo-500 text-white flex flex-col justify-between overflow-y-auto">
                        <div>
                            <h2 className="text-2xl font-bold mb-4">
                                Unlock <span className="text-yellow-300">Expert Advice</span>{" "}
                                with <span className="italic">No Obligation*</span>
                            </h2>

                            <ul className="space-y-3">
                                <li className="flex items-start gap-2">
                                    ✅ <span>Software & Application Development (30-Day Risk-Free Pilot)</span>
                                </li>
                                <li className="flex items-start gap-2">
                                    ✅ <span>Website Design & Development (Free UX/UI Audit)</span>
                                </li>
                                <li className="flex items-start gap-2">
                                    ✅ <span>Dedicated Developer <b>(Skill Match Guarantee)</b></span>
                                </li>
                            </ul>
                        </div>

                        <div className="mt-6 bg-white/20 rounded-xl p-4 text-sm">
                            <h3 className="text-lg font-semibold text-yellow-200">
                                Maximized Innovation 🚀
                            </h3>
                            <p>Reduce Development Roadblocks with Specialized Talent.</p>
                        </div>

                        <p className="text-xs mt-4">* Terms and conditions apply</p>
                    </div>

                    {/* Right Form */}
                    <div className="p-6 flex flex-col justify-center">
                        <h3 className="text-xl sm:text-2xl font-bold mb-4 text-gray-800 dark:text-gray-200 text-center">
                            We Stand by Our Work — <br /> And You Will Too!
                        </h3>


                        <form className="space-y-5">
                            <input
                                type="text"
                                placeholder="Full Name*"
                                className="w-full border-0 border-b-2 border-gray-300 focus:border-blue-500 outline-none p-2 placeholder-gray-500 text-black transition"
                            />

                            <input
                                type="email"
                                placeholder="Email Address*"
                                className="w-full border-0 border-b-2 border-gray-300 focus:border-blue-500 outline-none p-2 placeholder-gray-500 text-black transition"
                            />

                            <input
                                type="tel"
                                placeholder="Phone Number*"
                                className="w-full border-0 border-b-2 border-gray-300 focus:border-blue-500 outline-none p-2 placeholder-gray-500 text-black transition"
                            />

                            <textarea
                                placeholder="Message*"
                                className="w-full border-0 border-b-2 border-gray-300 focus:border-blue-500 outline-none p-2 placeholder-gray-500 text-black h-20 transition"
                            />

                            <button
                                type="submit"
                                className="w-full py-2 bg-gradient-to-r from-yellow-400 to-green-500 text-white font-semibold rounded-lg shadow hover:opacity-90 transition"
                            >
                                Submit →
                            </button>
                        </form>

                    </div>
                </div>
            </div>
        </div>
    );
}

"use client";
import React from "react";
import Image from "next/image";

export default function AboutVideoSection() {
    return (
        <section className="relative w-full h-[400px] md:h-[600px] overflow-hidden">
            {/* Background YouTube iframe */}
            <iframe
                title="About Us Video"
                src="https://www.youtube-nocookie.com/embed/YlmlO14rdkQ?autoplay=1&mute=1&loop=1&playlist=YlmlO14rdkQ&controls=0&modestbranding=1&rel=0&showinfo=0"
                className="absolute top-1/2 left-1/2 w-full h-full -translate-x-1/2 -translate-y-1/2 pointer-events-none"
                allow="autoplay; fullscreen"
            ></iframe>

            {/* Overlay for better readability (optional) */}
            <div className="absolute inset-0 bg-black/40"></div>

            {/* Foreground image */}
            <div className="relative z-10 flex items-center justify-center h-full">
                <Image
                    src="https://cdn-icbnj.nitrocdn.com/DxLMbDkMAsFVFzgPzCObWFuipKtAgITG/assets/images/optimized/rev-6eb5aaa/www.unifiedinfotech.net/wp-content/uploads/2024/07/hello-uipl.svg"
                    alt="Hello UIPL"
                    width={300}
                    height={150}
                    style={{
                        position: "absolute",
                        inset: 0,
                        width: "100%",
                        height: "100%",
                        objectFit: "cover",
                    }}
                />

            </div>
        </section>
    );
}

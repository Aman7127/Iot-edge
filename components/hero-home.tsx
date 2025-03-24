"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import DASH from "@/public/images/dashmm.jpeg";
import ParallaxTilt from 'react-parallax-tilt'; // Import the ParallaxTilt component
import './HeroHome.css'; // Import the CSS file for styles

export default function HeroHome() {
  const [rotation, setRotation] = useState(0);
  const [borderVisible, setBorderVisible] = useState(false); // State for border visibility

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      // Adjust rotation based on scroll position
      setRotation(scrollY * 0.1); // Adjust the multiplier for desired effect
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  useEffect(() => {
    // Set a timeout to show the border after the image is centered
    const timer = setTimeout(() => {
      setBorderVisible(true);
    }, 1000); // Adjust the delay as needed

    return () => clearTimeout(timer); // Cleanup the timer
  }, []);

  return (
    <section className="relative">
      {/* Background Video */}
      <video
        className="absolute inset-0 w-full h-full object-cover"
        autoPlay
        loop
        muted
        playsInline
      >
        <source src="/videos/hero.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>

      <div className="absolute inset-0 bg-black opacity-50 z-0" /> {/* Background overlay */}
      <div className="mx-auto max-w-6xl px-4 sm:px-6 relative z-10">
        {/* Hero content */}
        <div className="py-12 md:py-20">
          {/* Section header */}
          <div className="pb-12 text-center md:pb-20">
            <motion.h1
              className="animate-[gradient_12s_linear_infinite] bg-[linear-gradient(to_right,var(--color-gray-200),var(--color-indigo-200),var(--color-gray-50),var(--color-indigo-300),var(--color-gray-200))] bg-[length:200%_auto] bg-clip-text pb-5 font-nacelle text-5xl font-semibold text-transparent md:text-5xl max-w-2xl mx-auto"
              initial={{ opacity: 0, y: -50 }} // Start off-screen to the top and hidden
              animate={{ opacity: 1, y: 0 }} // Slide in and show
              transition={{ duration: 1, delay: 0.5 }}
            >
              Connect, Collaborate and Integrate what suits the demand
            </motion.h1>
            <div className="mx-auto max-w-xl">
              <motion.div
                className="mb-8 text-2xl text-indigo-200/65 font-semibold text-center" // Center the text
                initial={{ opacity: 0, y: 20 }} // Start hidden
                animate={{ opacity: 1, y: 0 }} // Slide in and show
                transition={{ duration: 0.3, delay: 0.6 }} // Adjust delay for synchronization
              >
                Next Generation IoT Solutions for your use case
              </motion.div>
              <div className="mx-auto max-w-xs sm:flex sm:max-w-none sm:justify-center">
                <div data-aos="fade-up" data-aos-delay={400}>
                  <motion.a
                    className="btn group mb-4 w-full bg-linear-to-t from-indigo-600 to-indigo-500 bg-[length:100%_100%] bg-[bottom] text-white shadow-[inset_0px_1px_0px_0px_--theme(--color-white/.16)] hover:bg-[length:100%_150%] sm:mb-0 sm:w-auto"
                    href="#0"
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.6, delay: 0.8 }}
                  >
                    <span className="relative inline-flex items-center">
                      Start Building
                      <span className="ml-1 tracking-normal text-white/50 transition-transform group-hover:translate-x-0.5">
                        -&gt;
                      </span>
                    </span>
                  </motion.a>
                </div>
                <div data-aos="fade-up" data-aos-delay={600}>
                  <motion.a
                    className="btn relative w-full bg-linear-to-b from-gray-800 to-gray-800/60 bg-[length:100%_100%] bg-[bottom] text-gray-300 before:pointer-events-none before:absolute before:inset-0 before:rounded-[inherit] before:border before:border-transparent before:[background:linear-gradient(to_right,var(--color-gray-800),var(--color-gray-700),var(--color-gray-800))_border-box] before:[mask-composite:exclude_!important] before:[mask:linear-gradient(white_0_0)_padding-box,_linear-gradient(white_0_0)] hover:bg-[length:100%_150%] sm:ml-4 sm:w-auto"
                    href="#0"
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.6, delay: 1 }}
                  >
                    Schedule Demo
                  </motion.a>
                </div>
              </div>
            </div>
          </div>
          <div>
            <div className="relative z-10">
              <ParallaxTilt
                tiltMaxAngleX={5}
                tiltMaxAngleY={5}
                perspective={2000}
                style={{
                  transform: `rotate(${rotation}deg)`, // Apply rotation based on scroll
                  borderRadius: "15px",
                  border: borderVisible ? "1px solid rgb(73, 82, 211)" : "none", // Conditionally apply border
                }}
              >
                <div>
                  <motion.div
                    initial={{ x: -100, opacity: 0 }} // Start off-screen to the left and hidden
                    animate={{ x: 0, opacity: 1 }} // Slide in and show
                    transition={{ duration: 0.8, delay: 1.2 }} // Delay for slide-in effect
                  >
                    <Image
                      src={DASH}
                      alt="iot"
                      style={{ borderRadius: "15px" }} // Ensure the image has the same border radius
                    />
                  </motion.div>
                </div>
              </ParallaxTilt>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
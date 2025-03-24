"use client";
import Link from "next/link";
import Image from "next/image";
import DASH from "@/public/images/abt2.png"; // Replace with the appropriate image path
import "./page.css";
import Footer from "@/components/ui/footer";
import Cta from "@/components/cta";
import Timeline from "@/components/Timeline";
import { motion } from "framer-motion"; // Import motion from framer-motion
import Accomplishments from "@/components/accomplishments";

export default function AboutUs() {
  return (
    <>
      <div className="mx-auto max-w-6xl px-4 sm:px-6 pt-20">
        {/* Section header */}
        <div className="mx-auto max-w-3xl text-center">
          <div className="inline-flex items-center gap-3 pb-3 before:h-px before:w-8 before:bg-linear-to-r before:from-transparent before:to-indigo-200/50 after:h-px after:w-8 after:bg-linear-to-l after:from-transparent after:to-indigo-200/50">
            <span className="inline-flex bg-linear-to-r from-indigo-500 to-indigo-200 bg-clip-text text-transparent">
              About us
            </span>
          </div>
        </div>
      </div>
      <motion.h1
        className="animate-[gradient_12s_linear_infinite] bg-[linear-gradient(to_right,var(--color-gray-200),var(--color-indigo-200),var(--color-gray-50),var(--color-indigo-300),var(--color-gray-200))] bg-[length:200%_auto] bg-clip-text pb-5 font-nacelle text-5xl font-semibold text-transparent md:text-5xl text-center max-w-5xl mx-auto"
        initial={{ opacity: 0, y: -50 }} // Start off-screen to the top and hidden
        animate={{ opacity: 1, y: 0 }} // Slide in and show
        transition={{ duration: 1, delay: 0.5 }}
      >
         Who we are
      </motion.h1>
      <Accomplishments />

      {/* <section className="flex flex-col md:flex-row items-center mx-auto max-w-6xl px-4 sm:px-6 py-12">
        
        <div className="md:w-1/2 mb-8 md:mb-0">
          <motion.div
            className="mt-5 color p-5 bg-gradient-to-r from-indigo-600 to-indigo-400 rounded-lg shadow-md"
            initial={{ opacity: 0, y: 20 }} // Start hidden and slightly below
            animate={{ opacity: 1, y: 0 }} // Fade in and slide up
            transition={{ duration: 0.5, delay: 0.9 }} // First div
          >
            <p className="text-lg text-white">
              It’s no more secret, the DATA is the driving force for today’s fast decision-making process in almost all businesses.
            </p>
          </motion.div>
          <motion.div
            className="mt-5 color p-5 bg-gradient-to-r from-indigo-600 to-indigo-400 rounded-lg shadow-md"
            initial={{ opacity: 0, y: 20 }} // Start hidden and slightly below
            animate={{ opacity: 1, y: 0 }} // Fade in and slide up
            transition={{ duration: 0.5, delay: 1.4 }} // Second div, delayed by 0.5 seconds
          >
            <p className="text-lg text-white">
              We at IOT-Edge, try to offer a framework that simplifies, processes and presents Telemetry DATA to meet desired requirements of our partners and overcome industry challenges.
            </p>
          </motion.div>
          <motion.div
            className="mt-5 color p-5 rounded-lg shadow-md bg-gradient-to-r from-indigo-600 to-indigo-400"
            initial={{ opacity: 0, y: 20 }} // Start hidden and slightly below
            animate={{ opacity: 1, y: 0 }} // Fade in and slide up
            transition={{ duration: 0.5, delay: 1.9 }} // Third div, delayed by 0.5 seconds
          >
            <p className="text-lg text-white">
              IOT-Edge has boarded and collaborated with highly skilled and experienced experts from the industry, ultimate goal is to deliver values in terms of services and products to our clients.
            </p>
          </motion.div>
        </div>

        
        <motion.div
          className="relative md:w-1/2 flex justify-center"
          initial={{ x: 100, opacity: 0 }} // Start off-screen to the right and hidden
          animate={{ x: 0, opacity: 1 }} // Slide in and show
          transition={{ duration: 0.5, delay: 1.1 }}
        >
          <div className="">
            <Image
              src={DASH}
              alt="About Us"
              className="" // Add white shadow here
              width={500} // Adjust width as needed
              height={900} // Adjust height as needed
            />
          </div>
        </motion.div>
      </section> */}

      {/* Accomplishments and Vision Section */}
      <Timeline />
      
      <Cta />
      <Footer />
    </>
  );
}
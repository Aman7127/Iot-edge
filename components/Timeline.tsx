"use client";
import Image from "next/image"; // Import Image from Next.js
import "../app/(auth)/aboutus/page.css"; // Ensure you have the necessary CSS
import { motion } from "framer-motion";
import img from "@/time.webp"

export default function Timeline() {
  return (
    <>
      <section className="pt-10 pb-10">
        <div className="pt-12 mx-auto max-w-3xl text-center pb-12">
          <div className="inline-flex items-center gap-3 before:h-px before:w-8 before:bg-linear-to-r before:from-transparent before:to-indigo-200/50 after:h-px after:w-8 after:bg-linear-to-l after:from-transparent after:to-indigo-200/50">
            <span className="text-lg inline-flex bg-linear-to-r from-indigo-500 to-indigo-200 bg-clip-text text-transparent">
              Our Timeline
            </span>
          </div>
        </div>
        
        {/* Replace the entire timeline with an image */}
        <div className="flex justify-center">
          <Image
            src={img} // Replace with the path to your image
            alt="Timeline Image"
            width={800} // Set the desired width
            height={400} // Set the desired height
            className="rounded-lg shadow-lg" // Optional: Add any additional classes for styling
          />
        </div>

        <motion.p
          className="text-xl font-semibold text-center text-indigo-200/65 pt-20 pb-20 pr-10 pl-10"
          initial={{ opacity: 0, y: 20 }} // Start hidden
          animate={{ opacity: 1, y: 0 }} // Slide in and show
          transition={{ duration: 0.5, delay: 1.4 }}
        >
          With a strong foundation and a clear vision for the future, our founder continues to push boundaries, ensuring IoT-Edge remains an innovation-driven force in the ever-evolving world of telematics.
        </motion.p>
      </section>
    </>
  );
}
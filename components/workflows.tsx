"use client";
import { useEffect, useState } from "react";
import SnowParticles from "@/components/snowparticle";
import { motion } from "framer-motion";
import Image from "next/image";
import WorflowImg01 from "@/public/images/workflow-01.png";
import WorflowImg02 from "@/public/images/workflow-02.png";
import WorflowImg03 from "@/public/images/workflow-03.png";
import Spotlight from "@/components/spotlight";

export default function Workflows() {
  // Define animation variants for cards
  const cardVariants = {
    hidden: { opacity: 0, x: -100 }, // Start off-screen to the left and hidden
    visible: (i:any) => ({
      opacity: 1,
      x: 0,
      transition: {
        delay: i * 0.2, // Stagger the animation
        duration: 0.5,
      },
    }),
  };

  // Define animation variants for heading and subtext
  const textVariants = {
    hidden: { opacity: 0, y: -20 }, // Start off-screen to the top and hidden
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
      },
    },
  };

  return (
    <section className="bg-black z-10 pt-10 pb-10">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="pb-12 md:pb-20">
          {/* Section header */}
          <div className="mx-auto max-w-3xl pb-12 text-center md:pb-20">
            <div className="inline-flex items-center gap-3 pb-3 before:h-px before:w-8 before:bg-linear-to-r before:from-transparent before:to-indigo-200/50 after:h-px after:w-8 after:bg-linear-to-l after:from-transparent after:to-indigo-200/50">
              <span className="inline-flex bg-linear-to-r from-indigo-500 to-indigo-200 bg-clip-text text-transparent">
                Tailored Workflows
              </span>
            </div>
            <motion.h2
              variants={textVariants}
              initial="hidden"
              animate="visible"
              className="animate-[gradient_6s_linear_infinite] bg-[linear-gradient(to_right,var(--color-gray-200),var(--color-indigo-200),var(--color-gray-50),var(--color-indigo-300),var(--color-gray-200))] bg-[length:200%_auto] bg-clip-text pb-4 font-nacelle text-3xl font-semibold text-transparent md:text-4xl"
            >
              Begin your IoT Journey
            </motion.h2>
            <motion.p
              variants={textVariants}
              initial="hidden"
              animate="visible"
              className="text-lg text-indigo-200/65"
            >
              Leading provider of cutting-edge IoT (Internet of Things) and GPS solutions.
            </motion.p>
          </div>
          {/* Spotlight items */}
          <Spotlight className="group mx-auto grid max-w-sm items-start gap-6 lg:max-w-none lg:grid-cols-3">
            {/* Card 1 */}
            <motion.div
              variants={cardVariants}
              initial="hidden"
              whileInView="visible"
              custom={0} // Pass index for stagger effect
              className="group/card relative h-full overflow-hidden rounded-2xl bg-gray-800 p-px"
            >
              <a href="#0">
                <div className="relative z-20 h-full overflow-hidden rounded-[inherit] bg-gray-950 after:absolute after:inset-0 after:bg-linear-to-br after:from-gray-900/50 after:via-gray-800/25 after:to-gray-900/50">
                  <div>
                    <span className="flex items-center justify-center text-2xl font-normal pt-10">
                      <span className="bg-linear-to-r from-indigo-500 to-indigo-200 bg-clip-text font-bold text-transparent">
                        Fleet Management
                      </span>
                    </span>
                  </div>
                  <Image
                    className="inline-flex"
                    src={WorflowImg01}
                    width={350}
                    height={100}
                    alt="Workflow 01"
                  />
                  <div className="p-6">
                    <p className="text-center bg-[linear-gradient(to_right,var(--color-gray-200),var(--color-indigo-200),var(--color-gray-50),var(--color-indigo-300),var(--color-gray-200))] bg-[length:200%_auto] bg-clip-text pb-5 font-nacelle font-semibold text-transparent">
                      Optimize your fleet operations with real-time tracking and monitoring solutions, including real-time vehicle tracking, route optimization, driver behavior analysis, and fuel consumption monitoring.
                    </p>
                  </div>
                </div>
              </a>
            </motion.div>

            {/* Card 2 */}
            <motion.div
              variants={cardVariants}
              initial="hidden"
              whileInView="visible"
              custom={1} // Pass index for stagger effect
              className="group/card relative h-full overflow-hidden rounded-2xl bg-gray-800 p-px"
            >
              <a href="#0">
                <div className="relative z-20 h-full overflow-hidden rounded-[inherit] bg-gray-950 after:absolute after:inset-0 after:bg-linear-to-br after:from-gray-900/50 after:via-gray-800/25 after:to-gray-900/50">
                  <div>
                    <span className="flex items-center justify-center text-2xl font-normal pt-10">
                      <span className="bg-linear-to-r from-indigo-500 to-indigo-200 bg-clip-text font-bold text-transparent">
                        Asset Tracking
                      </span>
                    </span>
                  </div>
                  <Image
                    className="inline-flex"
                    src={WorflowImg02}
                    width={350}
                    height={100}
                    alt="Workflow 02"
                  />
                  <div className="p-6">
                    <p className="text-center bg-[linear-gradient(to_right,var(--color-gray-200),var(--color-indigo-200),var(--color-gray-50),var(--color-indigo-300),var(--color-gray-200))] bg-[length:200%_auto] bg-clip-text pb-5 font-nacelle font-semibold text-transparent">
                      Keep track of your valuable assets with our advanced tracking solutions, featuring GPS tracking for assets, geofencing alerts, inventory management, and condition monitoring.
                    </p>
                  </div>
                </div>
              </a>
            </motion.div>

            {/* Card 3 */}
            <motion.div
              variants={cardVariants}
              initial="hidden"
              whileInView="visible"
              custom={2} // Pass index for stagger effect
              className="group/card relative h-full overflow-hidden rounded-2xl bg-gray-800 p-px"
            >
              <a href="#0">
                <div className="relative z-20 h-full overflow-hidden rounded-[inherit] bg-gray-950 after:absolute after:inset-0 after:bg-linear-to-br after:from-gray-900/50 after:via-gray-800/25 after:to-gray-900/50">
                  <div>
                    <span className="flex items-center justify-center text-2xl font-normal pt-10">
                      <span className="bg-linear-to-r from-indigo-500 to-indigo-200 bg-clip-text font-bold text-transparent">
                        Smart Automation
                      </span>
                    </span>
                  </div>
                  <Image
                    className="inline-flex"
                    src={WorflowImg03}
                    width={350}
                    height={100}
                    alt="Workflow 03"
                  />
                  <div className="p-6">
                    <p className="text-center bg-[linear-gradient(to_right,var(--color-gray-200),var(--color-indigo-200),var(--color-gray-50),var(--color-indigo-300),var(--color-gray-200))] bg-[length:200%_auto] bg-clip-text pb-5 font-nacelle font-semibold text-transparent">
                      Automate your processes and enhance efficiency with IoT technology, offering remote monitoring and control, automated alerts and notifications, data analytics and reporting, and integration with existing systems.
                    </p>
                  </div>
                </div>
              </a>
            </motion.div>
          </Spotlight>
        </div>
      </div>
    </section>
  );
}
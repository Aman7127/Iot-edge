"use client";
import Link from "next/link";
import "../app/(auth)/aboutus/page.css";
import { motion } from "framer-motion"; // Import motion from framer-motion
import Image from "next/image";
import WorflowImg01 from "@/public/images/workflow-01.png";
import WorflowImg02 from "@/public/images/workflow-02.png";
import "./acc.css"


export default function Accomplishments() {
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
    <section className=" z-10 pt-10 pb-10">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="pb-12 md:pb-20">
          {/* Section header */}
          
          {/* Spotlight items */}
          <div className="ml-15 group mx-auto grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-2">
            {/* Card 1 */}
            <motion.div
              variants={cardVariants}
              initial="hidden"
              whileInView="visible"
              custom={0} // Pass index for stagger effect
              className=" relative h-full w-200 max-w-md overflow-hidden rounded-2xl bg-gray-800 p-px"
            >
              <a href="#0">
                <div className="relative z-20 h-full overflow-hidden rounded-[inherit] bg-gray-950 after:absolute after:inset-0 after:bg-linear-to-br after:from-gray-900/50 after:via-gray-800/25 after:to-gray-900/50">
                  <div>
                    <span className="flex items-center justify-center text-2xl font-normal pt-10">
                      <span className="bg-linear-to-r from-indigo-500 to-indigo-100 bg-clip-text font-bold text-transparent">
                        Our Accomplishments
                      </span>
                    </span>
                  </div>
                
                  <div className="p-6 pt-10">
                    <p className="text-left text-lg bg-[linear-gradient(to_right,var(--color-gray-200),var(--color-indigo-200),var(--color-gray-50),var(--color-indigo-300),var(--color-gray-200))] bg -[length:200%_auto] bg-clip-text pb-5 font-nacelle font-semibold text-transparent">
                    At Iot-Edge, we are committed to delivering excellence in telematics and IoT solutions. Our founder brings over nine years of specialized experience from Teltonika IoT Group, a global market leader in telematics. This extensive background provides us with deep industry knowledge and a strong foundation in cutting-edge IoT technologies.																			
                    </p>
                    {/* <p className="text-left bg-[linear-gradient(to_right,var(--color-gray-200),var(--color-indigo-200),var(--color-gray-50),var(--color-indigo-300),var(--color-gray-200))] bg -[length:200%_auto] bg-clip-text pb-5 font-nacelle font-semibold text-transparent">
                    In addition, we have cultivated a well-established network of industry partners, spanning from project implementation to end-to-end project management. This allows us to deliver seamless execution, innovative solutions, and reliable performance, ensuring the highest standards of quality and efficiency for our clients.																																				
                    </p> */}
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
              className="group/card relative h-full w-full max-w-md overflow-hidden rounded-2xl bg-gray-800 p-px"
            >
              <a href="#0">
                <div className="relative z-20 h-full overflow-hidden rounded-[inherit] bg-gray-950 after:absolute after:inset-0 after:bg-linear-to-br after:from-gray-900/50 after:via-gray-800/25 after:to-gray-900/50">
                  <div>
                    <span className="flex items-center justify-center text-2xl font-normal pt-10">
                      <span className="bg-linear-to-r from-indigo-500 to-indigo-200 bg-clip-text font-bold text-transparent">
                        Our Vision
                      </span>
                    </span>
                  </div>
                 
                  <div className="p-6 pt-10">
                    <p className="text-left text-lg bg-[linear-gradient(to_right,var(--color-gray-200),var(--color-indigo-200),var(--color-gray-50),var(--color-indigo-300),var(--color-gray-200))] bg-[length:200%_auto] bg-clip-text pb-5 font-nacelle font-semibold text-transparent">
                    We go beyond offering standard solutions; we believe in crafting tailored, high-impact strategies that align with our clients’ unique needs. Leveraging our OEM expertise and a collaborative approach, we carefully integrate the most advanced products and solution components, working alongside trusted industry partners. Rather than pushing predefined product features, we focus on building customized, scalable solutions that drive efficiency, connectivity, and long-term success for our clients.																									
                    </p>
                  </div>
                </div>
              </a>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
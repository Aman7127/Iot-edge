"use client";
import { motion } from "framer-motion"; // Import motion from framer-motion
import Link from "next/link";
import DASH from "@/public/images/cons.png";
import DASH1 from "@/public/images/ui1.png";
import DASH2 from "@/public/images/cust3.png";
import Image from "next/image";
import "../aboutus/page.css";
import Footer from "@/components/ui/footer";
import Cta from "@/components/cta";
import ParallaxTilt from 'react-parallax-tilt'; // Import the ParallaxTilt component

export default function SignUp() {
  // Animation variants
  const sectionVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5, ease: "easeInOut" },
    },
  };

  const textVariants = {
    hidden: { opacity: 0, y: -20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5, ease: "easeInOut" },
    },
  };

  return (
    <>
      <div className="mx-auto max-w-3xl pb-12 text-center md:pb-20">
        <div className="inline-flex items-center gap-3 pt-20 pb-3 before:h-px before:w-8 before:bg-gray-300 after:h-px after:w-8 after:bg-gray-300">
          <span className="inline-flex text-gray-800">
            Services
          </span>
        </div>
        <motion.h2
          variants={textVariants}
          initial="hidden"
          animate="visible"
          className="text-white pb-4 font-nacelle text-3xl font-semibold md:text-4xl"
        >
          Learn more about our services
        </motion.h2>
        <motion.p
          variants={textVariants}
          initial="hidden"
          animate="visible"
          className="text-lg text-gray-600"
        >
          We offer a comprehensive suite of services designed to help businesses navigate the evolving landscape of telematics and IoT.
        </motion.p>
      </div>

      {/* Section 1 */}
      <div className="pb-8 pt-8"> {/* Removed background color */}
        <motion.section
          className="flex flex-col md:flex-row items-center mx-auto max-w-6xl px-4 sm:px-6 py-12 rounded-lg shadow-lg shadow-gray-800 relative overflow-hidden"
          variants={sectionVariants}
          initial="hidden"
          animate="visible"
        >
          <div className="md:w-1/2 mb-8 md:mb-0">
            <div className="inline-flex items-center gap-3 before:h-px before:w-8 before:bg-gray-300 after:h-px after:w-8 after:bg-gray-300">
              <span className="text-lg text-gray-800 bg-blue-100 p-2 rounded-md">
                Tech
              </span>
            </div>
            <h1 className="text-white-800 pb-5 font-nacelle text-3xl font-semibold">
              Technology Consulting & Compliance Advisory
            </h1>
            <p className="text-xl text-white-200">
              Staying ahead in the telematics and IoT industry requires more than just the right technology—it demands a thorough understanding of evolving market trends and regulatory requirements. Our consulting services provide expert guidance on industry regulations, helping businesses align their solutions with compliance standards while optimizing performance and efficiency.
            </p>
          </div>

          <div className="relative md:w-1/2 flex justify-center rounded-xl h-1/2">
            <ParallaxTilt>
              <motion.div
                className="rounded-2xl shadow-md"
                variants={textVariants}
                initial="hidden"
                animate="visible"
              >
                <Image className="rounded-2xl" src={DASH} alt="About Us" width={500} height={100} />
              </motion.div>
            </ParallaxTilt>
          </div>
        </motion.section>
      </div>

      {/* Section 2 */}
      <div className="pb-8"> {/* Removed background color */}
        <motion.section
          className="flex flex-col md:flex-row items-center mx-auto max-w-6xl px-4 sm:px-6 py-12 rounded-lg shadow-lg shadow-gray-800 relative overflow-hidden"
          variants={sectionVariants}
          initial="hidden"
          animate="visible"
        >
          <div className="relative md:w-1/2 flex justify-center">
            <ParallaxTilt>
              <div>
                <Image src={DASH1} alt="About Us" width={500} height={400} className="rounded-lg shadow-md" />
              </div>
            </ParallaxTilt>
          </div>

          <div className="md:w-1/2 mb-8 md:mb-0">
            <div className="pl-10 inline-flex items-center gap-3 before:h-px before:w-8 before:bg-gray-300 after:h-px after:w-8 after:bg-gray-300">
              <span className="text-lg text-gray-800 bg-green-100 p-2 rounded-md">
                Ui/Ux
              </span>
            </div>
            <div className="pl-10">
              <h1 className="text-white-800 pb-5 font-nacelle text-3xl font-semibold">
                Project Design & Management
              </h1>
              <p className="text-xl text-white-100">
                From concept to deployment, we provide end-to-end project design and management services to ensure seamless execution. Our team works closely with clients to define project objectives, develop strategic roadmaps, and oversee implementation—ensuring efficiency, scalability, and long-term success.
              </p>
            </div>
          </div>
        </motion.section>
      </div>

      {/* Section 3 */}
      <div className="mb-8"> {/* Removed background color */}
        <motion.section
          className="flex flex-col md:flex-row items-center mx-auto max-w-6xl px-4 sm:px-6 py-12 rounded-lg shadow-lg shadow-gray-800 relative overflow-hidden"
          variants={sectionVariants}
          initial="hidden"
          animate="visible"
        >
          <div className="md:w-1/2 pb-8 md:mb-0">
            <div className="inline-flex items-center gap-3 before:h-px before:w-8 before:bg-gray-300 after:h-px after:w-8 after:bg-gray-300">
              <span className="text-lg text-gray-800 bg-purple-100 p-2 rounded-md">
                User Access
              </span>
            </div>
            <h1 className="text-white-800 pb-5 font-nacelle text-3xl font-semibold">
              Customization & Solution Enhancements
            </h1>
            <p className="text-xl text-white-700">
              Every business has unique needs, and off-the-shelf solutions may not always fit perfectly. We offer customization services that enhance and upgrade existing solutions, integrating advanced functionalities and optimizing performance to meet evolving business demands. Whether it’s refining current systems or incorporating new technologies, we ensure our clients stay ahead of the curve. With our industry expertise and strong partner network, we deliver innovative, reliable, and scalable solutions that drive real value for businesses.
            </p>
          </div>

          <div className="relative md:w-1/2 flex justify-center">
            <ParallaxTilt>
              <div>
                <Image
                  src={DASH2}
                  alt="About Us"
                  width={500}
                  height={400}
                  className="rounded-lg shadow-md"
                />
              </div>
            </ParallaxTilt>
          </div>
        </motion.section>
      </div>
      <div>
        <Cta />
      </div>
      <Footer />
    </>
  );
}
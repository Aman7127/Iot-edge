"use client"
import { motion } from 'framer-motion';
import AcmeLogo from "../public/images/acme.png";
import ApexLogo from "../public/images/apex.png";
import CelestialLogo from "../public/images/celestial.png";
import PulseLogo from "../public/images/pulse.png"; // Ensure this is the correct import
import QuantumLogo from "../public/images/quantum.png";
import Image from 'next/image';

const Logos = () => {
    return (
        <div style={{ marginBottom: 40 ,marginTop:20}} className="mx-auto px-4 sm:px-6 py-8 bg-black flex justify-center w-full">
            <div className="container">
                <div className="flex overflow-hidden [mask-image:linear-gradient(to_right,transparent,black,transparent)]">
                <motion.div
                    className="flex gap-14 flex-none pr-14 "
                    animate={{ translateX: "-50%"}} // Rotate continuously
                    transition={{ duration: 20, repeat: Infinity , ease:"linear" , repeatType:"loop"}} // Adjust duration for speed
                >
                    <div className="flex gap-16 flex-none">
                        <Image src={AcmeLogo} alt="Acme logo" className="logo-ticker-image shine" />
                        <Image src={ApexLogo} alt="Apex logo" className="logo-ticker-image shine" />
                        <Image src={CelestialLogo} alt="Celestial logo" className="logo-ticker-image shine" />
                        <Image src={PulseLogo} alt="Pulse logo" className="logo-ticker-image shine" />
                        <Image src={AcmeLogo} alt="Acme logo" className="logo-ticker-image shine" />
                        <Image src={QuantumLogo} alt="Quantum logo" className="logo-ticker-image shine" />
                        <Image src={AcmeLogo} alt="Acme logo" className="logo-ticker-image shine" />
                        <Image src={ApexLogo} alt="Apex logo" className="logo-ticker-image shine" />
                        <Image src={CelestialLogo} alt="Celestial logo" className="logo-ticker-image shine" />
                        <Image src={PulseLogo} alt="Pulse logo" className="logo-ticker-image shine" />
                        <Image src={AcmeLogo} alt="Acme logo" className="logo-ticker-image shine" />
                        <Image src={QuantumLogo} alt="Quantum logo" className="logo-ticker-image shine" />
                    </div>
                </motion.div>
                </div>
            </div>
        </div>
    );
};

export default Logos;

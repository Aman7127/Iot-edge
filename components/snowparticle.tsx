"use client"; // This makes the component a client component

import { useCallback } from "react";
import type { Container, Engine } from "tsparticles-engine";
import Particles from "react-tsparticles";
import { loadSlim } from "tsparticles-slim"; // Load slim version for better performance
import { CSSProperties } from "react";

const SnowParticles = () => {
    const particlesInit = useCallback(async (engine: Engine) => {
        console.log(engine);
        await loadSlim(engine); // Load the slim version of tsparticles
    }, []);

    const particlesLoaded = useCallback(async (container: Container | undefined) => {
        await console.log(container);
    }, []);

    const particlesStyle : CSSProperties = {
      
        top: 0,
        left: 0,
        width: "60%",
        height: "100%",
        zIndex: -1, // Ensure this is behind other content
    };

    return (
        <Particles
            id="tsparticles"
            style={particlesStyle}
            init={particlesInit}
            loaded={particlesLoaded}
            options={{
               
                fpsLimit: 120,
                
                particles: {
                    color: {
                        value: ["#ffffff","4D55CC"], // Snow color
                    }, 
                    move: {
                        direction: "top", // Move downwards
                        enable: true,
                        outModes: {
                            default: "out", // Particles will disappear when they go out of bounds
                        },
                        speed: 0.2, // Speed of falling snow
                        straight: false,
                    },
                    number: {
                        density: {
                            enable: false,
                            area: 100,
                        },
                        value: 80, // Number of particles
                    },
                    opacity: {
                        value: 0.5, // Opacity of snowflakes
                    },
                    shape: {
                        type: "circle", // Snowflakes will be circular
                    },
                    size: {
                        value: {min:1,max:2}, // Size of snowflakes
                    },
                },
                detectRetina: false,
            }}
        />
    );
};

export default SnowParticles;
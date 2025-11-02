import React, { useState, useEffect } from "react";
import HeroImage from "../assets/icon.png";
import BackgroundImage from "../assets/background.jpg";
import { motion, AnimatePresence } from "framer-motion";
import { useInView } from "react-intersection-observer";
import {
  FaEnvelope,
  FaFacebook,
  FaInstagram,
  FaLinkedin,
  FaGithub,
} from "react-icons/fa";

const roles = ["UI/UX Designer", "Frontend Developer"];

const Hero = () => {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % roles.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  const { ref: imageRef, inView: imageInView } = useInView({ threshold: 0.2 });
  const { ref: cvRef, inView: cvInView } = useInView({ threshold: 0.2 });

  const iconVariants = {
    hover: {
      scale: 1.2,
      rotate: 5,
      transition: { type: "spring", stiffness: 300 },
    },
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.04 } },
    exit: { opacity: 0 },
  };

  const letterVariants = {
    hidden: { opacity: 0, y: 10 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { type: "spring", stiffness: 80, damping: 12 },
    },
  };

  return (
    <section
      id="home"
      className="relative bg-black text-white min-h-screen flex flex-col justify-center items-center overflow-hidden px-4 sm:px-8 md:px-16 lg:px-24"
      style={{
        backgroundImage: `url(${BackgroundImage})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      {/* Background Overlay */}
      <motion.div
        className="absolute inset-0 bg-black/50"
        style={{ pointerEvents: "none" }}
        animate={{ scale: [1, 1.03, 1] }}
        transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
      />

      {/* Content Container */}
      <div className="relative z-10 text-center max-w-3xl mx-auto px-2 sm:px-4">
        {/* Profile Image */}
        <motion.img
          ref={imageRef}
          src={HeroImage}
          alt="Profile"
          className="mx-auto mb-4 rounded-full shadow-[0_0_15px_rgba(34,197,94,0.5)] 
                     w-[clamp(5rem,25vw,9rem)] h-auto sm:w-[clamp(6rem,20vw,10rem)]"
          initial={{ opacity: 0, y: 30, scale: 0.9 }}
          animate={imageInView ? { opacity: 1, y: 0, scale: 1 } : {}}
          transition={{ duration: 0.8, ease: "easeOut" }}
        />

        {/* Name */}
        <h1 className="font-bold mb-2 text-[clamp(1.25rem,6vw,3rem)] leading-tight">
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-green-400">
            Imansa Gayathmi
          </span>
        </h1>

        {/* Animated Roles */}
        <h2 className="font-semibold uppercase mb-3 flex justify-center gap-1 text-gray-300 text-[clamp(0.75rem,3vw,1.25rem)]">
          <AnimatePresence mode="wait">
            <motion.span
              key={roles[index]}
              variants={containerVariants}
              initial="hidden"
              animate="visible"
              exit="exit"
              className="flex flex-wrap justify-center"
            >
              {roles[index].split("").map((char, i) => (
                <motion.span key={i} variants={letterVariants}>
                  {char === " " ? "\u00A0" : char}
                </motion.span>
              ))}
            </motion.span>
          </AnimatePresence>
        </h2>

        {/* Description */}
        <p className="text-gray-400 leading-snug mb-6 sm:mb-8 text-[clamp(0.75rem,2.5vw,1rem)] px-3 sm:px-0">
          Building elegant, responsive, and high-performing web solutions that
          deliver both aesthetic appeal and meaningful user experiences.
        </p>

        {/* Download CV */}
        <motion.a
          ref={cvRef}
          href="#"
          initial={{ opacity: 0, y: 10 }}
          animate={cvInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, ease: "easeOut" }}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="inline-block bg-gradient-to-r from-blue-500 to-green-400 text-white font-semibold 
                     px-[clamp(2rem,7vw,4rem)] py-[clamp(0.5rem,1.5vw,1rem)] rounded-full shadow-lg 
                     hover:shadow-green-400/40 transition-all duration-300 text-[clamp(0.75rem,1.5vw,1rem)]"
        >
          Download CV →
        </motion.a>
      </div>

      {/* ✅ Bottom Social Icons */}
      <div className="absolute bottom-4 sm:bottom-6 left-0 right-0 flex justify-center gap-6 sm:gap-8 text-2xl sm:text-3xl z-[99]">
        {[
          {
            icon: <FaEnvelope />,
            href: "mailto:imansagayathmi@gmail.com",
            color: "text-blue-400",
          },
          {
            icon: <FaFacebook />,
            href: "https://www.facebook.com/share/17o4mS9RmX/",
            color: "text-blue-500",
          },
          {
            icon: <FaInstagram />,
            href: "https://www.instagram.com/___ima_n_sa___/",
            color: "text-pink-500",
          },
          {
            icon: <FaLinkedin />,
            href: "https://www.linkedin.com/in/imansa-gayathmi-575284303/",
            color: "text-blue-400",
          },
          {
            icon: <FaGithub />,
            href: "https://github.com/Imansa2002",
            color: "text-gray-300",
          },
        ].map((item, i) => (
          <motion.a
            key={i}
            href={item.href}
            target="_blank"
            rel="noopener noreferrer"
            variants={iconVariants}
            whileHover="hover"
            className={`${item.color} hover:text-white transition-all duration-300 relative`}
          >
            <span className="text-2xl sm:text-3xl">{item.icon}</span>
            <span className="absolute inset-0 blur-md opacity-30 bg-white rounded-full"></span>
          </motion.a>
        ))}
      </div>
    </section>
  );
};

export default Hero;

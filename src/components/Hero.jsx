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
    const interval = setInterval(
      () => setIndex((prev) => (prev + 1) % roles.length),
      3000
    );
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
    tap: {
      scale: 0.9,
      rotate: -3,
      transition: { type: "spring", stiffness: 300 },
    },
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.04 },
    },
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
      className="relative bg-black text-white h-screen flex flex-col justify-center items-center overflow-hidden px-4 sm:px-8 md:px-16 lg:px-24"
      style={{
        backgroundImage: `url(${BackgroundImage})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      {/* Background Overlay */}
      <motion.div
        className="absolute inset-0 bg-black/50"
        animate={{ scale: [1, 1.03, 1] }}
        transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
      />

      {/* Content */}
      <div className="relative z-10 text-center max-w-xl sm:max-w-2xl mx-auto px-2 flex flex-col items-center justify-center">
        {/* Profile Image */}
        <motion.img
          ref={imageRef}
          src={HeroImage}
          alt="Profile"
          className="mx-auto mb-4 rounded-full shadow-[0_0_15px_rgba(34,197,94,0.5)] w-[120px] sm:w-[150px] md:w-[180px]"
          initial={{ opacity: 0, y: 30, scale: 0.9 }}
          animate={imageInView ? { opacity: 1, y: 0, scale: 1 } : {}}
          transition={{ duration: 0.8, ease: "easeOut" }}
        />

        {/* Name */}
        <h1 className="font-bold mb-2 text-[1.8rem] sm:text-[2.5rem] md:text-[3rem] leading-snug">
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-green-400">
            Imansa Gayathmi
          </span>
        </h1>

        {/* Animated Roles */}
        <h2 className="font-semibold uppercase mb-3 text-gray-300 text-[0.9rem] sm:text-[1.2rem] flex justify-center">
          <AnimatePresence mode="wait">
            <motion.span
              key={roles[index]}
              variants={containerVariants}
              initial="hidden"
              animate="visible"
              exit="exit"
              className="flex"
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
        <p className="text-gray-400 text-sm sm:text-base leading-relaxed mb-6 sm:mb-8 px-4 sm:px-0">
          Building elegant, responsive, and high-performing web solutions that
          deliver both aesthetic appeal and meaningful user experiences.
        </p>

        {/* Download CV Button */}
        <motion.a
          ref={cvRef}
          href="#"
          initial={{ opacity: 0, y: 10 }}
          animate={cvInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, ease: "easeOut" }}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="inline-block bg-gradient-to-r from-blue-500 to-green-400 text-white font-semibold px-8 sm:px-12 py-3 sm:py-4 rounded-full shadow-lg hover:shadow-green-400/40 transition-all duration-300 text-sm sm:text-base"
        >
          Download CV →
        </motion.a>

        {/* Social Icons */}
        <div className="flex justify-center space-x-6 sm:space-x-8 my-6 text-2xl sm:text-3xl">
          <motion.a
            href="mailto:imansagayathmi@gmail.com"
            variants={iconVariants}
            whileHover="hover"
            whileTap="tap"
            className="text-blue-400 hover:text-white"
          >
            <FaEnvelope />
          </motion.a>
          <motion.a
            href="https://www.facebook.com/share/17o4mS9RmX/"
            variants={iconVariants}
            whileHover="hover"
            whileTap="tap"
            className="text-blue-500 hover:text-white"
          >
            <FaFacebook />
          </motion.a>
          <motion.a
            href="https://www.instagram.com/___ima_n_sa___/"
            variants={iconVariants}
            whileHover="hover"
            whileTap="tap"
            className="text-pink-500 hover:text-white"
          >
            <FaInstagram />
          </motion.a>
          <motion.a
            href="https://www.linkedin.com/in/imansa-gayathmi-575284303/"
            variants={iconVariants}
            whileHover="hover"
            whileTap="tap"
            className="text-blue-400 hover:text-white"
          >
            <FaLinkedin />
          </motion.a>
          <motion.a
            href="https://github.com/Imansa2002"
            variants={iconVariants}
            whileHover="hover"
            whileTap="tap"
            className="text-gray-400 hover:text-white"
          >
            <FaGithub />
          </motion.a>
        </div>
      </div>
    </section>
  );
};

export default Hero;

import React, { useState, useEffect } from 'react';
import HeroImage from '../assets/icon.png';
import BackgroundImage from '../assets/background.jpg';
import { motion, AnimatePresence } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { FaEnvelope, FaFacebook, FaInstagram, FaLinkedin, FaGithub } from 'react-icons/fa';

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

  // Animation variants for icons
  const iconVariants = {
    hover: { scale: 1.2, rotate: 5, transition: { type: "spring", stiffness: 300 } },
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.04 } },
    exit: { opacity: 0 },
  };

  const letterVariants = {
    hidden: { opacity: 0, y: 10 },
    visible: { opacity: 1, y: 0, transition: { type: 'spring', stiffness: 80, damping: 12 } },
  };

  return (
    <section
      id="home"
      className="relative bg-black text-white h-screen flex flex-col justify-center items-center overflow-hidden px-4 sm:px-8 md:px-16 lg:px-24"
      style={{
        backgroundImage: `url(${BackgroundImage})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      }}
    >
      {/* Background Overlay */}
      <motion.div
        className="absolute inset-0 bg-black/50"
        style={{ pointerEvents: "none" }}
        animate={{ scale: [1, 1.03, 1] }}
        transition={{ duration: 20, repeat: Infinity, ease: 'linear' }}
      />

      <div className="relative z-10 text-center max-w-3xl mx-auto">
        {/* Profile Image */}
        <motion.img
          ref={imageRef}
          src={HeroImage}
          alt="Profile"
          className="mx-auto mb-4 rounded-full shadow-[0_0_15px_rgba(34,197,94,0.5)] w-[clamp(6rem,20vw,10rem)] h-auto"
          initial={{ opacity: 0, y: 30, scale: 0.9 }}
          animate={imageInView ? { opacity: 1, y: 0, scale: 1 } : {}}
          transition={{ duration: 0.8, ease: 'easeOut' }}
        />

        {/* Name */}
        <h1 className="font-bold mb-2 text-[clamp(1.5rem,6vw,3rem)]">
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
              className="flex"
            >
              {roles[index].split('').map((char, i) => (
                <motion.span key={i} variants={letterVariants}>
                  {char === ' ' ? '\u00A0' : char}
                </motion.span>
              ))}
            </motion.span>
          </AnimatePresence>
        </h2>

        {/* Description */}
        <p className="text-gray-400 leading-snug mb-6 sm:mb-8 text-[clamp(0.7rem,2vw,1rem)]">
          Building elegant, responsive, and high-performing web solutions that deliver both aesthetic appeal and meaningful user experiences.
        </p>

        {/* Download CV */}
        <motion.a
          ref={cvRef}
          href="#"
          initial={{ opacity: 0, y: 10 }}
          animate={cvInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, ease: 'easeOut' }}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="inline-block bg-gradient-to-r from-blue-500 to-green-400 text-white font-semibold 
                     px-[clamp(2.5rem,8vw,5rem)] py-[clamp(0.5rem,1.5vw,1rem)] rounded-full shadow-lg 
                     hover:shadow-green-400/40 transition-all duration-300 text-[clamp(0.75rem,1.5vw,1rem)]"
        >
          Download CV →
        </motion.a>

        {/* Animated Social Media Icons */}
        <div className="flex justify-center space-x-8 my-6 text-3xl">
          <motion.a
            href="mailto:imansagayathmi@gmail.com"
            variants={iconVariants}
            whileHover="hover"
            className="text-blue-400 hover:text-white transition-colors duration-300"
          >
            <FaEnvelope />
          </motion.a>

          <motion.a
            href="https://www.facebook.com/share/17o4mS9RmX/"
            variants={iconVariants}
            whileHover="hover"
            className="text-blue-500 hover:text-white transition-colors duration-300"
          >
            <FaFacebook />
          </motion.a>

          <motion.a
            href="https://www.instagram.com/___ima_n_sa___/"
            variants={iconVariants}
            whileHover="hover"
            className="text-pink-500 hover:text-white transition-colors duration-300"
          >
            <FaInstagram />
          </motion.a>

          <motion.a
            href="https://www.linkedin.com/in/imansa-gayathmi-575284303/"
            variants={iconVariants}
            whileHover="hover"
            className="text-blue-400 hover:text-white transition-colors duration-300"
          >
            <FaLinkedin />
          </motion.a>

          <motion.a
            href="https://github.com/Imansa2002"
            variants={iconVariants}
            whileHover="hover"
            className="text-gray-400 hover:text-white transition-colors duration-300"
          >
            <FaGithub />
          </motion.a>
        </div>
      </div>
    </section>
  );
};

export default Hero;

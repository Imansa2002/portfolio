import React from "react";
import { motion } from "framer-motion";
import {
  FaFacebook,
  FaGithub,
  FaLinkedin,
  FaInstagram,
  FaEnvelope,
} from "react-icons/fa";

const Footer = () => {
  // Icon animation variant
  const iconVariants = {
    hover: {
      scale: 1.3,
      rotate: 10,
      transition: { type: "spring", stiffness: 300 },
    },
  };

  return (
    <footer className="bg-black text-white py-8">
      <div className="container mx-auto px-8 md:px-16 lg:px-24 text-center">

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

        {/* Fixed Copyright Section */}
        <div className="border-t border-gray-700 pt-4 mt-4">
          <p className="text-gray-400 text-sm tracking-wide">
            &copy; {new Date().getFullYear()}{" "}
            <span className="text-blue-400 font-semibold">Imansa Gayathmi</span>
            . All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

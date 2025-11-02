// About.jsx updated with responsive adjustments to avoid scroll on small screens
import React from "react";
import AboutImage from "../assets/heroimage.png";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { FaPalette, FaCode, FaStar, FaAward } from "react-icons/fa";

const features = [
  { icon: <FaPalette />, title: "Creative Design", description: "Visually engaging interfaces that captivate users." },
  { icon: <FaCode />, title: "Clean Code", description: "Maintainable, efficient, and high-quality frontend solutions." },
  { icon: <FaStar />, title: "User Focus", description: "Intuitive designs centered around user satisfaction." },
  { icon: <FaAward />, title: "Quality", description: "Polished, reliable, and consistent digital experiences." },
];

const About = () => {
  const { ref: headingRef, inView: headingInView } = useInView({ threshold: 0.2 });

  return (
    <section
      id="about-me"
      className="bg-black text-white min-h-screen flex flex-col justify-center px-4 sm:px-6 md:px-16 lg:px-24 overflow-hidden py-6 sm:py-8 md:py-0"
    >
      <motion.h2
        ref={headingRef}
        initial={{ y: -20, opacity: 0 }}
        animate={headingInView ? { y: 0, opacity: 1 } : { y: -20, opacity: 0 }}
        transition={{ duration: 0.6 }}
        className="text-xl sm:text-2xl md:text-3xl font-bold text-center mb-6 sm:mb-8"
      >
        About{" "}
        <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-green-400">
          Me
        </span>
      </motion.h2>

      <div className="flex flex-col md:flex-row items-center justify-center gap-4 sm:gap-6 md:gap-10 mb-6 sm:mb-8">
        <motion.img
          src={AboutImage}
          alt="About"
          className="w-28 sm:w-36 md:w-44 h-auto rounded-2xl object-cover shadow-[0_0_15px_rgba(34,197,94,0.5)]"
          initial={{ opacity: 0, x: -80 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: false, amount: 0.3 }}
        />

        <motion.p
          className="text-[11px] sm:text-sm md:text-sm text-gray-300 max-w-xs sm:max-w-sm md:max-w-md text-justify leading-snug"
          initial={{ opacity: 0, x: 80 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: false, amount: 0.3 }}
        >
          I’m a third-year Information and Communication Technology undergraduate at the
          University of Colombo. I’m passionate about crafting meaningful and visually engaging
          digital experiences through UI/UX design and frontend development. My goal is to
          transform ideas into elegant, responsive, and functional interfaces with seamless
          interactions.
        </motion.p>
      </div>

      <div className="grid grid-cols-2 md:grid-cols-4 gap-3 sm:gap-4 md:gap-6 justify-items-center">
        {features.map((feature, index) => (
          <motion.div
            key={index}
            className="bg-gray-900/60 border border-gray-700 rounded-lg p-2 sm:p-3 w-28 sm:w-32 md:w-40 h-28 sm:h-32 md:h-40 flex flex-col justify-center items-center text-center backdrop-blur-md transition-all duration-300 hover:scale-105 hover:shadow-[0_0_12px_rgba(34,197,94,0.5)]"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.2, duration: 0.6 }}
            viewport={{ once: false, amount: 0.3 }}
          >
            <div className="text-green-400 text-lg sm:text-xl md:text-2xl mb-1">{feature.icon}</div>
            <h3 className="text-[10px] sm:text-sm md:text-sm font-semibold text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-green-400 mb-1">
              {feature.title}
            </h3>
            <p className="text-gray-300 text-[9px] sm:text-xs md:text-xs leading-snug px-1">
              {feature.description}
            </p>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default About;

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
    <section id="about-me" className="bg-black text-white min-h-screen flex flex-col justify-center px-6 sm:px-8 md:px-16 lg:px-24 py-12 sm:py-16">
      <motion.h2
        ref={headingRef}
        initial={{ y: -20, opacity: 0 }}
        animate={headingInView ? { y: 0, opacity: 1 } : {}}
        transition={{ duration: 0.6 }}
        className="text-2xl sm:text-3xl font-bold text-center mb-8"
      >
        About{" "}
        <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-green-400">
          Me
        </span>
      </motion.h2>

      <div className="flex flex-col md:flex-row items-center justify-center gap-6 sm:gap-10 mb-10">
        <motion.img
          src={AboutImage}
          alt="About"
          className="w-32 sm:w-40 md:w-52 rounded-2xl shadow-[0_0_15px_rgba(34,197,94,0.5)]"
          initial={{ opacity: 0, x: -80 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: false, amount: 0.3 }}
        />
        <motion.p
          className="text-gray-300 text-xs sm:text-sm md:text-base max-w-md text-justify leading-snug"
          initial={{ opacity: 0, x: 80 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: false, amount: 0.3 }}
        >
          I’m a third-year Information and Communication Technology undergraduate
          at the University of Colombo. I’m passionate about crafting meaningful
          and visually engaging digital experiences through UI/UX design and
          frontend development. My goal is to transform ideas into elegant,
          responsive, and functional interfaces with seamless interactions.
        </motion.p>
      </div>

      <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-4 gap-4 justify-items-center">
        {features.map((feature, index) => (
          <motion.div
            key={index}
            className="bg-gray-900/60 border border-gray-700 rounded-lg p-3 sm:p-4 w-32 sm:w-40 md:w-44 h-32 sm:h-36 md:h-40 flex flex-col justify-center items-center text-center hover:scale-105 hover:shadow-[0_0_12px_rgba(34,197,94,0.5)] transition-all duration-300"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.2, duration: 0.6 }}
            viewport={{ once: false, amount: 0.3 }}
          >
            <div className="text-green-400 text-xl sm:text-2xl mb-1">
              {feature.icon}
            </div>
            <h3 className="text-sm font-semibold text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-green-400 mb-1">
              {feature.title}
            </h3>
            <p className="text-gray-300 text-xs leading-snug">{feature.description}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default About;

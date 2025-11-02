import React from "react";
import { motion } from "framer-motion";
import { FaCalendarAlt } from "react-icons/fa";
import uocLogo from "../assets/uoc.png";
import mrcmLogo from "../assets/mrcm.PNG";

const educationData = [
  {
    id: 1,
    title: "University of Colombo",
    year: "2023 - Present",
    description: (
      <>
        <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-green-400 font-semibold">
          Bachelor of Information and Communication Technology (BICT Honours)
        </span>
        {"\n"}• I have completed modules in Programming, Web Application Development, Mobile Application Development (Android Studio), Graphic Design, Software Engineering, Quality Assurance, and other ICT-related areas.
        {"\n"}• Engaged in academic projects emphasizing real-world application and teamwork.
      </>
    ),
    logo: uocLogo,
  },
  {
    id: 2,
    title: "Mahinda Rajapaksha College, Matara",
    year: "2021",
    description: (
      <>
        <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-green-400 font-semibold">
          Technology Stream —
        </span>
        {"\n"}• Information and Communication Technology - A
        {"\n"}• Science for Technology - A
        {"\n"}• Engineering Technology - B
      </>
    ),
    logo: mrcmLogo,
  },
];

const Education = () => {
  return (
    <section
      id="education"
      className="bg-black text-white h-screen flex flex-col justify-center py-6"
    >
      <div className="container mx-auto px-6 md:px-12 lg:px-20 relative">

        {/* Section Title */}
        <motion.h2
          initial={{ opacity: 0, y: 80 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          viewport={{ once: false }}
          className="text-2xl md:text-3xl font-bold text-center mb-2 tracking-wide"
        >
          My{" "}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-500 via-green-400 to-cyan-400">
            Education
          </span>
        </motion.h2>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.3, duration: 0.6 }}
          viewport={{ once: false }}
          className="text-gray-400 text-center mb-4 text-xs md:text-sm max-w-xl mx-auto leading-relaxed"
        >
          My academic milestones reflect a strong foundation of learning, innovation, and dedication to continuous growth.
        </motion.p>

        {/* Scale-down wrapper for entire timeline */}
        <div className="scale-[0.92] lg:scale-100 origin-top">
          <div className="relative w-full max-w-4xl mx-auto pb-2">

            {/* Center vertical line */}
            <div className="absolute left-1/2 top-0 w-[2px] h-full bg-gradient-to-b from-blue-500 to-green-400 transform -translate-x-1/2 rounded-full shadow-[0_0_20px_rgba(34,197,94,0.6)]" />

            {educationData.map((edu, index) => {
              const isLeft = index % 2 === 0;
              const variants = {
                hidden: { opacity: 0, x: isLeft ? -100 : 100 },
                visible: { opacity: 1, x: 0 },
              };

              return (
                <motion.div
                  key={edu.id}
                  variants={variants}
                  initial="hidden"
                  whileInView="visible"
                  transition={{ duration: 0.8, ease: "easeOut", delay: index * 0.2 }}
                  viewport={{ once: false, amount: 0.3 }}
                  className={`relative mb-6 flex flex-col sm:flex-row ${
                    isLeft ? "sm:justify-start" : "sm:justify-end"
                  } items-center`}
                >
                  {/* Glowing dot */}
                  <motion.div
                    animate={{ scale: [1, 1.2, 1] }}
                    transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
                    className="absolute left-1/2 transform -translate-x-1/2 w-3 h-3 bg-gradient-to-r from-blue-500 to-green-400 rounded-full shadow-[0_0_10px_rgba(34,197,94,0.6)]"
                  />

                  {/* Card */}
                  <motion.div
                    whileHover={{
                      scale: 1.05,
                      y: -4,
                      boxShadow: "0 0 22px rgba(34,197,94,0.4), 0 0 32px rgba(59,130,246,0.3)",
                    }}
                    className={`bg-gray-900/60 border border-gray-700 hover:border-green-400/50 rounded-xl p-3 sm:p-4 w-full sm:w-[42%] backdrop-blur-md transition-all duration-300 cursor-default mt-10 sm:mt-0 ${
                      isLeft ? "sm:mr-auto" : "sm:ml-auto"
                    }`}
                  >
                    <div className="flex items-center gap-3 mb-2">
                      <motion.img
                        src={edu.logo}
                        alt={edu.title}
                        whileHover={{ rotate: 6, scale: 1.1 }}
                        className="w-9 h-9 object-contain rounded-full bg-black/40 p-1 border border-green-400/30 shadow-[0_0_8px_rgba(34,197,94,0.4)]"
                      />
                      <h3 className="text-sm font-semibold text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-green-400">
                        {edu.title}
                      </h3>
                    </div>

                    <div className="flex items-center text-gray-400 text-[10px] mb-1">
                      <FaCalendarAlt className="mr-1 text-green-400 text-[11px]" />
                      {edu.year}
                    </div>

                    <p className="text-gray-300 text-[11px] whitespace-pre-line leading-snug">
                      {edu.description}
                    </p>
                  </motion.div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Education;

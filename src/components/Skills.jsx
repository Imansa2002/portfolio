import React from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

const skills = [
  {
    title: "UI/UX Design",
    description:
      "Crafting visually stunning, user-centered interfaces that feel intuitive and engaging.",
    skills: ["Figma", "User Research", "Wireframing", "Prototyping", "Visual Design"],
  },
  {
    title: "Web Development",
    description:
      "Building high-performance, responsive, and dynamic web experiences.",
    skills: ["HTML", "CSS", "JavaScript", "React", "Node.js", "API Integration"],
  },
];

const Skills = () => {
  const { ref: headingRef, inView: headingInView } = useInView({ threshold: 0.2 });

  return (
    <section
      id="skills"
      className="bg-black text-white h-screen flex flex-col justify-center py-6"
    >
      <div className="container mx-auto px-8 md:px-16 lg:px-24">
        {/* Animated Heading */}
        <motion.h2
          ref={headingRef}
          initial={{ opacity: 0, y: 80 }}
          animate={headingInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 80 }}
          transition={{ duration: 0.6 }}
          className="text-2xl md:text-3xl font-bold text-center mb-4"
        >
          My{" "}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-green-400">
            Skills
          </span>
        </motion.h2>

        <p className="text-center text-gray-400 mb-6 text-xs md:text-sm">
          Core technical areas reflecting both creative and development expertise.
        </p>

        {/* Skill Cards (Scaled Like Project Cards) */}
        <div className="flex justify-center flex-wrap gap-6 scale-[0.9] lg:scale-100 origin-top">
          {skills.map((skill, index) => (
            <motion.div
              key={index}
              className="bg-gray-900/60 border border-gray-700 hover:border-green-400/60 rounded-xl p-4 w-72 md:w-80 flex-shrink-0 backdrop-blur-md cursor-default hover:shadow-[0_0_18px_rgba(34,197,94,0.5)] transition-all duration-300"
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: false, amount: 0.3 }}
              transition={{ delay: index * 0.2, duration: 0.6 }}
            >
              {/* Title */}
              <h3 className="text-sm font-semibold text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-green-400 mb-2 text-center">
                {skill.title}
              </h3>

              {/* Description */}
              <p className="text-gray-300 text-xs mb-3 leading-relaxed text-center">
                {skill.description}
              </p>

              {/* Skill Tags */}
              <div className="flex flex-wrap justify-center gap-2">
                {skill.skills.map((item, idx) => (
                  <span
                    key={idx}
                    className="bg-gray-700/60 hover:bg-gradient-to-r hover:from-blue-500 hover:to-green-400 text-gray-200 hover:text-white px-3 py-1 rounded-full text-[11px] sm:text-xs transition-all duration-300"
                  >
                    {item}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;

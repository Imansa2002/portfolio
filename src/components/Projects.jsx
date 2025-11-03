import React, { useState, useRef, useEffect } from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { FaChevronLeft, FaChevronRight, FaGithub } from "react-icons/fa";
import { FiArrowUpRight } from "react-icons/fi";
import { SiFigma } from "react-icons/si";

import QRImage from "../assets/qr.PNG";
import LMSImage from "../assets/lib.PNG";
import stylenest from "../assets/stylenest.PNG";
import techfeed from "../assets/techfeed.PNG";
import todo from "../assets/todo.PNG";

const projects = [
  { id: 1, name: "Library Management System", tech: "HTML / CSS / JS / PHP / MySQL", image: LMSImage, link: "https://github.com/Chamaracperera/LMS.git" },
  { id: 2, name: "QR Attendance System", tech: "HTML / CSS / JS / PHP / MySQL", image: QRImage, link: "https://github.com/Chamaracperera/Attendance-Marking-System.git" },
  { id: 3, name: "StyleNest – Clothing Store", tech: "Figma", image: stylenest, link: "https://www.figma.com/design/nrgSR8NZRtt6h4zDNQJZt1/Fashion-e-commerce-website" },
  { id: 4, name: "Tech Feed – News App", tech: "Figma", image: techfeed, link: "https://www.figma.com/design/JDLHVG93mfrZSKtALFYF8q/Tech-Feed" },
  { id: 5, name: "To-Do App", tech: "React.JS / CSS", image: todo, link: "https://github.com/Imansa2002/todo-app.git" },
];

const Projects = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [cardWidth, setCardWidth] = useState(0);
  const [cardsPerView, setCardsPerView] = useState(3);
  const cardRef = useRef(null);
  const { ref: headingRef, inView: headingInView } = useInView({ threshold: 0.2 });

  const totalCards = projects.length;

  // ✅ Update cards per view based on screen size
  useEffect(() => {
    const updateCardsPerView = () => {
      if (window.innerWidth < 640) {
        setCardsPerView(1);
      } else if (window.innerWidth < 1024) {
        setCardsPerView(2);
      } else {
        setCardsPerView(3);
      }
    };
    updateCardsPerView();
    window.addEventListener("resize", updateCardsPerView);
    return () => window.removeEventListener("resize", updateCardsPerView);
  }, []);

  // ✅ Update card width dynamically
  useEffect(() => {
    const updateWidth = () => {
      if (cardRef.current) {
        const width = cardRef.current.offsetWidth;
        const gap = 24;
        setCardWidth(width + gap);
      }
    };
    updateWidth();
    window.addEventListener("resize", updateWidth);
    return () => window.removeEventListener("resize", updateWidth);
  }, []);

  const maxIndex = Math.max(totalCards - cardsPerView, 0);

  return (
    <section id="projects" className="bg-black text-white h-screen flex flex-col justify-center py-6 relative">
      <div className="container mx-auto px-8 md:px-16 lg:px-24">

        {/* Section Heading */}
        <motion.h2
          ref={headingRef}
          initial={{ opacity: 0, y: 80 }}
          animate={headingInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 80 }}
          transition={{ duration: 0.6 }}
          className="text-2xl md:text-3xl font-bold text-center mb-4"
        >
          My{" "}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-green-400">
            Projects
          </span>
        </motion.h2>

        <p className="text-center text-gray-400 mb-6 text-xs md:text-sm">
          Practical projects showcasing development & design experience.
        </p>

        {/* ✅ Carousel Section */}
        <div className="scale-[0.9] lg:scale-100 origin-top">
          <div className="overflow-hidden pr-10 sm:pr-16 lg:pr-24">
            <motion.div
              className="flex gap-6"
              animate={{ x: -currentIndex * cardWidth }}
              transition={{ type: "spring", stiffness: 80, damping: 22 }}
            >
              {projects.map((project, index) => (
                <motion.div
                  key={project.id}
                  ref={index === 0 ? cardRef : null}
                  className="bg-gray-900/60 border border-gray-700 hover:border-green-400/60 
                             rounded-xl p-4 w-64 sm:w-72 md:w-80 flex-shrink-0 backdrop-blur-md 
                             cursor-default hover:shadow-[0_0_18px_rgba(34,197,94,0.5)] transition-all duration-300"
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.2, duration: 0.6, ease: "easeOut" }}
                  viewport={{ once: false, amount: 0.3 }}
                >
                  <a href={project.link} target="_blank" className="block mb-3">
                    <motion.img
                      src={project.image}
                      alt={project.name}
                      className="w-full h-40 object-contain rounded-lg bg-black p-2"
                      whileHover={{ scale: 1.07 }}
                    />
                  </a>

                  <h3 className="text-sm font-semibold text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-green-400 mb-1">
                    {project.name}
                  </h3>
                  <p className="text-gray-400 text-xs mb-2">{project.tech}</p>

                  <a
                    href={project.link}
                    target="_blank"
                    className="inline-flex items-center text-white hover:text-green-400 text-lg transition-all duration-300"
                  >
                    {project.tech.includes("Figma") ? <SiFigma /> : <FaGithub />}
                    <FiArrowUpRight className="ml-1 text-xl" />
                  </a>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </div>

        {/* ✅ Navigation Arrows */}
        <button
          onClick={() => setCurrentIndex((prev) => Math.max(prev - 1, 0))}
          className={`absolute left-8 top-1/2 -translate-y-1/2 w-10 h-10 flex items-center justify-center 
            rounded-full bg-black border border-green-400/50 shadow-[0_0_12px_rgba(0,255,170,0.5)]
            hover:shadow-[0_0_18px_rgba(0,255,170,0.8)] transition-all duration-300
            ${currentIndex === 0 ? "opacity-30 cursor-not-allowed" : "hover:scale-110 hover:border-green-400"}`}
        >
          <FaChevronLeft className="text-white text-lg drop-shadow-[0_0_6px_rgba(0,255,170,0.8)]" />
        </button>

        <button
          onClick={() => setCurrentIndex((prev) => Math.min(prev + 1, maxIndex))}
          className={`absolute right-8 top-1/2 -translate-y-1/2 w-10 h-10 flex items-center justify-center 
            rounded-full bg-black border border-green-400/50 shadow-[0_0_12px_rgba(0,255,170,0.5)]
            hover:shadow-[0_0_18px_rgba(0,255,170,0.8)] transition-all duration-300
            ${currentIndex >= maxIndex ? "opacity-30 cursor-not-allowed" : "hover:scale-110 hover:border-green-400"}`}
        >
          <FaChevronRight className="text-white text-lg drop-shadow-[0_0_6px_rgba(0,255,170,0.8)]" />
        </button>
      </div>
    </section>
  );
};

export default Projects;

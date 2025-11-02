import React, { useState, useRef, useEffect } from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";

import uiux from "../assets/uiux.PNG";
import simplilearn from "../assets/simplilearn.PNG";
import alisonfigma from "../assets/alisonfigma.PNG";
import alisonuiux from "../assets/alisonuiux.PNG";
import udemycss from "../assets/udemycss.PNG";
import frontend from "../assets/frontend.PNG";
import beginner from "../assets/beginner.PNG";
import hpai from "../assets/hpai.PNG";

const certifications = [
  { id: 1, title: "Learn Figma: UI/UX Design Masterclass From Beginner to Pro", issuer: "Udemy", year: "2025", description: "A comprehensive course covering Figma basics, prototyping, and UI/UX design principles.", link: "https://www.udemy.com/certificate/UC-17913248-e45f-4e04-91b7-e37141821fc0/", image: uiux },
  { id: 2, title: "UI/UX Basics", issuer: "Simplilearn", year: "2025", description: "Fundamental UI/UX concepts including design thinking, wireframing, and prototyping.", link: "https://simpli-web.app.link/e/XsRsT6UfPXb", image: simplilearn },
  { id: 3, title: "User Interface Design with Figma", issuer: "Alison", year: "2025", description: "Focus on creating intuitive and visually appealing user interfaces using Figma.", link: "https://alison.com/certification/check/5473f29b36", image: alisonfigma },
  { id: 4, title: "Introduction To UI UX Design", issuer: "Alison", year: "2025", description: "Learn fundamentals of UI/UX design, wireframing, prototyping, and creating visually appealing interfaces.", link: "https://alison.com/certification/check/5473f29b36", image: alisonuiux },
  { id: 5, title: "Foundations of Web Development: CSS,Bootstrap, JS, React", issuer: "Udemy", year: "2025", description: "Styling with CSS & Bootstrap, dynamic behavior with JavaScript, and interactive interfaces with React.", link: "https://www.udemy.com/certificate/UC-094ad58c-9a8f-43d9-854b-dddc56595edc/", image: udemycss },
  { id: 6, title: "Frontend Web Development", issuer: "University of Moratuwa", year: "2025", description: "Covers HTML, CSS, JS basics for responsive and interactive web pages.", link: "https://open.uom.lk/lms/mod/customcert/verify_certificate.php", image: frontend },
  { id: 7, title: "Web Design for Beginners", issuer: "University of Moratuwa", year: "2025", description: "Learn fundamentals of web development with CSS, Bootstrap, JS, and React.", link: "https://open.uom.lk/verify", image: beginner },
  { id: 8, title: "AI for Beginners", issuer: "HP Life", year: "2025", description: "Gaining foundational knowledge of AI concepts, applications, data importance, business use, and ethical considerations.", link: "https://open.uom.lk/verify", image: hpai },
];

const Certifications = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [cardWidth, setCardWidth] = useState(0);
  const [cardsPerView, setCardsPerView] = useState(3);

  const cardRef = useRef(null);
  const { ref: headingRef, inView: headingInView } = useInView({ threshold: 0.2 });
  const totalCards = certifications.length;

  // ✅ Responsive cards per view
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

  // ✅ Card width update
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

  return (
    <section id="certifications" className="bg-black text-white h-screen flex flex-col justify-center py-6 relative">
      <div className="container mx-auto px-8 md:px-16 lg:px-24">

        <motion.h2
          ref={headingRef}
          initial={{ opacity: 0, y: 80 }}
          animate={headingInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 80 }}
          transition={{ duration: 0.6 }}
          className="text-2xl md:text-3xl font-bold text-center mb-4"
        >
          My <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-green-400">Certifications</span>
        </motion.h2>

        <p className="text-center text-gray-400 mb-6 text-xs md:text-sm">
          Courses and certificates showcasing my UI/UX and web development skills.
        </p>

        <div className="scale-[0.9] lg:scale-100 origin-top">
          <div className="overflow-hidden">
            <motion.div
              className="flex gap-6"
              animate={{ x: -currentIndex * cardWidth }}
              transition={{ type: "spring", stiffness: 80, damping: 22 }}
            >
              {certifications.map((cert, index) => (
                <motion.div
                  key={cert.id}
                  ref={index === 0 ? cardRef : null}
                  className="bg-gray-900/60 border border-gray-700 hover:border-green-400/60 rounded-xl p-4 w-64 sm:w-72 md:w-80 flex-shrink-0 backdrop-blur-md cursor-default hover:shadow-[0_0_18px_rgba(34,197,94,0.5)] transition-all duration-300"
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.2, duration: 0.6, ease: "easeOut" }}
                  viewport={{ once: false, amount: 0.3 }}
                >
                  <a href={cert.link} target="_blank" className="block mb-3">
                    <motion.img
                      src={cert.image}
                      alt={cert.title}
                      className="w-full h-44 object-contain rounded-lg bg-black p-2"
                      whileHover={{ scale: 1.07 }}
                    />
                  </a>
                  <h3 className="text-sm font-semibold text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-green-400 mb-1">{cert.title}</h3>
                  <p className="text-gray-400 text-xs mb-2">{cert.issuer}</p>
                  <p className="text-gray-400 text-xs mb-2">{cert.year}</p>
                  <p className="text-gray-400 text-xs">{cert.description}</p>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </div>

        {/* Navigation arrows */}
        <button
          onClick={() => currentIndex > 0 && setCurrentIndex(currentIndex - 1)}
          className={`absolute left-8 top-1/2 -translate-y-1/2 w-10 h-10 flex items-center justify-center rounded-full bg-black border border-green-400/50 shadow-[0_0_12px_rgba(0,255,170,0.5)] hover:shadow-[0_0_18px_rgba(0,255,170,0.8)] transition-all duration-300 ${currentIndex === 0 ? "opacity-30 cursor-not-allowed" : "hover:scale-110 hover:border-green-400"}`}
        >
          <FaChevronLeft className="text-white text-lg drop-shadow-[0_0_6px_rgba(0,255,170,0.8)]" />
        </button>

        <button
          onClick={() => currentIndex < totalCards - cardsPerView && setCurrentIndex(currentIndex + 1)}
          className={`absolute right-8 top-1/2 -translate-y-1/2 w-10 h-10 flex items-center justify-center rounded-full bg-black border border-green-400/50 shadow-[0_0_12px_rgba(0,255,170,0.5)] hover:shadow-[0_0_18px_rgba(0,255,170,0.8)] transition-all duration-300 ${currentIndex >= totalCards - cardsPerView ? "opacity-30 cursor-not-allowed" : "hover:scale-110 hover:border-green-400"}`}
        >
          <FaChevronRight className="text-white text-lg drop-shadow-[0_0_6px_rgba(0,255,170,0.8)]" />
        </button>
      </div>
    </section>
  );
};

export default Certifications;

import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { HiMenu, HiX } from "react-icons/hi";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("home");

  const menuItems = [
    "Home",
    "About Me",
    "Projects",
    "Certifications",
    "Skills",
    "Education",
  ];
  const contactItem = "Contact";

  const generateHref = (item) => `#${item.toLowerCase().replace(/\s+/g, "-")}`;

  const handleNavClick = (item) => {
    setIsOpen(false);

    if (item === "Home") {
      window.scrollTo({ top: 0, behavior: "smooth" });
    } else if (item === "Contact") {
      // Scroll to the bottom of the page
      window.scrollTo({ top: document.body.scrollHeight, behavior: "smooth" });
    } else {
      const target = document.querySelector(generateHref(item));
      if (target) {
        const navbar = document.querySelector("nav");
        const navbarHeight = navbar ? navbar.offsetHeight : 70;
        const extraOffset = 10;
        const topPos = target.offsetTop - navbarHeight + extraOffset;
        window.scrollTo({ top: topPos, behavior: "smooth" });
      }
    }
  };

  useEffect(() => {
    const handleScroll = () => {
      const navbar = document.querySelector("nav");
      const navbarHeight = navbar ? navbar.offsetHeight : 70;
      const extraOffset = 10;

      [...menuItems, contactItem].forEach((item) => {
        const id = item.toLowerCase().replace(/\s+/g, "-");
        const section = document.getElementById(id);
        if (section) {
          const rect = section.getBoundingClientRect();
          if (rect.top <= navbarHeight + extraOffset && rect.bottom >= navbarHeight + extraOffset) {
            setActiveSection(item);
          }
        }
      });
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav className="bg-black text-white px-8 md:px-16 lg:px-24 sticky top-0 z-50 backdrop-blur-sm">
      <div className="container py-4 flex justify-between items-center">
        <motion.div
          className="text-3xl font-extrabold bg-clip-text text-transparent bg-gradient-to-r from-blue-500 to-green-400 tracking-wider shadow-lg shadow-green-400/30"
          initial={{ x: -200, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 1.2, ease: "easeOut" }}
        >
          IMANSA
        </motion.div>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center space-x-6">
          {menuItems.map((item, idx) => {
            const isActive = activeSection === item;
            return (
              <motion.button
                key={idx}
                onClick={() => handleNavClick(item)}
                className="relative group cursor-pointer text-lg bg-transparent border-none"
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 * idx, duration: 0.3 }}
              >
                <span
                  className={`bg-clip-text text-transparent bg-gradient-to-r 
                  ${
                    isActive
                      ? "from-blue-400 to-green-400"
                      : "from-blue-500 to-green-400"
                  } 
                  group-hover:from-blue-400 group-hover:to-green-400 transition-all duration-300`}
                >
                  {item}
                </span>
                <span
                  className={`absolute left-0 -bottom-1 h-[2px] bg-gradient-to-r from-blue-500 to-green-400 transition-all 
                  ${isActive ? "w-full" : "w-0 group-hover:w-full"}`}
                ></span>
              </motion.button>
            );
          })}

          {/* Contact Button */}
          <motion.button
            onClick={() => handleNavClick(contactItem)}
            className="ml-4 px-5 py-2 rounded-full bg-gradient-to-r from-blue-500 to-green-400 text-black font-semibold shadow-lg hover:scale-105 transition-transform duration-300"
          >
            {contactItem}
          </motion.button>
        </div>

        {/* Mobile Menu Button */}
        <div className="md:hidden flex items-center">
          <motion.button onClick={() => setIsOpen(!isOpen)} whileTap={{ scale: 0.9 }}>
            <motion.div animate={{ rotate: isOpen ? 90 : 0, scale: isOpen ? 1.1 : 1 }}>
              {isOpen ? <HiX size={28} /> : <HiMenu size={28} />}
            </motion.div>
          </motion.button>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            className="md:hidden flex flex-col items-center space-y-4 pb-6 bg-black/90 backdrop-blur-md"
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
          >
            {[...menuItems, contactItem].map((item, idx) => (
              <motion.button
                key={idx}
                onClick={() => handleNavClick(item)}
                className={`text-lg bg-clip-text text-transparent bg-gradient-to-r from-blue-500 to-green-400 ${
                  activeSection === item ? "font-bold" : ""
                }`}
              >
                {item}
              </motion.button>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;

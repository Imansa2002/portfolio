import React, { useRef, useState } from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { FaEnvelope, FaPhone } from "react-icons/fa";
import { HiOutlineLocationMarker } from "react-icons/hi";
import emailjs from "emailjs-com";
import Footer from "./Footer";

const Contact = () => {
  const { ref: headingRef, inView: headingInView } = useInView({ threshold: 0.2 });
  const formRef = useRef();
  const [successMessage, setSuccessMessage] = useState("");

  const sendEmail = (e) => {
    e.preventDefault();
    emailjs
      .sendForm(
        "service_tp9fyo5",
        "template_abutfmi",
        formRef.current,
        "YOUR_PUBLIC_KEY" // replace with your actual public key
      )
      .then(
        () => {
          setSuccessMessage("Message sent successfully! ✅");
          e.target.reset();
        },
        () => {
          setSuccessMessage("Failed to send message. ❌");
        }
      );
  };

  return (
    <div className="flex flex-col min-h-screen bg-black">
      {/* Main Contact Content */}
      <section
        id="contact" // <-- This fixes navbar scrolling
        className="flex-1 flex flex-col justify-center px-4 sm:px-6 md:px-16 lg:px-24 py-10 sm:py-12 text-white overflow-hidden scroll-mt-24"
      >
        <motion.h2
          ref={headingRef}
          initial={{ y: -20, opacity: 0 }}
          animate={headingInView ? { y: 0, opacity: 1 } : { y: -20, opacity: 0 }}
          transition={{ duration: 0.6 }}
          className="text-xl sm:text-2xl md:text-3xl font-bold text-center mb-6 sm:mb-8"
        >
          Let's{" "}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-green-400">
            Connect
          </span>
        </motion.h2>

        <div className="flex flex-col md:flex-row items-center justify-center gap-4 sm:gap-6 md:gap-10">
          {/* Left Info */}
          <motion.div
            className="flex-1 max-w-xs sm:max-w-sm text-center md:text-left space-y-2 sm:space-y-3"
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true, amount: 0.3 }}
          >
            <h3 className="text-lg sm:text-xl md:text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-blue-500">
              Get in Touch
            </h3>
            <p className="text-gray-300 text-[11px] sm:text-sm leading-snug">
              Let’s collaborate to build engaging, responsive, and user-friendly digital experiences.
            </p>
            <div className="flex items-center gap-2 text-[11px] sm:text-sm text-gray-300 mt-2 sm:mt-4">
              <FaEnvelope className="text-green-400" />
              <a href="mailto:imansagayathmi@gmail.com" className="hover:underline">
                imansagayathmi@gmail.com
              </a>
            </div>
            <div className="flex items-center gap-2 text-[11px] sm:text-sm text-gray-300">
              <FaPhone className="text-green-400" />
              <span>+94 70 288 7535</span>
            </div>
            <div className="flex items-center gap-2 text-[11px] sm:text-sm text-gray-300">
              <HiOutlineLocationMarker className="text-green-400" />
              <span>Colombo, Sri Lanka</span>
            </div>
          </motion.div>

          {/* Right Form */}
          <motion.form
            ref={formRef}
            onSubmit={sendEmail}
            className="flex-1 max-w-xs sm:max-w-sm w-full space-y-2 sm:space-y-3"
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true, amount: 0.3 }}
          >
            <input
              type="text"
              name="from_name"
              placeholder="Your Name"
              className="w-full p-2 sm:p-2.5 rounded bg-gray-800 border border-gray-600 text-[11px] sm:text-sm focus:outline-none focus:border-green-400"
              required
            />
            <input
              type="email"
              name="from_email"
              placeholder="Your Email"
              className="w-full p-2 sm:p-2.5 rounded bg-gray-800 border border-gray-600 text-[11px] sm:text-sm focus:outline-none focus:border-green-400"
              required
            />
            <textarea
              name="message"
              rows="4"
              placeholder="Your Message"
              className="w-full p-2 sm:p-2.5 rounded bg-gray-800 border border-gray-600 text-[11px] sm:text-sm focus:outline-none focus:border-green-400"
              required
            />
            <button
              type="submit"
              className="bg-gradient-to-r from-blue-500 to-green-400 text-white w-full py-2 sm:py-2.5 rounded-full font-semibold hover:scale-105 transition-transform duration-300 text-[11px] sm:text-sm"
            >
              Send Message
            </button>
            {successMessage && (
              <p className="text-center text-green-400 mt-2 text-sm">{successMessage}</p>
            )}
          </motion.form>
        </div>
      </section>

      {/* Footer */}
      <Footer />
    </div>
  );
};

export default Contact;

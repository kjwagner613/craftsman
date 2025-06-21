import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import ContactForm from './contactForm'

import '../../index.css';

const scrollToTop = () => {
  window.scrollTo({ top: 0, behavior: "smooth" });
};

const Contact = ({ selected }) => {
  const [isVisible, setIsVisible] = useState(false);
  const [showColumns, setShowColumns] = useState(false); // Can still use manually, or scroll trigger later

  useEffect(() => {
    let timer;
    if (selected) {
      timer = setTimeout(() => {
        setIsVisible(true);
        setShowColumns(true); // 🔁 automatic trigger
      }, 100);
    } else {
      setIsVisible(false);
      setShowColumns(false);
    }
    return () => clearTimeout(timer);
  }, [selected]);

  return (
    <div className="w-full flex justify-center">
      <div className="flex flex-col items-center mb-8 w-full max-w-5xl">
        <h1 className="text-3xl font-semibold mt-[10vh] mb-6">Contact Me</h1>

        {/* Netlify Hidden Fields */}

        {/* Contact Info Grid */}
        <div className="grid grid-cols-3 gap-x-[10px] gap-y-[10px] mb-[20px] w-full">
          {/* Email */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={showColumns ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.1, duration: 0.5 }}
            className="border-2 p-4 rounded"
          >
            <label className="font-medium block mb-2 gap-[10px]">Email:</label>
            <a href="mailto:kevin.wagner.2024@outlook.com" className="text-blue-400 hover:underline">
              kevin.wagner.2024@outlook.com
            </a>
          </motion.div>

          {/* LinkedIn */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={showColumns ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.2, duration: 0.5 }}
            className="border-2 p-4 rounded"
          >
            <label className="font-medium block mb-2 gap-[10px]">LinkedIn:</label>
            <a href="https://www.linkedin.com/in/kev613/" className="gap-[10px] text-blue-400 hover:underline" target="_blank" rel="noopener noreferrer">
              linkedin.com/in/kev613
            </a>
          </motion.div>

          {/* Cover Letter */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={showColumns ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.3, duration: 0.5 }}
            className="border-2 p-4 rounded gap-[10px]"
          >
            <label className="gap-[10px] font-medium block mb-2">Cover Letter:</label>
            <a href="/assets/Kevin Wagner Cover Letter 2025.pdf" className="text-blue-400 hover:underline" target="_blank" rel="noopener noreferrer">
              Download PDF
            </a>
          </motion.div>

          {/* Phone */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={showColumns ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.4, duration: 0.5 }}
            className="border-2 p-4 rounded"
          >
            <label className="gap-[10px] font-medium block mb-2">Phone:</label>
            <a href="tel:+14582546393" className="gap-[10px] text-blue-400 hover:underline">
              (458) 254-6393
            </a>
          </motion.div>

          {/* GitHub */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={showColumns ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.5, duration: 0.5 }}
            className="border-2 p-4 rounded"
          >
            <label className="gap-[10px] font-medium block mb-2">GitHub:</label>
            <a href="https://github.com/kjwagner613" className="gap-[10px] text-blue-400 hover:underline" target="_blank" rel="noopener noreferrer">
              github.com/kjwagner613
            </a>
          </motion.div>

          {/* Resume */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={showColumns ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.6, duration: 0.5 }}
            className="gap-[10px] border-2 p-4 rounded"
          >
            <label className="gap-[10px] font-medium block mb-2">Resume:</label>
            <a href="/assets/Kevin Wagner Resume 2025.pdf" className="text-blue-400 hover:underline" target="_blank" rel="noopener noreferrer">
              Download PDF
            </a>
          </motion.div>
        </div>

        {/* Message Form Section */}
        <motion.div
          layout
          initial={{ opacity: 0, y: 50 }}
          animate={showColumns ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.6, duration: 0.7, ease: [0.42, 0, 0.58, 1] }}
          className="flex flex-col w-full items-center"
        >
          <div className="gap-[10px] flex flex-col w-full md:w-1/2 border-yellow-300 border-2 rounded-lg p-6">
            <h3 className="gap-[10px] text-xl font-semibold mb-2">Send me a message...</h3>
            <div className="flex flex-col items-center mb-4">
              <p className="text-gray-600" style={{ color: "black", animation: "blink" }}></p>
            </div>
            <p className="mb-4 flex flex-col items-center">If you prefer, you can also reach out to me using the form below:</p>

            {/* Contact Form */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
            >
              <ContactForm />
            </motion.div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Contact;
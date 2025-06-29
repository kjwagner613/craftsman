
import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import ContactForm from './contactForm';
import { typography } from '../../utils/typography';
import { layout } from '../../utils/layout';
import { grids } from '../../utils/grids';
import { commonStyles } from '../../utils/commonStyles';
import { combineClasses } from '../../utils/index';

import '../../index.css';


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
    <div className={layout.centerFull}>
      <div className={layout.sectionInnerAlt}>
        <h1 className={typography.sectionTitle}>Contact Me</h1>

        {/* Netlify Hidden Fields for messaging*/}

        {/* Contact Info Grid */}
        <div className={grids.contactTiles}>
          {/* Email */}
          <motion.div
            initial={{ opacity: 0, y: 60 }}
            animate={showColumns ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.1, duration: 0.5 }}
            className="border-2 p-4 rounded z-0"
            style={{ pointerEvents: 'auto' }}
          >
            <label className={typography.fieldLabel}>Email:</label>
            <a href="mailto:kevin.wagner.2024@outlook.com" className={typography.fieldLink}>
              kevin.wagner.2024@outlook.com
            </a>
          </motion.div>

          {/* LinkedIn  info*/}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={showColumns ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.2, duration: 0.5 }}
            className="border-2 p-4 rounded z-0"
          >
            <label className={typography.fieldLabel}>LinkedIn:</label>
            <a href="https://www.linkedin.com/in/kev613/" className={typography.fieldLink} target="_blank" rel="noopener noreferrer">
              linkedin.com/in/kev613
            </a>
          </motion.div>

          {/* Cover Letter */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={showColumns ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.3, duration: 0.5 }}
            className="border-2 p-4 rounded z-0"
          >
            <label className={typography.fieldLabel}>Cover Letter:</label>
            <a href="/Kevin Wagner Cover Letter 2025.pdf" className={typography.fieldLink} target="_blank" rel="noopener noreferrer">
              Click to View and Download PDF
            </a>
          </motion.div>

          {/* Phone */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={showColumns ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.4, duration: 0.5 }}
            className="border-2 p-4 rounded z-0"
          >
            <label className={typography.fieldLabel}>Phone:</label>
            <a href="tel:+14582546393" className={typography.fieldLink}>
              (458) 254-6393
            </a>
          </motion.div>

          {/* GitHub */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={showColumns ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.5, duration: 0.5 }}
            className="border-2 p-4 rounded z-0"
          >
            <label className={typography.fieldLabel}>GitHub:</label>
            <a href="https://github.com/kjwagner613" className={typography.fieldLink} target="_blank" rel="noopener noreferrer">
              github.com/kjwagner613
            </a>
          </motion.div>

          {/* Resume */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={showColumns ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.6, duration: 0.5 }}
            className="border-2 p-4 rounded z-0"
          >
            <label className={typography.fieldLabel}>Resume:</label>
            <a href="/Kevin Wagner Resume 2025.pdf" className={typography.fieldLink} target="_blank" rel="noopener noreferrer">
              Click to View and Download PDF
            </a>
          </motion.div>
        </div>

        {/* Message Form Section */}
        <motion.div
          layout
          initial={{ opacity: 0, y: 50 }}
          animate={showColumns ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.6, duration: 0.7, ease: [0.42, 0, 0.58, 1] }}
          className={layout.formWrapper}
        >
          <div className={layout.formContainer}>
            <h3 className={typography.h3Title}>Send me a message...</h3>
            <div className={layout.messageIntro}>
              <p className={typography.helperText}>A critique, suggestion, comment—or even a question. I welcome all feedback.</p>
            </div>
            <p className={layout.messageIntro}>If there's something you'd like to learn more about, this is your all-purpose "Reach Kevin" form.</p>

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
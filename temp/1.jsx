import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
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
    <div className="w-full text-center" style={{ maxWidth: "var(--max-width)" }}>
      <div className="flex flex-col items-center mb-8">
        <h1 className="text-3xl font-semibold mb-6">Contact Me</h1>

        {/* 👇 Contact Form Grid */}
        <form
          name="contact"
          method="POST"
          data-netlify="true"
          netlify-honeypot="bot-field"
          className="w-full text-left"
        >
          {/* Netlify Hidden Fields */}
          <input type="hidden" name="form-name" value="contact" />
          <div className="hidden">
            <label>
              Don’t fill this out: <input name="bot-field" />
            </label>
          </div>

          {/* Contact Info Grid */}
          <motion.div
            layout
            initial={{ opacity: 0, y: 50 }}
            animate={showColumns ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, ease: [0.42, 0, 0.58, 1] }}
            className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-10"
          >
            {[
              {
                label: "Email",
                value: "kevin.wagner.2024@outlook.com",
                href: "mailto:kevin.wagner.2024@outlook.com",
              },
              {
                label: "Phone",
                value: "(458) 254-6393",
                href: "tel:+14582546393",
              },
              {
                label: "LinkedIn",
                value: "linkedin.com/in/kev613",
                href: "https://www.linkedin.com/in/kev613/",
              },
              {
                label: "GitHub",
                value: "github.com/kjwagner613",
                href: "https://github.com/kjwagner613",
              },
              {
                label: "Cover Letter",
                value: "Download PDF",
                href: "/assets/Kevin Wagner Cover Letter 2025.pdf",
              },
              {
                label: "Resume",
                value: "Download PDF",
                href: "/assets/Kevin Wagner Resume 2025.pdf",
              },
            ].map((item, index) => (
              <motion.div
                key={item.label}
                initial={{ opacity: 0, y: 30 }}
                animate={showColumns ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: 0.1 * index, duration: 0.5 }}
                className="border-2 p-4 rounded-lg shadow-sm"
              >
                <label className="font-medium block mb-2">{item.label}:</label>
                <a
                  href={item.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-400 hover:underline text-lg"
                  style={{ fontFamily: "var(--font-main)" }}
                >
                  {item.value}
                </a>
              </motion.div>
            ))}
          </motion.div>

          {/* Message Form Section */}
          <motion.div
            layout
            initial={{ opacity: 0, y: 50 }}
            animate={showColumns ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.6, duration: 0.7, ease: [0.42, 0, 0.58, 1] }}
            className="flex flex-col items-center"
          >
            <div className="flex flex-col w-full md:w-1/2 border-yellow-300 border-2 rounded-lg p-6">
              <h3 className="text-xl font-semibold mb-2">Send me a message...</h3>
              <p className="mb-4">If you prefer, you can also reach out to me using the form below:</p>

              {/* Contact Form */}
              <fieldset className="space-y-4">
                <legend className="sr-only">Contact Form</legend>
                <div className="grid md:grid-cols-2 gap-4">
                  <div className="flex flex-col leading-[2]">
                    <label htmlFor="name" className="mb-1">Name:</label>
                    <input type="text" name="name" id="name" required placeholder="Your name" className="input" />
                  </div>
                  <div className="flex flex-col leading-[2]">
                    <label htmlFor="email" className="mb-1">Email:</label>
                    <input type="email" name="email" id="email" required placeholder="you@example.com" className="input" />
                  </div>
                </div>
                <div className="flex flex-col leading-[2]">
                  <label htmlFor="message" className="mb-1">Message:</label>
                  <textarea name="message" id="message" required placeholder="Your message..." className="input" rows="5" />
                </div>
              </fieldset>

              <button type="submit" className="button mt-4">Send</button>
            </div>
          </motion.div>
        </form>
      </div>
    </div>
  );
};

export default Contact;
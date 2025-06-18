import React, { useEffect, useState } from 'react';

import '../../index.css';

const scrollToTop = () => {
  window.scrollTo({ top: 0, behavior: "smooth" });
};

const Contact = ({ selected }) => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    let timer;
    if (selected) {
      timer = setTimeout(() => setIsVisible(true), 100);
    } else {
      setIsVisible(false);
    }
    return () => clearTimeout(timer);
  }, [selected]);

  return (
    <div className="w-full   text-center" style={{ maxWidth: "var(--max-width)" }}>
      <div className="flex flex-col items-center mb-8">
        <h1 className="text-3xl font-semibold mb-6">Contact Me</h1>

        {/* 👇 Contact Form Grid */}
        <form
          name="contact"
          method="POST"
          data-netlify="true"
          netlify-honeypot="bot-field"
          className="grid md:grid-cols-3 gap-6 w-full text-left"
        >
          {/* Netlify Hidden Fields */}
          <input type="hidden" name="form-name" value="contact" />
          <div className="hidden">
            <label>
              Don’t fill this out: <input name="bot-field" />
            </label>
          </div>

          {/* Contact Info Column 1 */}
          <div className="space-y-2">
            <label className="font-medium">Email:</label>
            <div>
              <a href="mailto:kevin.wagner.2024@outlook.com" className="text-blue-400 hover:underline" style={{
                fontSize: "1.2rem", fontFamily: "var(--font-main)"
              }}>
                kevin.wagner.2024@outlook.com
              </a>
            </div>
            <label className="font-medium">Phone:</label>
            <div>
              <a href="tel:+14582546393" className="text-blue-400 hover:underline" style={{
                fontSize: "1.2rem", fontFamily: "var(--font-main)"
              }}>
                (458) 254-6393
              </a>
            </div>
          </div>

          {/* Contact Info Column 2 */}
          <div className="space-y-2">
            <label className="font-medium">LinkedIn:</label>
            <div>
              <a href="https://www.linkedin.com/in/kev613/" target="_blank" rel="noopener noreferrer" className="text-blue-400 hover:underline" style={{
                fontSize: "1.2rem", fontFamily: "var(--font-main)"
              }}>
                linkedin.com/in/kev613
              </a>
            </div>
            <label className="font-medium">GitHub:</label>
            <div>
              <a href="https://github.com/kjwagner613" target="_blank" rel="noopener noreferrer" className="text-blue-400 hover:underline" style={{
                fontSize: "1.2rem", fontFamily: "var(--font-main)"
              }}>
                github.com/kjwagner613
              </a>
            </div>
          </div>

          {/* Contact Info Column 3 */}
          <div className="space-y-2">
            <label className="font-medium">Cover Letter:</label>
            <div>
              <a href="/assets/Kevin Wagner Cover Letter 2025.pdf" target="_blank" rel="noopener noreferrer" className="text-blue-400 hover:underline">
                Download PDF
              </a>
            </div>
            <label className="font-medium">Full Resume:</label>
            <div>
              <a href="/assets/Kevin Wagner Resume 2025.pdf" target="_blank" rel="noopener noreferrer" className="text-blue-400 hover:underline">
                Download PDF
              </a>
            </div>
          </div>

          {/* Spacer row break */}
          <div className="md:col-span-3 space-y-4 mt-8">
            <h3 className="text-xl font-semibold">Send me a message...</h3>
            <p>If you prefer, you can also reach out to me using the form below:</p>

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
        </form>

        <button
          onClick={scrollToTop}
          className="button mt-10"
        >
          Back to Top
        </button>
      </div>
    </div>
  );
};

export default Contact;
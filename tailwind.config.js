module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
            fontFamily: {
        sans: ['Lato', 'sans-serif'],
        serif: ['Playfair Display', 'serif'],
        script: ['Playball', 'cursive'],
      },
            transitionProperty: {
        'height': 'height', // Enables smooth height animation
        'opacity': 'opacity', // Enables fade-in/out effects
      },


    },
  },
  safelist: [
    "opacity-100",
    "opacity-0",
    "scale-100",
    "scale-90",
    "translate-y-0",
    "translate-y-6",
    "font-script",
    // ensure custom widths & z-index utilities are not purged
    "max-w-[900px]",
    "z-10",
    "z-20",
    "z-30",
    "z-40",
    "z-50",
  ],
};

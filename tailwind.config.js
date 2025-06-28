module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      screens: {
        sm: "500px",
        md: "900px",
      },
      fontFamily: {
        sans: ['Lato', 'sans-serif'],
        serif: ['Playfair Display', 'serif'],
        script: ['Playball', 'cursive'],
        aoora: ['Aoora', 'sans-serif'],
        main: ['var(--font-main)', 'sans-serif'],
        secondary: ['var(--font-secondary)', 'sans-serif'],
      },
      fontSize: {
        titles: ['var(--font-size-titles)'],
        headers: ['var(--font-size-headers)'],
        body: ['var(--font-size-body)'],
        small: ['var(--font-size-small)'],
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

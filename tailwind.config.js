module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
            fontFamily: {
        sans: ['Lato', 'sans-serif'],
        serif: ['Playfair Display', 'serif'],
        script: ['Playball', 'cursive'],
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
     "font-script" 
  ],
};

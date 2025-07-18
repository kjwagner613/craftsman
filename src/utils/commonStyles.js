export const commonStyles = {
  // Container styles
  container: "w-[90vw] max-w-[1000px] mx-auto",
  containerCard: "w-[90vw] max-w-[1000px] text-left",
  textContainer: "text-justify",

  // Animation styles
  fadeIn: "transition-opacity transition-transform duration-700 ease-in-out",
  visible: "opacity-100 scale-100 translate-y-0",
  hidden: "opacity-0 scale-90 translate-y-6",
  tileBase: "relative group p-4 text-white hover:scale-[1.02] hover:shadow-[0_0_50px_rgba(255,255,255,0.8)] hover:animate-pulse transition-all duration-300 ease-in-out",
  hoverGlow: "hover:shadow-[0_0_50px_rgba(255,255,255,0.8)] hover:animate-pulse hover:scale-[1.02] transition-all duration-300 ease-in-out",

  // Font styles
  fontMain: "font-[var(--font-main)]",
  fontSecondary: "font-[var(--font-secondary)]",
};

// CSS variable styles (for inline styles)
export const cssVars = {
  maxWidth: { maxWidth: "var(--max-width)" },
  fontMain: { fontFamily: "var(--font-main)" },
  fontSizeSmall: { fontSize: "var(--font-size-small)" },
  fontSizeBody: { fontSize: "var(--font-size-body)" },
  fontSizeHeader: { fontSize: "var(--font-size-header)" },
  fontSizeTitles: { fontSize: "var(--font-size-titles)" },
};

export const motionTokens = {
  contactTileAnim: (delay = 0.2) => ({
    initial: { opacity: 0, y: 50 },
    animate: { opacity: 1, y: 0 },
    transition: { delay, duration: 0.5 },
  }),
  formWrapperAnim: {
    layout: true,
    initial: { opacity: 0, y: 50 },
    animate: { opacity: 1, y: 0 },
    transition: { delay: 0.6, duration: 0.7, ease: [0.42, 0, 0.58, 1] },
  },
};

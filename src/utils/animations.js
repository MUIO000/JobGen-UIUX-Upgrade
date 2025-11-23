// Framer Motion animation variants for the blog

// Fade in from bottom with smooth transition
export const fadeInUp = {
  hidden: { 
    opacity: 0, 
    y: 60 
  },
  visible: { 
    opacity: 1, 
    y: 0,
    transition: {
      duration: 0.6,
      ease: [0.25, 0.46, 0.45, 0.94] // cubic-bezier for buttery smooth
    }
  }
};

// Fade in from left
export const fadeInLeft = {
  hidden: { 
    opacity: 0, 
    x: -60 
  },
  visible: { 
    opacity: 1, 
    x: 0,
    transition: {
      duration: 0.6,
      ease: [0.25, 0.46, 0.45, 0.94]
    }
  }
};

// Fade in from right
export const fadeInRight = {
  hidden: { 
    opacity: 0, 
    x: 60 
  },
  visible: { 
    opacity: 1, 
    x: 0,
    transition: {
      duration: 0.6,
      ease: [0.25, 0.46, 0.45, 0.94]
    }
  }
};

// Scale up with fade
export const scaleIn = {
  hidden: { 
    opacity: 0, 
    scale: 0.8 
  },
  visible: { 
    opacity: 1, 
    scale: 1,
    transition: {
      duration: 0.5,
      ease: [0.25, 0.46, 0.45, 0.94]
    }
  }
};

// Stagger children animation
export const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.1
    }
  }
};

// For timeline items
export const timelineItem = {
  hidden: { 
    opacity: 0, 
    x: -40,
    scale: 0.95
  },
  visible: { 
    opacity: 1, 
    x: 0,
    scale: 1,
    transition: {
      duration: 0.5,
      ease: [0.25, 0.46, 0.45, 0.94]
    }
  }
};

// Active timeline item (when in viewport)
export const timelineItemActive = {
  scale: 1.02,
  transition: {
    duration: 0.3,
    ease: "easeOut"
  }
};

// Typewriter cursor blink
export const cursorBlink = {
  hidden: { opacity: 0 },
  visible: { 
    opacity: 1,
    transition: {
      duration: 0.5,
      repeat: Infinity,
      repeatType: "reverse"
    }
  }
};

// Smooth page transition
export const pageTransition = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  exit: { opacity: 0, y: -20 },
  transition: { duration: 0.3 }
};

// Card hover effect
export const cardHover = {
  rest: { 
    scale: 1,
    transition: { duration: 0.2 }
  },
  hover: { 
    scale: 1.03,
    y: -8,
    transition: { duration: 0.3, ease: "easeOut" }
  }
};

// Button hover effect
export const buttonHover = {
  rest: { 
    scale: 1,
    transition: { duration: 0.2 }
  },
  hover: { 
    scale: 1.05,
    transition: { duration: 0.2 }
  },
  tap: { 
    scale: 0.95,
    transition: { duration: 0.1 }
  }
};

// Timeline line draw animation
export const timelineLine = {
  hidden: { 
    pathLength: 0,
    opacity: 0
  },
  visible: { 
    pathLength: 1,
    opacity: 1,
    transition: {
      pathLength: { duration: 1.5, ease: "easeInOut" },
      opacity: { duration: 0.3 }
    }
  }
};

// Timeline dot pulse
export const timelineDot = {
  initial: { 
    scale: 1,
    boxShadow: "0 0 0 0 rgba(14, 165, 233, 0.7)"
  },
  pulse: { 
    scale: [1, 1.1, 1],
    boxShadow: [
      "0 0 0 0 rgba(14, 165, 233, 0.7)",
      "0 0 0 10px rgba(14, 165, 233, 0)",
      "0 0 0 0 rgba(14, 165, 233, 0)"
    ],
    transition: {
      duration: 2,
      repeat: Infinity,
      ease: "easeInOut"
    }
  }
};

// Gradient text shimmer
export const textShimmer = {
  initial: { backgroundPosition: "200% center" },
  animate: { 
    backgroundPosition: "-200% center",
    transition: {
      duration: 3,
      repeat: Infinity,
      ease: "linear"
    }
  }
};


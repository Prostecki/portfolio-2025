export const fadeInUp = {
  hidden: { opacity: 0, y: 30 },
  visible: (custom = 0) => ({
    opacity: 1,
    y: 0,
    transition: {
      type: "spring",
      damping: 25,
      stiffness: 100,
      duration: 0.4,
      delay: custom * 0.15,
    },
    style: {
      willChange: "opacity, transform",
    },
  }),
};

export const fadeInLeft = {
  hidden: { opacity: 0, x: -30 },
  visible: (custom = 0) => ({
    opacity: 1,
    x: 0,
    transition: {
      type: "spring",
      damping: 25,
      stiffness: 100,
      duration: 0.4,
      delay: custom * 0.15,
    },
    style: {
      willChange: "opacity, transform",
    },
  }),
};

export const fadeInRight = {
  hidden: { opacity: 0, x: 30 },
  visible: (custom = 0) => ({
    opacity: 1,
    x: 0,
    transition: {
      type: "spring",
      damping: 25,
      stiffness: 100,
      duration: 0.4,
      delay: custom * 0.15,
    },
    style: {
      willChange: "opacity, transform",
    },
  }),
};

export const staggerContainer = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.15,
    },
  },
};

export const viewportOptions = {
  once: true,
  amount: 0.25,
  margin: "0px 0px -100px 0px",
};

// Animation for cards of projects
export const projectCardVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: (i) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: i * 0.1,
      duration: 0.5,
      ease: "easeOut",
    },
  }),
};

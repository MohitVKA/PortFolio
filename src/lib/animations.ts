import { Variants } from "framer-motion";

export const staggerContainer: Variants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.08,
    },
  },
};

export const fadeUp: Variants = {
  hidden: { opacity: 0, y: 30 },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: [0.33, 1, 0.68, 1],
    },
  },
};

export const fadeInDelay: Variants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      duration: 0.6,
      delay: 0.4,
      ease: "easeInOut",
    },
  },
};

export const imageScale: Variants = {
  hidden: { opacity: 0, scale: 0.97 },
  show: {
    opacity: 1,
    scale: 1,
    transition: {
      duration: 0.5,
      ease: [0.33, 1, 0.68, 1],
    },
  },
};

export const pathDraw: Variants = {
  hidden: { pathLength: 0, opacity: 0 },
  show: {
    pathLength: 1,
    opacity: 1,
    transition: {
      pathLength: { type: "spring", duration: 2, bounce: 0 },
      opacity: { duration: 0.1 },
    },
  },
};


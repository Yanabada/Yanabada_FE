import type { MotionProps, Variants } from "framer-motion";

export const menu = {
  closed: {
    scale: 0,
    transition: {
      delay: 0.15
    }
  },
  open: {
    scale: 1,
    transition: {
      type: "spring",
      duration: 0.4,
      delayChildren: 0.2,
      staggerChildren: 0.05
    }
  }
} satisfies Variants;

export const item = {
  variants: {
    closed: { x: -16, opacity: 0 },
    open: { x: 0, opacity: 1 }
  },
  transition: { opacity: { duration: 0.2 } }
} satisfies MotionProps;

export const variants = {
  hidden: {
    // transform: "scale(0.3)",
    transform: 'translateY(50px)',
    opacity: 0
    // transition: "all 0.9s cubic-bezier(0.17, 0.55, 0.55, 1) 1s"
  },
  visible: (custom) => ({
    // transform: "none",
    transform: 'translate(0)',
    opacity: 1,
    transition: { delay: custom * 0.1, transition: 3 }
    // transition: "all 0.9s cubic-bezier(0.17, 0.55, 0.55, 1) 0.5s"
  })
}

export const variantsFade = {
  hidden: {
    transform: "translate(0)",
    opacity: 0
    // transition: "all 0.9s cubic-bezier(0.17, 0.55, 0.55, 1) 1s"
  },
  visible: (custom) => ({
    transform: "translateY(50px)",
    opacity: 1,
    transition: { delay: custom * 0.1, transition: 'transform 1.2s' }
    // transition: "all 0.9s cubic-bezier(0.17, 0.55, 0.55, 1) 0.5s"
  })
}

export const variantsMain = {
  hidden: {
    opacity: 0,
    transform: "translateY(50px)",
    transition: {
      delayChildren: 0.5,
      // when: "afterChildren",
    },
  },
  visible: (custom) => ({
    transform: "translateY(0)",
    opacity: 1,
    transition: {
      delayChildren: 0.5,
      // when: "beforeChildren",
      // staggerChildren: 0.3,
      delay: custom * 0.1,
      duration: 1.2,
    },
    // transition: { delay: custom * 0.1, transition: 'transform 1.2s' }
    // transition: "all 0.9s cubic-bezier(0.17, 0.55, 0.55, 1) 0.5s"
  })
}
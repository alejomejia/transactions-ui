export const BankVariants = {
  initial: {
    opacity: 0,
    y: '100%',
  },
  animate: (delay = 0) => ({
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.2,
      delay: (delay + 1) * 0.1,
    },
  }),
}

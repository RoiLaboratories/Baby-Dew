import Button from "../ui/Button";
import { stagger, motion } from "motion/react";

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      delayChildren: stagger(0.3),
    },
  },
};

function Header() {
  return (
    <header className="header bg-black py-1.5 border-b border-gray-300 w-full">
      <motion.nav
        variants={container}
        initial="hidden"
        animate="show"
        className="mx-auto w-9/10 md:max-w-7xl items-center justify-between flex z-10"
      >
        <motion.img
          initial={{ opacity: 0, x: -100 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1, ease: "easeOut" }}
          src="/logo.png"
          loading="lazy"
          className="w-10 h-12 md:w-17 md:h-17 object-contain"
        />

        <div className="flex items-center gap-3">
          <motion.div
            initial={{ opacity: 0, y: 100 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3 }}
          >
            <Button
              className="hover:shadow-[0_5px_5px_#fff] hover:-translate-y-[3px] duration-500!"
              to="https://pancakeswap.finance/swap?chain=bsc&outputCurrency=0x45C0F77541D195a6dea20A681E6C02a94Ca04dD0"
              variant={"primary_outline"}
            >
              Buy BABYDEW
            </Button>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 100 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: 0.2 }}
          >
            <Button
              className="hover:shadow-[0_5px_5px_#fff] hover:-translate-y-[3px] duration-500!"
              to="https://baby-dew.gitbook.io/baby-dew-docs/"
            >
              Whitepaper
            </Button>
          </motion.div>
        </div>
      </motion.nav>
    </header>
  );
}

export default Header;

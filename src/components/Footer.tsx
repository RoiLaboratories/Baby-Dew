import { Icon } from "@iconify/react";
import { motion } from "motion/react";
import { fadeIn } from "../../variants";

function Footer() {
  return (
    <footer className="px-4 py-4 md:px-6 bg-[#1a1a1a] flex md:flex-row items-center justify-between text-sm  md:text-lg gap-3 font-bold text-white">
      <motion.p
        variants={fadeIn("right", 0.2)}
        initial="hidden"
        whileInView="show"
        viewport={{ once: false }}
        className="flex flex-row items-center gap-2"
      >
        <Icon
          icon="material-symbols:copyright-sharp"
          className="text-xl md:text-2xl lg:text-3xl"
        />
        Baby Dew {new Date().getFullYear()}
      </motion.p>

      <span className="flex flex-row items-center gap-6 md:gap-8 lg:gap-10">
        <motion.a
          //   variants={fadeIn("up", 0.4)}
          //   initial="hidden"
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
          viewport={{ once: false }}
          target="_blank"
          referrerPolicy="no-referrer"
          href={"https://x.com/babydewbsc"}
        >
          <Icon
            icon="fa7-brands:x-twitter"
            className="text-primary-dark text-xl md:text-2xl lg:text-3xl"
          />
        </motion.a>
        <motion.a
          // variants={fadeIn("up", 0.6)}
          // initial="hidden"'
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6 }}
          viewport={{ once: false }}
          target="_blank"
          referrerPolicy="no-referrer"
          href={"https://t.me/babydewbsc"}
        >
          <Icon
            icon="fa7-brands:telegram"
            className="text-primary-dark text-xl md:text-2xl lg:text-3xl"
          />
        </motion.a>
      </span>
    </footer>
  );
}

export default Footer;

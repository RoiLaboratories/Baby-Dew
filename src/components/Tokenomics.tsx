import { Icon } from "@iconify/react";
import { fadeIn } from "../../variants";
import { motion } from "motion/react";

const data = [
  "Initial Burn: 300,000,000 (30%)",
  "Exchange Listings: 200,000,000 (20%)",
  "Liquidity: 100,000,000 (10%)",
  "Project Development: 100,000,000 (10%)",
  "Partnerships: 100,000,000 (10%)",
  "Marketing: 100,000,000 (10%)",
  "Treasury: 100,000,000 (10%)",
];

function Tokenomics() {
  return (
    <section className="min-h-screen bg-black">
      <div className="mx-auto w-8/10 md:max-w-7xl grid grid-cols-1 md:grid-cols-[30%_1fr] py-10 gap-y-10">
        <motion.div
          variants={fadeIn("right", 0.8)}
          initial="hidden"
          whileInView="show"
          viewport={{ once: false }}
          className="z-10 relative order-2 md:order-1"
        >
          <img
            src="/tokenomics.png"
            className="w-56 md:w-[23.5rem] md:absolute md:translate-x-16 md:translate-y-1/2 lg:translate-y-24 mx-auto md:mx-0"
          />
        </motion.div>
        <div className="md:order-2">
          <div className="space-y-7 relative w-full">
            <motion.p
              variants={fadeIn("up", 0.2)}
              initial="hidden"
              whileInView="show"
              viewport={{ once: false }}
              className="uppercase font-permanent-marker text-center text-3xl md:text-4xl lg:text-5xl text-white"
            >
              tokenomics
            </motion.p>
            <motion.div
              variants={fadeIn("up", 0.4)}
              initial="hidden"
              whileInView="show"
              viewport={{ once: false }}
              className="bg-primary rounded-2xl flex-col flex-center gap-6 px-8 pt-10 pb-10 md:pb-14 border-3 border-white text-black hover:shadow-[0_10px_10px_#fff] duration-500 relative"
            >
              <p className="text-sm md:text-lg font-bold text-center">
                Total Supply: 1,000,000,000 (1B BABYDEW)
              </p>
              <ul className="grid-cols-1 grid lg:grid-cols-2 gap-4 md:gap-3 text-xs">
                {data.map((text, i) => (
                  <li className="flex items-center gap-3 font-bold" key={i}>
                    <span className="flex-center bg-black rounded-full text-white min-w-6 min-h-6">
                      <Icon icon="ic:sharp-child-care" className="size-full" />
                    </span>
                    {text}
                  </li>
                ))}
              </ul>
              <img
                src="/logo.png"
                className="w-12 md:w-20 right-0 rotate-[19deg] translate-x-6 absolute scale-x-[-1] bottom-full translate-y-1/2 md:translate-y-[40%]"
              />
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Tokenomics;

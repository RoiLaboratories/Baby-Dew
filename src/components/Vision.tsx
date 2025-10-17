import Button from "../ui/Button";
import { motion } from "motion/react";
import { fadeIn } from "../../variants";

function Vision() {
  return (
    <section className="min-h-screen bg-primary/70">
      <div className="mx-auto w-8/10 md:max-w-7xl flex-col-reverse flex md:flex-row-reverse justify-center items-center py-10 lg:p-0 gap-y-10">
        <motion.div
          variants={fadeIn("left", 0.2)}
          initial="hidden"
          whileInView="show"
          viewport={{ once: false }}
          className="z-10"
        >
          <img
            src="/vision.png"
            className="w-[23.6rem] animate-bounce duration-500"
          />
        </motion.div>
        <div>
          <motion.div
            variants={fadeIn("right", 0.4)}
            initial="hidden"
            whileInView="show"
            viewport={{ once: false }}
            className="space-y-7 max-w-[550px] relative"
          >
            <p className="uppercase text-black font-permanent-marker text-center text-3xl  lg:text-5xl">
              vision
            </p>
            <div className="bg-black rounded-2xl flex-col flex-center text-center gap-6 p-8 border-3 border-white text-white hover:shadow-[0_10px_10px_#000] duration-500 text-xs sm:text-sm md:text-base relative">
              <p className="font-bold leading-snug">
                To create a community-driven ecosystem where crypto holders can
                enjoy both fun and functionality — blending the meme culture
                with meaningful financial tools.
              </p>
              <Button
                className="hover:shadow-[0_5px_5px_#fff] hover:-translate-y-[3px] duration-500! rounded-full! border-white!"
                size={"md"}
                variant={"secondary"}
                to="https://baby-dew.gitbook.io/baby-dew-docs/"
              >
                Learn more
              </Button>
              {/* shadow-[0_4px_4px_#0f9b98] */}
              <img
                loading="lazy"
                src="/vision-icon.png"
                className="w-12 md:w-20 left-0 -translate-x-6   absolute scale-x-[-1] bottom-full translate-y-1/2 md:translate-y-[40%]"
              />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

export default Vision;

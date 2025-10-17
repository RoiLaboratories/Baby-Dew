import Button from "../ui/Button";
import Header from "./Header";
import { fadeIn } from "../../variants";
import { motion } from "motion/react";

function Hero() {
  return (
    <section className="min-h-screen bg-black" id="hero">
      <Header />
      <div className="mx-auto w-8/10 md:max-w-7xl flex-col-reverse flex md:flex-row justify-center items-center py-10 lg:p-0 gap-y-10">
        <div className="z-10">
          <motion.img
            variants={fadeIn("right", 0.2)}
            initial="hidden"
            whileInView="show"
            src="/intro.png"
            className="w-56 md:w-[23.6rem] md:translate-x-14"
          />
        </div>
        <div>
          <motion.div
            variants={fadeIn("left", 0.4)}
            initial="hidden"
            whileInView="show"
            viewport={{ once: false }}
            className="space-y-7 max-w-[500px] lg:-translate-y-14 "
          >
            <p className="uppercase text-white font-permanent-marker text-center text-3xl  lg:text-5xl">
              introduction
            </p>
            <div className="bg-primary rounded-2xl flex-col flex-center text-center gap-4 py-5 px-6 border-3 border-secondary hover:shadow-[0_10px_10px_#fff]  duration-500 relative text-xs sm:text-sm md:text-base">
              <p className="font-bold leading-snug">
                Baby Dew is a deflationary meme token that was founded with a
                clear mission — to back and drive the expansion of Dew. Unlike
                many tokens that get lost in empty claims of “utility,” Baby Dew
                keeps its focus on the essentials of the crypto world:
                community, integrity, and genuine support.
              </p>
              <Button
                className="hover:shadow-[0_5px_5px_#fff] hover:-translate-y-[3px] duration-500! rounded-full!"
                size={"md"}
                variant={"primary_outline"}
                to="https://baby-dew.gitbook.io/baby-dew-docs/"
              >
                Learn more
              </Button>
              <img
                src="/intro-icon.png"
                loading="lazy"
                className="w-12 md:w-20 right-0 translate-x-6 absolute scale-x-[-1] bottom-full translate-y-1/2 md:translate-y-[40%]"
              />
            </div>
            {/* shadow-[0_4px_4px_#0f9b98] */}
          </motion.div>
        </div>
      </div>
    </section>
  );
}

export default Hero;

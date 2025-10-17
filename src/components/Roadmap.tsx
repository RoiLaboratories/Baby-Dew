import { fadeIn } from "../../variants";
import Button from "../ui/Button";
import { motion } from "motion/react";

const maps = [
  {
    phase: "phase 1",
    tasks: [
      "Token development and smart contract deployment",
      "Initial community formation and marketing launch",
      "Website and social media activation",
      "Initial burn of 30% supply",
      "PancakeSwap listing",
    ],
  },
  {
    phase: "phase 2",
    tasks: [
      "Launch of Baby Dew Exchange (BDEX Swap)",
      "CoinMarketCap and CoinGecko listings",
      "Strategic partnerships and influencer marketing",
      "First phase of reward distributions and liquidity expansion",
    ],
  },
  {
    phase: "phase 3",
    tasks: [
      "Development of BDEX Zero Card",
      "Beta release for community testing",
      "Integration of Dew Rewards system across Baby Dew ecosystem",
      "Global marketing campaign",
    ],
  },
];

function Roadmap() {
  return (
    <section className="min-h-1.5h-screen bg-white pt-10 pb-20">
      <div className="mx-auto w-9/10 md:max-w-7xl space-y-10">
        <motion.p
          variants={fadeIn("up", 0.2)}
          initial="hidden"
          whileInView="show"
          viewport={{ once: false }}
          className="uppercase font-permanent-marker text-center text-3xl md:text-4xl lg:text-5xl"
        >
          Roadmap
        </motion.p>
        <motion.div
          variants={fadeIn("up", 0.3)}
          initial="hidden"
          whileInView="show"
          viewport={{ once: false }}
          className="border-3 rounded-xl p-10 bg-primary space-y-10 hover:shadow-[0_10px_10px_#000] duration-500"
        >
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-14 md:gap-6">
            {maps.map(({ phase, tasks }, i) => (
              <motion.ul
                variants={fadeIn("up", 0.1 + i * 0.2)}
                initial="hidden"
                whileInView="show"
                viewport={{ once: false }}
                className="space-y-5"
                key={i}
              >
                <span className="rounded-md border-3 bg-white flex-center uppercase font-bold w-fit font-permanent-marker px-5 py-1.5 mx-auto lg:mx-0">
                  {phase}
                </span>
                {tasks.map((task, j) => (
                  <li
                    className="flex gap-3 font-bold leading-snug text-sm"
                    key={j}
                  >
                    <span>
                      <input
                        type="checkbox"
                        checked={phase.toLowerCase() === "phase 1"}
                        readOnly
                        className="checked:accent-black size-4"
                      />
                    </span>
                    {task}
                  </li>
                ))}
              </motion.ul>
            ))}
          </div>

          <Button
            className="hover:shadow-[0_5px_5px_#fff] hover:-translate-y-[3px] duration-500! rounded-full! mx-auto w-fit"
            size={"md"}
            variant={"primary_invert"}
            to="https://baby-dew.gitbook.io/baby-dew-docs/"
          >
            Learn more
          </Button>
        </motion.div>
      </div>
    </section>
  );
}

export default Roadmap;

"use client";

import Image from "next/image";
import { TypeAnimation } from "react-type-animation";
import { motion } from "framer-motion";
import DropdownButton from "../NavBar/dropdown";
import InputSearch from "../NavBar/inputSearch";
import Link from "next/link";

const slider = {
  initial: {
    x: 700,
  },
  animate: {
    x: 0,
    transition: {
      duration: 1,
      staggerChildren: 0.1,
      opacity: 1,
    },
  },
};

const textVariant = {
  initial: {
    x: -700,
  },
  animate: {
    x: 0,
    opacity: 1,
    transition: {
      duration: 1,
      staggerChildren: 0.1,
    },
  },
};

function Hero() {
  return (
    <div className="bg-hero bg-center bg-cover h-full md:h-[32rem] bg-no-repeat">
      <header className=" ">
        <div className="flex flex-col md:flex-row justify-between p-4">
          <Link
            href="/"
            className="text-2xl hover:scale-105 transition-all font-bold text-color-primary md:px-4 "
          >
            {" "}
            MYANIME⭐
          </Link>

          

          <InputSearch />
        </div>
      </header>
      <header className=" sm:p-16 py-16 px-8 flex justify-center lg:items-center max-lg:flex-col w-full sm:gap-16 gap-0 overflow-hidden">
        <div className="flex-1 flex flex-col gap-10">
          <motion.h1
            variants={textVariant}
            initial="initial"
            animate="animate"
            className="sm:text-6xl max-md:text-center text-5xl text-white lg:max-w-xl transition-all font-bold leading-[120%]"
          >
            This Site Contains
            <span className="text-color-accent">
              <TypeAnimation
                preRenderFirstString={true}
                omitDeletionAnimation={true}
                sequence={[
                  "Almost Everything",
                  2000,
                  "Recommendation ",
                  2000,
                  "Searching Feature",
                  2000,
                  "Popularity Lists",
                  2000,
                ]}
                wrapper="span"
                speed={40}
                style={{ display: "inline-block" }}
                repeat={Infinity}
              />
            </span>
            of Anime Details!
          </motion.h1>
          <div className="text-white gap-4"></div>
        </div>
        <motion.div
          variants={slider}
          initial="initial"
          animate="animate"
          className="lg:flex-1 relative w-full h-[55vh] transition-all justify-center overflow-hidden"
        >
          <Image
            src="/Demon-Slayer.png"
            alt="anime"
            fill
            className="object-contain"
          />
        </motion.div>
      </header>
    </div>
  );
}

export default Hero;

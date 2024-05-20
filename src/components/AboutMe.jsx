"use client";
import { ScrollShadow } from "@nextui-org/react";
import { useInView, motion } from "framer-motion";
import React, { useEffect, useRef } from "react";

export default function AboutMe() {
  const ref = useRef(null);
  const isInView = useInView(ref, {
    amount: "all",
    once: true,
  });

  useEffect(() => {
    console.log("Element is in view: ", isInView);
  }, [isInView]);

  const lineVariants = {
    hidden: { width: "0%", opacity: 0 },
    visible: {
      width: "100%",
      opacity: 1,
      transition: { duration: 1, ease: "easeInOut" },
    },
  };

  return (
    <>
      <section
        ref={ref}
        className="relative flex flex-col items-center justify-center py-20 text-center lg:h-56"
        id="about"
      >
        <motion.div
          animate={{
            y: isInView ? 0 : 30,
            opacity: isInView ? 1 : 0,
          }}
          transition={{ ease: "easeIn", duration: 0.5 }}
          className="mb-10 uppercase font-extrabold bg-clip-text bg-gradient-to-b from-white from-[40%] to-gray-500 tracking-[-0.04em] leading-none text-[2.5rem] md:text-[4rem] lg:text-[5rem] max-w-lg md:max-w-xl lg:max-w-4xl"
        >
          #Who am I?
        </motion.div>

        <motion.div
          animate={{
            y: isInView ? 0 : 30,
            opacity: isInView ? 1 : 0,
          }}
          transition={{ ease: "easeIn", duration: 0.5 }}
          className="px-2 text-center md:px-44"
        >
          <span className="font-extralight text-[1.25rem] md:text-[1.875rem]">
            Hi, I'm Alan: Curious Frontend Developer crafting impactful and
            functional web experiences. Transforming ideas into digital reality,
            blending design and frontend development for beautiful and navigable
            interfaces. Focused on usability, performance, and aesthetics.
          </span>
        </motion.div>
        <div className="flex justify-center w-full mt-36">
          <motion.div
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
            variants={lineVariants}
            className="w-full bg-gradient-to-tl from-pink-400 via-black to-black opacity-90 p-0.5"
          ></motion.div>
          <motion.div
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
            variants={lineVariants}
            className="w-full bg-gradient-to-bl from-black via-black to-pink-400 opacity-90 p-0.5"
          ></motion.div>
        </div>
      </section>
    </>
  );
}

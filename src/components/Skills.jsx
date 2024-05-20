"use client";
import bootstrapIcon from "../assets/icons/bootstrap.svg";
import nextjsIcon from "../assets/icons/nextjs.svg";
import nodejsIcon from "../assets/icons/nodejs.svg";
import javascriptIcon from "../assets/icons/javascript.svg";
import tailwindIcon from "../assets/icons/tailwind.svg";
import reactIcon from "../assets/icons/react.svg";
import reduxIcon from "../assets/icons/redux.svg";
import htmlIcon from "../assets/icons/html.svg";
import cssIcon from "../assets/icons/css.svg";
import framerIcon from "../assets/icons/framer.svg";
import { useEffect, useRef } from "react";
import { useInView, motion } from "framer-motion";
import { Divider } from "@nextui-org/react";
import Image from "next/image";

export default function Skills() {
  const ref = useRef(null);
  const isInView = useInView(ref, {
    amount: "all",
    once: true,
  });

  useEffect(() => {
    console.log("Element is in view: ", isInView);
  }, [isInView]);

  const skills = [
    { name: "Nextjs", icon: nextjsIcon },
    { name: "Nodejs", icon: nodejsIcon },
    { name: "Javascript", icon: javascriptIcon },
    { name: "React", icon: reactIcon },
    { name: "Redux", icon: reduxIcon },
    { name: "Bootstrap", icon: bootstrapIcon },
    { name: "Tailwind", icon: tailwindIcon },
    { name: "HTML", icon: htmlIcon },
    { name: "CSS", icon: cssIcon },
    { name: "Framer Motion", icon: framerIcon },
  ];

  const glowVariants = {
    hidden: { boxShadow: "0 0 0px rgba(72, 187, 120, 0)", opacity: 0 },
    visible: {
      boxShadow: [
        "0 0 10px rgba(72, 187, 120, 0.5)",
        "0 0 20px rgba(72, 187, 120, 0.7)",
        "0 0 30px rgba(72, 187, 120, 0.9)",
        "0 0 40px rgba(72, 187, 120, 1)",
        "0 0 30px rgba(72, 187, 120, 0.9)",
        "0 0 20px rgba(72, 187, 120, 0.7)",
        "0 0 10px rgba(72, 187, 120, 0.5)",
        "0 0 0px rgba(72, 187, 120, 0)",
      ],
      opacity: 1,
    },
  };

  return (
    <motion.div ref={ref} className="flex flex-col items-center " id="skills">
      <motion.div
        animate={{ opacity: isInView ? 1 : 0 }}
        transition={{ ease: "easeInOut", duration: 1 }}
        className="text-transparent uppercase font-extrabold bg-clip-text bg-gradient-to-b from-white from-[40%] backdrop-blur-xl backdrop-brightness-150 to-gray-500 tracking-[-0.04em] leading-none text-[2.5rem] md:text-[4rem] lg:text-[5rem] max-w-lg md:max-w-xl lg:max-w-4xl text-center mt-10"
      >
        #WHAT I BRING TO THE TABLE
        {/* #HERE'S WHAT I'M GOOD AT */}
      </motion.div>
      <motion.div className="relative flex flex-wrap items-center justify-center w-screen gap-6 px-5 mt-10 md:mt-20">
        {skills.map((skill, index) => (
          <motion.div
            key={index}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
            variants={glowVariants}
            transition={{
              boxShadow: {
                duration: 2,
                repeat: Infinity,
                repeatType: "reverse",
                delay: index * 0.3,
              },
              opacity: {
                duration: 1,
              },
            }}
            className=" md:h-32 md:w-32 w-24 h-24 rounded-full bg-gradient-to-tl from-green-950 to-green-200 p-0.5 mt-5"
          >
            <div className="flex items-center justify-center w-full h-full overflow-hidden bg-black rounded-full ">
              <figure className="flex flex-col items-center justify-center w-16 h-16 md:mb-2 md:w-20 md:h-20">
                <Image
                  src={skill.icon}
                  alt={skill.name}
                  className="md:w-[50px] w-[70px] opacity-70 "
                />
              </figure>
            </div>
            <p className="mx-auto text-base font-light text-white w-max md:text-lg lg:text-xl md:mt-2 opacity-80">
              {skill.name}
            </p>
          </motion.div>
        ))}
        {/* <motion.div className="absolute z-10">
          <Image src={bg1} className="w-screen " />
        </motion.div> */}
      </motion.div>

      <motion.div
        animate={{ opacity: isInView ? 1 : 0 }}
        transition={{ ease: "easeIn", duration: 1 }}
        className="flex flex-row h-40 px-20 mt-32 space-x-4 text-center justify-stretch"
      >
        <div className="flex flex-col self-center w-1/2 ">
          <div className="mb-2 text-2xl ">Best Practices</div>
          <div className="text-lg font-light opacity-75">
            Application of best development practices, ensuring readable and
            maintainable code.
          </div>
        </div>
        <Divider orientation="vertical" className="h-40" />
        <div className="flex flex-col self-center w-1/2 ">
          <div className="mb-2 text-2xl ">Refactoring Components</div>
          <div className="text-lg font-light opacity-75">
            improvement of existing code to optimize performance and
            readability.
          </div>
        </div>
        <Divider orientation="vertical" className="h-40" />
        <div className="flex flex-col self-center w-1/2 ">
          <div className="mb-2 text-2xl font-medium ">Efficient Code</div>
          <div className="text-lg font-light opacity-75">
            Write efficient code that improves the speed and response of
            applications.
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
}

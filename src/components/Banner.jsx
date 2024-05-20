"use client";
import Image from "next/image";
import bgImg from "../assets/images/gggyrate2.svg";
import { Button } from "@nextui-org/react";
import Link from "next/link";
import { useEffect } from "react";
import { motion, stagger, useAnimate } from "framer-motion";

const words = "Your Vision, My Code - Let's Make It Happen";
const wordsArray = words.split(" ");

export default function Banner() {
  const [scope, animate] = useAnimate();

  useEffect(() => {
    animate("span", { opacity: 1 }, { duration: 2, delay: stagger(0.2) });
  }, [animate]);

  const renderWords = () => {
    return (
      <motion.div ref={scope} className="flex flex-wrap justify-center">
        {wordsArray.map((word, index) => (
          <motion.span
            key={index}
            className="text-white opacity-0 font-extralight text-[1.25rem] md:text-[1.875rem] mx-1"
          >
            {word}{" "}
          </motion.span>
        ))}
      </motion.div>
    );
  };

  return (
    <section className="relative flex flex-col items-center justify-center h-screen text-center">
      <div className="relative z-10 flex flex-col items-center max-w-screen-xl mx-auto">
        <div className="h-20 md:h-[170px] mb-20">
          <h1 className="text-transparent font-extrabold bg-clip-text bg-gradient-to-b from-white from-[40%] to-gray-500 tracking-[-0.04em] leading-none text-[2.5rem] md:text-[4rem] lg:text-[5rem] max-w-3xl mx-auto">
            TRANSLATING DREAMS INTO DIGITAL REALITIES
          </h1>
        </div>
        <div className="w-full my-5">{renderWords()}</div>
        <div className="flex flex-col gap-5 px-10 mt-5 md:flex-row">
          <Button
            as={Link}
            href="#portfolio"
            variant="shadow"
            className="text-black bg-white w-[345px] md:w-[192px] md:h-[48px] md:text-base"
            radius="sm"
          >
            View My Work
          </Button>
          <Button
            as={Link}
            href="/resume-alan-telo.pdf"
            target="_blank"
            download="Alan-Telo-CV.pdf"
            variant="ghost"
            radius="sm"
            className="w-[345px] md:w-[192px] md:h-[48px] border-2 md:text-base"
          >
            Download CV
          </Button>
        </div>
      </div>
      <Image
        src={bgImg}
        className="absolute top-0 z-0 object-cover h-full"
        alt="bg-image"
        priority
      />
    </section>
  );
}

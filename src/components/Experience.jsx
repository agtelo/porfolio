import React from "react";
import Timeline from "./Timeline";

export default function Experience() {
  return (
    <section
      className=" md:flex md:flex-col md:justify-center md:items-center"
      id="experience"
    >
      <h1 className="md:text-[60px] mb-32 text-transparent uppercase font-extrabold bg-clip-text bg-gradient-to-b from-white from-[40%] to-gray-500 tracking-[-0.04em] leading-none text-[40px] md:text-5xl lg:text-[80px] max-w-lg md:max-w-xl lg:max-w-4xl text-center ">
        #My Work Experience
      </h1>
      <Timeline />
    </section>
  );
}

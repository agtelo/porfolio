"use client";
import Image from "next/image";
import image1 from "../assets/images/project1.png";
import image2 from "../assets/images/project2.png";
import Link from "next/link";

export default function Projects() {
  return (
    <section
      className="flex flex-col items-center w-[1200px] rounded-3xl border-t-1 "
      id="portfolio"
    >
      <h1 className="text-transparent uppercase font-extrabold bg-clip-text bg-gradient-to-b from-white from-[40%] to-gray-500 tracking-[-0.04em] leading-none text-[2.5rem] md:text-[4rem] lg:text-[5rem] max-w-lg md:max-w-xl lg:max-w-4xl text-center mt-28">
        #CHECK OUT MY PORTFOLIO
      </h1>
      <span className="text-[1.25rem] md:text-[1.875rem] font-thin text-center mb-28 mt-10">
        Here's what I have done in the past
      </span>

      <div className="flex flex-row space-x-10 h-[560px]">
        <Image
          alt="movix"
          className="object-cover object-top rounded-3xl"
          height={200}
          src={image1}
          width={500}
        />
        <div className="flex flex-col justify-between w-[560px] ">
          <div>
            <h1 className="mb-10 text-5xl">Movix</h1>
            <div className="flex space-x-3 text-lg text-gray-500">
              <p className="">React</p>
              <p className="">Redux</p>
              <p className="">Bootstrap</p>
              <p className="">Animate.css</p>
            </div>
            <p className="mt-10">
              Movix is an innovative platform designed for movie and TV series
              enthusiasts, offering access to the latest releases and enabling
              content searches by genre. With a modern and user-friendly
              interface, Movix facilitates the discovery and exploration of a
              wide range of films and TV shows.
            </p>
          </div>

          <Link
            href="https://movix-app-five.vercel.app/"
            className="text-xl uppercase"
          >
            Go to Site
          </Link>
        </div>
      </div>
      <div className="flex flex-row space-x-10 h-[560px] mt-28">
        <div className="flex flex-col justify-between w-[560px]">
          <div className="">
            <h1 className="mb-10 text-5xl">Kalima</h1>
            <div className="flex space-x-3 text-lg text-gray-500">
              <p className="">React</p>
              <p className="">Redux</p>
              <p className="">Bootstrap</p>
              <p className="">Animate.css</p>
            </div>
            <p className="mt-10">
              Kalima is a premier e-commerce platform dedicated to high-quality
              leather goods. Designed to meet the needs of discerning customers,
              Kalima offers a curated selection of leather products, from bags
              and wallets to belts and accessories, all crafted with exceptional
              attention to detail and craftsmanship.
            </p>
          </div>

          <Link
            href="https://movix-app-five.vercel.app/"
            className="text-xl uppercase"
          >
            Go to Site
          </Link>
        </div>
        <Image
          alt="kalima"
          className="object-cover object-top rounded-3xl"
          height={200}
          src={image2}
          width={500}
        />
      </div>
    </section>
  );
}

"use client";
import { useRef } from "react";
import { Chrono } from "react-chrono";

const customContent = [
  <div className="text-[#808080] text-lg md:text-xl lg:text-2xl">
    • Designed UI/UX for responsive web applications. <br />
    • Ensured cross-browser compatibility and performance optimization. <br />
    • Implemented user-centric design principles and efficient code. <br />
  </div>,
  <div className="text-[#808080] text-lg md:text-xl lg:text-2xl">
    • Designed UI/UX for responsive web applications. <br />
    • Ensured cross-browser compatibility and performance optimization. <br />
    • Implemented user-centric design principles and efficient code. <br />
  </div>,
  <div className="text-[#808080] text-lg md:text-xl lg:text-2xl">
    • Designed UI/UX for responsive web applications. <br />
    • Ensured cross-browser compatibility and performance optimization. <br />
    • Implemented user-centric design principles and efficient code. <br />
  </div>,
];

const items = [
  {
    title: "Jan 2023 - Mar 2023",
    cardTitle: "NOVIT SOFTWARE",
    // cardSubtitle: "Frontend Developer",
  },
  {
    title: "Jan 2023 - Mar 2023",
    cardTitle: "CODERHOUSE",
    // cardSubtitle: "React Bootcamp",
  },
  {
    title: "Jan 2023 - Mar 2023",
    cardTitle: "DIGITAL HOUSE",
    // cardSubtitle: "Fullstack Bootcamp",
  },
];

export default function Timeline() {
  const chronoKey = useRef(Math.random().toString(36).substring(7)).current;
  return (
    <Chrono
      key={chronoKey}
      mode="VERTICAL"
      items={items}
      itemWidth={200}
      className="flex flex-col space-x-3"
      theme={{
        primary: "#074d52",
        secondary: "black",
        cardBgColor: "none",
        titleColor: "gray",
        cardSubtitleColor: "gray",
        titleColorActive: "none",
        cardTitleColor: "#9e487e",
        cardTextColor: "white",
      }}
      fontSizes={{
        cardText: "1.6rem", // Adjusted for consistency with AboutMe
        cardTitle: "2.5rem", // Adjusted for consistency with AboutMe
        title: "1.5rem",
      }}
      hideControls={true}
    >
      {customContent.map((content, index) => (
        <div key={index} className="mt-5">
          {content}
        </div>
      ))}
    </Chrono>
  );
}

import React from "react";

export default function Footer() {
  return (
    <section className="gap-2 p-10 text-sm font-thin md:flex md:text-xl md:justify-center md:items-center">
      <span className="text-[1.25rem] md:text-[1.875rem] font-extralight">
        Copyright 2023 ©{" "}
        <a href="#" className="hover:text-success">
          Alan Telo
        </a>
        . All Rights Reserved.
      </span>
      <div className="flex items-center justify-center gap-1 text-[1.25rem] md:text-[1.5rem] font-extralight">
        <svg
          aria-hidden="true"
          focusable="false"
          height="48"
          width="48"
          role="presentation"
          viewBox="0 0 24 24"
          className="text-danger group-data-[hover=true]:animate-heartbeat"
          tabIndex="-1"
        >
          <path
            d="M12.62 20.81c-.34.12-.9.12-1.24 0C8.48 19.82 2 15.69 2 8.69 2 5.6 4.49 3.1 7.56 3.1c1.82 0 3.43.88 4.44 2.24a5.53 5.53 0 0 1 4.44-2.24C19.51 3.1 22 5.6 22 8.69c0 7-6.48 11.13-9.38 12.12Z"
            fill="currentColor"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="1.5"
          ></path>
        </svg>
        <span> U-3000</span>
      </div>
    </section>
  );
}

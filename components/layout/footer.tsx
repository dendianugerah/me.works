import Link from "next/link";
import React from "react";
import { Karla } from "next/font/google";

const karla = Karla({ preload: false });

export function Footer({ children }: { children?: React.ReactNode }) {
  return (
    <nav className={`${karla.className} max-w-7xl mx-auto pt-8 `}>
      <h2>
        These projects are just a snapshot of my several works. I&apos;d love to
        show you a broader range in person. <b>Don&apos;t be a stranger</b>, we
        can meet up for coffee or tea — it&apos;s your choice!
      </h2>
      <span className="text-[#7a7a87] flex flex-col flex-wrap items-start pt-2">
        <span>dendianugrah40@gmail.com</span>
        <Link
          href="https://www.linkedin.com/in/dendianugerah/"
          target="_blank"
          className="group transition-all duration-100 ease-in-out text-[#7a7a87]"
        >
          <span className="bg-left-bottom bg-gradient-to-r from-[#7a7a87] to-black bg-[length:0%_2px] bg-no-repeat group-hover:bg-[length:100%_2px] transition-all duration-500 ease-out">
            LinkedIn
          </span>
        </Link>
        <Link
          href="https://github.com/dendianugerah"
          target="_blank"
          className="group transition-all duration-100 ease-in-out text-[#7a7a87]"
        >
          <span className="bg-left-bottom bg-gradient-to-r from-[#7a7a87] to-black bg-[length:0%_2px] bg-no-repeat group-hover:bg-[length:100%_2px] transition-all duration-500 ease-out">
            Github
          </span>
        </Link>
      </span>
      {children}
    </nav>
  );
}

export default Footer;

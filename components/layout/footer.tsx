import Link from "next/link";
import React from "react";
import { Karla } from "next/font/google";

const karla = Karla({ preload: false });

export function Footer({ children }: { children?: React.ReactNode }) {
  return (
    <nav className={`${karla.className} max-w-7xl mx-auto pt-16 `}>
      <h2 className="text-xl sm:text-4xl">
        These projects are just a snapshot of my recent work. I&apos;d love to
        show you a wider range in person. <b>Don&apos;t be a stranger</b>, we
        can meet up for coffee or tea — your choice!
      </h2>
      <span className=" text-[#7a7a87] flex flex-col flex-wrap items-start pt-2">
        dendianugrah40@gmail.com
        <Link
          href="https://www.linkedin.com/in/dendianugerah/"
          target="_blank"
          className="hover:underline"
        >
          LinkedIn
        </Link>
        <Link
          href="https://github.com/dendianugerah"
          target="_blank"
          className="hover:underline"
        >
          Github
        </Link>
      </span>
      {children}
    </nav>
  );
}

export default Footer;

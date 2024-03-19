import Link from "next/link";
import React from "react";
import { Karla } from "next/font/google";

const karla = Karla({ preload: false });

export function Navigation({
  name,
  children,
}: {
  name: string;
  children?: React.ReactNode;
}) {
  return (
    <nav className={karla.className}>
      <section className="flex items-center justify-between pb-8 pt-16">
        <Link href="/" className="text-xl font-bold cursor-pointer uppercase">
          {name}
        </Link>

        <Link href="#about" className="mr-4 text-[#7a7a87]">
          About & Things
        </Link>
      </section>
      {/* <Link href="./thought" className="text-[#7a7a87]">
          Thought
        </Link> */}
      {children}
    </nav>
  );
}

export default Navigation;

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

        <div className="flex">
          <Link href="/#about" className="mr-4 text-[#7a7a87] text-sm sm:text-[16px]">
            About & Things
          </Link>
          <Link href="/thought" className="text-[#7a7a87] text-sm sm:text-[16px]">
            Thought
          </Link>
        </div>
      </section>
      {children}
    </nav>
  );
}

export default Navigation;

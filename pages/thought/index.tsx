import matter from "gray-matter";
import fs from "fs";
import Link from "next/link";
import { ThoughtDefinition } from "@/definition";

interface ThoughtProps {
  writings: ThoughtDefinition[];
}

export default function Thought({ writings }: ThoughtProps) {
  return (
    <div className="max-w-7xl mx-auto">
      <section className="mb-2 flex flex-col ">
        <div className="max-w-4xl">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div>
              <h2 className="text-lg font-bold tracking-tight sm:text-4xl">
                Talks & writing
              </h2>
              <span>
                A collection of talks (soon), articles, and experimental.
              </span>
            </div>
            <div className="flex flex-col flex-wrap items-start">
              {writings.map((writing, index) => (
                <Link
                  href={`/thought/${writing.slug}`}
                  key={index}
                  className="group transition-all duration-100 ease-in-out text-[#7a7a87] my-1"
                >
                  <span className="bg-left-bottom bg-gradient-to-r from-[#7a7a87] to-black bg-[length:0%_2px] bg-no-repeat group-hover:bg-[length:100%_2px] transition-all duration-500 ease-out">
                    {writing.title}
                  </span>
                </Link>
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export async function getStaticProps() {
  let files = fs.readdirSync("data/thought");
  files = files.filter((file) => file.endsWith(".mdx"));

  const writings = files.map((file) => {
    const fileData = fs.readFileSync(`data/thought/${file}`);
    const { data } = matter(fileData);

    return {
      title: data.title,
      slug: file.split(".")[0],
    };
  });

  return {
    props: {
      writings,
    },
  };
}

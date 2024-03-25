import matter from "gray-matter";
import fs from "fs";
import Link from "next/link";
import { ThoughtDefinition } from "@/definition";

interface ThoughtProps {
  writings: ThoughtDefinition[];
}

export default function Thought({ writings }: ThoughtProps) {
  return (
    <div className="flex flex-col max-w-7xl mx-auto">
      <span className="text-xl sm:text-4xl">Talks & writing</span>
      <span>A collection of talks, articles, and experimental.</span>
      <div className="flex flex-col flex-wrap items-start text-[#7a7a87]">
        {writings.map((writing, index) => (
          <Link
            href={`/thought/${writing.slug}`}
            key={index}
            className="hover:underline"
          >
            {writing.title}
          </Link>
        ))}
      </div>
    </div>
  );
}

export async function getStaticProps() {
  let files = fs.readdirSync("data/thought");
  files = files.filter((file) => file.endsWith(".mdx"));

  const writing = files.map((file) => {
    const fileData = fs.readFileSync(`data/thought/${file}`);
    const { data } = matter(fileData);

    return {
      title: data.title,
      slug: file.split(".")[0],
    };
  });

  console.log("WRITING", writing);

  return {
    props: {
      writing,
    },
  };
}

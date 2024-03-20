import fs from "fs";
import path from "path";
import matter from "gray-matter";
import { serialize } from "next-mdx-remote/serialize";
import { MDXRemote } from "next-mdx-remote";
import Navigation from "@/components/layout/navigation";
import Link from "next/link";
import { Karla } from "next/font/google";

const karla = Karla({ preload: false });

export default function ProjectSlug(props: {
  frontMatter: any;
  mdxSource: any;
  name: string;
}) {
  return (
    <div className={`max-w-7xl mx-auto ${karla.className}`}>
      <title>{props.frontMatter.title}</title>

      <Navigation name={props.name} />

      <article className="flex flex-col mt-16 max-w-5xl mx-auto">
        <section className="flex flex-col justify-center items-center text-center">
          <h1 className="mb-3 text-4xl font-bold text-[#4d4d4d]">
            {props.frontMatter.title}
          </h1>
          <p className="text-lg text-[#000000a3]">
            {props.frontMatter.description}
          </p>
          <Link
            href={props.frontMatter.url}
            target="_blank"
            className="underline"
          >
            Link to project
          </Link>
        </section>
        <hr className="h-px my-8 bg-gray-200 border-0 dark:bg-gray-700" />
        <section className="flex flex-col">
          Table of Contents
          <Link href="#overview">Overview</Link>
          <Link href="#description">Description</Link>
          <Link href="#type">Type</Link>
        </section>
        <MDXRemote {...props.mdxSource} />
      </article>
    </div>
  );
}

export async function getStaticPaths() {
  let files = fs.readdirSync(path.resolve(process.cwd(), "data/project"));

  const paths = files.map((file) => {
    return {
      params: {
        slug: file.replace(".mdx", ""),
      },
    };
  });

  return {
    paths,
    fallback: false,
  };
}

export async function getStaticProps({ params }: { params: { slug: string } }) {
  const fileData = fs.readFileSync(
    path.resolve(process.cwd(), "data/project", `${params.slug}.mdx`)
  );

  const { data, content } = matter(fileData);

  const mdxSource = await serialize(content);

  // Read profile file to extract name
  const profileFile = fs.readFileSync("data/profile.mdx", "utf-8");
  const profileData = matter(profileFile);
  const name = profileData.data.name;

  return {
    props: {
      frontMatter: data,
      mdxSource,
      name,
    },
  };
}

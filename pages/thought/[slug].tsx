import fs from "fs";
import path from "path";
import matter from "gray-matter";
import Navigation from "@/components/layout/navigation";
import { serialize } from "next-mdx-remote/serialize";
import { MDXRemote } from "next-mdx-remote";
import { Karla } from "next/font/google";

const karla = Karla({ preload: false });

export default function ThoughtSlug(props: {
  frontMatter: any;
  mdxSource: any;
  name: string;
}) {
  return (
    <div
      className={`max-w-7xl mx-auto pb-8 sm:pb-32 ${karla.className} px-4 xl:px-0`}
    >
      <title>{props.frontMatter.title}</title>

      <Navigation name={props.name} />

      <article className="flex flex-col mt-16 max-w-5xl mx-auto">
        <section className="flex flex-col justify-center items-center text-justify sm:text-center">
          <h1 className="mb-3 text-4xl font-bold text-[#4d4d4d]">
            {props.frontMatter.title}
          </h1>
        </section>
        <section className="flex flex-col mb-8">
          <MDXRemote {...props.mdxSource} />
        </section>
      </article>
    </div>
  );
}
export async function getStaticPaths() {
  let files = fs.readdirSync(path.resolve(process.cwd(), "data/thought"));

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
    path.resolve(process.cwd(), "data/thought", `${params.slug}.mdx`)
  );

  const { data, content } = matter(fileData);

  const mdxSource = await serialize(content, {
    parseFrontmatter: false,
  });

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

import fs from "fs";
import path from "path";
import matter from "gray-matter";
import { serialize } from "next-mdx-remote/serialize";
import { MDXRemote } from "next-mdx-remote";
import Navigation from "@/components/layout/navigation";
import Link from "next/link";

export default function ProjectSlug(props: {
  frontMatter: any;
  mdxSource: any;
  name: string;
}) {
  return (
    <div className="max-w-7xl mx-auto">
      <title>{props.frontMatter.title}</title>
      <Navigation name={props.name} />

      <h1 className="mb-3 text-4xl font-bold">{props.frontMatter.title}</h1>
      <Link href={props.frontMatter.url} target="_blank" className="underline">
        Go to project
      </Link>
      <MDXRemote {...props.mdxSource} />
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

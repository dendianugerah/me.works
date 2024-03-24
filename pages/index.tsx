import fs from "fs";
import matter from "gray-matter";
import Project from "@/pages/project";
import { Karla } from "next/font/google";
import { Navigation, About } from "@/components/layout/_index";
import { ProjectDefinition, ProfileDefinition } from "@/definition";
import { Application } from "@splinetool/runtime";
import { useEffect } from "react";
import Link from "next/link";
const karla = Karla({ preload: false });

export default function Home({
  profile,
  projects,
}: {
  profile: ProfileDefinition;
  projects: ProjectDefinition[];
}) {
  const { name, introduction, background, about, awards } = profile;

  // useEffect(() => {
  //   const canvas = document.getElementById("canvas3d");
  //   const app = new Application(canvas as HTMLCanvasElement);
  //   app.load("https://prod.spline.design/RWop9YYzBLiGqqOu/scene.splinecode");
  // }, []);

  return (
    <main className={`${karla.className}`}>
      <div className="bg-[#f5f5f5] pb-8 sm:pb-32 px-4 xl:px-0">
        <div className="max-w-7xl mx-auto">
          <Navigation name={name} />
          <div className="flex flex-col justify-center items-center text-center whitespace-pre-wrap max-w-6xl mx-auto">
            <span className="text-[10px] sm:text-xl">Hello.</span>
            <span className="text-xl sm:text-4xl">{introduction}</span>
          </div>
          {/* <div className="flex justify-center items-center mt-4">
            <canvas id="canvas3d" className="w-full h-full" />
          </div> */}
          <Project projects={projects} />
          <h2 className="mt-16 text-xl sm:text-4xl">
            These projects are just a snapshot of my recent work. I&apos;d love
            to show you a wider range in person. <b>Don&apos;t be a stranger</b>
            , we can meet up for coffee or tea — your choice!
          </h2>
          <span className=" text-[#7a7a87] flex flex-col flex-wrap items-start">
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
            <Link
              href="mailto:dendianugrah40@gmail.com"
              className="hover:underline"
            >
              Email
            </Link>
          </span>
        </div>
      </div>
      <div className="pt-16">
        <div className="max-w-7xl mx-auto">
          <About background={background} about={about} awards={awards} />
        </div>
      </div>
    </main>
  );
}

export async function getStaticProps() {
  const files = fs
    .readdirSync("data/project")
    .filter((file) => file.endsWith(".mdx"));

  const projects = files.map((file) => {
    const fileData = fs.readFileSync(`data/project/${file}`);
    const { data } = matter(fileData);

    return {
      title: data.title,
      overview: data.overview,
      url: data.url,

      type: data.type,
      slug: file.split(".")[0],
      image: data.image ? data.image : null,
      video: data.video ? data.video : null,
    };
  });

  const profileFile = fs.readFileSync("data/profile.mdx", "utf-8");
  const { data } = matter(profileFile);

  const profile: ProfileDefinition = {
    name: data.name,
    background: data.background,
    introduction: data.introduction,
    about: data.about,
    awards: data.award,
  };

  return {
    props: {
      profile,
      projects,
    },
  };
}

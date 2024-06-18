import fs from "fs";
import matter from "gray-matter";
import Project from "@/pages/project";
import Thought from "@/pages/thought";
import { Karla } from "next/font/google";
import { Navigation, About, Footer } from "@/components/layout/_index";
import {
  ProjectDefinition,
  ProfileDefinition,
  ThoughtDefinition,
} from "@/definition";
const karla = Karla({ preload: false });

export default function Home({
  profile,
  projects,
  thought,
}: {
  profile: ProfileDefinition;
  projects: ProjectDefinition[];
  thought: ThoughtDefinition[];
}) {
  const { name, introduction, background, about, awards } = profile;

  return (
    <main className={`${karla.className}`}>
      <div className="bg-[#f5f5f5] pb-8 sm:pb-32 px-4 xl:px-0">
        <div className="max-w-7xl mx-auto">
          <Navigation name={name} />
          <div className="flex flex-col justify-center items-center text-center whitespace-pre-wrap max-w-6xl mx-auto py-20">
            <span className="text-[10px] sm:text-xl">Hello👋.</span>
            {/* <span className="text-xl sm:text-4xl">{introduction}</span> */}
            <span className="text-xl sm:text-4xl">
              I&apos;m Dendi, a <b>software engineer</b>, and{" "}
              <b>human interface design</b> enthusiast. Living in Indonesia
            </span>
          </div>
          <Project projects={projects} />
        </div>
      </div>
      <div className="pt-16">
        <div className="max-w-7xl mx-auto">
          <About background={background} about={about} awards={awards} />
        </div>
      </div>
      {/* <div className="px-4 xl:px-0">
        <Thought writings={thought} />
      </div> */}
      <div className="pb-8 sm:pb-32 px-4 xl:px-0">
        <Footer />
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

  // const thoughtFiles = fs
  //   .readdirSync("data/thought")
  //   .filter((file) => file.endsWith(".mdx"));

  // const thought = thoughtFiles.map((file) => {
  //   const fileData = fs.readFileSync(`data/thought/${file}`);
  //   const { data } = matter(fileData);

  //   return {
  //     title: data.title,
  //     slug: file.split(".")[0],
  //   };
  // });

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
      // thought,
    },
  };
}

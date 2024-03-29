import { ProjectDefinition } from "@/definition";
import ProjectCard from "@/components/ui/project.card";
import matter from "gray-matter";
import fs from "fs";

interface ProjectCardsProps {
  projects: ProjectDefinition[];
}

export default function Project({ projects }: ProjectCardsProps) {
  return (
    <div className="md:flex md:flex-wrap md:gap-16 md:justify-between ">
      {projects.map((project, index) => (
        <ProjectCard
          size={index % 4 === 0 || index % 4 === 3 ? "small" : "large"}
          key={project.slug}
          type={project.type}
          title={project.title}
          overview={project.overview}
          slug={`/project/${project.slug}`}
          image={project.image}
          video={project.video}
        />
      ))}
    </div>
  );
}

export async function getStaticProps() {
  let files = fs.readdirSync("data/project");
  files = files.filter((file) => file.endsWith(".mdx"));

  const projects = files.map((file) => {
    const fileData = fs.readFileSync(`data/project/${file}`);
    const { data } = matter(fileData);

    return {
      title: data.title,
      overview: data.overview,
      type: data.type,
      slug: file.split(".")[0],
      image: data.image ? data.image : null,
      video: data.video ? data.video : null,
    };
  });

  return {
    props: {
      projects,
    },
  };
}

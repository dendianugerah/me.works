import Link from "next/link";
import { ProjectDefinition } from "@/definition";

export default function ProjectCard({
  title,
  type,
  overview,
  slug,
  image,
  size,
  video,
}: ProjectDefinition & { video?: string }) {
  const sizeClasses = {
    small: "sm:h-[200px] sm:w-[400px]",
    large: "sm:h-[400px] sm:w-[720px]",
  };

  const textSizeClasses = {
    small: "text-[12px] md:text-[60px]",
    large: "text-[18px] md:text-[120px]",
  };

  return (
    <div className={`${sizeClasses[size]} flex flex-col my-16`}>
      <Link href={slug} rel="noopener noreferrer">
        <div className="relative">
          {image ? (
            <img
              className={`${sizeClasses[size]} object-cover mb-4 transition-opacity cursor-pointer`}
              src={image}
              alt={title}
            />
          ) : (
            <video
              className={`${sizeClasses[size]} object-cover mb-4 transition-opacity cursor-pointer`}
              src={video}
              autoPlay
              loop
              muted
            />
          )}
          <div className="absolute inset-0 flex items-center justify-center bg-black opacity-0 hover:opacity-50 transition-opacity">
            <span
              className={`${textSizeClasses[size]} text-white font-bold uppercase`}
            >
              {type}
            </span>
          </div>
        </div>
      </Link>
      <div>
        <h2 className="text-xl text-left text-black mb-1">{title}</h2>
        <p className="text-[#7a7a87] mb-4 text-sm sm:text-lg">{overview}</p>
      </div>
    </div>
  );
}

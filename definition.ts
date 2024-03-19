export interface ProjectDefinition {
  title: string;
  type: string;
  description: string;
  image: string;
  video: string;
  slug: string;
  size: "small" | "large";
}

export interface AboutDefinition {
  background: string;
  about: string;
  awards: string;
}

export interface ProfileDefinition {
  name: string;
  background: string;
  introduction: string;
  about: string;
  awards: string;
}

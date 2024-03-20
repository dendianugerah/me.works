export interface ProjectDefinition {
  title: string;
  overview: string;
  description?: string;
  type: string;
  url?: string;
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

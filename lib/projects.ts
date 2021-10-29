import fs from "fs";
import path from "path";
import matter from "gray-matter";

const projectDirectory = path.join(process.cwd(), "content/projects");

export interface Project {
  title: string;
  description: string;
  image: string;
  link: string;
  tags: string[];
}

export const getProjectData = (): Project[] => {
  const fileNames = fs.readdirSync(projectDirectory);

  const allProjectsData = fileNames.map((fileName) => {
    // Read markdown file as string
    const fullPath = path.join(projectDirectory, fileName, "index.mdx");
    const fileContents = fs.readFileSync(fullPath, "utf8");

    // Use gray-matter to parse the post metadata section
    const { data } = matter(fileContents);

    return {
      title: data.title,
      description: data.description,
      image: data.image,
      link: data.link,
      tags: data.tags,
      ...data,
    };
  });

  return allProjectsData;
};

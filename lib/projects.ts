import fs from "fs";
import path from "path";
import matter from "gray-matter";
// import { serialize } from "next-mdx-remote";

const projectDirectory = path.join(process.cwd(), "content/projects");

interface Post {
  title: string;
  description: string;
  image: string;
  link: string;
  tags: string[];
}

export const getProjectData = (): Post[] => {
  const fileNames = fs.readdirSync(projectDirectory);

  const allProjectsData = fileNames.map((fileName) => {
    // Read markdown file as string
    const fullPath = path.join(projectDirectory, fileName);
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

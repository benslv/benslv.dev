import fs from "fs";
import path from "path";
import matter from "gray-matter";

import { getPlaiceholder } from "plaiceholder";

const projectDirectory = path.join(process.cwd(), "content/projects");

export interface Project {
  title: string;
  description: string;
  image: string;
  blurhash: string;
  link: string;
  tags: string[];
}

export const getProjectData = async (): Promise<Project[]> => {
  const fileNames = fs.readdirSync(projectDirectory);

  return Promise.all(
    fileNames.map(async (fileName) => {
      // Read markdown file as string
      const fullPath = path.join(projectDirectory, fileName, "index.mdx");
      const fileContents = fs.readFileSync(fullPath, "utf8");

      // Use gray-matter to parse the post metadata section
      const { data } = matter(fileContents);

      const { base64 } = await getPlaiceholder(data.image);

      return {
        title: data.title,
        description: data.description,
        image: data.image,
        blurhash: base64,
        link: data.link,
        tags: data.tags,
        ...data,
      };
    }),
  );
};

import fs from "fs";
import path from "path";
import matter from "gray-matter";
import { bundleMDX } from "mdx-bundler";

import rehypeSlug from "rehype-slug";
import rehypePrismPlus from "rehype-prism-plus";
import rehypeAutolinkHeadings from "rehype-autolink-headings";

import remarkGfm from "remark-gfm";
import remarkFrontmatter from "remark-frontmatter";

const postsDirectory = path.join(process.cwd(), "content/posts");

export const getSortedPostsData = (): {
  slug: string;
  date: string;
  title: string;
  description: string;
  tags: string[];
  published: boolean;
}[] => {
  // Get file names under /posts
  const fileNames = fs.readdirSync(postsDirectory);
  const allPostsData = fileNames.map((fileName) => {
    // Remove ".md" from file name to get id
    const slug = fileName.replace(/\.mdx$/, "");

    // Read markdown file as string
    const fullPath = path.join(postsDirectory, fileName);
    const fileContents = fs.readFileSync(fullPath, "utf8");

    // Use gray-matter to parse the post metadata section
    const { data } = matter(fileContents);

    // Combine the data with the id
    return {
      slug,
      date: data.date,
      title: data.title,
      description: data.description,
      tags: data.tags,
      published: data.published,
      ...data,
    };
  });

  // Sort posts by date
  return allPostsData.sort(({ date: a }, { date: b }) => {
    if (a < b) {
      return 1;
    } else if (a > b) {
      return -1;
    } else {
      return 0;
    }
  });
};

export const getAllPostIDs = (): {
  params: {
    slug: string;
  };
}[] => {
  const filenames = fs.readdirSync(postsDirectory);

  return filenames.map((filename) => {
    return {
      params: {
        slug: filename.replace(/\.mdx$/, ""),
      },
    };
  });
};

type Slug = string | string[] | undefined;

export const getPostData = async (slug: Slug): Promise<{ slug: Slug; source: string }> => {
  const fullPath = path.join(postsDirectory, `${slug}.mdx`);
  const fileContents = fs.readFileSync(fullPath, "utf8"); // content of the MDX file

  const { code, frontmatter } = await bundleMDX({
    source: fileContents,
    xdmOptions(options) {
      options.remarkPlugins = [remarkFrontmatter, remarkGfm];
      options.rehypePlugins = [rehypeSlug, rehypePrismPlus];

      return options;
    },
  });

  return {
    slug,
    source: code,
    ...frontmatter,
  };
};

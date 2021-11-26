import React from "react";
import { NextSeo } from "next-seo";

interface SEOProps {
  description?: string;
  // lang?: string;
  // meta?: { name?: string; property?: string; content: string }[];
  title: string;
}

const defaultDesc =
  "Ben Silverman is a computer science student at the University of York, with a passion for web and software development.";

export const SEO = ({ description = defaultDesc, title }: SEOProps): JSX.Element => {
  return (
    <NextSeo
      title={title}
      defaultTitle="Ben Silverman"
      titleTemplate="%s ✨ Ben Silverman"
      description={description}
      twitter={{
        handle: "@bensilverman_",
        site: "benslv.dev",
        cardType: "summary_large_image",
      }}
      openGraph={{
        type: "website",
        title: title,
        description: description,
        locale: "en_GB",
        site_name: "benslv.dev",
        images: [
          {
            url: "https://i.postimg.cc/Jz0HqVqR/banner.jpg",
            width: 1500,
            height: 1500,
            alt: "Og Image",
          },
        ],
      }}
    />
  );
};

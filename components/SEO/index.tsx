import React from "react";

interface SEOProps {
  description?: string;
  lang?: string;
  meta?: { name?: string; property?: string; content: string }[];
  title: string;
}

export const SEO = ({ description = "", lang = "en", meta = [], title }: SEOProps): JSX.Element => {
  return <div></div>;
};

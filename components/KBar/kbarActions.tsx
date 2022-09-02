import React from "react";
import { Action } from "kbar";

import { Home, User, LightBulb, EditPencil, Twitter, GitHub } from "iconoir-react";

export const actions: Action[] = [
  {
    id: "home",
    name: "Home",
    keywords: "home start index",
    section: "Pages",
    icon: <Home />,
    perform: () => (window.location.pathname = "/"),
  },
  {
    id: "about",
    name: "About",
    keywords: "about",
    section: "Pages",
    icon: <User />,
    perform: () => (window.location.pathname = "about"),
  },
  {
    id: "projects",
    name: "Projects",
    keywords: "projects work demo example",
    section: "Pages",
    icon: <LightBulb />,
    perform: () => (window.location.pathname = "projects"),
  },
  {
    id: "posts",
    name: "Posts",
    keywords: "posts blog",
    section: "Pages",
    icon: <EditPencil />,
    perform: () => (window.location.pathname = "posts"),
  },
  {
    id: "twitter",
    name: "Twitter",
    keywords: "twitter tweet",
    section: "Socials",
    icon: <Twitter />,
    perform: () => window.open("https://twitter.com/bensilverman_", "_blank"),
  },
  {
    id: "github",
    name: "GitHub",
    keywords: "github git",
    section: "Socials",
    icon: <GitHub />,
    perform: () => window.open("https://github.com/benslv", "_blank"),
  },
];

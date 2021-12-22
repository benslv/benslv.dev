import React from "react";
import { Action } from "kbar";

import { BiHome, BiUser, BiBulb, BiPen } from "react-icons/bi";

export const actions: Action[] = [
  {
    id: "home",
    name: "Home",
    keywords: "home start index",
    section: "Pages",
    icon: <BiHome />,
    perform: () => (window.location.pathname = "/"),
  },
  {
    id: "about",
    name: "About",
    keywords: "about",
    section: "Pages",
    icon: <BiUser />,
    perform: () => (window.location.pathname = "about"),
  },
  {
    id: "projects",
    name: "Projects",
    keywords: "projects work demo example",
    section: "Pages",
    icon: <BiBulb />,
    perform: () => (window.location.pathname = "projects"),
  },
  {
    id: "posts",
    name: "Posts",
    keywords: "posts blog",
    section: "Pages",
    icon: <BiPen />,
    perform: () => (window.location.pathname = "posts"),
  },
];
export const actions = [
  {
    id: "posts",
    name: "Posts",
    shortcut: ["b", "p"],
    keywords: "where I post my stuffs",
    perform: () => (window.location.pathname = "posts"),
  },
  {
    id: "about",
    name: "about",
    shortcut: ["a"],
    keywords: "about",
    perform: () => (window.location.pathname = "about"),
  },
];

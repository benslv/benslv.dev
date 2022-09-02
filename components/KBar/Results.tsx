import React from "react";
import { KBarResults } from "kbar";
import { styled } from "~/stitches.config";

const Result = styled("div", {
  padding: "$1",
  display: "flex",
  alignItems: "center",
  columnGap: "$1",

  variants: {
    state: {
      active: {
        color: "$accent",
        backgroundColor: "$blue3",
        borderLeft: "4px solid $accent",
      },
      inactive: {
        color: "$text",
        backgroundColor: "$slate1",
        borderLeft: "4px solid $slate1",
      },
    },
  },

  defaultVariants: {
    state: "inactive",
  },
});

const SectionHeader = styled("div", {
  color: "$text",
  backgroundColor: "$slate1",

  fontSize: "$0",
  textTransform: "uppercase",

  padding: "calc(0.5 * $0) $0",
});

export const Results = ({ results }: { results: Array<string | object> }) => {
  return (
    <KBarResults
      items={results}
      onRender={({ item, active }) => {
        if (typeof item === "string") {
          return <SectionHeader>{item}</SectionHeader>;
        }
        return (
          <Result state={active ? "active" : "inactive"}>
            {item.icon}
            {item.name}
          </Result>
        );
      }}
    />
  );
};

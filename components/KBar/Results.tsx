import React from "react";
import { KBarResults } from "kbar";
import { styled } from "~/stitches.config";

const Result = styled("div", {
  padding: "$1",

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

  "& > .react-icons": {
    fontSize: "$2",
    verticalAlign: "middle",
    marginRight: "$0",
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
      onRender={({ item, active }) =>
        typeof item === "string" ? ( // Designates a section header
          <SectionHeader>{item}</SectionHeader>
        ) : (
          <Result state={active ? "active" : "inactive"}>
            {item.icon}
            {item.name}
          </Result>
        )
      }
    />
  );
};

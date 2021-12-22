import React from "react";
import { KBarAnimator, KBarPortal, KBarPositioner, KBarSearch, useMatches } from "kbar";
import { Results } from "./Results";
import { styled } from "~/stitches.config";

const Contents = styled("div", {
  boxShadow: "0 0 20px $colors$slate8",
  border: "1px solid $slate8",
  borderRadius: "$2",
  overflow: "hidden",

  minWidth: 400,
});

const Search = styled(KBarSearch, {
  border: "none",
  font: "inherit",

  color: "$heading",
  backgroundColor: "$slate3",

  padding: "$1",

  width: "100%",
});

export const KBar = () => {
  const { results } = useMatches();

  return (
    <KBarPortal>
      <KBarPositioner>
        <KBarAnimator>
          <Contents>
            <Search />
            <Results results={results} />
          </Contents>
        </KBarAnimator>
      </KBarPositioner>
    </KBarPortal>
  );
};

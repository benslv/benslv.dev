import React from "react";
import { KBarAnimator, KBarPortal, KBarPositioner, KBarSearch, useMatches } from "kbar";
import Results from "./Results";

export const KBar = () => {
  const { results } = useMatches();

  return (
    <KBarPortal>
      <KBarPositioner>
        <KBarAnimator>
          <KBarSearch />
          <Results results={results} />
        </KBarAnimator>
      </KBarPositioner>
    </KBarPortal>
  );
};

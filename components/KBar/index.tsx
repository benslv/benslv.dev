import React from "react";
import {
  KBarAnimator,
  KBarPortal,
  KBarPositioner,
  KBarResults,
  KBarSearch,
  useMatches,
} from "kbar";

export const KBar = () => {
  const { results } = useMatches();

  return (
    <KBarPortal>
      <KBarPositioner>
        <KBarAnimator>
          <KBarSearch />
          <KBarResults
            items={results}
            onRender={({ item, active }) =>
              typeof item === "string" ? (
                <div>{item}</div>
              ) : (
                <div
                  style={{
                    background: active ? "#eee" : "transparent",
                  }}>
                  {item.name}
                </div>
              )
            }
          />
        </KBarAnimator>
      </KBarPositioner>
    </KBarPortal>
  );
};

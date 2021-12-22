import React from "react";
import { KBarResults } from "kbar";

const Results = ({ results }) => {
  return (
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
  );
};

export default Results;

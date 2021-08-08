import React from "react";

interface TextProps {
  children: React.ReactNode;
}

export const Text = ({ children }: TextProps): JSX.Element => {
  return <p>{children}</p>;
};

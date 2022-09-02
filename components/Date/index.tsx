import React from "react";
import { parseISO, format } from "date-fns";
import { styled } from "~/stitches.config";

type DateProps = {
  dateString: string;
};

const Time = styled("time", {
  fontSize: "$0",
  marginBottom: "calc(0.5 * $0)",
  fontStyle: "italic",
});

export const Date = ({ dateString }: DateProps): JSX.Element => {
  const date = parseISO(dateString);

  return <Time dateTime={dateString}>{format(date, "do LLLL, yyyy")}</Time>;
};

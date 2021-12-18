import React from "react";
import { parseISO, format } from "date-fns";

type DateProps = {
  dateString: string;
};

export const Date = ({ dateString }: DateProps): JSX.Element => {
  const date = parseISO(dateString);

  return <time dateTime={dateString}>{format(date, "do LLLL, yyyy")}</time>;
};

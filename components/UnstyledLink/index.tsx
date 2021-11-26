import React from "react";
import Link from "next/link";

export interface UnstyledLinkProps {
  to: string;
  className?: string;
  children: React.ReactNode;
}

export const UnstyledLink = ({ to, className, children }: UnstyledLinkProps): JSX.Element => {
  const isInternal = /^\/(?!\/)/.test(to);

  if (isInternal) {
    return (
      <Link href={to}>
        <a className={className}>{children}</a>
      </Link>
    );
  }

  return (
    <a href={to} target="_blank" rel="noopener noreferrer" className={className}>
      {children}
    </a>
  );
};

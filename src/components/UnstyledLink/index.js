import React from "react";
import PropTypes from "prop-types";
import { Link } from "gatsby";

export const UnstyledLink = ({ to, children, className }) => {
  const isInternal = /^\/(?!\/)/.test(to);

  if (isInternal) {
    return (
      <Link to={to} className={className}>
        {children}
      </Link>
    );
  }

  return (
    <a href={to} target="_blank" rel="noopener noreferrer" className={className}>
      {children}
    </a>
  );
};

UnstyledLink.propTypes = {
  to: PropTypes.string.isRequired,
  children: PropTypes.node.isRequired,
  className: PropTypes.string,
};

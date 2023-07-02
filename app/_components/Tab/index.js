"use client"

import PropTypes from "prop-types";
import classnames from "classnames";

export default function Tab ({
  children,
  className = "",
  ...otherProps
}){
  return (
    <div
      className={classnames(
        "flex w-full before:content-[''] before:absolute before:w-full before:h-1 before:left-0 before:right-0 before:bottom-0",
        {[className]:className}
      )}
      {...otherProps}
    >
      {children}
    </div>
  );
};

Tab.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string,
};

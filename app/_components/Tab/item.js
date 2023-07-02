"use client"

import PropTypes from "prop-types";
import Link from "next/link";
import classnames from "classnames";

export default function TabItem({
  active,
  className,
  children,
  icon = null,
  onClick = () => {},
  activeClassName = "",
  ...otherProps
}) {
  let Parent = "button";

  if (activeClassName) {
    Parent = Link;
  }

  return (
    <Parent
      className={classnames(
        [
          "flex flex-1 justify-center border-blue-950 items-center p-4 cursor-pointer whitespace-nowrap border-b-2",
          { [className]: className },
        ],
        {
          " border-b-red-800": active,
        }
      )}
      onClick={onClick}
      {...otherProps}
    >
      {icon && <span className="mt-3">{icon}</span>}
      {children}
    </Parent>
  );
};

TabItem.propTypes = {
  active: PropTypes.bool,
  className: PropTypes.string,
  children: PropTypes.node,
  icon: PropTypes.oneOfType([PropTypes.string, PropTypes.elementType]),
  onClick: PropTypes.func,
  activeClassName: PropTypes.string,
};


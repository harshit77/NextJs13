import classnames from "classnames";
import PropTypes from "prop-types";

const FONT_FAMILY = {
  regular: "regular",
  medium: "medium",
  semibold: "semibold",
  bold:"bold"
};

const TEXT_TRANSFORM = {
  none: "none",
  capitalize: "capitalize",
  uppercase: "uppercase",
  lowercase: "lowercase",
};

const COMPONENTS = {
  h1: "h1",
  h2: "h2",
  h3: "h3",
  h4: "h4",
  h5: "h5",
  h6: "h6",
  body1: "body1",
  body2: "body2",
  body3: "body3",
};

const Typography = (
    {
      family = FONT_FAMILY.regular,
      component,
      children,
      textTransform,
      className,
      ...otherProps
    }
  ) => {
    const Component = [
      "body1",
      "body2",
      "body3",
    ].includes(component)
      ? "p"
      : COMPONENTS[component]
      ? component
      : "p";
    return (
      <Component
        className={classnames("font-normal",{
          "text-2xl": component === COMPONENTS.h1,
          "text-xl": component === COMPONENTS.h2,
          "text-lg": component === COMPONENTS.h3,
          "text-base": component === COMPONENTS.h4,
          "text-sm": component === COMPONENTS.h5,
          "text-xs": component === COMPONENTS.h6,
          "text-sm": component === COMPONENTS.body1,
          "text-base": component === COMPONENTS.body2,
          "text-lg": component === COMPONENTS.body3,
          "normal-case":
            textTransform === TEXT_TRANSFORM.none,
          "capitalize":
            textTransform === TEXT_TRANSFORM.capitalize,
          "uppercase":
            textTransform === TEXT_TRANSFORM.uppercase,
          "lowercase":
            textTransform === TEXT_TRANSFORM.lowercase,
          "font-medium": family === FONT_FAMILY.medium,
          "font-semibold": family === FONT_FAMILY.semibold,
          "font-bold": family === FONT_FAMILY.bold,
          [className]: className,
        })}
        {...otherProps}
      >
        {children}
      </Component>
    );
  }

Typography.propTypes = {
  family: PropTypes.oneOf(Object.values(FONT_FAMILY)),
  component: PropTypes.oneOf(Object.values(COMPONENTS)),
  textTransform: PropTypes.oneOf(Object.values(TEXT_TRANSFORM)),
  otherProps: PropTypes.object,
  className: PropTypes.string,
};

export default Typography;
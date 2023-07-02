
import Link from "next/link"
import classnames from "classnames";
import PropTypes from "prop-types";
import Typography from "./Typography";

const ICON_POSITION = {
  left: "left",
  right: "right",
};

const BUTTON_SIZE = {
  small: "small",
  medium: "medium",
  large: "large",
};

const BUTTON_VARIANT = {
  primary: "primary",
  secondary: "secondary",
  ternary:"ternary",
  text:"text",
  link:"link",
  bordered:"bordered"
};

const Button =
  (
    {
      type = "button",
      label,
      icon,
      iconPosition = ICON_POSITION.right,
      to,
      disabled = false,
      size = BUTTON_SIZE.small,
      fullWidth,
      className,
      onClick,
      variant = BUTTON_VARIANT.primary,
      ...otherProps
    }
  ) => {
    let RenderedComponent, elementSpecificProp;

    if (to) {
      RenderedComponent = Link;
      elementSpecificProp = {
        to,
      };
    } else {
      RenderedComponent = "button";
      elementSpecificProp = {
        type,
      };
    }
    return (
      <RenderedComponent
        className={classnames(
          "inline-flex items-center justify-center rounded-full cursor-pointer",
          {
            "bg-red-600 text-white": variant === BUTTON_VARIANT.primary,
            "bg-blue-600 text-white": variant === BUTTON_VARIANT.secondary,
            "bg-yellow-500 text-white": variant === BUTTON_VARIANT.ternary,
            "bg-transparent text-black": variant === BUTTON_VARIANT.text,
            "bg-transparent text-blue-300": variant === BUTTON_VARIANT.link,
            "bg-transparent border border-gray-600 text-black rounded-md shadow-sm":
              variant === BUTTON_VARIANT.bordered,
            "text-base px-4 py-1": size === BUTTON_SIZE.small,
            "text-lg px-6 py-1": size === BUTTON_SIZE.medium,
            "text-xl px-6 py-4": size === BUTTON_SIZE.large,
            "flex-row-reverse": iconPosition === ICON_POSITION.right && !!label,
            "w-full": fullWidth,
            disabled: disabled,
          },
          { [className]: className }
        )}
        disabled={disabled}
        onClick={onClick}
        {...elementSpecificProp}
        {...otherProps}
      >
        {icon && <div className="icon">{icon}</div>}
        {label && <Typography component="body1">{label}</Typography>}
      </RenderedComponent>
    );
  }

Button.propTypes = {
  type: PropTypes.string,
  label: PropTypes.string,
  icon: PropTypes.node,
  iconPosition: PropTypes.oneOf(Object.values(ICON_POSITION)),
  to: PropTypes.string,
  disabled: PropTypes.bool,
  size: PropTypes.oneOf(Object.values(BUTTON_SIZE)),
  fullWidth: PropTypes.bool,
  className: PropTypes.string,
  onClick: PropTypes.func,
  variant: PropTypes.oneOf(Object.values(BUTTON_VARIANT)),
};

export default Button;

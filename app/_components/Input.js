"use Client"

import classnames from "classnames";
import PropTypes from "prop-types";

const Input = 
  (
    {
      value,
      type = "text",
      onChange,
      prefix,
      suffix,
      placeholder,
      className,
      size = "medium",
      countryCode,
      onChangeCountryCode,
      separator,
      suffixOnClick=()=>{},
      ...otherProps
    },
  ) => {
    return (
      <div
        className={classnames(
          "w-9 rounded-md bg-gray-400 overflow-hidden relative flex",
          {
            "w-12": size === "medium",
            "w-16": size === "large",
            [className]: className,
          }
        )}
      >
        {prefix && (
          <div className="absolute flex justify-center items-center w-10 h-full">
            {prefix}
          </div>
        )}
        <input
          className={classnames(
            "w-full h-full bg-transparent appearance-none focus:outline-none p-2 text-xl text-gray-800",
            { "pl-10": prefix },
            { "pr-10": prefix },
            {"p-3":size==="medium"}
          )}
          value={value}
          type={type}
          onChange={onChange}
          placeholder={placeholder}
          {...otherProps}
        />
        {suffix && (
          <div
            className="absolute right-0 top-0 flex justify-center items-center w-10 h-full"
            onClick={suffixOnClick}
          >
            {suffix}
          </div>
        )}
      </div>
    );
  }

Input.propTypes = {
  type: PropTypes.string,
  onChange: PropTypes.func,
  prefix: PropTypes.node,
  suffix: PropTypes.node,
  placeholder: PropTypes.string,
  className: PropTypes.string,
  size: PropTypes.string,
};

export default Input;

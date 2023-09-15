import React from "react";
import PropTypes from "prop-types";

const shapes = { round: "rounded-[50px]", circle: "rounded-[50%]" };
const variants = {
  fill: {
    green_500: "bg-green-500 text-white-A700",
    light_green_500: "bg-light_green-500",
  },
};
const sizes = { xs: "p-3", sm: "py-[16px] px-[64px]" };

const Button = ({
  children,
  className = "",
  leftIcon,
  rightIcon,
  shape = "circle",
  size = "xs",
  variant = "fill",
  color = "light_green_500",
  ...restProps
}) => {
  return (
    <button
      className={`${className} ${(shape && shapes[shape]) || ""} ${
        (size && sizes[size]) || ""
      } ${(variant && variants[variant]?.[color]) || ""}`}
      {...restProps}
    >
      {!!leftIcon && leftIcon}
      {children}
      {!!rightIcon && rightIcon}
    </button>
  );
};

Button.propTypes = {
  className: PropTypes.string,
  children: PropTypes.node,
  shape: PropTypes.oneOf(["round", "circle"]),
  size: PropTypes.oneOf(["xs", "sm"]),
  variant: PropTypes.oneOf(["fill"]),
  color: PropTypes.oneOf(["green_500", "light_green_500"]),
};

export { Button };

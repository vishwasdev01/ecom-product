import React from "react";

const sizeClasses = {
  txtManropeRegular16WhiteA700: "font-manrope font-normal",
  txtManropeBold20: "font-bold font-manrope",
  txtManropeRegular20WhiteA700: "font-manrope font-normal",
  txtManropeSemiBold32: "font-manrope font-semibold",
  txtManropeSemiBold22: "font-manrope font-semibold",
  txtManropeRegular20: "font-manrope font-normal",
  txtManropeRegular16Bluegray700: "font-manrope font-normal",
  txtManropeSemiBold16: "font-manrope font-semibold",
  txtManropeRegular12: "font-manrope font-normal",
  txtManropeRegular24: "font-manrope font-normal",
  txtManropeMedium12: "font-manrope font-medium",
  txtManropeBold14: "font-bold font-manrope",
  txtManropeRegular48: "font-manrope font-normal",
  txtManropeRegular16: "font-manrope font-normal",
  txtManropeMedium18: "font-manrope font-medium",
  txtManropeRegular20BlueA400: "font-manrope font-normal",
};

const Text = ({ children, className = "", size, as, ...restProps }) => {
  const Component = as || "p";

  return (
    <Component
      className={`text-left ${className} ${size && sizeClasses[size]}`}
      {...restProps}
    >
      {children}
    </Component>
  );
};

export { Text };

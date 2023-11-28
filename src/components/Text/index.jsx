import React from "react";

const sizeClasses = {
  txtNeurialGroteskRegular14: "font-neurialgrotesk font-normal",
  txtNeurialGroteskRegular14WhiteA700: "font-neurialgrotesk font-normal",
  txtNeurialGroteskRegular1575: "font-neurialgrotesk font-normal",
  txtNeurialGroteskBold2048: "font-bold font-neurialgrotesk",
  txtNeurialGroteskRegular16: "font-neurialgrotesk font-normal",
  txtNeurialGroteskRegular14Gray300: "font-neurialgrotesk font-normal",
  txtNeurialGroteskBold28: "font-bold font-neurialgrotesk",
  txtNeurialGroteskLight335: "font-light font-neurialgrotesk",
  txtNeurialGroteskBold72: "font-bold font-neurialgrotesk",
  txtNeurialGroteskBold96: "font-bold font-neurialgrotesk",
  txtNeurialGroteskRegular24WhiteA700: "font-neurialgrotesk font-normal",
  txtNeurialGroteskMedium40: "font-medium font-neurialgrotesk",
  txtNeurialGroteskRegular20: "font-neurialgrotesk font-normal",
  txtNeurialGroteskRegular2237Bluegray90001: "font-neurialgrotesk font-normal",
  txtNeurialGroteskRegular20Gray700: "font-neurialgrotesk font-normal",
  txtNeurialGroteskRegular24Gray500: "font-neurialgrotesk font-normal",
  txtNeurialGroteskRegular20Gray400: "font-neurialgrotesk font-normal",
  txtNeurialGroteskRegular24: "font-neurialgrotesk font-normal",
  txtNeurialGroteskMedium14: "font-medium font-neurialgrotesk",
  txtNeurialGroteskRegular2237: "font-neurialgrotesk font-normal",
  txtNeurialGroteskBold72Black90001: "font-bold font-neurialgrotesk",
  txtNeurialGroteskBold40Black90001: "font-bold font-neurialgrotesk",
  txtNeurialGroteskMedium16: "font-medium font-neurialgrotesk",
  txtNeurialGroteskRegular24Black90087: "font-neurialgrotesk font-normal",
  txtNeurialGroteskMedium10: "font-medium font-neurialgrotesk",
  txtNeurialGroteskMedium16Gray700: "font-medium font-neurialgrotesk",
  txtNeurialGroteskMedium12: "font-medium font-neurialgrotesk",
  txtNeurialGroteskBold40Black900: "font-bold font-neurialgrotesk",
  txtNeurialGroteskMedium12Bluegray100: "font-medium font-neurialgrotesk",
  txtNeurialGroteskBold3827: "font-bold font-neurialgrotesk",
  txtNeurialGroteskBold32: "font-bold font-neurialgrotesk",
  txtNeurialGroteskMedium18: "font-medium font-neurialgrotesk",
  txtNeurialGroteskMedium12Teal40001: "font-medium font-neurialgrotesk",
  txtNeurialGroteskBold40: "font-bold font-neurialgrotesk",
  txtNeurialGroteskBold96LimeA200b2: "font-bold font-neurialgrotesk",
  txtNeurialGroteskMedium72: "font-medium font-neurialgrotesk",
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

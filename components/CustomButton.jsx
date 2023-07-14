import React from "react";

const CustomButton = ({ title, className, type}) => {
  return (
    <button
      className={className}
      type={type}
    >
      {title}
    </button>
  );
};

export default CustomButton;

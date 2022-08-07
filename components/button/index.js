import React from "react";

const Button = ({ bgColor, text, outline, textColor, action }) => {
  return (
    <button
      style={{
        backgroundColor: bgColor,
        borderRadius: "50px",
        width: "fit",
        padding: ".8rem 1rem",
        border: "2px solid",
        borderColor: `${outline || "transparent"}`,
        color: textColor,
      }}
      onClick={action}
    >
      {text}
    </button>
  );
};

export default Button;

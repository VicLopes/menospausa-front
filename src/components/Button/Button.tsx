import React from "react";
import { StyledButton } from "./Button.styles";

export type ButtonProps = {
  label: string;
  onClick: (args: unknown) => void;
  primary: boolean;
  buttonType?: "button" | "submit" | "reset";
};

const Button: React.FC<ButtonProps> = ({
  label,
  onClick,
  primary,
  buttonType,
}) => {
  return (
    <StyledButton
      type={buttonType ? buttonType : "button"}
      onClick={onClick}
      primary={primary}
    >
      {label}
    </StyledButton>
  );
};

export default Button;

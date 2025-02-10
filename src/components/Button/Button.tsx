import React from "react";
import { StyledButton } from "./Button.styles";

export type ButtonProps = {
  label: string;
  onClick: (args: unknown) => void;
  primary: boolean;
  fullWidth?: boolean;
};

const Button: React.FC<ButtonProps> = ({
  label,
  onClick,
  primary,
  fullWidth,
}) => {
  return (
    <StyledButton
      type="button"
      onClick={onClick}
      primary={primary}
      fullWidth={fullWidth}
    >
      {label}
    </StyledButton>
  );
};

export default Button;

import React from "react";
import { StyledButton } from "./Button.styles";

export type ButtonProps = {
  label: string;
  onClick: () => void;
  primary: boolean;
};

const Button: React.FC<ButtonProps> = ({ label, onClick, primary }) => {
  return (
    <StyledButton type="button" onClick={onClick} primary={primary}>
      {label}
    </StyledButton>
  );
};

export default Button;

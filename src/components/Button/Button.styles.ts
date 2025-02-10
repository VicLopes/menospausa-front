import styled from "styled-components";
import { ButtonProps } from "./Button";

type StyledButtonProps = Pick<ButtonProps, "primary" | "fullWidth">;

export const StyledButton = styled.button<StyledButtonProps>`
  width: ${({ fullWidth }) => (fullWidth ? "100%" : "112px")};
  font-size: 16px;
  font-weight: 300;
  height: 40px;
  border-radius: 24px;
  border: 0px solid #767676;
  background-color: ${({ primary }) =>
    primary ? "var(--background-primary)" : "var(--grayscale-secondary)"};
  color: ${({ primary }) => (primary ? "white" : "inherit")};
  cursor: pointer;
`;

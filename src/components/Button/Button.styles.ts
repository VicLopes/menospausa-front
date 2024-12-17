import styled from "styled-components";
import { ButtonProps } from "./Button";

type StyledButtonProps = Omit<ButtonProps, "label" | "onClick">;

export const StyledButton = styled.button<StyledButtonProps>`
  width: 112px;
  height: 40px;
  padding: 12px;
  border-radius: 8px;
  border: 1px solid #767676;
  background-color: ${({ primary }) =>
    primary ? "var(--background-secondary)" : "var(--grayscale-secondary)"};
`;

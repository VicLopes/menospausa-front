import styled from "styled-components";
import { ButtonProps } from "./Button";

type StyledButtonProps = Omit<ButtonProps, "label" | "onClick">;

export const StyledButton = styled.button<StyledButtonProps>`
  width: ${({ primary }) => (primary ? "100%" : "112px")};
  height: 40px;
  padding: 12px;
  border-radius: 24px;
  border: 0px solid #767676;
  background-color: ${({ primary }) =>
    primary ? "var(--background-secondary)" : "var(--grayscale-secondary)"};
  cursor: pointer;
`;

import styled from "styled-components";

type TextProps = {
  expanded: boolean;
};

export const AccordionContainer = styled.div`
  border-bottom: 2px solid var(--background-primary);
  display: flex;
  flex-direction: column;
  width: 60%;
`;

export const AccordionHeader = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  cursor: pointer;
  padding: 16px 24px;
`;

export const AccordionTitle = styled.h3`
  font-weight: 400;
  font-size: 24px;
  color: var(--background-primary);
`;

export const AccordionText = styled.div<TextProps>`
  display: ${({ expanded }) => (expanded ? "block" : "none")};
  padding: 0px 24px 16px 24px;
`;

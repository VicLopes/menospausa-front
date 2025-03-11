import React, { useState } from "react";
import {
  AccordionContainer,
  AccordionHeader,
  AccordionText,
  AccordionTitle,
} from "./Accordion.styles";
import Chevron from "../../assets/chevron.svg?react";

type AccordionProps = {
  title: string;
  children: React.ReactNode;
};

const Accordion: React.FC<AccordionProps> = ({ title, children }) => {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <AccordionContainer>
      <AccordionHeader onClick={() => setIsExpanded(!isExpanded)}>
        <AccordionTitle>{title}</AccordionTitle>
        <Chevron
          style={{ rotate: isExpanded ? "180deg" : "0deg", transition: "0.2s" }}
        />
      </AccordionHeader>
      <AccordionText expanded={isExpanded}>{children}</AccordionText>
    </AccordionContainer>
  );
};

export default Accordion;

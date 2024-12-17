import React from "react";
import {
  CardBody,
  CardWrapper,
  TitleText,
  DescriptionText,
} from "./InfoCard.styles";

type Props = {
  title: string;
  description: string;
};

const Card: React.FC<Props> = ({ title, description }) => {
  return (
    <CardWrapper>
      <CardBody>
        <TitleText>{title}</TitleText>
        <DescriptionText>{description}</DescriptionText>
      </CardBody>
    </CardWrapper>
  );
};

export default Card;

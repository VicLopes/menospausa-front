import React from "react";
import {
  CardBody,
  CardIcon,
  CardWrapper,
  DescriptionText,
  TitleText,
} from "./Card.styles";

type Props = {
  title: string;
  description: string;
  iconRef: string;
};

const Card: React.FC<Props> = ({ title, description, iconRef }) => {
  return (
    <CardWrapper>
      <CardIcon src={iconRef} alt={title} />
      <CardBody>
        <TitleText>{title}</TitleText>
        <DescriptionText>{description}</DescriptionText>
      </CardBody>
    </CardWrapper>
  );
};

export default Card;

import React from "react";
import {
  CardBody,
  CardIcon,
  CardWrapper,
  DescriptionText,
  TitleText,
} from "./Card.styles";
import { Button } from "../components";

type Props = {
  title: string;
  description: string;
  iconRef: string;
  buttonLabel: string;
  buttonOnClick?: () => void;
};

const Card: React.FC<Props> = ({
  title,
  description,
  iconRef,
  buttonLabel,
  buttonOnClick,
}) => {
  return (
    <CardWrapper>
      {iconRef && <CardIcon src={iconRef} alt={title} width="32" height="32" />}
      <CardBody>
        <TitleText>{title}</TitleText>
        <DescriptionText>{description}</DescriptionText>
        {buttonLabel && (
          <Button
            label={buttonLabel}
            onClick={buttonOnClick || (() => console.log("hi"))}
            primary={false}
          />
        )}
      </CardBody>
    </CardWrapper>
  );
};

export default Card;

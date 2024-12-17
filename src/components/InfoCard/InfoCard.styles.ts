import styled from "styled-components";

export const CardWrapper = styled.div`
  display: flex;
  flex-direction: row;
  box-sizing: border-box;
  padding: 24px;
  flex: 1 1 calc(33.33% - 48px);
  max-width: 33.33%;
`;

export const CardBody = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  gap: 16px;

  > button {
    margin-top: auto;
  }
`;

export const TitleText = styled.h3`
  color: #1e1e1e;
  font-weight: 600;
  font-size: 24px;
`;

export const DescriptionText = styled.p`
  color: #757575;
  font-weight: 400;
  font-size: 16px;
`;

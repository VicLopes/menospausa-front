import styled from "styled-components";

export const CardWrapper = styled.div`
  display: flex;
  flex-direction: row;
  border: 1px solid #d9d9d9;
  border-radius: 8px;
  width: calc(100% - 88px);
  padding: 24px;
`;

export const CardBody = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  gap: 16px;
  margin-left: 24px;

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

export const CardIcon = styled.img``;

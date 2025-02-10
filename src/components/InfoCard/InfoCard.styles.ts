import styled from "styled-components";

export const CardWrapper = styled.div`
  display: flex;
  flex-direction: row;
  box-sizing: border-box;
  padding: 32px;
  border-radius: 16px;
  flex: 1 1 calc(33.33% - 48px);
  max-width: 33.33%;
  background-color: var(--background-primary);
`;

export const CardBody = styled.div`
  display: flex;
  color: #fff;
  flex-direction: column;
  justify-content: flex-start;
  gap: 16px;

  > button {
    margin-top: auto;
  }
`;

export const TitleText = styled.h3`
  font-weight: 600;
  font-size: 24px;
`;

export const DescriptionText = styled.p`
  font-weight: 300;
  font-size: 16px;
`;

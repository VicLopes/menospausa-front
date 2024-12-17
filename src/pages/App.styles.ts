import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const Hero = styled(Container)`
  background-color: var(--background-primary);
  height: 452px;
`;

export const Title = styled.h1`
  font-size: 72px;
  font-weight: 700;
  color: #1e1e1e;
`;

export const Subtitle = styled.h2`
  font-size: 32px;
  font-weight: 400;
  color: #757575;
`;

export const CardContainer = styled(Container)`
  background-color: #ffffff;
  height: 841px;
  gap: 24px;
`;

export const InfoGridContainer = styled(Container)`
  background-color: var(--background-primary);
  padding: 20px 50px;
  flex-direction: row;
  flex-wrap: wrap;
  gap: 48px;
`;

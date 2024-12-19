import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const Hero = styled(Container)`
  background-color: var(--background-primary);
  height: 557px;
`;

export const Title = styled.h1`
  font-size: 48px;
  font-family: "Amiko", serif;
  color: var(--background-secondary);
`;

export const Subtitle = styled.h2`
  font-family: "Just Me Again Down Here", serif;
  font-size: 32px;
  font-weight: 400;
  color: white;
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

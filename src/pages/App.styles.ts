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

export const TitleContainer = styled(Container)`
  margin-top: 32px;
`;

export const Title = styled.h1`
  font-size: 48px;
  font-family: "Amiko", serif;
  color: var(--background-secondary);
`;

export const Subtitle = styled.h2`
  font-family: "Just Me Again Down Here", sans-serif;
  text-rendering: optimizeSpeed;
  font-size: 32px;
  color: white;
  margin-top: -24px;
`;

export const AboutUs = styled.div`
  display: flex;
`;

export const SectionHeader = styled.div``;

export const InfoGridContainer = styled(Container)`
  background-color: var(--background-primary);
  padding: 20px 50px;
  flex-direction: row;
  flex-wrap: wrap;
  gap: 48px;
`;

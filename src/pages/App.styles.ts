import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  > hr {
    width: 80%;
    color: var(--background-primary);
  }
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

export const AboutUs = styled(Container)`
  padding: 80px 0px;
  gap: 48px;
`;

export const AboutUsImages = styled(Container)`
  display: flex;
  flex-flow: row wrap;
  gap: 32px;
`;

export const FormContainer = styled(Container)`
  padding: 80px 0px;
  gap: 48px;
`;

export const SectionHeader = styled.section`
  display: flex;
  align-items: center;
  flex-direction: column;
  gap: 32px;
`;

export const SectionTitle = styled.h2`
  font-family: "Amiko", serif;
  font-weight: 700;
  font-size: 32px;
  color: var(--background-primary);
  text-transform: uppercase;
`;

export const SectionDescription = styled(Container)`
  font-size: 24px;
  font-weight: 300;
  text-align: center;
`;

export const ResourcesContainer = styled(Container)`
  padding: 80px 50px;
  background-color: #ffdded;
`;

export const InfoGrid = styled(Container)`
  margin-top: 32px;
  flex-direction: row;
  flex-wrap: wrap;
  gap: 48px;
`;

export const AccordionContainer = styled(Container)`
  padding: 80px 50px;
  gap: 48px;
`;

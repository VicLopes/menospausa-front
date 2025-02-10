import { InfoCard, Card, Navbar, Button, Form } from "../components/components";
import {
  Hero,
  InfoGridContainer,
  Title,
  Subtitle,
  AboutUs,
  SectionHeader,
  TitleContainer,
  SectionTitle,
  SectionDescription,
  AboutUsImages,
  FormContainer,
} from "./App.styles";
import MenoLogo from "../assets/logo.svg?react";
import HeartIcon from "../assets/heart.svg?react";
import helpIcon from "/Help.svg";

function App() {
  return (
    <>
      <Navbar />
      <Hero>
        <MenoLogo
          style={{ fill: "var(--background-secondary)" }}
          width={222}
          height={141}
        />
        <TitleContainer>
          <Title>MENOSPAUSA</Title>
          <Subtitle>seu site de autoajuda</Subtitle>
        </TitleContainer>
      </Hero>
      <AboutUs id="about-us">
        <SectionHeader>
          <HeartIcon />
          <SectionTitle>Sobre Nós</SectionTitle>
          <SectionDescription>
            <p>
              Nossa misão e objetivos, e a importância de falar sobre menopausa.
            </p>
            <p>Nossa equipe por trás do projeto e aqueles que o apoiam.</p>
          </SectionDescription>
        </SectionHeader>
        <AboutUsImages>
          <img src="/src/assets/img/img1.png" />
          <img src="/src/assets/img/img2.png" />
          <img src="/src/assets/img/img3.png" />
        </AboutUsImages>
        <Button
          label="Veja mais"
          primary
          onClick={() => console.log("about-us-placeholder")}
        />
        <hr />
      </AboutUs>
      <FormContainer id="form">
        <SectionHeader>
          <SectionTitle>Avalie seus Sintomas</SectionTitle>
          <SectionDescription>
            <p>Nosso formulário para verificação do estado da Menopausa.</p>
            <p>
              Insira suas informações e descubra como manter um estilo de vida
              saudável.
            </p>
          </SectionDescription>
        </SectionHeader>
        <Form />
      </FormContainer>
      <Card
        title="Tem dúvidas? Podemos lhe ajudar"
        description="Quer saber mais sobre a Menopausa? Não sabe quais os sintomas? Está procurando mais informções sobre tratamentos? Tudo isso e outras perguntas podem ser respondidas aqui"
        iconRef={helpIcon}
        buttonLabel="Leia mais"
      />
      <InfoGridContainer>
        <InfoCard
          title="Faça sua avaliação"
          description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc  condimentum scelerisque quam eu porta. Pellentesque purus est, pretium  quis arcu ut, dictum imperdiet turpis."
        />
        <InfoCard
          title="Informações Médicas"
          description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc  condimentum scelerisque quam eu porta. Pellentesque purus est, pretium  quis arcu ut, dictum imperdiet turpis."
        />
        <InfoCard
          title="Bem-estar e Saúde"
          description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc  condimentum scelerisque quam eu porta. Pellentesque purus est, pretium  quis arcu ut, dictum imperdiet turpis."
        />
        <InfoCard
          title="Comunidade"
          description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc  condimentum scelerisque quam eu porta. Pellentesque purus est, pretium  quis arcu ut, dictum imperdiet turpis."
        />
        <InfoCard
          title="Material de apoio"
          description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc  condimentum scelerisque quam eu porta. Pellentesque purus est, pretium  quis arcu ut, dictum imperdiet turpis."
        />
        <InfoCard
          title="Recursos adicionais"
          description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc  condimentum scelerisque quam eu porta. Pellentesque purus est, pretium  quis arcu ut, dictum imperdiet turpis."
        />
      </InfoGridContainer>
    </>
  );
}

export default App;

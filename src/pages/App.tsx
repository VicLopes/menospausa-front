import {
  InfoCard,
  Navbar,
  Button,
  Form,
  Accordion,
} from "../components/components";
import {
  Hero,
  InfoGrid,
  Title,
  Subtitle,
  AboutUs,
  SectionHeader,
  TitleContainer,
  SectionTitle,
  SectionDescription,
  ResourcesContainer,
  AboutUsImages,
  FormContainer,
  AccordionContainer,
} from "./App.styles";
import MenoLogo from "../assets/logo.svg?react";
import HeartIcon from "../assets/heart.svg?react";
import QuestionLogo from "../assets/question.svg?react";

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
      <ResourcesContainer id="resources">
        <SectionHeader>
          <SectionTitle>Recursos</SectionTitle>
        </SectionHeader>
        <InfoGrid>
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
        </InfoGrid>
      </ResourcesContainer>
      <AccordionContainer id="questions">
        <SectionHeader>
          <QuestionLogo />
          <SectionTitle>Tem Dúvidas?</SectionTitle>
          <SectionDescription>
            <p>
              Quer saber mais sobre a Menopausa? Não sabe quais os sintomas?
            </p>
            <p>Está procurando mais informações sobre tratamentos?</p>
            <p>Tudo isso e outras perguntas podem ser respondidas aqui.</p>
          </SectionDescription>
        </SectionHeader>
        <Accordion text="lipsum" title="titleText" />
        <hr />
      </AccordionContainer>
      <AccordionContainer>
        <SectionHeader>
          <SectionTitle>Os Principais Tipos de Menopausa</SectionTitle>
        </SectionHeader>
        <Accordion text="lipsum" title="titleText" />
        <hr />
      </AccordionContainer>
      <AccordionContainer>
        <SectionHeader>
          <SectionTitle>
            Relação Entre A Menopausa E Aparecimento de Doenças
          </SectionTitle>
        </SectionHeader>
        <Accordion text="lipsum" title="titleText" />
      </AccordionContainer>
    </>
  );
}

export default App;

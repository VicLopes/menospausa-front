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
          <Subtitle>Maisvida</Subtitle>
        </TitleContainer>
      </Hero>
      <AboutUs id="about-us">
        <SectionHeader>
          <SectionTitle>Sobre Nós</SectionTitle>
          <SectionDescription>
            <p>
              Nossa misão e objetivos, e a importância de falar sobre menopausa.
            </p>
            <p>Nossa equipe por trás do projeto e aqueles que o apoiam.</p>
          </SectionDescription>
        </SectionHeader>
        <AboutUsImages>
          <img src="../assets/img/img1.png" />
          <img src="../assets/img/img2.png" />
          <img src="../assets/img/img3.png" />
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
              Insira suas informações e descubra mais sobre o que você pode passar por, e quem pode ajudar.
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
            title="Avalie seus sintomas"
            description="Os tipos principais são: Natural, Induzida e Precoce. Verifique o tipo que você se encontra e entenda melhor como buscar acompanhamento médico"
          />
          <InfoCard
            title="Conhecendo o que é"
            description="O que é menopausa? O que é climatério? Como saber se estou na menopausa? O que acontece com os hormônios? Relação entre menpausa e  aparecimento de doenças"
          />
          <InfoCard
            title="Bem-estar"
            description="Alimentação com orientações nutricionais. Atividades físicas. Cuidados com a atividade sexual. Tratamentos e terapias. Cuidando da saúde mental"
          />
          <InfoCard
            title="Profissionais"
            description="A menopausa é uma fase natural da vida da mulher. Para garantir uma transição suave e saudável, contar com o apoio de profissionais especializados é fundamental"
          />
          <InfoCard
            title="Material de apoio"
            description="Mitos e verdades. Manuais. Fitoterápicos para Aliviar os Sintomas da Menopausa"
          />
          <InfoCard
            title="Recursos adicionais"
            description="Guias. Infográficos. Associações"
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
        <Accordion text="lipsum" title="O que é menopausa?" />
        <Accordion text="lipsum" title="O que é climatério?" />
        <Accordion text="lipsum" title="Quais são os sintomas mais comuns?" />
        <Accordion text="lipsum" title="O que acontece com os hormônios?" />
        <hr />
      </AccordionContainer>
      <AccordionContainer id="types">
        <SectionHeader>
          <SectionTitle>Os Principais Tipos de Menopausa</SectionTitle>
        </SectionHeader>
        <Accordion text="lipsum" title="titleText" />
        <hr />
      </AccordionContainer>
      <AccordionContainer  id="treatments">
        <SectionHeader>
          <SectionTitle>
            Tratamentos: Opções de tratamento médico e alternativo
          </SectionTitle>
        </SectionHeader>
        <Accordion text="lipsum" title="titleText" />
        <hr />
      </AccordionContainer>
      <AccordionContainer  id="fitoterapics">
        <SectionHeader>
          <SectionTitle>
            Fitoterápicos para aliviar os sintomas da menopausa: Uma abordagem natural
          </SectionTitle>
        </SectionHeader>
        <Accordion text="lipsum" title="titleText" />
        <hr />
      </AccordionContainer>
      <AccordionContainer  id="diseases">
        <SectionHeader>
          <SectionTitle>
            Relação Entre A Menopausa E Aparecimento de Doenças
          </SectionTitle>
        </SectionHeader>
        <Accordion text="lipsum" title="titleText" />
      </AccordionContainer>
      <AccordionContainer  id="nutrition">
        <SectionHeader>
          <SectionTitle>
            Alimentação equilibrada para a menopausa
          </SectionTitle>
        </SectionHeader>
        <Accordion text="lipsum" title="titleText" />
      </AccordionContainer>
      <AccordionContainer  id="physical">
        <SectionHeader>
          <SectionTitle>
            Atividades físicas mais recomendadas para mulheres na menopausa
          </SectionTitle>
        </SectionHeader>
        <Accordion text="lipsum" title="titleText" />
      </AccordionContainer>
      <AccordionContainer  id="sexual">
        <SectionHeader>
          <SectionTitle>
            Cuidados com a saúde sexual
          </SectionTitle>
        </SectionHeader>
        <Accordion text="lipsum" title="titleText" />
      </AccordionContainer>
      <AccordionContainer  id="mental">
        <SectionHeader>
          <SectionTitle>
            Cuidando da saúde mental e emocional
          </SectionTitle>
        </SectionHeader>
        <Accordion text="lipsum" title="titleText" />
      </AccordionContainer>
      <AccordionContainer  id="myths">
        <SectionHeader>
          <SectionTitle>
            Mitos vs. verdades
          </SectionTitle>
        </SectionHeader>
        <Accordion text="lipsum" title="titleText" />
      </AccordionContainer>
      <AccordionContainer  id="professionals">
        <SectionHeader>
          <SectionTitle>
            Profissionais especializados em menopausa
          </SectionTitle>
        </SectionHeader>
        <Accordion text="lipsum" title="titleText" />
      </AccordionContainer>
    </>
  );
}

export default App;

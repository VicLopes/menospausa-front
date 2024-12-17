import { Card } from "../components/components";
import { Hero, CardContainer, InfoGridContainer } from "./App.styles";
import helpIcon from "/Help.svg";
import infoIcon from "/Info.svg";
import listIcon from "/List.svg";

function App() {
  return (
    <>
      <Hero></Hero>
      <CardContainer>
        <Card
          title="Faça sua avaliação"
          description="Nosso formulário para avaliação da Menopausa. Insira suas informações e acesse informações importantes, além de descobrir sobre como manter um estilo de vida saudável"
          iconRef={listIcon}
          buttonLabel="Continue"
        />
        <Card
          title="Sobre nós"
          description="Nossa missão e objetivos, e a importância de falar sobre menopausa. Nossa equipe por trás do projeto e aqueles que o apoiam"
          iconRef={infoIcon}
          buttonLabel="Leia mais"
        />
        <Card
          title="Tem dúvidas? Podemos lhe ajudar"
          description="Quer saber mais sobre a Menopausa? Não sabe quais os sintomas? Está procurando mais informções sobre tratamentos? Tudo isso e outras perguntas podem ser respondidas aqui"
          iconRef={helpIcon}
          buttonLabel="Leia mais"
        />
      </CardContainer>
      <InfoGridContainer></InfoGridContainer>
    </>
  );
}

export default App;

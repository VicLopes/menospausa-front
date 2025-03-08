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
        <Accordion text="A menopausa é marcada pela ausência de menstruação por 12 meses consecutivos.
        Antes disso, a mulher passa por uma fase de transição chamada climatério, que pode incluir diversos sintomas."
         title="O que é menopausa?" />
        <Accordion text="No climatério há uma diminuição das funções ovarianas, fazendo com que os ciclos menstruais se tornem irregulares, até cessarem por completo.
         A menopausa ocorre, em média, aos 50 anos.
         O climatério tem início por volta dos 40 anos e se estende até os 65 anos."
          title="O que é climatério?" />
        <Accordion text="Os sintomas mais comuns são: Menstruação irregular, Ondas de calor, Alteração no sono, Oscilações de humor, Mudanças urogenitais."
         title="Quais são os sintomas mais comuns?" />
        <Accordion text="No climatério, os níveis de estrogênio e progesterona, hormônios femininos, diminuem de forma permanente.
         A chegada do climatério provoca irregularidades menstruais, hemorragias ou escassez no fluxo."
          title="O que acontece com os hormônios?" />
        <hr />
      </AccordionContainer>
      <AccordionContainer id="types">
        <SectionHeader>
          <SectionTitle>Os Principais Tipos de Menopausa</SectionTitle>
        </SectionHeader>
        <Accordion text="O que é: É o tipo mais comum, ocorrendo espontaneamente entre os 45 e 55 anos, devido à depleção natural dos óvulos nos ovários.
        Causas: Envelhecimento fisiológico dos ovários."
         title="Menopausa Natural" />
        <Accordion text="O que é: Ocorre precocemente devido a fatores externos, como cirurgias ou tratamentos médicos.
        Causas: Cirúrgica: remoção dos ovários (ooforectomia) por razões médicas; Tratamentos: Quimioterapia, radioterapia, ou outros tratamentos que danificam os ovários."
         title="Menopausa Induzida" />
        <Accordion text="O que é: Ocorre antes dos 40 anos, tanto de forma natural quanto induzida.
        Causas: Genética: Mutações genéticas podem levar à falência ovariana precoce. Autoimunes: Doenças autoimunes podem atacar os ovários.
        Iatrogênica: Causada por tratamentos médicos."
         title="Menopausa Precoce" />
        <hr />
      </AccordionContainer>
      <AccordionContainer  id="treatments">
        <SectionHeader>
          <SectionTitle>
            Tratamentos: Opções de tratamento médico e complementar
          </SectionTitle>
          <SectionDescription>
          <p>Terapia hormonal também conhecida como terapêutica hormonal de substituição (THS) e tratamento hormonal da menopausa (THM).</p> 
          É o tratamento que adiciona, bloqueia ou remove hormônios.
          Na menopausa, hormônios são administradas para ajustar níveis hormonais baixos e aliviar os fogachos e outros sintomas da menopausa.
          </SectionDescription>
        </SectionHeader>
        <Accordion text="Quando o tratamento estrogênico é liberado diretamente na vagina.
        É um tratamento estrogênico local e não é absorvido para o resto do corpo.
        Pode ser na forma de anel, creme ou pessário introduzido na vagina."
         title="Terapêutica estrogênica local" />
        <Accordion text="Disponível em comprimido, patch transdérmico, anel,
        gel ou crèmeneste tratamento doses mais elevadas de estrogênio/progestagênio são absorvidas em todo o corpo."
         title="Terapêutica hormonal sistêmica" />
        <Accordion text="Podem ser uma estratégia de cuidado para ajudar a aliviar os sintomas da menopausa.
        Algumas PICS que podem ser utilizadas para este fim são:
        Acupuntura, Fitoterapia, Hipnose, Aromaterapia, Moxabustão, Yoga, Meditação, Respiração guiada"
         title="Práticas Integrativas e Complementares (PICS)" />
        <hr />
      </AccordionContainer>
      <AccordionContainer  id="professionals">
        <SectionHeader>
          <SectionTitle>
            Profissionais especializados em menopausa
          </SectionTitle>
          <SectionDescription>
          <p>A menopausa é uma fase natural da vida da mulher, marcada por diversas mudanças hormonais e físicas. </p>
          Para garantir uma transição suave e saudável, contar com o apoio de profissionais especializados é fundamental.
          </SectionDescription>
          <SectionDescription>
          Quais são os principais profissionais que podem te ajudar durante a menopausa?
          </SectionDescription>
        </SectionHeader>
        <Accordion text="O ginecologista é o primeiro profissional que a maioria das mulheres consulta ao perceber os sintomas da menopausa.
        Ele é o especialista em saúde reprodutiva feminina e pode:
        Diagnosticar a menopausa: Através de exames clínicos e de laboratório,
        o ginecologista confirmará se você está passando pela menopausa e avaliará a intensidade dos sintomas.
        Prescrever tratamentos: Dependendo dos seus sintomas e condições de saúde,
        o ginecologista poderá indicar tratamentos como a terapia de reposição hormonal (TRH),
        medicamentos para aliviar as ondas de calor e outros tratamentos.
        Acompanhamento: O ginecologista realizará acompanhamentos regulares para monitorar sua saúde e ajustar o tratamento, se necessário."
         title="Ginecologista" />
        <Accordion text="O endocrinologista é especialista em hormônios. Ele pode ser consultado em casos mais complexos, como:
        Desequilíbrios hormonais: O endocrinologista pode ajudar a identificar e tratar desequilíbrios hormonais que podem estar causando sintomas mais intensos.
        Tratamento personalizado: Ele pode oferecer um tratamento mais personalizado, considerando seus outros problemas de saúde e histórico médico."
         title="Endocrinologista" />
        <Accordion text="Uma alimentação equilibrada é fundamental para o bem-estar durante a menopausa. O nutricionista pode te ajudar a:
        Planejar uma dieta: Ele irá elaborar um plano alimentar personalizado, considerando seus gostos e necessidades nutricionais.
        Controlar os sintomas: Uma dieta adequada pode ajudar a controlar sintomas como ondas de calor, insônia e alterações de humor.
        " title="Nutricionista" />
        <Accordion text="A fisioterapia pode ser muito benéfica para aliviar os sintomas da menopausa, como:
        Fortalecimento muscular: A fisioterapia pode ajudar a fortalecer os músculos do assoalho pélvico,
        melhorando a incontinência urinária e o prazer sexual.
        Alívio de dores: A fisioterapia pode aliviar dores nas articulações e nos músculos, comuns na menopausa."
         title="Fisioterapeuta" />
        <Accordion text="O fitoterapeuta é um profissional de saúde especializado no uso de plantas medicinais para tratar, prevenir ou aliviar doenças.
        Por meio de uma avaliação do paciente, considerando seu histórico clínico, sintomas e necessidades,
        ele indica o uso de remédios naturais à base de plantas e ervas medicinais que podem ser utilizadas para ajudar a aliviar os sintomas da menopausa de forma segura e com devido acompanhamento."
         title="Fitoterapeuta" />
        <Accordion text="As mudanças hormonais da menopausa podem afetar o humor e o bem-estar emocional. O psicólogo pode te ajudar a:
        Lidar com as emoções: A terapia pode te ajudar a lidar com as mudanças emocionais e a desenvolver estratégias para lidar com o estresse.
        Melhorar a qualidade de vida: O psicólogo pode te ensinar técnicas de relaxamento e meditação para melhorar sua qualidade de vida."
         title="Psicólogo" />
         <SectionDescription>
         Quando procurar ajuda? Se você está sentindo desconforto ou suas atividades diárias estão sendo prejudicadas pelos sintomas da menopausa, 
         procure um profissional de saúde. Quanto mais cedo iniciar o tratamento, maiores as chances de controlar os sintomas e ter uma melhor qualidade de vida. 
         </SectionDescription>
         <SectionDescription>
         Lembre-se: A menopausa é uma fase normal da vida, e com o acompanhamento adequado, você pode passar por ela de forma tranquila e saudável.
         </SectionDescription>
        <hr />
      </AccordionContainer>
      <AccordionContainer  id="fitoterapics">
        <SectionHeader>
          <SectionTitle>
            Fitoterápicos para aliviar os sintomas da menopausa: Uma abordagem natural
          </SectionTitle>
        </SectionHeader>
        <Accordion text="Diversos fitoterápicos demonstraram potencial para aliviar os sintomas da menopausa. Alguns dos mais utilizados são:
        Copo-de-leite (Actaea racemosa): É um dos fitoterápicos mais estudados para o tratamento dos sintomas da menopausa.
        Possui ação semelhante ao estrogênio, ajudando a reduzir fogachos, suores noturnos e irritabilidade.
        Soja: Rica em isoflavonas, substâncias com estrutura semelhante ao estrogênio, a soja pode ajudar a aliviar os sintomas vasomotores (fogachos e suores) e outros sintomas da menopausa.
        Trevo vermelho: Também rico em isoflavonas, o trevo vermelho pode ajudar a reduzir a frequência e a intensidade dos fogachos.
        Sálvia: Possui propriedades antioxidantes e anti-inflamatórias que podem ajudar a aliviar os sintomas da menopausa, como suores noturnos e irritabilidade.
        Ginseng: Ajuda a reduzir a fadiga e a melhorar a concentração, sintomas comuns na menopausa.
        Soja e seus derivados: A soja é uma das fontes mais ricas em isoflavonas, que são um tipo de fitoestrogênio.
        Crataegus (Espinheiro-alvar): Contém fitoestrogênios que podem ajudar a equilibrar os níveis hormonais.
        Cimicifuga (Ervilhas-de-são-cristóvão): Também conhecida como Erva-de-são-cristóvão, possui fitoestrógenos que podem ajudar a aliviar sintomas da menopausa.
        Vitex agnus-castus (Agnus castus): Conhecida por seus efeitos equilibradores hormonais.
        Angelica sinensis (Dong Quai): Contém fitoestrogênios e é usada tradicionalmente para equilibrar os hormônios.
        Tribulus terrestris (Tribulus): Possui fitoestrógenos e é usada em suplementos para a saúde hormonal.
        Brócolis: Contém fitoestrogênios que podem ajudar a equilibrar os níveis hormonais.
        Chá verde: Também possui fitoestrógenos que podem ter efeitos benéficos na saúde hormonal.
        Essas plantas podem ser encontradas em forma de suplementos ou consumidas diretamente através de alimentos e chás.
        No entanto, é sempre importante consultar um médico antes de iniciar qualquer suplementação, especialmente se houver
        histórico de câncer de mama ou outras condições hormonais.
        Existem alguns adaptógenos que podem ser considerados mais seguros para mulheres na menopausa com histórico de câncer de mama,
        embora sempre seja importante consultar um médico antes de iniciar qualquer suplementação.
        Alguns adaptógenos que podem ajudar a aliviar os sintomas da menopausa sem efeitos estrogênicos incluem:
        Adaptógenos Seguros
        Rhodiola rosea: Pode ajudar a reduzir a fadiga e melhorar o humor.
        Eleuthero (Ginseng siberiano): Pode ajudar a aumentar a resistência ao estresse.
        Ashwagandha: Conhecida por suas propriedades calmantes e equilibradoras.
        Schisandra chinensis: Pode ajudar a melhorar a resistência ao estresse e a função cognitiva."
         title="Principais Fitoterápicos Utilizados na Menopausa" />
        <Accordion text="Os fitoterápicos atuam de diversas formas para aliviar os sintomas da menopausa:
        Mimetizando a ação dos hormônios: Algumas substâncias presentes nos fitoterápicos possuem estrutura semelhante aos hormônios femininos,
        ajudando a equilibrar os níveis hormonais e a reduzir os sintomas.
        Aumentando a produção de neurotransmissores: Alguns fitoterápicos podem aumentar a produção de neurotransmissores como a serotonina e a dopamina, que estão relacionados ao humor e ao sono.
        Ação antioxidante e anti-inflamatória: Muitas plantas medicinais possuem propriedades antioxidantes e anti-inflamatórias,
        que ajudam a combater os radicais livres e a reduzir a inflamação, processos que podem contribuir para o desenvolvimento dos sintomas da menopausa."
         title="Como os Fitoterápicos atuam?" />
        <Accordion text="Alívio natural dos sintomas: Os fitoterápicos oferecem uma alternativa natural para o tratamento dos sintomas da menopausa,
        com menos efeitos colaterais em comparação com os tratamentos hormonais.
        Melhora da qualidade de vida: Ao aliviar os sintomas,
        os fitoterápicos podem melhorar significativamente a qualidade de vida das mulheres durante a menopausa.
        Prevenção de doenças crônicas: Algumas plantas medicinais possuem propriedades que podem ajudar a prevenir doenças crônicas,
        como doenças cardiovasculares e osteoporose."
         title="Benefícios dos Fitoterápicos" />
        <Accordion text="Consulta médica: É fundamental consultar um médico ou profissional de saúde antes de iniciar qualquer tratamento com fitoterápicos,
        pois eles podem interagir com outros medicamentos e causar efeitos colaterais.
        Qualidade dos produtos: Opte por produtos de marcas confiáveis e com registro na Anvisa,
        garantindo a qualidade e a segurança dos fitoterápicos.
        Paciência: Os resultados do tratamento com fitoterápicos podem levar algumas semanas para serem observados."
         title="Considerações Importantes" />
         <SectionDescription>
         Lembre-se: Os fitoterápicos não substituem o acompanhamento médico e devem ser utilizados como complemento ao tratamento convencional.
         </SectionDescription>
         <SectionDescription>
         Isenção de responsabilidade: As informações fornecidas neste texto têm caráter informativo e não substituem a consulta médica.
         </SectionDescription>
        <hr />
      </AccordionContainer>
      <AccordionContainer  id="diseases">
        <SectionHeader>
          <SectionTitle>
            Relação Entre A Menopausa E Aparecimento de Doenças
          </SectionTitle>
        </SectionHeader>
        <Accordion text="A diminuição da produção de estrogênio e progesterona durante a menopausa pode levar a uma maior resistência à insulina.
        Isso acontece porque esses hormônios ajudam a regular o metabolismo e a sensibilidade à insulina.
        Exame mais comum para diagnóstico: glicemia em jejum (sangue).
        Os valores de referência são:
        Normal: inferior a 99 mg/dL
        Pré-diabetes: entre 100 a 125mg/dL
        Diabetes: acima de 126 mg/dL"
         title="Sou diabética?" />
        <Accordion text="A menopausa pode causar uma redução do metabolismo, o que pode levar ao ganho de peso, especialmente na região abdominal.
        A gordura abdominal pode contribuir para a resistência à insulina.
        Através da estimativa do Índice de Massa Corporal (IMC). É feito por meio da divisão do peso (em kg) pela altura (em metros) ao quadrado.
        A classificação da obesidade no Brasil é feita com base no Índice de Massa Corporal (IMC), de acordo com o seguinte padrão:
        Abaixo de 18,5: Abaixo do peso
        Entre 18,5 e 24,9: Peso normal
        Entre 25 e 29,9: Sobrepeso
        Entre 30 e 34,9: Obesidade grau I
        Entre 35 e 39,9: Obesidade grau II
        Acima de 40: Obesidade grau III, também conhecida como obesidade mórbida"
         title="Como sei se estou obesa?" />
        <Accordion text="lipsum" title="Sou hipertensa?" />
        <Accordion text="A dislipidemia:  é uma condição que se caracteriza por níveis elevados de lipídios, ou seja, gorduras, no sangue.
        A  diminuição dos níveis de estrogênio está diretamente ligado a um aumento do colesterol.
        A diminuição da progesterona pode levar a um aumento do colesterol LDL (lipoproteína de baixa densidade), conhecido como colesterol ruim.
        A redução dos níveis de estrogênio também está relacionada a uma diminuição do colesterol HDL (lipoproteína de alta densidade),
        conhecido como colesterol bom.
        O diagnóstico é feito por meio de exames de sangue que medem a quantidade de lipídios na corrente sanguínea,
        como o colesterol total, triglicerídeos, HDL-C e LDL-C."
         title="Tenho dislipidemia?" />
        <Accordion text="lipsum" title="Osteoporose ou osteopenia?" />
        <Accordion text="lipsum" title="Tenho osteoporose?" />
        <hr />
      </AccordionContainer>
      <AccordionContainer  id="nutrition">
        <SectionHeader>
          <SectionTitle>
            Alimentação equilibrada para a menopausa
          </SectionTitle>
          <SectionDescription>
          Segundo a Sociedade Brasileira de Ginecologia e o Instituto Internacional de Menopausa, algumas orientações nutricionais são especialmente importantes:
          </SectionDescription>
        </SectionHeader>
        <Accordion text="
        Cálcio e Vitamina D: Essenciais para a saúde óssea, prevenindo a osteoporose, que é mais comum na menopausa. Fontes: leite e derivados, vegetais de folhas verdes escuras, leguminosas, peixes gordurosos e a exposição solar.
        Proteínas: Importantes para a manutenção da massa muscular, que tende a diminuir com a idade. Fontes: carnes magras, peixes, ovos, leguminosas, grãos integrais e derivados de leite.
        Carboidratos: Fornecem energia e devem ser prioritariamente complexos, presentes em frutas, legumes, verduras e grãos integrais."
         title="Macronutrientes Essenciais" />
        <Accordion text="
        Fitoestrogênios: Compostos encontrados em plantas que mimetizam o efeito do estrogênio no organismo, podendo aliviar alguns sintomas da menopausa. Fontes: soja, linhaça, grãos integrais, frutas vermelhas e legumes.
        Ômega-3: Ajuda a reduzir a inflamação e o risco de doenças cardiovasculares. Fontes: peixes gordurosos (salmão, sardinha), linhaça e chia.
        Fibras: Promovem a saciedade, regulam o intestino e ajudam a controlar os níveis de açúcar no sangue. Fontes: frutas, legumes, verduras e grãos integrais.
        Vitamina B12: Importante para a saúde do sistema nervoso. Fontes: carnes, peixes, ovos, leite e derivados."
         title="Micronutrientes e Outros Nutrientes" />
        <Accordion text="
        Dieta Mediterrânea: Rica em frutas, legumes, verduras, cereais integrais, azeite de oliva, peixes e leguminosas, é considerada uma das mais saudáveis e pode ajudar a prevenir diversas doenças.
        Alimentação Cardioprotetora: Prioriza alimentos que ajudam a reduzir o risco de doenças cardiovasculares, como frutas, legumes, verduras, grãos integrais, peixes e aves.
        Restrição Calórica: Manter um peso saudável é fundamental para prevenir diversas doenças, incluindo diabetes e doenças cardiovasculares"
         title="Padrões Alimentares Benéficos" />
        <Accordion text="
        Hidratação: Beber bastante água ao longo do dia é essencial para manter o organismo funcionando corretamente.
        Moderação no consumo de alimentos processados e bebidas alcoólicas: Esses alimentos são ricos em açúcares, sódio e gordura saturada, que podem prejudicar a saúde."
         title="Outros Cuidados" />
        <SectionDescription>
         É importante ressaltar que cada mulher é única e as necessidades nutricionais podem variar. Por isso, é fundamental consultar um nutricionista para elaborar um plano alimentar personalizado e adequado às suas necessidades e preferências.
        </SectionDescription>
        <hr />
      </AccordionContainer>
      <AccordionContainer  id="physical">
        <SectionHeader>
          <SectionTitle>
            Atividades físicas mais recomendadas para mulheres na menopausa
          </SectionTitle>
          <SectionDescription>
          <p>A atividade física é um pilar fundamental para a saúde durante a menopausa,</p>
          <p>auxiliando no alívio dos sintomas, na prevenção de doenças e na melhoria da qualidade de vida.</p>
          </SectionDescription>
          <SectionDescription>
          <p>Mas quais atividades são mais indicadas? Vamos explorar!</p>
          <p>A ciência aponta que os seguintes tipos de exercícios são especialmente benéficos para as mulheres nessa fase:</p>
          </SectionDescription>
        </SectionHeader>
        <Accordion text="
        Caminhada: Uma das atividades mais acessíveis e eficazes, a caminhada fortalece o coração, ajuda a controlar o peso e melhora a disposição.
        Natação: De baixo impacto, a natação trabalha todo o corpo, alivia as dores nas articulações e é excelente para a saúde cardiovascular.
        Ciclismo: Fortalece as pernas, melhora a resistência e pode ser praticado em diferentes intensidades."
         title="Exercícios Aeróbicos" />
        <Accordion text="
        Musculação: Essencial para fortalecer os ossos e prevenir a osteoporose, comum na menopausa.
        Pilates: Combina força, flexibilidade e alongamento, melhorando a postura e a consciência corporal.
        Yoga: Além de fortalecer os músculos, a yoga promove o relaxamento e o bem-estar mental."
         title="Treinamento de Força" />
        <Accordion text="
        Dança: Divertida e eficaz, a dança trabalha diversos grupos musculares e melhora a coordenação.
        Hidroginástica: De baixo impacto, a hidroginástica é ideal para quem busca um exercício mais suave, mas eficaz."
         title="Atividades de Impacto Moderado" />
        <Accordion text="
        Fortalecimento ósseo: Aumenta a densidade mineral óssea, prevenindo a osteoporose.
        Melhora da força muscular: Aumenta a força e a resistência muscular, prevenindo quedas e fraturas.
        Controle do peso: Auxilia na perda de peso e na manutenção do peso ideal.
        Redução do estresse: Libera endorfinas, hormônios que proporcionam bem-estar e reduzem o estresse.
        Melhora da qualidade do sono: A prática regular de exercícios contribui para um sono mais reparador.
        Proteção cardiovascular: Reduz o risco de doenças cardiovasculares."
         title="Por que essas atividades são tão importantes?" />
        <Accordion text="
        Inicie de forma gradual: Consulte um profissional de educação física para montar um programa de exercícios adequado às suas necessidades e condições físicas.
        Seja consistente: Pratique atividades físicas regularmente, pelo menos 30 minutos por dia, na maioria dos dias da semana.
        Varie as atividades: Alterne os tipos de exercícios para evitar a rotina e manter a motivação.
        Ouça seu corpo: Respeite seus limites e pare se sentir dor."
         title="Recomendações" />
        <SectionDescription>
          Lembre-se: A atividade física é um investimento na sua saúde e qualidade de vida!
        </SectionDescription>
        <hr />
      </AccordionContainer>
      <AccordionContainer  id="sexual">
        <SectionHeader>
          <SectionTitle>
            Cuidados com a saúde sexual
          </SectionTitle>
          <SectionDescription>
          <p>A menopausa traz diversas mudanças no corpo da mulher, e a vida sexual é uma das áreas que pode ser afetada.</p>
          <p>É importante entender que a sexualidade não tem fim com a menopausa,</p>
          <p>mas alguns cuidados especiais podem tornar a experiência mais prazerosa.</p>
          </SectionDescription>
        </SectionHeader>
        <Accordion text="
        Lubrificação: O ressecamento vaginal é um dos sintomas mais comuns da menopausa e pode causar desconforto durante a relação sexual. O uso de lubrificantes à base de água é altamente recomendado para reduzir o atrito e aumentar o prazer.
        Hidratação vaginal: Além dos lubrificantes, hidratantes vaginais podem ajudar a manter a umidade da região e aliviar a secura.
        Comunicação: É fundamental conversar com o parceiro sobre as mudanças que estão acontecendo no seu corpo e sobre suas necessidades. A comunicação aberta e honesta é a chave para uma vida sexual satisfatória.
        Exploração: A menopausa pode ser um momento para redescobrir a própria sexualidade e explorar novas formas de prazer. Experimentar diferentes posições, carícias e brinquedos sexuais pode tornar a relação sexual mais interessante e prazerosa.
        Cuidados com a higiene: Manter a higiene íntima é essencial para prevenir infecções e garantir o conforto durante a relação sexual.
        Acompanhamento médico: Consulte seu ginecologista para avaliar a necessidade de tratamentos hormonais ou outros recursos que possam auxiliar no alívio dos sintomas da menopausa e melhorar a vida sexual."
         title="Principais cuidados" />
        <Accordion text="
        Relaxamento: Tente criar um ambiente relaxante e propício para o prazer, livre de distrações e preocupações.
        Autocuidado: Cuide da sua saúde física e mental. Uma boa alimentação, prática de exercícios físicos e sono de qualidade contribuem para o bem-estar geral e para uma vida sexual mais satisfatória.
        Aceitação: Aceite as mudanças que ocorrem no seu corpo e não tenha vergonha de buscar ajuda.
        É importante lembrar que a menopausa não é uma doença, mas sim uma fase natural da vida da mulher. Com os cuidados adequados, é possível manter uma vida sexual ativa e prazerosa.
        Se você tiver alguma dúvida ou preocupação, não hesite em conversar com seu médico ou um profissional de saúde especializado em sexualidade."
         title="Outras dicas importantes" />
        <Accordion text="Tratamentos hormonais para a menopausa e seus efeitos na sexualidade.
        Terapias alternativas para aliviar os sintomas da menopausa.
        Como lidar com a diminuição do desejo sexual na menopausa.
        A importância do toque e da intimidade na menopausa."
         title="Possíveis tópicos para explorar" />
        <SectionDescription>
         Lembre-se: a sexualidade é um aspecto importante da qualidade de vida e merece ser cuidada em todas as fases da vida.
        </SectionDescription>
        <hr />
      </AccordionContainer>
      <AccordionContainer  id="mental">
        <SectionHeader>
          <SectionTitle>
            Cuidando da saúde mental e emocional
          </SectionTitle>
          <SectionDescription>
          A menopausa, além das mudanças físicas, traz consigo um conjunto de desafios emocionais que podem impactar significativamente a qualidade de vida da mulher. 
          A Sociedade Brasileira de Psiquiatria destaca a importância de cuidar da saúde mental nesse período, e oferece algumas orientações:
          </SectionDescription>
        </SectionHeader>
        <Accordion text="
        Oscilações Hormonais: As variações nos níveis de hormônios como o estrogênio e a progesterona podem desencadear uma série de sintomas emocionais, como irritabilidade, ansiedade, tristeza e dificuldade de concentração.
        Impacto na Autoestima: As mudanças corporais e a sensação de perda da fertilidade podem afetar a autoestima e a autoimagem da mulher."
         title="Entendendo as Alterações Hormonais e suas Consequências" />
        <Accordion text="
        Terapia: A psicoterapia pode ser uma ferramenta poderosa para lidar com as emoções, desenvolver estratégias de enfrentamento e melhorar a qualidade de vida.
        Grupos de Apoio: Compartilhar experiências com outras mulheres que estão passando pela mesma fase pode ser muito reconfortante e oferecer novas perspectivas.
        Atividades Relaxantes: Práticas como yoga, meditação e tai chi podem ajudar a reduzir o estresse e promover o relaxamento.
        Exercícios Físicos: A atividade física regular libera endorfinas, que são neurotransmissores que promovem o bem-estar e combatem a depressão.
        Alimentação Saudável: Uma dieta equilibrada fornece os nutrientes necessários para o bom funcionamento do organismo e pode contribuir para a melhoria do humor.
        Sono de Qualidade: Priorizar o sono é fundamental para a saúde mental. Estabeleça uma rotina relaxante antes de dormir e evite o uso de eletrônicos nas horas que antecedem o sono."
         title="Estratégias para Promover o Bem-Estar Emocional" />
        <Accordion text="
        Mudanças de Humor Intensas: Sentimentos de tristeza profunda, desânimo e apatia que persistem por longos períodos.
        Ansiedade Excessiva: Dificuldade em se concentrar, irritabilidade constante, insônia e preocupações excessivas.
        Isolamento Social: Evitar contato com amigos e familiares, perdendo o interesse em atividades que antes eram prazerosas.
        Pensamentos Negativos: Dificuldade em encontrar prazer nas coisas, pensamentos pessimistas e ideias de inutilidade."
         title="Reconhecendo os Sinais de Alerta" />
        <Accordion text="Se você estiver enfrentando dificuldades para lidar com as emoções, sentir-se sobrecarregada ou perceber que os sintomas estão interferindo na sua vida, não hesite em procurar ajuda de um profissional de saúde mental. Um psiquiatra ou psicólogo poderá oferecer o tratamento adequado e ajudá-la a superar esse momento." title="Quando Procurar Ajuda Profissional?" />
        <SectionDescription>
         Lembre-se: A menopausa é uma fase natural da vida, e com as estratégias corretas, é possível vivenciá-la de forma mais tranquila e saudável.
        </SectionDescription>
        <SectionDescription>
         Para mais informações, consulte um profissional de saúde.
        </SectionDescription>
        <hr />
      </AccordionContainer>
      <AccordionContainer  id="myths">
        <SectionHeader>
          <SectionTitle>
            Mitos vs. verdades
          </SectionTitle>
          <SectionDescription>
          Mitos sobre a Menopausa e a Verdade por trás deles
          </SectionDescription>
          <SectionDescription>
          <p>A menopausa, um processo natural na vida da mulher,</p>
          <p>é cercada por diversos mitos que podem gerar ansiedade e desinformação.</p>
          <p>Vamos desmistificar alguns dos mais comuns e apresentar a visão da literatura científica:</p>
          </SectionDescription>
        </SectionHeader>
        <Accordion text="Verdade: A menopausa é uma fase da vida, não uma doença.
        É a transição natural do período reprodutivo para o não reprodutivo, marcada pela cessação dos ciclos menstruais."
         title="Mito 1: A menopausa é uma doença" />
        <Accordion text="Verdade: A menopausa coincide com o processo natural de envelhecimento, mas não o acelera.
        As mudanças observadas nessa fase estão relacionadas à diminuição dos hormônios sexuais e não à idade em si."
         title="Mito 2: A menopausa causa envelhecimento precoce" />
        <Accordion text="Verdade: Os sintomas da menopausa variam muito de mulher para mulher, e algumas podem não apresentar nenhum sintoma significativo.
        Os mais comuns incluem ondas de calor, suores noturnos, alterações de humor, dificuldade para dormir e secura vaginal."
         title="Mito 3: Todas as mulheres experimentam os mesmos sintomas da menopausa" />
        <Accordion text="Verdade: A reposição hormonal (RH) pode ser uma opção para aliviar alguns sintomas, mas não é indicada para todas as mulheres e apresenta riscos.
        Existem outras alternativas, como tratamentos naturais, mudanças no estilo de vida e terapias não hormonais."
         title="Mito 4: A reposição hormonal é a única solução para os sintomas da menopausa" />
        <Accordion text="Verdade: A libido pode diminuir devido a fatores físicos e emocionais, mas não é uma regra.
        A sexualidade é um aspecto multifatorial e pode ser influenciada por diversos fatores, como a relação com o parceiro, a autoestima e a saúde em geral."
         title="Mito 5: A libido diminui drasticamente na menopausa" />
        <Accordion text="Verdade: Embora as alterações hormonais possam contribuir para alterações de humor, a menopausa não causa necessariamente depressão.
        A depressão é uma doença complexa com diversas causas, e o tratamento deve ser individualizado."
         title="Mito 6: A menopausa causa depressão" />
        <Accordion text="Verdade: As flutuações hormonais podem causar irritabilidade, mas nem todas as mulheres experimentam esse sintoma.
        É importante lembrar que a irritabilidade pode ter outras causas, como estresse, cansaço e problemas pessoais."
         title="Mito 7: A menopausa torna as mulheres irritáveis" />
        <Accordion text="A literatura científica sobre a menopausa é vasta e aborda diversos aspectos dessa fase da vida.
        Estudos clínicos, revisões sistemáticas e metanálises ajudam a desmistificar crenças populares e a fornecer informações precisas sobre os sintomas,
        tratamentos e qualidade de vida das mulheres na menopausa. É importante ressaltar que cada mulher é única e a experiência da menopausa pode variar.
        O acompanhamento médico regular é fundamental para identificar os sintomas,
        avaliar os riscos e benefícios dos tratamentos disponíveis e garantir uma melhor qualidade de vida durante essa fase.
        Para mais informações sobre a menopausa, consulte fontes confiáveis como:
        Sociedade Brasileira de Ginecologia e Obstetrícia (SOGESP): www.sogesp.org.br
        Ministério da Saúde: www.saude.gov.br
        Artigos científicos indexados em bases de dados como PubMed e SciELO"
         title="Como a literatura científica elucida esses mitos?" />
      </AccordionContainer>
    </>
  );
}

export default App;

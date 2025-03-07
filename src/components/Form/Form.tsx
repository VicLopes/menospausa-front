import React, { useState } from "react";
import {
  FormField,
  FormFieldInput,
  FormFieldLabel,
  FormWrapper,
  RadioContainer,
  RadioInputContainer,
} from "./Form.styles";
import { Button } from "../components";

const Form: React.FC = () => {
  const [formData, setFormData] = useState({
    heatWaves: 0,
    paresthesia: 0,
    insomnia: 0,
    nervousness: 0,
    depressiveness: 0,
    fatigue: 0,
    jointNmusclePain: 0,
    cephalalgia: 0,
    palpitations: 0,
    tinnitus: 0
  });

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const onSubmit = () => {
    // TBD
    console.log("Form submitted:", formData);
    console.log(
      "ta em risco?",
      Number(formData.heatWaves) + Number(formData.paresthesia)
    );

    if (Number(formData.heatWaves) + Number(formData.paresthesia) + Number(formData.insomnia) + Number(formData.nervousness)
       + Number(formData.depressiveness) + Number(formData.fatigue) + Number(formData.jointNmusclePain) + Number(formData.cephalalgia)
       + Number(formData.palpitations) + Number(formData.tinnitus) <= 19) {
      window.location.hash = "#questions";
    }
    else if (Number(formData.heatWaves) + Number(formData.paresthesia) + Number(formData.insomnia) + Number(formData.nervousness)
      + Number(formData.depressiveness) + Number(formData.fatigue) + Number(formData.jointNmusclePain) + Number(formData.cephalalgia)
      + Number(formData.palpitations) + Number(formData.tinnitus) <= 35) {
     window.location.hash = "#fitoterapics";
    }
    else if (Number(formData.heatWaves) + Number(formData.paresthesia) + Number(formData.insomnia) + Number(formData.nervousness)
      + Number(formData.depressiveness) + Number(formData.fatigue) + Number(formData.jointNmusclePain) + Number(formData.cephalalgia)
      + Number(formData.palpitations) + Number(formData.tinnitus) > 35) {
     window.location.hash = "#professionals";
    }
  };

  const handleSubmitClick = () => {
    onSubmit();
  };

  return (
    <FormWrapper>
      <FormField>
        <FormFieldLabel centered>Está sentindo ondas de calor?</FormFieldLabel>
        <RadioContainer>
          <RadioInputContainer>
            <FormFieldInput
              type="radio"
              name="heatWaves"
              id="heatWavesLight"
              value={4}
              checked={Number(formData.heatWaves) === 4}
              onChange={handleInputChange}
            />
            <FormFieldLabel htmlFor="heatWavesLight">Leves</FormFieldLabel>
          </RadioInputContainer>
          <RadioInputContainer>
            <FormFieldInput
              type="radio"
              name="heatWaves"
              id="heatWavesMedium"
              value={8}
              checked={Number(formData.heatWaves) === 8}
              onChange={handleInputChange}
            />
            <FormFieldLabel htmlFor="heatWavesMedium">Moderadas</FormFieldLabel>
          </RadioInputContainer>
          <RadioInputContainer>
            <FormFieldInput
              type="radio"
              name="heatWaves"
              id="heatWavesHeavy"
              value={12}
              checked={Number(formData.heatWaves) === 12}
              onChange={handleInputChange}
            />
            <FormFieldLabel htmlFor="heatWavesHeavy">Intensas</FormFieldLabel>
          </RadioInputContainer>
        </RadioContainer>
      </FormField>
      <FormField>
        <FormFieldLabel centered>Está sentindo parestesia (formigamento, dormência ou coceira)?</FormFieldLabel>
        <RadioContainer>
          <RadioInputContainer>
            <FormFieldInput
              type="radio"
              name="paresthesia"
              id="paresthesiaLight"
              value={2}
              checked={Number(formData.paresthesia) === 2}
              onChange={handleInputChange}
            />
            <FormFieldLabel htmlFor="paresthesiaLight">Leve</FormFieldLabel>
          </RadioInputContainer>
          <RadioInputContainer>
            <FormFieldInput
              type="radio"
              name="paresthesia"
              id="paresthesiaMedium"
              value={4}
              checked={Number(formData.paresthesia) === 4}
              onChange={handleInputChange}
            />
            <FormFieldLabel htmlFor="paresthesiaMedium">Moderada</FormFieldLabel>
          </RadioInputContainer>
          <RadioInputContainer>
            <FormFieldInput
              type="radio"
              name="paresthesia"
              id="paresthesiaHeavy"
              value={6}
              checked={Number(formData.paresthesia) === 6}
              onChange={handleInputChange}
            />
            <FormFieldLabel htmlFor="paresthesiaHeavy">Intensa</FormFieldLabel>
          </RadioInputContainer>
        </RadioContainer>
      </FormField>
      <FormField>
        <FormFieldLabel centered>Está sentindo insônia?</FormFieldLabel>
        <RadioContainer>
          <RadioInputContainer>
            <FormFieldInput
              type="radio"
              name="insomnia"
              id="insomniaLight"
              value={2}
              checked={Number(formData.insomnia) === 2}
              onChange={handleInputChange}
            />
            <FormFieldLabel htmlFor="insomniaLight">Leve</FormFieldLabel>
          </RadioInputContainer>
          <RadioInputContainer>
            <FormFieldInput
              type="radio"
              name="insomnia"
              id="insomniaMedium"
              value={4}
              checked={Number(formData.insomnia) === 4}
              onChange={handleInputChange}
            />
            <FormFieldLabel htmlFor="insomniaMedium">Moderada</FormFieldLabel>
          </RadioInputContainer>
          <RadioInputContainer>
            <FormFieldInput
              type="radio"
              name="insomnia"
              id="insomniaHeavy"
              value={6}
              checked={Number(formData.insomnia) === 6}
              onChange={handleInputChange}
            />
            <FormFieldLabel htmlFor="insomniaHeavy">Intensa</FormFieldLabel>
          </RadioInputContainer>
        </RadioContainer>
      </FormField>
      <FormField>
        <FormFieldLabel centered>Está sentindo nervosismo?</FormFieldLabel>
        <RadioContainer>
          <RadioInputContainer>
            <FormFieldInput
              type="radio"
              name="nervousness"
              id="nervousnessLight"
              value={2}
              checked={Number(formData.nervousness) === 2}
              onChange={handleInputChange}
            />
            <FormFieldLabel htmlFor="nervousnessLight">Leve</FormFieldLabel>
          </RadioInputContainer>
          <RadioInputContainer>
            <FormFieldInput
              type="radio"
              name="nervousness"
              id="nervousnessMedium"
              value={4}
              checked={Number(formData.nervousness) === 4}
              onChange={handleInputChange}
            />
            <FormFieldLabel htmlFor="nervousnessMedium">Moderado</FormFieldLabel>
          </RadioInputContainer>
          <RadioInputContainer>
            <FormFieldInput
              type="radio"
              name="nervousness"
              id="nervousnessHeavy"
              value={6}
              checked={Number(formData.nervousness) === 6}
              onChange={handleInputChange}
            />
            <FormFieldLabel htmlFor="nervousnessHeavy">Intenso</FormFieldLabel>
          </RadioInputContainer>
        </RadioContainer>
      </FormField>
      <FormField>
        <FormFieldLabel centered>Está se sentindo deprimida?</FormFieldLabel>
        <RadioContainer>
          <RadioInputContainer>
            <FormFieldInput
              type="radio"
              name="depressiveness"
              id="depressivenessLight"
              value={1}
              checked={Number(formData.depressiveness) === 1}
              onChange={handleInputChange}
            />
            <FormFieldLabel htmlFor="depressivenessLight">Leve</FormFieldLabel>
          </RadioInputContainer>
          <RadioInputContainer>
            <FormFieldInput
              type="radio"
              name="depressiveness"
              id="depressivenessMedium"
              value={2}
              checked={Number(formData.depressiveness) === 2}
              onChange={handleInputChange}
            />
            <FormFieldLabel htmlFor="depressivenessMedium">Moderada</FormFieldLabel>
          </RadioInputContainer>
          <RadioInputContainer>
            <FormFieldInput
              type="radio"
              name="depressiveness"
              id="depressivenessHeavy"
              value={3}
              checked={Number(formData.depressiveness) === 3}
              onChange={handleInputChange}
            />
            <FormFieldLabel htmlFor="depressivenessHeavy">Intensa</FormFieldLabel>
          </RadioInputContainer>
        </RadioContainer>
      </FormField>
      <FormField>
        <FormFieldLabel centered>Está sentindo fadiga?</FormFieldLabel>
        <RadioContainer>
          <RadioInputContainer>
            <FormFieldInput
              type="radio"
              name="fatigue"
              id="fatigueLight"
              value={1}
              checked={Number(formData.fatigue) === 1}
              onChange={handleInputChange}
            />
            <FormFieldLabel htmlFor="fatigueLight">Leve</FormFieldLabel>
          </RadioInputContainer>
          <RadioInputContainer>
            <FormFieldInput
              type="radio"
              name="fatigue"
              id="fatigueMedium"
              value={2}
              checked={Number(formData.fatigue) === 2}
              onChange={handleInputChange}
            />
            <FormFieldLabel htmlFor="fatigueMedium">Moderada</FormFieldLabel>
          </RadioInputContainer>
          <RadioInputContainer>
            <FormFieldInput
              type="radio"
              name="fatigue"
              id="fatigueHeavy"
              value={3}
              checked={Number(formData.fatigue) === 3}
              onChange={handleInputChange}
            />
            <FormFieldLabel htmlFor="fatigueHeavy">Intensa</FormFieldLabel>
          </RadioInputContainer>
        </RadioContainer>
      </FormField>
      <FormField>
        <FormFieldLabel centered>Está sentindo artralgia/mialgia (dor nas articulações/músculos)?</FormFieldLabel>
        <RadioContainer>
          <RadioInputContainer>
            <FormFieldInput
              type="radio"
              name="jointNmusclePain"
              id="jointNmusclePainLight"
              value={1}
              checked={Number(formData.jointNmusclePain) === 1}
              onChange={handleInputChange}
            />
            <FormFieldLabel htmlFor="jointNmusclePainLight">Leve</FormFieldLabel>
          </RadioInputContainer>
          <RadioInputContainer>
            <FormFieldInput
              type="radio"
              name="jointNmusclePain"
              id="jointNmusclePainMedium"
              value={2}
              checked={Number(formData.jointNmusclePain) === 2}
              onChange={handleInputChange}
            />
            <FormFieldLabel htmlFor="jointNmusclePainMedium">Moderada</FormFieldLabel>
          </RadioInputContainer>
          <RadioInputContainer>
            <FormFieldInput
              type="radio"
              name="jointNmusclePain"
              id="jointNmusclePainHeavy"
              value={3}
              checked={Number(formData.jointNmusclePain) === 3}
              onChange={handleInputChange}
            />
            <FormFieldLabel htmlFor="jointNmusclePainHeavy">Intensa</FormFieldLabel>
          </RadioInputContainer>
        </RadioContainer>
      </FormField>
      <FormField>
        <FormFieldLabel centered>Está sentindo cefaléia (dor de cabeça)?</FormFieldLabel>
        <RadioContainer>
          <RadioInputContainer>
            <FormFieldInput
              type="radio"
              name="cephalalgia"
              id="cephalalgiaLight"
              value={1}
              checked={Number(formData.cephalalgia) === 1}
              onChange={handleInputChange}
            />
            <FormFieldLabel htmlFor="cephalalgiaLight">Leve</FormFieldLabel>
          </RadioInputContainer>
          <RadioInputContainer>
            <FormFieldInput
              type="radio"
              name="cephalalgia"
              id="cephalalgiaMedium"
              value={2}
              checked={Number(formData.cephalalgia) === 2}
              onChange={handleInputChange}
            />
            <FormFieldLabel htmlFor="cephalalgiaMedium">Moderada</FormFieldLabel>
          </RadioInputContainer>
          <RadioInputContainer>
            <FormFieldInput
              type="radio"
              name="cephalalgia"
              id="cephalalgiaHeavy"
              value={3}
              checked={Number(formData.cephalalgia) === 3}
              onChange={handleInputChange}
            />
            <FormFieldLabel htmlFor="cephalalgiaHeavy">Intensa</FormFieldLabel>
          </RadioInputContainer>
        </RadioContainer>
      </FormField>
      <FormField>
        <FormFieldLabel centered>Está sentindo palpitações?</FormFieldLabel>
        <RadioContainer>
          <RadioInputContainer>
            <FormFieldInput
              type="radio"
              name="palpitations"
              id="palpitationsLight"
              value={1}
              checked={Number(formData.palpitations) === 1}
              onChange={handleInputChange}
            />
            <FormFieldLabel htmlFor="palpitationsLight">Leve</FormFieldLabel>
          </RadioInputContainer>
          <RadioInputContainer>
            <FormFieldInput
              type="radio"
              name="palpitations"
              id="palpitationsMedium"
              value={2}
              checked={Number(formData.palpitations) === 2}
              onChange={handleInputChange}
            />
            <FormFieldLabel htmlFor="palpitationsMedium">Moderadas</FormFieldLabel>
          </RadioInputContainer>
          <RadioInputContainer>
            <FormFieldInput
              type="radio"
              name="palpitations"
              id="palpitationsHeavy"
              value={3}
              checked={Number(formData.palpitations) === 3}
              onChange={handleInputChange}
            />
            <FormFieldLabel htmlFor="palpitationsHeavy">Intensas</FormFieldLabel>
          </RadioInputContainer>
        </RadioContainer>
      </FormField>
      <FormField>
        <FormFieldLabel centered>Está sentindo zumbido no ouvido?</FormFieldLabel>
        <RadioContainer>
          <RadioInputContainer>
            <FormFieldInput
              type="radio"
              name="tinnitus"
              id="tinnitusLight"
              value={1}
              checked={Number(formData.tinnitus) === 1}
              onChange={handleInputChange}
            />
            <FormFieldLabel htmlFor="tinnitusLight">Leve</FormFieldLabel>
          </RadioInputContainer>
          <RadioInputContainer>
            <FormFieldInput
              type="radio"
              name="tinnitus"
              id="tinnitusMedium"
              value={2}
              checked={Number(formData.tinnitus) === 2}
              onChange={handleInputChange}
            />
            <FormFieldLabel htmlFor="tinnitusMedium">Moderada</FormFieldLabel>
          </RadioInputContainer>
          <RadioInputContainer>
            <FormFieldInput
              type="radio"
              name="tinnitus"
              id="tinnitusHeavy"
              value={3}
              checked={Number(formData.tinnitus) === 3}
              onChange={handleInputChange}
            />
            <FormFieldLabel htmlFor="tinnitusHeavy">Intensa</FormFieldLabel>
          </RadioInputContainer>
        </RadioContainer>
      </FormField>
      <FormField>
        <Button label="Envie" onClick={handleSubmitClick} primary />
      </FormField>
    </FormWrapper>
  );
};

export default Form;

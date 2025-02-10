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
    name: "",
    dateOfBirth: "",
    menarchAge: "",
    menopauseAge: "",
    naturalMenopause: "",
    hormonalReposition: "",
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
  };

  const handleSubmitClick = () => {
    onSubmit();
  };

  return (
    <FormWrapper>
      <FormField>
        <FormFieldLabel>Nome</FormFieldLabel>
        <FormFieldInput
          type="text"
          placeholder="Maria da Silva"
          name="name"
          value={formData.name}
          onChange={handleInputChange}
        />
      </FormField>
      <FormField>
        <FormFieldLabel>Data de Nascimento</FormFieldLabel>
        <FormFieldInput
          type="date"
          placeholder="Data"
          name="dateOfBirth"
          onChange={handleInputChange}
          value={formData.dateOfBirth}
        />
      </FormField>
      <FormField>
        <FormFieldLabel>Idade da Menarca (Primeira Menstruação)</FormFieldLabel>
        <FormFieldInput
          type="number"
          placeholder="15"
          name="menarchAge"
          onChange={handleInputChange}
          value={formData.menarchAge}
        />
      </FormField>
      <FormField>
        <FormFieldLabel>Idade da Menopausa</FormFieldLabel>
        <FormFieldInput
          type="number"
          placeholder="50"
          name="menopauseAge"
          onChange={handleInputChange}
          value={formData.menopauseAge}
        />
      </FormField>
      <FormField>
        <FormFieldLabel centered>Menopausa foi natural?</FormFieldLabel>
        <RadioContainer>
          <RadioInputContainer>
            <FormFieldInput
              type="radio"
              name="naturalMenopause"
              value="no"
              id="naturalMenopauseNo"
              checked={formData.naturalMenopause === "no"}
              onChange={handleInputChange}
            />
            <FormFieldLabel htmlFor="naturalMenopauseNo">Não</FormFieldLabel>
          </RadioInputContainer>
          <RadioInputContainer>
            <FormFieldInput
              type="radio"
              name="naturalMenopause"
              value="yes"
              id="naturalMenopauseYes"
              checked={formData.naturalMenopause === "yes"}
              onChange={handleInputChange}
            />
            <FormFieldLabel htmlFor="naturalMenopauseYes">Sim</FormFieldLabel>
          </RadioInputContainer>
        </RadioContainer>
      </FormField>
      <FormField>
        <FormFieldLabel centered>
          Está realizando Terapia de Reposição Hormonal?
        </FormFieldLabel>
        <RadioContainer>
          <RadioInputContainer>
            <FormFieldInput
              type="radio"
              name="hormonalReposition"
              id="hormonalRepositionNo"
              value="no"
              checked={formData.hormonalReposition === "no"}
              onChange={handleInputChange}
            />
            <FormFieldLabel htmlFor="hormonalRepositionNo">Não</FormFieldLabel>
          </RadioInputContainer>
          <RadioInputContainer>
            <FormFieldInput
              type="radio"
              name="hormonalReposition"
              id="hormonalRepositionYes"
              value="yes"
              checked={formData.hormonalReposition === "yes"}
              onChange={handleInputChange}
            />
            <FormFieldLabel htmlFor="hormonalRepositionYes">Sim</FormFieldLabel>
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

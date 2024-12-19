import React from "react";
import {
  FormField,
  FormFieldInput,
  FormFieldLabel,
  FormFieldSelect,
  FormWrapper,
} from "./Form.styles";
import { Button } from "../components";

const Form: React.FC = () => {
  const onSubmit = () => {
    console.log("handle submit");
    console.log("TBD");
  };

  const handleSubmitClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    onSubmit();
  };

  return (
    <FormWrapper>
      <FormField>
        <FormFieldLabel>Data de Nascimento</FormFieldLabel>
        <FormFieldInput type="date" placeholder="Data" name="dateOfBirth" />
      </FormField>
      <FormField>
        <FormFieldLabel>Idade da Menarca (Primeira Menstruação)</FormFieldLabel>
        <FormFieldInput type="number" placeholder="Valor" name="menarchAge" />
      </FormField>
      <FormField>
        <FormFieldLabel>Idade da Menopausa</FormFieldLabel>
        <FormFieldInput type="number" placeholder="Valor" name="menopauseAge" />
      </FormField>
      <FormField>
        <FormFieldLabel>Menopausa foi natural?</FormFieldLabel>
        <FormFieldSelect id="natural" name="menopauseNatural" />
      </FormField>
      <FormField>
        <FormFieldLabel>
          Está realizando Terapia de Reposição Hormonal?
        </FormFieldLabel>
        <FormFieldSelect id="terapia" name="hormonalReposition" />
      </FormField>
      <Button label="Envie" onClick={() => handleSubmitClick} primary />
    </FormWrapper>
  );
};

export default Form;

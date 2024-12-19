import styled from "styled-components";

export const FormWrapper = styled.form`
  padding: 24px;
  gap: 24px;
  border: 1px solid #d9d9d9;
  border-radius: 8px;
  background-color: #ffffff;
  display: flex;
  flex-direction: column;
  max-width: 620px;
`;

export const FormField = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
`;

export const FormFieldLabel = styled.label`
  font-size: 16px;
  font-weight: 400;
`;

export const FormFieldInput = styled.input`
  border: 1px solid #d9d9d9;
  border-radius: 8px;
  padding: 12px 16px;
`;

export const FormFieldSelect = styled.select`
  border: 1px solid #d9d9d9;
  border-radius: 8px;
  padding: 12px 16px;
`;

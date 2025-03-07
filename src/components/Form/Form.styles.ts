import styled from "styled-components";

type LabelProps = {
  centered?: boolean;
};

export const FormWrapper = styled.form`
  padding: 24px;
  gap: 48px;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
`;

export const FormField = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;

  &:last-child {
    grid-column: span 2;
    align-items: center;
  }
`;

export const FormFieldLabel = styled.label<LabelProps>`
  align-self: ${({ centered }) => (centered ? "center" : "inherit")};
  color: var(--background-primary);
  font-size: 16px;
  font-weight: 300;
`;

export const FormFieldInput = styled.input`
  border: 0px;
  border-bottom: 1px solid var(--grayscale-primary);
  padding: 12px 16px;

  &::placeholder {
    color: var(--grayscale-primary);
  }
`;

export const FormFieldSelect = styled.select`
  border: 0px;
  border-bottom: 1px solid var(--grayscale-primary);
  padding: 12px 16px;
`;

export const RadioContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
`;

export const RadioInputContainer = styled.div`
  display: flex;
  flex-flow: row;
  justify-self: center;
  align-items: center;
`;

import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
`

export const Hero = styled(Container)`
  background-color: var(--background-primary);
  height: 452px;
`

export const CardContainer = styled(Container)`
  background-color: #FFFFFF;
  height: 841px;
`

export const InfoGridContainer = styled(Container)`
  background-color: var(--background-primary);
  padding: 20px 50px;
`
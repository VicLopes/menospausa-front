import styled from "styled-components";

type LinkProps = {
  formButton?: boolean;
};

export const NavbarWrapper = styled.nav`
  display: flex;
  justify-content: space-between;
  flex-direction: row;
  align-items: center;
  padding: 32px;
  background-color: #ffffff;
  border-bottom: 1px solid #d9d9d9;
  position: sticky;
  top: 0;
  z-index: 99;

  @media (max-width: 768px) {
    flex-direction: column;
    align-items: flex-start;
  }
`;

export const NavbarLinks = styled.div`
  display: flex;
  gap: 8px;

  @media (max-width: 768px) {
    flex-direction: column;
    gap: 16px;
    margin-top: 16px;
  }
`;

export const NavbarLink = styled.a<LinkProps>`
  font-size: 16px;
  padding: 8px;
  background-color: ${({ formButton }) => (formButton ? "#f5f5f5" : "inherit")};
  border-radius: 8px;
  align-items: center;
  display: flex;
  cursor: pointer;
`;

export const NavbarLogo = styled.div``;

export const LogoImage = styled.img``;

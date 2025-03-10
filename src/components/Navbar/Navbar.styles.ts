import styled from "styled-components";

type LinkProps = {
  formButton?: boolean;
};

type HamburgerProps = {
  isOpen: boolean;
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

export const NavbarLinks = styled.div<HamburgerProps>`
  display: flex;
  gap: 8px;

  @media (max-width: 768px) {
    display: ${({ isOpen }) => (isOpen ? "flex" : "none")};
    flex-direction: column;
    gap: 16px;
    margin-top: 16px;
  }
`;

export const NavbarLink = styled.a<LinkProps>`
  color: ${({ formButton }) => (formButton ? "white" : "inherit")};
  font-size: 16px;
  padding: 8px 16px;
  background-color: ${({ formButton }) =>
    formButton ? "var(--background-primary)" : "inherit"};
  border-radius: 32px;
  align-items: center;
  display: flex;
  cursor: pointer;
  text-decoration: none;
`;

export const NavbarLogo = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;

  @media (max-width: 768px) {
    width: 100%;
  }
`;

export const HamburgerWrapper = styled.div<HamburgerProps>`
  cursor: pointer;
  display: flex;
  align-items: center;
  @media (min-width: 768px) {
    display: none;
  }
`;

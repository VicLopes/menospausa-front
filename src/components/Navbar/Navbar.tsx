import React from "react";
import {
  NavbarLink,
  NavbarLinks,
  NavbarLogo,
  NavbarWrapper,
} from "./Navbar.styles";
import MenoLogo from "../../assets/logo.svg?react";

const Navbar: React.FC = () => {
  return (
    <NavbarWrapper>
      <NavbarLogo>
        <MenoLogo style={{ fill: "var(--background-primary)" }} />
      </NavbarLogo>
      <NavbarLinks>
        <NavbarLink href="#about-us">Sobre Nós</NavbarLink>
        <NavbarLink href="#form" formButton>
          Avaliação
        </NavbarLink>
        <NavbarLink href="#resources">Recursos</NavbarLink>
        <NavbarLink href="#questions">Dúvidas</NavbarLink>
      </NavbarLinks>
    </NavbarWrapper>
  );
};

export default Navbar;

import React from "react";
import {
  LogoImage,
  NavbarLink,
  NavbarLinks,
  NavbarLogo,
  NavbarWrapper,
} from "./Navbar.styles";
import viteLogo from "/vite.svg";

const Navbar: React.FC = () => {
  return (
    <NavbarWrapper>
      <NavbarLogo>
        <LogoImage width="32" height="32" src={viteLogo} />
      </NavbarLogo>
      <NavbarLinks>
        <NavbarLink formButton onClick={() => console.log("hi")}>
          Avaliação
        </NavbarLink>
        <NavbarLink>Sobre Nós</NavbarLink>
        <NavbarLink>Informações Médicas</NavbarLink>
        <NavbarLink>Bem-estar e Saúde</NavbarLink>
        <NavbarLink>Recursos Adicionais</NavbarLink>
        <NavbarLink>Contato</NavbarLink>
      </NavbarLinks>
    </NavbarWrapper>
  );
};

export default Navbar;

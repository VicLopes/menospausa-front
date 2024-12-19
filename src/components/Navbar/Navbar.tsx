import React, { useState } from "react";
import {
  LogoImage,
  NavbarLink,
  NavbarLinks,
  NavbarLogo,
  NavbarWrapper,
} from "./Navbar.styles";
import viteLogo from "/vite.svg";
import { Form } from "../components";

const Navbar: React.FC = () => {
  const [isFormOpen, setIsFormOpen] = useState(false);

  return (
    <NavbarWrapper>
      <NavbarLogo>
        <LogoImage width="32" height="32" src={viteLogo} />
      </NavbarLogo>
      <NavbarLinks>
        <div>
          <NavbarLink formButton onClick={() => setIsFormOpen(!isFormOpen)}>
            Avaliação
          </NavbarLink>
          {isFormOpen && <Form />}
        </div>
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

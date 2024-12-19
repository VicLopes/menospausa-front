import React, { useState } from "react";
import {
  NavbarLink,
  NavbarLinks,
  NavbarLogo,
  NavbarWrapper,
} from "./Navbar.styles";
import ViteLogo from "../../../public/logo.svg?react";
import { Form } from "../components";

const Navbar: React.FC = () => {
  const [isFormOpen, setIsFormOpen] = useState(false);

  return (
    <NavbarWrapper>
      <NavbarLogo>
        <ViteLogo style={{ fill: "var(--background-primary)" }} />
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

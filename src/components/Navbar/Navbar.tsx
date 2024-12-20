import React from "react";
import {
  NavbarLink,
  NavbarLinks,
  NavbarLogo,
  NavbarWrapper,
} from "./Navbar.styles";
import MenoLogo from "../../assets/logo.svg?react";
import { Button } from "../components";

const Navbar: React.FC = () => {
  return (
    <NavbarWrapper>
      <NavbarLogo>
        <MenoLogo style={{ fill: "var(--background-primary)" }} />
      </NavbarLogo>
      <NavbarLinks>
        <NavbarLink>Sobre Nós</NavbarLink>
        <Button
          primary
          label={"Avaliação"}
          onClick={() => console.log("open form")}
          fullWidth={false}
        />
        <NavbarLink>Recursos</NavbarLink>
        <NavbarLink>Dúvidas</NavbarLink>
      </NavbarLinks>
    </NavbarWrapper>
  );
};

export default Navbar;

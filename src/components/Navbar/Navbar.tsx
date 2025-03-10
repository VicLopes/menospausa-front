import React, { useState } from "react";
import {
  HamburgerWrapper,
  NavbarLink,
  NavbarLinks,
  NavbarLogo,
  NavbarWrapper,
} from "./Navbar.styles";
import MenoLogo from "../../assets/logo.svg?react";
import HamburgerLogo from "../../assets/burger-menu.svg?react";

const Navbar: React.FC = () => {
  const [isHamburgerOpen, setIsHamburgerOpen] = useState(false);

  return (
    <NavbarWrapper>
      <NavbarLogo>
        <MenoLogo style={{ fill: "var(--background-primary)" }} />
        <HamburgerWrapper
          isOpen={isHamburgerOpen}
          onClick={() => setIsHamburgerOpen(!isHamburgerOpen)}
        >
          <HamburgerLogo
            style={{ stroke: "var(--background-primary)" }}
            width={32}
            height={32}
          />
        </HamburgerWrapper>
      </NavbarLogo>
      <NavbarLinks isOpen={isHamburgerOpen}>
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

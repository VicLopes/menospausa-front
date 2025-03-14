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
import { useScroll } from "../../hooks";

const Navbar: React.FC = () => {
  const [isHamburgerOpen, setIsHamburgerOpen] = useState(false);
  const { activeSection } = useScroll();

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
        <NavbarLink href="#about-us" isActive={activeSection === "about-us"}>
          Sobre Nós
        </NavbarLink>
        <NavbarLink href="#form" isActive={activeSection === "form"}>
          Avaliação
        </NavbarLink>
        <NavbarLink href="#resources" isActive={activeSection === "resources"}>
          Recursos
        </NavbarLink>
        <NavbarLink href="#questions" isActive={activeSection === "questions"}>
          Dúvidas
        </NavbarLink>
      </NavbarLinks>
    </NavbarWrapper>
  );
};

export default Navbar;

import React from "react";
import { useMediaQuery } from "react-responsive";
import { Container } from "react-bootstrap";

import NavbarDesktop from "../Layouts/Desktop/NavbarDesktop";
import HeroDesktop from "../Layouts/Desktop/HeroDesktop";
import SupportDesktop from "../Layouts/Desktop/SupportDesktop";
import NavItemDesktop from "../Layouts/Desktop/NavItemDesktop";
import SliderDesktop from "../Layouts/Desktop/SliderDesktop";

import NavbarMobile from "../Layouts/Mobile/NavbarMobile";
import HeroMobile from "../Layouts/Mobile/HeroMobile";
import SupportMobile from "../Layouts/Mobile/SupportMobile";
import NavItemMobile from "../Layouts/Mobile/NavItemMobile";
import SliderMobile from "../Layouts/Mobile/SliderMobile";

function Home() {
  const Desktop = ({ children }) => {
    const isDesktop = useMediaQuery({ minWidth: 992 });
    return isDesktop ? children : null;
  };
  const Tablet = ({ children }) => {
    const isTablet = useMediaQuery({ minWidth: 768, maxWidth: 991 });
    return isTablet ? children : null;
  };
  const Mobile = ({ children }) => {
    const isMobile = useMediaQuery({ maxWidth: 767 });
    return isMobile ? children : null;
  };
  return (
    <div>
      <Desktop>
        <Container>
          <NavbarDesktop></NavbarDesktop>
          <HeroDesktop></HeroDesktop>
          <SupportDesktop></SupportDesktop>
          <NavItemDesktop></NavItemDesktop>
          <SliderDesktop></SliderDesktop>
        </Container>
      </Desktop>
      <Tablet>Tablet</Tablet>
      <Mobile>
        <NavbarMobile></NavbarMobile>
        <HeroMobile></HeroMobile>
        <SupportMobile></SupportMobile>
        <NavItemMobile></NavItemMobile>
        <SliderMobile></SliderMobile>
      </Mobile>
    </div>
  );
}

export default Home;

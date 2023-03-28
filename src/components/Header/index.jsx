import { useState, useEffect } from "react";
import logo from "../../assets/img/shared/logo.svg";
import {
    NavBar,
    NavLink,
    NavLogo,
    Logo,
    StyledLink,
    Rectangle,
    StyledIcon,
    NavResponsive,
    LinkResponsive,
} from "./style";
import hamburger from "../../assets/img/shared/icon-hamburger.svg";
import close from "../../assets/img/shared/icon-close.svg";
import "./style.css";

const dataNav = {
    home: {
        title: "Home",
    },
    destination: {
        title: "Destination",
    },
    crew: {
        title: "Crew",
    },
    technology: {
        title: "Technology",
    },
};

export const Header = () => {
    // eslint-disable-next-line
    const [itemDataNav, setDataNav] = useState(dataNav);

    const [isOpen, setIsOpen] = useState(false);

    useEffect(() => {
        if (isOpen) {
            document.body.style.overflow = "hidden";
        } else {
            document.body.style.overflow = "visible";
        }
    }, [isOpen]);

    return (
        <NavBar>
            <NavLogo>
                <Logo src={logo} alt="Logo space tourism" />
            </NavLogo>

            <Rectangle></Rectangle>

            <div onClick={() => setIsOpen(!isOpen)}>
                <StyledIcon
                    src={!isOpen ? hamburger : close}
                    alt="Icone for responvise navbar"
                />
            </div>

            <NavResponsive className={`${isOpen ? "isVisible" : "isHidden"}`}>
                <LinkResponsive to="/space-tourism">
                    <b>00</b> {itemDataNav.home.title}
                </LinkResponsive>
                <LinkResponsive to="/destination">
                    <b>01</b> {itemDataNav.destination.title}
                </LinkResponsive>
                <LinkResponsive to="/crew">
                    <b>02</b> {itemDataNav.crew.title}
                </LinkResponsive>
                <LinkResponsive to="/technology">
                    <b>03</b> {itemDataNav.technology.title}
                </LinkResponsive>
            </NavResponsive>

            <NavLink>
                <StyledLink to="/space-tourism">
                    <b>00</b> {itemDataNav.home.title}
                </StyledLink>
                <StyledLink to="/destination">
                    <b>01</b> {itemDataNav.destination.title}
                </StyledLink>
                <StyledLink to="/crew">
                    <b>02</b> {itemDataNav.crew.title}
                </StyledLink>
                <StyledLink to="/technology">
                    <b>03</b> {itemDataNav.technology.title}
                </StyledLink>
            </NavLink>
        </NavBar>
    );
};
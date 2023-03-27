import { useState } from "react";
import logo from "../../assets/img/shared/logo.svg";
import { NavBar, NavLink, NavLogo, Logo, StyledLink, Rectangle } from "./style";

const dataNav = {
    home: {
        title: "Home"
    },
    destination: {
        title: "Destination"
    },
    crew: {
        title: "Crew"
    },
    technology: {
        title: "Technology"
    }
}

export const Header = () => {
    // eslint-disable-next-line
    const [itemDataNav, setDataNav] = useState(dataNav)

    return (
        <NavBar>
            <NavLogo>
                <Logo src={logo} alt="Logo space tourism" />
            </NavLogo>
            <Rectangle></Rectangle>
            <NavLink>
                <StyledLink to="/">
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

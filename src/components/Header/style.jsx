import styled from "styled-components";
import { Link } from "react-router-dom";

export const NavBar = styled.nav`
    margin-left: 40px;
    padding-top: 40px;
    margin-bottom: 100px;
    display: flex;
    justify-content: space-between;
`;

export const NavLink = styled.div`
    display: flex;
    align-content: center;
    padding: 40px 125px;
    background-color: rgba(255, 255, 255, 0.04);
    backdrop-filter: blur(40px);
    gap: 100px;
`;

export const NavLogo = styled.div``;

export const Logo = styled.img`
    display: flex;
    align-items: center;
`;

export const StyledLink = styled(Link)`
    text-decoration: none;
    color: rgba(255, 255, 255, 1);
    font-size: 16px;
    text-transform: uppercase;
    line-height: 19px;
    letter-spacing: 3px;
    &:active {
        text-decoration: underline;
    }
    &:hover {
        text-decoration: underline;
    }
`;

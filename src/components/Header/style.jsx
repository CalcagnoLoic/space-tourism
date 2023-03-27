import styled from "styled-components";
import { Link } from "react-router-dom";

export const NavBar = styled.nav`
    margin-left: 40px;
    padding-top: 40px;
    margin-bottom: 100px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    @media (max-width: 750px){
        margin-bottom: 45px;
    }
`;

export const NavLink = styled.div`
    display: flex;
    align-content: center;
    padding: 40px 125px;
    background-color: rgba(255, 255, 255, 0.04);
    backdrop-filter: blur(40px);
    gap: 100px;
    @media (min-width: 750px) and (max-width: 1200px) {
        gap: 35px;
        padding-left: 48px;
        padding-right: 48px;
    }
    @media (max-width: 750px){
        display: none;
    }
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
    cursor: pointer;
    &:hover {
        border-bottom: 3px solid rgba(255, 255, 255, 0.5);
        margin-bottom: -40px;
    }
`;

export const Rectangle = styled.div`
    background-color: rgba(56, 59, 75, 1);
    width: 473px;
    height: 1px;
    @media (max-width: 1200px) {
        display: none;
    }
`;
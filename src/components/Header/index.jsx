import logo from '../../assets/img/shared/logo.svg'
import { NavBar, NavLink, NavLogo, Logo, StyledLink } from "./style"

export const Header = () => {
    return (
        <NavBar>
            <NavLogo>
                <Logo src={logo} alt="Logo space tourism" />
            </NavLogo>
            <NavLink>
                <StyledLink to="/"><b>00</b> Home</StyledLink>
                <StyledLink to="/destination"><b>01</b> Destination</StyledLink>
                <StyledLink to="/crew"><b>02</b> Crew</StyledLink>
                <StyledLink to="technology"><b>03</b> Technology</StyledLink>
            </NavLink>
        </NavBar>
    )
}
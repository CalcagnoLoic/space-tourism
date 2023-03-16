import { Link } from "react-router-dom"

export const Header = () => {
    return (
        <nav>
            <div>
                <img src="" alt="Logo ICI" />
            </div>
            <div>
                <Link to="/">00. Home</Link>
                <Link to="/destination">01. Destination</Link>
                <Link to="/crew">02. Crew</Link>
                <Link to="technology">03. Technology</Link>
            </div>
        </nav>
    )
}
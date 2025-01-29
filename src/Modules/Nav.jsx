import { Link } from "react-router-dom";

export default function Nav() {
    return (
        <div className="nav">
            <Link to="/">Home</Link>
            <Link to="/About" className="navlink">About</Link>
            <Link to="/Portfolio" className="navlink">Portfolio</Link>
            <Link to="/Contact" className="navlink">Contact</Link>
        </div>
    )
}
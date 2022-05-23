import { Link } from "react-router-dom";

const Navbar = () => {

    return (
        <nav className="navbar">
            <h1>R2 site</h1>
            <div className="links">
                <Link to="/">Home</Link>
                
                <Link to={'/Survivors'}> Survivors </Link>
                <Link to={'/Killers'}> Killers </Link>
                
            </div>
        </nav>
    );
}

export default Navbar;
import { Link } from "react-router-dom";

export default function NavBar() {
    return(
        <>
            <div className="nav">
                <nav className="navbar">
                    &nbsp;  &nbsp;
                    <Link className="nav-but" to="/Home">Home</Link>
                    &nbsp;  &nbsp;
                    <Link className="nav-but" to="/Portfolio">Work</Link>
                    &nbsp;  &nbsp;
                    <Link className="nav-but" to="/Contact">Contact</Link>
                    &nbsp;  &nbsp;
                </nav>
            </div>
        </>
    )
}
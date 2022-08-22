import { Link } from "react-router-dom";

export default function NavBar() {
    return (
        <nav>
            &nbsp; | &nbsp;
            <Link to="/Home">Home</Link>
            &nbsp; | &nbsp;
        </nav>
    )
}
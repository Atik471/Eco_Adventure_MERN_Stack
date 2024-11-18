import { Link, NavLink, useNavigate } from "react-router-dom";

const Navbar = () => {
    const navigate = useNavigate();

    return (
        <div>
            <h1><Link to={"/"}>Eco Adventure</Link></h1>
            <ul>
                <NavLink to={"/"}>Home</NavLink>
                <NavLink to={"/update-profile"}>Update Profile</NavLink>
                <NavLink to={"/user-profile"}>User Profile</NavLink>
            </ul>
            <button onClick={() => navigate("/login")}>Login</button>
        </div>
    );
};

export default Navbar;
import { useContext } from "react";
import { Link, NavLink, useNavigate } from "react-router-dom";
import { AuthContext } from "../context/AuthProvider";

const Navbar = () => {
    const navigate = useNavigate();
    const { logout, user, setUser } = useContext(AuthContext)

    //console.log(user.photoURL)

    const handleLogout = () => {
        logout()
        .then(() => {
            console.log("User signed out successfully.");
            setUser(null);
          })
          .catch((error) => {
            console.error("Error signing out:", error);
          });
    }

    return (
        <div>
            <h1><Link to={"/"}>Eco Adventure</Link></h1>
            <ul>
                <NavLink to={"/"}>Home</NavLink>
                <NavLink to={"/update-profile"}>Update Profile</NavLink>
                <NavLink to={"/user-profile"}>User Profile</NavLink>
            </ul>
            <button onClick={() => navigate("/login")}>Login</button>
            <button onClick={handleLogout}>Logout</button>
            {user && user.photoURL ? (
            // <img src={user.photoURL} alt="User profile" onError={(e) => {
            //     console.error("Image failed to load:", e);
            // }}/> 
            5
          ) : (
            <p>No photo available</p>
          )}
          <p>{user && user.displayName}</p>
        </div>
    );
};

export default Navbar;
import { useContext, useState } from "react";
import { Link, NavLink, useNavigate } from "react-router-dom";
import { AuthContext } from "../context/AuthProvider";
import { GiOakLeaf } from "react-icons/gi";
import { BiMenu } from "react-icons/bi";
import pfpFallback from "../assets/pfp-fallback.jpg";

const Navbar = () => {
    const [mobileMenu, setMobileMenu] = useState(false)
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
        <div className="z-50 flex justify-between bg-primary text-white px-3 md:px-[5%] py-4 items-center sticky top-0  shadow-lg">
          <div>
            <Link to={"/"}  className="flex gap-2 md:gap-3 items-center">
              <GiOakLeaf className="text-green-900 md:text-4xl text-2xl"></GiOakLeaf>
              <h1 className="font-amatic font-extrabold  md:text-4xl text-2xl">Eco Adventure</h1>
            </Link>
          </div>
          
          <ul className="md:flex hidden gap-6 text-md">
              <NavLink to={"/"} className={"border-b-2 border-transparent hover:border-white transition-all duration-300  font-semibold p-1"}>Home</NavLink>
              <NavLink to={"/update-profile"} className={"border-b-2 border-transparent hover:border-white transition-all duration-300 font-semibold p-1"}>Update Profile</NavLink>
              <NavLink to={"/my-profile"} className={"border-b-2 border-transparent hover:border-white transition-all duration-300 font-semibold p-1"}>My Profile</NavLink>
          </ul>
          
          
          <div className="flex items-center md:gap-5 gap-3">
            {
              user ? <button onClick={handleLogout} className="bg-white hover:bg-green-800 transition-all duration-300 text-black hover:text-white md:px-3 px-2 md:py-2 py-1 rounded-lg font-semibold shadow-lg">Logout</button>:
                     <button onClick={() => navigate("/login")} className="bg-white hover:bg-green-800 transition-all duration-300 text-black hover:text-white md:px-3 px-2 md:py-2 py-1 rounded-lg font-semibold shadow-lg">Login</button>
            }
            {user && user.photoURL ? (
              <div className={`md:w-12 w-8 md:h-12 h-8 rounded-[50%] relative group`}
              style={{ backgroundImage: `url(${user.photoURL})`, backgroundSize: 'cover', backgroundPosition: 'center' }}>
                  <div className="absolute text-white opacity-0 group-hover:opacity-100 
                  transition-opacity duration-300 bg-black bg-opacity-50 rounded-md text-sm top-8 right-10 py-1 px-2">
                  {user && user.displayName.split(" ")[0]}
                  </div>
              </div>
            ) : (
              <div className={`md:w-12 w-8 md:h-12 h-8 rounded-[50%] relative group`}
              style={{ backgroundImage: `url(${pfpFallback})`, backgroundSize: 'cover', backgroundPosition: 'center' }}>
                  <div className="absolute text-white opacity-0 group-hover:opacity-100 
                  transition-opacity duration-300 bg-black bg-opacity-50 rounded-md text-sm top-12 right-5 py-1 px-2">
                  {'Guest'}
                  </div>
              </div>
            )}
            <div className="relative">
              <BiMenu className="block md:hidden text-3xl" onClick={() => {setMobileMenu(!mobileMenu)}}></BiMenu>
              <ul className={`${mobileMenu ? "flex" : "hidden"} flex-col gap-3 md:gap-6 absolute right-0 text-md bg-primary rounded-2xl p-3 w-[90vw] border-2 text-center`}>
                <NavLink to={"/"} className={"border-b-2 border-white transition-all duration-300  font-semibold p-1"}>Home</NavLink>
                <NavLink to={"/update-profile"} className={"border-b-2 border-white transition-all duration-300 font-semibold p-1"}>Update Profile</NavLink>
                <NavLink to={"/my-profile"} className={"border-b-2 border-white transition-all duration-300 font-semibold p-1"}>My Profile</NavLink>
              </ul>
            </div>
          </div>
        </div>
    );
};

export default Navbar;
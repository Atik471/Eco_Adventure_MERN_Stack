import { useEffect } from "react";
import { matchPath, useLocation } from "react-router-dom";

const DynamicTitle = () => {
  const location = useLocation();

  useEffect(() => {
    const routeTitles = {
        "/": "Home - GitHub Classroom Link: https://classroom.github.com/a/cM9ek1DG",
        "/update-profile": "Update Profile - EcoAdventure",
        "/my-profile": "My Profile - EcoAdventure",
        "/adventure-details/:id": "Adventure Details - EcoAdventure",
        "/login": "Login - EcoAdventure",
        "/register": "Register - EcoAdventure",
        "/forget-password": "Forgot Password - EcoAdventure",
      };

      const dynamicRoute = matchPath("/adventure-details/:id", location.pathname);
    if (dynamicRoute) {
      document.title = "Adventure Details - EcoAdventure";
    } else {
      document.title = routeTitles[location.pathname] || "EcoAdventure";
    }
    }, [location]);

  return null;
};

export default DynamicTitle
import { createBrowserRouter } from "react-router-dom";
import Root from "../Root";
import ErrorPage from "../components/ErrorPage";
import Home from "../components/Home";
import Login from "../components/Login"
import Register from "../components/Register"
import UpdateProfile from "../components/UpdateProfile"
import UserProfile from "../components/UserProfile"
import AdventureDetails from "../components/AdventureDetails"
import AdventureProvider from "../context/AdventureProvider";
import PrivateRoute from "./PrivateRoute";

const router = createBrowserRouter([
    {
        path: "/",
        element: <Root></Root>,
        errorElement: <ErrorPage />,
        children: [
            {
                path: "",
                element: 
                <AdventureProvider>
                    <Home />
                </AdventureProvider>,
            },
            {
                path: "update-profile",
                element: <PrivateRoute>
                    <UpdateProfile></UpdateProfile>
                </PrivateRoute>
            },
            {
                path: "my-profile",
                element: <PrivateRoute>
                    <UserProfile></UserProfile>
                </PrivateRoute>
            },
            {
                path: "adventure-details/:id",
                element: 
                <PrivateRoute>
                    <AdventureDetails></AdventureDetails>
                </PrivateRoute>
            },
            {
                path: "login",
                element: <Login></Login>
            },
            {
                path: "register",
                element: <Register></Register>
            },
        ]
    },
    
    {
        path: "*", 
        element: <ErrorPage /> 
    }
])

export default router;
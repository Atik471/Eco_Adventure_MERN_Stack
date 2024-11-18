import { createBrowserRouter } from "react-router-dom";
import Root from "../Root";
import ErrorPage from "../components/ErrorPage";
import Home from "../components/Home";
import Login from "../components/Login"
import Register from "../components/Register"
import UpdateProfile from "../components/UpdateProfile"
import UserProfile from "../components/UserProfile"
import AdventureDetails from "../components/AdventureDetails"

const router = createBrowserRouter([
    {
        path: "/",
        element: <Root></Root>,
        errorElement: <ErrorPage />,
        children: [
            {
                path: "",
                element: <Home></Home>,
            },
            {
                path: "update-profile",
                element: <UpdateProfile></UpdateProfile>
            },
            {
                path: "user-profile",
                element: <UserProfile></UserProfile>
            },
            {
                path: "adventure-details/:id",
                element: <AdventureDetails></AdventureDetails>
            }
        ]
    },
    {
        path: "/login",
        element: <Login></Login>
    },
    {
        path: "register",
        element: <Register></Register>
    },
    {
        path: "*", 
        element: <ErrorPage /> 
    }
])

export default router;
import {
    createBrowserRouter,
    RouterProvider,
} from "react-router-dom";
import Main from "../Layout/Main";
import Home from "../Page/Home/Home/Home";
import ThesisPaper from "../Page/ThesisPaper/ThesisPaper";
import SubmitPaper from "../Page/SubmitPaper/SubmitPaper";
import Contact from "../Page/Contact/Contact";
import Login from "../Page/Login/Login";
import SignUp from "../Page/SignUp/SignUp";


export const router = createBrowserRouter([
    {
        path: "/",
        element: <Main></Main>,
        children: [
            {
                path: "/",
                element: <Home></Home>
            },
            {
                path: "/thesisPaper",
                element: <ThesisPaper></ThesisPaper>
            },
            {
                path: "/submit",
                element: <SubmitPaper></SubmitPaper>
            },
            {
                path: "/contact",
                element: <Contact></Contact>
            },
            {
                path: "/login",
                element: <Login></Login>
            },
            {
                path: "/signUp",
                element: <SignUp></SignUp>
            },
        ]
    },
]);
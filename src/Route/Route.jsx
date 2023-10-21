import {
    createBrowserRouter,
} from "react-router-dom";
import Main from "../Layout/Main";
import Home from "../Page/Home/Home/Home";
import ThesisPaper from "../Page/ThesisPaper/ThesisPaper";
// import SubmitPaper from "../Page/SubmitPaper/SubmitPaper";
import Contact from "../Page/Contact/Contact";
import Login from "../Page/Login/Login";
import SignUp from "../Page/SignUp/SignUp";
import ThesisPaperDetail from "../Page/ThesisPaper/ThesisPaperDetail";
import PrivateRoute from "./PrivateRoute";
import Dashboard from "../Layout/Dashboard";
import MyCart from "../Page/Dashboard/Mycart/MyCart";
import AllUsers from "../Page/Dashboard/AllUsers/AllUsers";
import ManagePaper from "../Page/ManagePaper/ManagePaper";
import Pdf from "../Page/Dashboard/Pdf/Pdf";
import ManagePdf from "../Page/Dashboard/ManagePdf/ManagePdf";
import UpdatePdf from "../Page/Dashboard/ManagePdf/UpdatePdf";
import Approve from "../Page/Dashboard/Approve/Approve";
import Blog from "../Page/Blog/Blog";


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
          path: "/thesisPaper/:_id",
          element: <PrivateRoute> <ThesisPaperDetail></ThesisPaperDetail> </PrivateRoute>,
          loader: ({ params }) => fetch(`https://thesis-paper-sharing-project-server.vercel.app/thesisPaper/${params._id}`)
        },
            // {
            //     path: "/submit",
            //     element: <PrivateRoute><SubmitPaper></SubmitPaper></PrivateRoute>
            // },
            {
                path: "/managePaper",
                element: <PrivateRoute> <ManagePaper></ManagePaper> </PrivateRoute>
            },
            
            {
                path: "/contact",
                element: <Contact></Contact>
            },
            {
                path: "/blog",
                element: <Blog></Blog>
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

    {
        path: "/dashboard",
        element: <PrivateRoute><Dashboard></Dashboard></PrivateRoute>,
        children: [
            {
                path: 'myCart',
                element: <MyCart></MyCart>
            },
            {
                path: 'user',
                element: <AllUsers></AllUsers>
            },
            {
                path: 'pdf',
                element: <Pdf></Pdf>
            },
            {
                path: 'Managepdf',
                element: <ManagePdf></ManagePdf>
            },
            {
                path: 'approve',
                element: <Approve></Approve>
            },
            
           
            {
                path: 'Managepdf/update/:_id',
                element: <PrivateRoute> <UpdatePdf></UpdatePdf> </PrivateRoute>,
                loader: ({params}) => fetch(`https://thesis-paper-sharing-project-server.vercel.app/thesisPaper/${params._id}`)
              },
        ]
            
    }
]);
import Blogs from "../Pages/Blogs";
import Home from "../Pages/Home/Home";
import ResetPassword from "../Pages/Home/ResetPassword";
import Login from "../Pages/Login/Login";
import SignUp from "../Pages/Login/SignUp";
import MyPortfolio from "../Pages/MyPortfolio";
import Reviews from "../Pages/Reviews";
import NotFound from "../Shared/NotFound";
import ContactPage from "../Pages/Home/ContactPage/ContactPage";

export const publicRoute = [
    {
        path: "/",
        name: "Home",
        Component: Home,
    },
    {
        path: "/home",
        name: "Home",
        Component: Home,
    },

    {
        path: "/reviews",
        name: "Reviews",
        Component: Reviews,
    },
    {
        path: "/blogs",
        name: "Blogs",
        Component: Blogs,
    },
    {
        path: "/myportfolio",
        name: "MyPortfolio",
        Component: MyPortfolio,
    },
    {
        path: "/contact",
        name: "ContactPage",
        Component: ContactPage,
    },
    {
        path: "/login",
        name: "Login",
        Component: Login,
    },
    {
        path: "/rest-password",
        name: "ResetPassword",
        Component: ResetPassword,
    },
    {
        path: "/signup",
        name: "SignUp",
        Component: SignUp,
    },
    {
        path: "*",
        name: "NotFound",
        Component: NotFound,
    },
];

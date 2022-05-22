import Blogs from "../Pages/Blogs";
import Home from "../Pages/Home/Home";
import Login from "../Pages/Login";
import MyPortfolio from "../Pages/MyPortfolio";
import Reviews from "../Pages/Reviews";
import NotFound from "../Shared/NotFound";

export const publicRoute = [
    {
        path: "/",
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
        path: "/login",
        name: "Login",
        Component: Login,
    },
    {
        path: "*",
        name: "NotFound",
        Component: NotFound,
    },
];

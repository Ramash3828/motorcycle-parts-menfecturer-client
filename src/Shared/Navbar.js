import { signOut } from "firebase/auth";
import React from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { Link, NavLink, useNavigate } from "react-router-dom";
import auth from "../firebase.init";

const Navbar = () => {
    const [user] = useAuthState(auth);
    const navigate = useNavigate();

    const handleLogOut = () => {
        signOut(auth);
        navigate("/login");
        localStorage.removeItem("accessToken");
    };
    const navbar = (
        <>
            <li>
                <NavLink to="/">Home</NavLink>
            </li>
            <li>
                <NavLink to="/reviews">Reviews</NavLink>
            </li>
            <li>
                <NavLink to="/blogs">Blogs</NavLink>
            </li>
            <li>
                <NavLink to="/myportfolio">My Portfolio</NavLink>
            </li>
            <li>{user && <NavLink to="/dashboard">Dashboard</NavLink>}</li>
            <li>
                {user ? (
                    <NavLink onClick={handleLogOut} to="/login">
                        Log Out
                    </NavLink>
                ) : (
                    <NavLink to="/login">Login</NavLink>
                )}
            </li>
            <li>
                {user && (
                    <button className="btn btn-outline">
                        {user.displayName ? user.displayName : "USER"}
                    </button>
                )}
            </li>
        </>
    );
    return (
        <header className="bg-accent sticky top-0 py-4 z-50">
            <div className="flex justify-between flex-wrap  container mx-auto">
                <div className="flex justify-between w-full md:w-0 items-center">
                    <Link to="/" className="btn btn-ghost normal-case text-xl">
                        PHM Parts Co.
                    </Link>
                    <div className="dropdown">
                        <label tabIndex="0" className="btn btn-ghost md:hidden">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                fill="none"
                                viewBox="0 0 24 24"
                                className="inline-block w-5 h-5 stroke-current"
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth="2"
                                    d="M4 6h16M4 12h16M4 18h16"
                                ></path>
                            </svg>
                        </label>
                        <ul
                            tabIndex="0"
                            className="menu menu-compact dropdown-content mt-3 p-2 absulute right-0 shadow bg-base-100 rounded-box w-52"
                        >
                            {navbar}
                        </ul>
                    </div>
                </div>
                <div className="navbar-end hidden md:flex grow">
                    <ul className="menu menu-horizontal p-0 ">{navbar}</ul>
                </div>
            </div>
        </header>
    );
};

export default Navbar;

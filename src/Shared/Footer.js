import { signOut } from "firebase/auth";
import React from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { Link, useNavigate } from "react-router-dom";
import auth from "../firebase.init";

const Footer = () => {
    const [user] = useAuthState(auth);
    const navigate = useNavigate();

    const handleLogOut = () => {
        signOut(auth);
        navigate("/login");
        localStorage.removeItem("accessToken");
    };
    return (
        <footer className="footer p-10 bg-base-200 text-base-content">
            <div>
                <span className="footer-title">Services</span>
                <ul>
                    <li className="hover:text-primary">
                        <Link to="/">Home</Link>
                    </li>
                    <li className="hover:text-primary">
                        <Link to="/reviews">Reviews</Link>
                    </li>
                    <li className="hover:text-primary">
                        <Link to="/blogs">Blogs</Link>
                    </li>
                    <li className="hover:text-primary">
                        <Link to="/myportfolio">My Portfolio</Link>
                    </li>
                    <li className="hover:text-primary">
                        {user && <Link to="/dashboard">Dashboard</Link>}
                    </li>
                    <li className="hover:text-primary">
                        {user ? (
                            <Link onClick={handleLogOut} to="/login">
                                Log Out
                            </Link>
                        ) : (
                            <Link to="/login">Login</Link>
                        )}
                    </li>
                    <li>
                        {user && (
                            <button className="btn btn-outline btn-primary btn-wide mt-3">
                                {user.displayName ? user.displayName : "USER"}
                            </button>
                        )}
                    </li>
                </ul>
            </div>
            <div>
                <span className="footer-title ">Company</span>
                <Link to="/" className="link link-hover hover:text-primary">
                    About us
                </Link>
                <Link to="/" className="link link-hover hover:text-primary">
                    Contact
                </Link>
                <Link to="/" className="link link-hover hover:text-primary">
                    Jobs
                </Link>
                <Link to="/" className="link link-hover hover:text-primary">
                    Press kit
                </Link>
            </div>
            <div>
                <span className="footer-title">Legal</span>
                <Link to="/" className="link link-hover hover:text-primary">
                    Terms of use
                </Link>
                <Link to="/" className="link link-hover hover:text-primary">
                    Privacy policy
                </Link>
                <Link to="/" className="link link-hover hover:text-primary">
                    Cookie policy
                </Link>
            </div>
            <div>
                <span className="footer-title">Newsletter</span>
                <div className="form-control w-80">
                    <label className="label">
                        <span className="label-text">
                            Enter your email address
                        </span>
                    </label>
                    <div className="relative">
                        <input
                            type="text"
                            placeholder="username@site.com"
                            className="input input-bordered w-full pr-16"
                        />
                        <button className="btn btn-primary absolute top-0 right-0 rounded-l-none">
                            Subscribe
                        </button>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;

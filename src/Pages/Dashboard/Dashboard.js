import React, { useEffect, useState } from "react";
import { useAuthState } from "react-firebase-hooks/auth";

import { NavLink, Outlet } from "react-router-dom";
import auth from "../../firebase.init";

const Dashboard = () => {
    const [user] = useAuthState(auth);
    const [findUsers, setFiendUsers] = useState([]);

    useEffect(() => {
        fetch(`http://localhost:5000/users`, {
            method: "GET",
            headers: {
                authorization: `Bearer ${localStorage.getItem("accessToken")}`,
                "Content-type": "application/json",
            },
        })
            .then((res) => res.json())
            .then((data) => setFiendUsers(data));
    }, []);
    const singleUser = findUsers?.find((u) => u?.email === user?.email);

    const adminUser = singleUser?.role;
    // console.log(adminUser);

    return (
        <div className="text-center pt-4 pb-11">
            <h2 className="text-4xl text-primary font-bold mb-4 uppercase">
                Dashboard
            </h2>
            <div className="drawer drawer-mobile">
                <input
                    id="my-drawer-2"
                    type="checkbox"
                    className="drawer-toggle"
                />
                <div className="drawer-content ">
                    <Outlet />
                </div>
                <div className="drawer-side shadow-lg">
                    <label
                        htmlFor="my-drawer-2"
                        className="drawer-overlay"
                    ></label>
                    <ul className="menu p-4 overflow-y-auto w-60 bg-base-100 text-base-content">
                        <li>
                            <NavLink to="/dashboard/my-profile">
                                My Profile
                            </NavLink>
                        </li>

                        {!adminUser && (
                            <>
                                <li>
                                    <NavLink to="/dashboard/add-review/:id">
                                        Add Review
                                    </NavLink>
                                </li>
                                <li>
                                    <NavLink to="/dashboard/my-orders">
                                        My Orders
                                    </NavLink>
                                </li>
                            </>
                        )}

                        <li>
                            <NavLink to="/dashboard/manage-all-product">
                                Manage all Orders
                            </NavLink>
                        </li>
                        {adminUser && (
                            <>
                                <li>
                                    <NavLink to="/dashboard/add-product">
                                        Add Product
                                    </NavLink>
                                </li>
                                <li>
                                    <NavLink to="/dashboard/make-admin">
                                        Make Admin
                                    </NavLink>
                                </li>
                                <li>
                                    <NavLink to="/dashboard/manage-products">
                                        Manage Products
                                    </NavLink>
                                </li>
                            </>
                        )}
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default Dashboard;

import React from "react";

import { NavLink, Outlet } from "react-router-dom";

const Dashboard = () => {
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
                            <NavLink to="/dashboard/add-product">
                                Add Product
                            </NavLink>
                        </li>
                        <li>
                            <NavLink to="/dashboard/my-orders">
                                My Orders
                            </NavLink>
                        </li>
                        <li>
                            <NavLink to="/dashboard/manage-all-product">
                                Manage all Orders
                            </NavLink>
                        </li>
                        <li>
                            <NavLink to="/dashboard/add-review/:id">
                                Add Review
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
                        <li>
                            <NavLink to="/dashboard/my-profile">
                                My Profile
                            </NavLink>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default Dashboard;

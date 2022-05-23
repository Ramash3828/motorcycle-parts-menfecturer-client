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
                    <label
                        htmlFor="my-drawer-2"
                        className="btn btn-primary drawer-button lg:hidden"
                    >
                        Open drawer
                    </label>
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
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default Dashboard;

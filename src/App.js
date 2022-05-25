import "./App.css";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";

import { Route, Routes } from "react-router-dom";

import Navbar from "./Shared/Navbar";
import { publicRoute } from "./Routes/publicRoute";
import Footer from "./Shared/Footer";
import Dashboard from "./Pages/Dashboard/Dashboard";
import AddProduct from "./Pages/Dashboard/AddProduct";
import RequireAuth from "./RequireAuth";
import MyOrder from "./Pages/Dashboard/MyOrder";
import ManageAllOrders from "./Pages/Dashboard/ManageAllOrders";
import MyReview from "./Pages/Dashboard/MyReview";
import Payment from "./Pages/Dashboard/Payment";
import ManageProducts from "./Pages/Dashboard/ManageProducts/ManageProducts";
import MakeAdmin from "./Pages/Dashboard/MakeAdmin/MakeAdmin";

function App() {
    useEffect(() => {
        AOS.init({
            offset: 120,
            duration: 400,
        });
    }, []);
    return (
        <div>
            <Navbar />
            <Routes>
                {publicRoute.map(({ path, Component }, index) => (
                    <Route key={index} path={path} element={<Component />} />
                ))}
                <Route element={<RequireAuth />}>
                    <Route path="/dashboard/" element={<Dashboard />}>
                        <Route path="add-product" element={<AddProduct />} />
                        <Route path="my-orders" element={<MyOrder />} />
                        <Route
                            path="manage-all-product"
                            element={<ManageAllOrders />}
                        />
                        <Route path="add-review/:id" element={<MyReview />} />
                        <Route path="payment/:id" element={<Payment />} />
                        <Route path="make-admin" element={<MakeAdmin />} />
                        <Route
                            path="manage-products"
                            element={<ManageProducts />}
                        />
                    </Route>
                </Route>
            </Routes>
            <Footer />
            <ToastContainer />
        </div>
    );
}

export default App;

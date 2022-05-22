import "./App.css";
// import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";

import { Route, Routes } from "react-router-dom";
// import { publicRoute } from "./Routes/publicRoute";

import Navbar from "./Shared/Navbar";
import { publicRoute } from "./Routes/publicRoute";
import Footer from "./Shared/Footer";

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
            </Routes>
            <Footer />
        </div>
    );
}

export default App;

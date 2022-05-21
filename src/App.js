import "./App.css";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import AOS from "aos";
import "aos/dist/aos.css"; // You can also use <link> for styles
import { useEffect } from "react";

function App() {
    useEffect(() => {
        AOS.init();
    }, []);
    return (
        <div>
            <h2>Hello World</h2>
            <ToastContainer />
        </div>
    );
}

export default App;

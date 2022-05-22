import React from "react";
import "./MyButton.css";

const MyButton = ({ children, onClick }) => {
    return (
        <button children={children} onClick={onClick} class="btn-9">
            <span>{children}</span>
        </button>
    );
};

export default MyButton;

import React from "react";

const Blogs = () => {
    return (
        <div>
            <h2>Blogs (Question and Answer)</h2>
            <div className="container">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    <div className="text-left">
                        <h4>
                            <strong>Question:</strong>{" "}
                        </h4>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Blogs;

import React from "react";
// import busenessImg from "../../images/10-102760_dot-background-png.png";
/**
 * 
 * @returns style={{
                backgroundImage: ` url(${busenessImg})`,
                backgroundSize: "cover",
                backgroundPosition: "center",
                backgroundRepeat: "no-repeat",
            }}
 */
const BusinessDetails = () => {
    return (
        <div>
            <div className="container text-center py-20">
                <h2 className="text-4xl uppercase text-primary font-bold mb-7">
                    Millions Business Trust us
                </h2>
                <p className="text-2xl text-secondary uppercase font-bold">
                    Try to understand Users Expectation
                </p>
                <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 justify-center  w-full gap-7 mt-11">
                    <div
                        data-aos="zoom-out-down"
                        className="w-auto mx-auto py-7"
                    >
                        <div className="text-4xl text-primary font-bold">
                            <i className="fa-solid fa-font-awesome"></i>
                        </div>
                        <h2 className="text-6xl font-bold my-4">84</h2>
                        <p className="text-secondary font-bold text-2xl">
                            Cuntries
                        </p>
                    </div>
                    <div
                        data-aos="zoom-out-down"
                        className="w-auto mx-auto py-7"
                    >
                        <div className="text-4xl text-primary font-bold">
                            <i className="fa-solid fa-diagram-project"></i>
                        </div>
                        <h2 className="text-6xl font-bold my-4">345+</h2>
                        <p className="text-secondary font-bold text-2xl">
                            Complete Projects
                        </p>
                    </div>
                    <div
                        data-aos="zoom-out-down"
                        className="w-auto mx-auto py-7"
                    >
                        <div className="text-4xl text-primary font-bold">
                            <i className="fa-solid fa-users"></i>
                        </div>
                        <h2 className="text-6xl font-bold my-4">235+</h2>
                        <p className="text-secondary font-bold text-2xl">
                            Happy Clients
                        </p>
                    </div>
                    <div
                        data-aos="zoom-out-down"
                        className="w-auto mx-auto py-7"
                    >
                        <div className="text-4xl text-primary font-bold">
                            <i className="fa-solid fa-thumbs-up"></i>
                        </div>
                        <h2 className="text-6xl font-bold my-4">235+</h2>
                        <p className="text-secondary font-bold text-2xl">
                            Feedbacks
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default BusinessDetails;

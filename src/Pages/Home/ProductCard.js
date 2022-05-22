import React from "react";
import cardImg from "../../images/Spark-Plug-A7TC.jpg";
import MyModal from "./MyModal";

const ProductCard = () => {
    return (
        <div className="container text-center py-11">
            <h2 className="text-5xl text-primary text-bold mb-7">
                Parts Recommended
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 justify-center  w-full gap-10 mt-11">
                <div
                    data-aos="zoom-out-down"
                    className="card w-auto bg-base-100 shadow-xl mx-auto"
                >
                    <figure className="px-10 pt-10">
                        <img
                            src={cardImg}
                            alt="Shoes"
                            className="rounded-xl image-full"
                        />
                    </figure>
                    <div className="card-body items-center text-center">
                        <h2 className="card-title text-bold">
                            Spark-Plug-A7TC
                        </h2>
                        <div className="text-left">
                            <p>
                                <strong>Disc:</strong> If a dog chews shoes
                                whose shoes does he choose?
                            </p>
                            <p className="flex justify-between mt-2">
                                Minimum Order quantity: <strong>100</strong>
                            </p>
                            <p className="flex justify-between">
                                Available quantity: <strong>12000</strong>
                            </p>
                            <p className="flex justify-between">
                                Price: <strong>$77</strong>
                            </p>
                        </div>
                        <div className="mt-4">
                            <label
                                htmlFor="my-modal"
                                className=" btn btn-primary"
                            >
                                Place Order
                            </label>
                        </div>
                    </div>
                </div>
                <div
                    data-aos="zoom-out-down"
                    className="card w-auto bg-base-100 shadow-xl mx-auto"
                >
                    <figure className="px-10 pt-10">
                        <img
                            src={cardImg}
                            alt="Shoes"
                            className="rounded-xl image-full"
                        />
                    </figure>
                    <div className="card-body items-center text-center">
                        <h2 className="card-title text-bold">
                            Spark-Plug-A7TC
                        </h2>
                        <div className="text-left">
                            <p>
                                <strong>Disc:</strong> If a dog chews shoes
                                whose shoes does he choose?
                            </p>
                            <p className="flex justify-between mt-2">
                                Minimum Order quantity: <strong>100</strong>
                            </p>
                            <p className="flex justify-between">
                                Available quantity: <strong>12000</strong>
                            </p>
                            <p className="flex justify-between">
                                Price: <strong>$77</strong>
                            </p>
                        </div>
                        <div className="mt-4">
                            <label
                                htmlFor="my-modal"
                                className=" btn btn-primary"
                            >
                                Place Order
                            </label>
                        </div>
                    </div>
                </div>
                <div
                    data-aos="zoom-out-down"
                    className="card w-auto bg-base-100 shadow-xl mx-auto"
                >
                    <figure className="px-10 pt-10">
                        <img
                            src={cardImg}
                            alt="Shoes"
                            className="rounded-xl image-full"
                        />
                    </figure>
                    <div className="card-body items-center text-center">
                        <h2 className="card-title text-bold">
                            Spark-Plug-A7TC
                        </h2>
                        <div className="text-left">
                            <p>
                                <strong>Disc:</strong> If a dog chews shoes
                                whose shoes does he choose?
                            </p>
                            <p className="flex justify-between mt-2">
                                Minimum Order quantity: <strong>100</strong>
                            </p>
                            <p className="flex justify-between">
                                Available quantity: <strong>12000</strong>
                            </p>
                            <p className="flex justify-between">
                                Price: <strong>$77</strong>
                            </p>
                        </div>
                        <div className="mt-4">
                            <label
                                htmlFor="my-modal"
                                className="mt-4 btn btn-primary"
                            >
                                Place Order
                            </label>
                        </div>
                    </div>
                </div>
            </div>

            <MyModal />
        </div>
    );
};

export default ProductCard;

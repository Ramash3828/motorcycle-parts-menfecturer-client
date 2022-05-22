import React from "react";
import cardImg from "../../images/Spark-Plug-A7TC.jpg";

const ProductCard = () => {
    return (
        <div className="container text-center py-11">
            <h2 className="text-5xl text-primary text-bold mb-7">
                Parts Recommended
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 justify-center  w-full gap-10 mt-11">
                <div
                    data-aos="zoom-out-down"
                    class="card w-auto bg-base-100 shadow-xl mx-auto"
                >
                    <figure class="px-10 pt-10">
                        <img
                            src={cardImg}
                            alt="Shoes"
                            class="rounded-xl image-full"
                        />
                    </figure>
                    <div class="card-body items-center text-center">
                        <h2 class="card-title text-bold">Spark-Plug-A7TC</h2>
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
                        <div class="mt-4">
                            <button class="btn btn-primary">Place Order</button>
                        </div>
                    </div>
                </div>
                <div
                    data-aos="zoom-out-down"
                    class="card w-auto bg-base-100 shadow-xl mx-auto"
                >
                    <figure class="px-10 pt-10">
                        <img
                            src={cardImg}
                            alt="Shoes"
                            class="rounded-xl image-full"
                        />
                    </figure>
                    <div class="card-body items-center text-center">
                        <h2 class="card-title text-bold">Spark-Plug-A7TC</h2>
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
                        <div class="mt-4">
                            <button class="btn btn-primary">Place Order</button>
                        </div>
                    </div>
                </div>
                <div
                    data-aos="zoom-out-down"
                    class="card w-auto bg-base-100 shadow-xl mx-auto"
                >
                    <figure class="px-10 pt-10">
                        <img
                            src={cardImg}
                            alt="Shoes"
                            class="rounded-xl image-full"
                        />
                    </figure>
                    <div class="card-body items-center text-center">
                        <h2 class="card-title text-bold">Spark-Plug-A7TC</h2>
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
                        <div class="mt-4">
                            <button class="btn btn-primary">Place Order</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ProductCard;

import React from "react";

const SingleCard = ({ product, setItem }) => {
    return (
        <div
            key={product._id}
            data-aos="zoom-out-down"
            className="card w-auto bg-base-100 shadow-xl mx-auto"
        >
            <figure className="px-10 pt-10">
                <img
                    src={product.img}
                    alt="Shoes"
                    className="rounded-xl image-full"
                />
            </figure>
            <div className="card-body items-center text-center">
                <h2 className="card-title text-bold">{product.name}</h2>
                <div className="text-left">
                    <p>
                        <strong>Disc:</strong>{" "}
                        {product?.desc.length > 20
                            ? product?.desc.slice(0, 25) + " [...]"
                            : product?.desc}
                    </p>
                    <p className="flex justify-between mt-2">
                        Minimum Order quantity: <strong>100</strong>
                    </p>
                    <p className="flex justify-between">
                        Available quantity: <strong>{product.quantity}</strong>
                    </p>
                    <p className="flex justify-between">
                        Price (per 1 product): <strong>${product.price}</strong>
                    </p>
                </div>
                <div className="mt-4">
                    <label
                        onClick={() => setItem(product)}
                        htmlFor="my-modal"
                        className=" btn btn-primary"
                    >
                        Place Order
                    </label>
                </div>
            </div>
        </div>
    );
};

export default SingleCard;

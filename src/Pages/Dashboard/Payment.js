import React, { useEffect, useState } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { useForm } from "react-hook-form";
import { useQuery } from "react-query";

import { Link, useNavigate, useParams } from "react-router-dom";
import { toast } from "react-toastify";
import auth from "../../firebase.init";
import Loading from "../../Shared/Loading/Loading";

const Payment = () => {
    const [user] = useAuthState(auth);
    const [product, setProduct] = useState([]);

    const { id } = useParams();
    const navigate = useNavigate();

    const { data: products, isLoading } = useQuery(["product", id], () =>
        fetch(`http://localhost:5000/my-orders/${user.email}`).then((res) =>
            res.json()
        )
    );
    const { register, handleSubmit, reset } = useForm({
        defaultValues: {
            userEmail: user?.email,
            userName: user?.displayName,
        },
    });
    useEffect(() => {
        const item = products?.find((product) => product._id === id);
        setProduct(item);
        reset();
    }, [id, products, reset]);

    if (isLoading) {
        return <Loading />;
    }
    const ratingChanged = (newRating) => {
        setRatings(newRating);
    };

    const onSubmit = (data) => {
        console.log(data);
    };

    return (
        <div className=" mx-auto py-5 container px-11">
            <h2 className="text-primary bg-accent font-bold text-center text-2xl mb-3">
                Review the products
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-7">
                <div>
                    {product ? (
                        <>
                            {" "}
                            <div className="text-left">
                                <img src={product?.img} alt="name" />
                                <p>
                                    Hello{" "}
                                    <span className="text-secondary">
                                        {user?.displayName}
                                    </span>
                                </p>
                                <p>
                                    Address :{" "}
                                    <span className="text-secondary">
                                        {product?.address}
                                    </span>
                                </p>
                                <p>
                                    Phone :{" "}
                                    <span className="text-secondary">
                                        {product?.phone}
                                    </span>
                                </p>
                                <p className="text-2xl  mb-4">
                                    Please Pay for :{" "}
                                    <span className="text-secondary">
                                        {product?.name}
                                    </span>{" "}
                                    product.
                                </p>
                                <p>
                                    Your order quantity is{" "}
                                    <span className="text-secondary">
                                        {product?.order}
                                    </span>{" "}
                                    and price per product{" "}
                                    <span className="text-secondary">
                                        ${product?.price}
                                    </span>{" "}
                                    <strong>Total amount: </strong>
                                    <span className="text-secondary">
                                        ${product?.grandTotal}
                                    </span>
                                </p>
                                <p className="text-2xl font-bold my-4">
                                    Please pay your amount:{" "}
                                    <span className="text-secondary">
                                        ${product?.grandTotal}
                                    </span>
                                </p>
                            </div>
                        </>
                    ) : (
                        <>
                            <h3 className="text-2xl my-11 mt-11">
                                Please Select the product.{" "}
                                <Link to="/dashboard/my-orders">
                                    {" "}
                                    <span className="text-secondary text-xl">
                                        Click the VIEW ORDER LIST
                                    </span>
                                </Link>{" "}
                                Button and select the product !!!
                            </h3>
                        </>
                    )}
                </div>
                <div>
                    <div className="text-right">
                        <button className="btn btn-outline btn-secondary">
                            <Link to="/dashboard/my-orders">
                                View Order List
                            </Link>
                        </button>
                    </div>
                    <form onSubmit={handleSubmit(onSubmit)}>
                        <div className="form-control w-full ">
                            <label className="label">
                                <span className="label-text">User Name</span>
                            </label>
                            <input
                                required
                                type="text"
                                className="input input-bordered w-full "
                                {...register("userName")}
                            />
                        </div>
                        <div className="form-control w-full ">
                            <label className="label">
                                <span className="label-text">User Email</span>
                            </label>
                            <input
                                required
                                type="email"
                                className="input input-bordered w-full "
                                {...register("userEmail")}
                            />
                        </div>
                        <div className="form-control w-full ">
                            <label className="label">
                                <span className="label-text">Product Name</span>
                            </label>
                            <input
                                required
                                type="text"
                                className="input input-bordered w-full "
                                {...register("productName")}
                            />
                        </div>
                        <div className="form-control w-full ">
                            <label className="label">
                                <span className="label-text">
                                    Description here
                                </span>
                            </label>
                            <textarea
                                required
                                cols="30"
                                rows="4"
                                placeholder="Message"
                                className="border  w-full p-2"
                                {...register("desc")}
                            />
                        </div>

                        <input
                            type="submit"
                            value="Add Review"
                            className="btn  w-full text-white bg-primary mt-2"
                        />
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Payment;

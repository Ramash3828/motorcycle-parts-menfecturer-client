import React, { useEffect, useState } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { useForm } from "react-hook-form";
import auth from "../../firebase.init";
import ReactStars from "react-rating-stars-component";
import { Link, useParams } from "react-router-dom";
import { useQuery } from "react-query";
import Loading from "../../Shared/Loading/Loading";

const MyReview = () => {
    const [user] = useAuthState(auth);
    const [product, setProduct] = useState([]);
    const [ratings, setRatings] = useState(0);

    const { id } = useParams();

    const { data: products, isLoading } = useQuery("product", () =>
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

    const ratingChanged = (newRating) => {
        setRatings(newRating);
    };

    const onSubmit = (data) => {
        const review = {};
        const url = `http://localhost:5000/add-review/${user?.email}`;
        fetch(url, {
            method: "POST",
            body: JSON.stringify(orderBooking),
            headers: {
                "Content-type": "application/json; charset=UTF-8",
            },
        });
    };

    if (isLoading) {
        return <Loading />;
    }

    return (
        <div className=" mx-auto py-11 container">
            <h2 className="text-secondary font-bold text-center text-2xl mb-3">
                Reviews Page
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-7">
                <div>
                    <div className="text-left">
                        <img src={product?.img} alt="name" />
                        <p className="text-2xl text-secondary mb-4">
                            {product?.name}
                        </p>
                        <p>
                            <strong>
                                Description:{" "}
                                {product?.desc ? product?.desc : ""}
                            </strong>
                        </p>
                        <p className="my-2">
                            <strong>Available Quantity: </strong>
                            {product?.quantity}
                        </p>
                        <p>
                            <strong>Price (per 1 product):</strong> $
                            {product?.price}
                        </p>
                    </div>
                    <div className="flex gap-3 w-full items-center">
                        <p>
                            <strong>Ratings: </strong>
                        </p>
                        <ReactStars
                            count={5}
                            value={2}
                            onChange={ratingChanged}
                            size={40}
                            isHalf={true}
                        />
                    </div>
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

export default MyReview;

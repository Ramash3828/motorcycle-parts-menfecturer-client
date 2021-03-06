import React, { useEffect, useState } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { useForm } from "react-hook-form";
import auth from "../../firebase.init";
import ReactStars from "react-rating-stars-component";
import { Link, useNavigate, useParams } from "react-router-dom";
import { useQuery } from "react-query";
import Loading from "../../Shared/Loading/Loading";
import { toast } from "react-toastify";

const MyReview = () => {
    const [user] = useAuthState(auth);
    const [product, setProduct] = useState([]);
    const [ratings, setRatings] = useState(0);
    const [inputData, setInputData] = useState("");

    const { id } = useParams();
    const navigate = useNavigate();

    const { data: products, isLoading } = useQuery("product", () =>
        fetch(
            `https://agile-reef-29566.herokuapp.com/my-orders/${user.email}`,
            {
                method: "GET",
                headers: {
                    authorization: `Bearer ${localStorage.getItem(
                        "accessToken"
                    )}`,
                },
            }
        ).then((res) => res.json())
    );
    const { register, handleSubmit, reset } = useForm();
    useEffect(() => {
        const item = products?.find((product) => product._id === id);
        setProduct(item);
    }, [id, products, reset]);

    useEffect(() => {
        setInputData({
            userEmail: user?.email,
            userName: user?.displayName,
            productName: product?.name,
            productRatings: ratings,
        });
    }, [user?.email, user?.displayName, product?.name, ratings]);
    useEffect(() => {
        reset(inputData);
    }, [inputData, reset]);

    const ratingChanged = (newRating) => {
        setRatings(newRating);
    };

    const onSubmit = (data) => {
        console.log(data.productRatings);
        const review = {
            email: data.userEmail,
            userName: data.userName,
            productName: data.productName,
            desc: data.desc,
            img: product?.img,
            ratings: data.productRatings,
            reviewCount: 1,
        };

        // Add Review to database
        const url = `https://agile-reef-29566.herokuapp.com/add-review/${product?._id}`;
        fetch(url, {
            method: "PUT",
            body: JSON.stringify(review),
            headers: {
                authorization: `Bearer ${localStorage.getItem("accessToken")}`,
                "Content-type": "application/json",
            },
        })
            .then((res) => res.json())
            .then((reviewData) => {
                toast.success(reviewData.message);
                navigate("/dashboard/my-orders");
            });
    };

    if (isLoading) {
        return <Loading />;
    }

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
                                disabled
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
                                disabled
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
                                disabled
                                type="text"
                                className="input input-bordered w-full "
                                {...register("productName")}
                            />
                        </div>
                        <div className="form-control w-full ">
                            <label className="label">
                                <span className="label-text">Ratings</span>
                            </label>
                            <input
                                disabled
                                type="text"
                                className="input input-bordered w-full "
                                {...register("productRatings")}
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
/**
acknowledged: true
matchedCount: 0
modifiedCount: 0
upsertedCount: 1
upsertedId: "628d1cdf2786e802d79fc508"
*/

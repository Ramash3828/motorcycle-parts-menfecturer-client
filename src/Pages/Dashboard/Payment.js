import React, { useEffect, useState } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { useForm } from "react-hook-form";
import { useQuery } from "react-query";

import { Link, useNavigate, useParams } from "react-router-dom";
import { toast } from "react-toastify";
import auth from "../../firebase.init";
import Loading from "../../Shared/Loading/Loading";
import { loadStripe } from "@stripe/stripe-js";
import {
    CardElement,
    Elements,
    useStripe,
    useElements,
} from "@stripe/react-stripe-js";
import CheckoutForm from "./CheckoutForm";

const stripePromise = loadStripe(
    "pk_test_51L3ESPBIdT4KTE6FN07exTA21obcnNEvrE2RGzFVTfDnkhmvaiRe24Psl6LBSAli6CmWN3aRvck6KaYrU7D9WRmr00MAIlUijZ"
);

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

    useEffect(() => {
        const item = products?.find((product) => product._id === id);
        setProduct(item);
    }, [id, products]);

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
                    <div class="card w-96 bg-base-100 shadow-xl">
                        <div className="mt-11">
                            <div class="card-body text-left">
                                <Elements stripe={stripePromise}>
                                    <CheckoutForm />
                                </Elements>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Payment;

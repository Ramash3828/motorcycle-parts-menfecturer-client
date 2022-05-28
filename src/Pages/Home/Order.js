import React, { useEffect, useState } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import auth from "../../firebase.init";

const Order = ({ item }) => {
    const [user] = useAuthState(auth);
    const { _id } = item;
    const [sold, setSold] = useState(100);
    const [products, setProducts] = useState("");

    const navigate = useNavigate();
    const { register, handleSubmit, reset } = useForm();
    useEffect(() => {
        setProducts({
            userName: user?.displayName,
            userEmail: user?.email,
            partsName: item?.name,
            partsPrice: item?.price,
            partsQty: item?.quantity,
        });
    }, [
        item?.name,
        item?.price,
        item?.quantity,
        item?.img,
        user?.displayName,
        user?.email,
        sold,
    ]);
    useEffect(() => {
        reset(products);
    }, [reset, products]);

    const onSubmit = (data) => {
        const grandTotal = Number(sold) * Number(item?.price);

        const orderBooking = {
            name: item?.name,
            img: item?.img,
            address: data?.address,
            phone: data?.phone,
            desc: item?.desc,
            price: item?.price,
            quantity: item?.quantity,
            order: sold,
            grandTotal: grandTotal,
            userName: user?.displayName,
            email: user?.email,
        };

        const balance = Number(item?.quantity) - Number(sold);
        item["quantity"] = balance;
        delete item?._id;

        const url = `http://localhost:5000/add-order/`;
        fetch(url, {
            method: "POST",
            body: JSON.stringify(orderBooking),
            headers: {
                "Content-type": "application/json; charset=UTF-8",
            },
        })
            .then((res) => res.json())
            .then((data) => {
                if (data?.result.insertedId) {
                    setSold(100);

                    toast.success(data?.message);

                    // Update quantity
                    fetch(`http://localhost:5000/update-product/${_id}`, {
                        method: "PUT",
                        body: JSON.stringify({ ...item }),
                        headers: {
                            "Content-type": "application/json; charset=UTF-8",
                            authorization: `bearer ${localStorage.getItem(
                                "accessToken"
                            )}`,
                        },
                    })
                        .then((res) => res.json())
                        .then((updateQty) => {});
                    navigate("/dashboard/my-orders");
                }
            });
    };

    return (
        <div className="w-full">
            <input type="checkbox" id="my-modal" className="modal-toggle" />
            <div className="modal">
                <div className="modal-box">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-2 justify-center ">
                        <div className="mx-auto">
                            <img src={item?.img} alt="name" />
                            <p className="text-2xl text-secondary mb-4">
                                {item?.name}
                            </p>
                            <p>
                                <strong>Description:</strong> {item?.desc}
                            </p>
                            <p className="my-2">
                                <strong>Available Quantity:</strong>
                                {item?.quantity}
                            </p>
                            <p>
                                <strong>Price (per 1 product):</strong>$
                                {item?.price}
                            </p>
                        </div>
                        <div className="mx-auto">
                            <form onSubmit={handleSubmit(onSubmit)}>
                                <input
                                    type="text"
                                    className="input input-bordered input-info w-full max-w-xs mb-2"
                                    {...register("userName")}
                                />
                                <input
                                    type="text"
                                    className="input input-bordered input-info w-full max-w-xs mb-2"
                                    {...register("userEmail")}
                                />
                                <input
                                    required
                                    placeholder="Address"
                                    type="text"
                                    className="input input-bordered input-info w-full max-w-xs mb-2"
                                    {...register("address")}
                                />
                                <input
                                    required
                                    placeholder="Phone Number"
                                    type="number"
                                    className="input input-bordered input-info w-full max-w-xs mb-2"
                                    {...register("phone")}
                                />
                                <div>
                                    <label htmlFor="">
                                        <small>Available Quantity</small>
                                    </label>
                                    <input
                                        type="number"
                                        className="input input-bordered input-info w-full max-w-xs mb-2"
                                        {...register("partsQty")}
                                    />
                                </div>
                                <div>
                                    <label htmlFor="">
                                        <small>Product Price (Per piece)</small>
                                    </label>
                                    <input
                                        type="number"
                                        className="input input-bordered input-info w-full max-w-xs mb-2"
                                        {...register("partsPrice")}
                                    />
                                </div>
                                <div>
                                    <label htmlFor="">
                                        <small>Order Quantity</small>
                                    </label>
                                    <input
                                        onChange={(e) =>
                                            setSold(e.target.value)
                                        }
                                        value={sold}
                                        type="number"
                                        name="partsSold"
                                        className="input input-bordered input-info w-full max-w-xs mb-2"
                                        // {...register("partsSold")}
                                    />
                                </div>

                                <p className="text-red-500">
                                    <small>
                                        {sold < 100 || sold > item?.quantity
                                            ? `You must be input 100 to ${item?.quantity}`
                                            : ""}
                                    </small>
                                </p>

                                <input
                                    disabled={
                                        sold < 100 || sold > item?.quantity
                                            ? true
                                            : false
                                    }
                                    className="btn btn-primary w-full"
                                    type="submit"
                                    value="Submit"
                                />
                            </form>
                        </div>
                    </div>
                    <div className="modal-action">
                        <label
                            onClick={() => setSold(100)}
                            htmlFor="my-modal"
                            className="btn"
                        >
                            Close
                        </label>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Order;

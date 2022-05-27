import React, { useState } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import auth from "../../firebase.init";

const MyOrder = ({ item }) => {
    const [user] = useAuthState(auth);

    const [sold, setSold] = useState(100);

    const [address, setAddress] = useState("");
    const [phone, setPhone] = useState("");
    const [errorInfo, setErrorInfo] = useState(false);
    const navigate = useNavigate();

    const Order = (event) => {
        event.preventDefault();
        if (sold > Number(item?.quantity) || sold < 100) {
            return setErrorInfo(!errorInfo);
        } else {
            setErrorInfo(false);
        }
        const grandTotal = Number(sold) * Number(item?.price);

        const orderBooking = {
            name: item?.name,
            img: item?.img,
            address: address,
            phone: phone,
            desc: item?.desc,
            price: item?.price,
            quantity: item?.quantity,
            order: sold,
            grandTotal: grandTotal,
            userName: user?.displayName,
            email: user?.email,
        };

        const balance = Number(item.quantity) - Number(sold);
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
                    setAddress("");
                    setPhone("");

                    toast.success(data?.message);

                    // Update quantity
                    fetch(`http://localhost:5000/update-product/${item?._id}`, {
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
                            <form onSubmit={Order} className="mt-3">
                                <input
                                    readOnly
                                    value={user?.displayName}
                                    type="text"
                                    className="input input-bordered input-info w-full max-w-xs mb-2"
                                />
                                <input
                                    readOnly
                                    value={user?.email}
                                    type="text"
                                    className="input input-bordered input-info w-full max-w-xs mb-2"
                                />
                                <input
                                    required
                                    onChange={(e) => setAddress(e.target.value)}
                                    placeholder="Address"
                                    type="text"
                                    className="input input-bordered input-info w-full max-w-xs mb-2"
                                />
                                <input
                                    required
                                    onChange={(e) => setPhone(e.target.value)}
                                    placeholder="Phone Number"
                                    type="number"
                                    className="input input-bordered input-info w-full max-w-xs mb-2"
                                />
                                <div>
                                    <label htmlFor="">
                                        <small>Available Quantity</small>
                                    </label>
                                    <input
                                        readOnly
                                        value={item?.quantity}
                                        type="number"
                                        className="input input-bordered input-info w-full max-w-xs mb-2"
                                    />
                                </div>
                                <div>
                                    <label htmlFor="">
                                        <small>Product Price (Per piece)</small>
                                    </label>
                                    <input
                                        readOnly
                                        value={item?.price}
                                        type="number"
                                        className="input input-bordered input-info w-full max-w-xs mb-2"
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
                                        value={Number(sold)}
                                        type="number"
                                        className="input input-bordered input-info w-full max-w-xs mb-2"
                                    />
                                </div>
                                {errorInfo && (
                                    <p className="text-red-500">
                                        <small>No available products</small>
                                    </p>
                                )}
                                <input
                                    disabled={
                                        sold < 100 ||
                                        sold > Number(item?.quantity)
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

export default MyOrder;

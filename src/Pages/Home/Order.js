import React, { useState } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { toast } from "react-toastify";
import auth from "../../firebase.init";

const MyModal = ({ item }) => {
    const [user] = useAuthState(auth);
    const { name, price, img, desc, quantity } = item;
    const [sold, setSold] = useState(100);
    const [errorInfo, setErrorInfo] = useState(false);

    const addProduct = (event) => {
        event.preventDefault();
        if (sold > quantity || sold < 100) {
            return setErrorInfo(!errorInfo);
        } else {
            setErrorInfo(false);
        }
        const grandTotal = Number(sold) * Number(price);

        const orderBooking = {
            name: name,
            img: img,
            desc: desc,
            price: price,
            order: sold,
            grandTotal: grandTotal,
            email: user.email,
        };
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
                console.log(data);
                if (data.result.insertedId) {
                    toast.success(data.message);
                    setSold(100);
                }
            });
    };
    return (
        <div>
            <input type="checkbox" id="my-modal" className="modal-toggle" />
            <div className="modal">
                <div className="modal-box">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-2 justify-center">
                        <div className="mx-auto">
                            <img src={img} alt="name" />
                        </div>
                        <div className="mx-auto">
                            <p className="text-2xl text-secondary mb-4">
                                {name}
                            </p>
                            <p>
                                <strong>Description:</strong> {desc}
                            </p>
                            <p className="my-2">
                                <strong>Available Quantity:</strong>
                                {quantity}
                            </p>
                            <p>
                                <strong>Price (per 1 product):</strong>${price}
                            </p>
                            {errorInfo && (
                                <p className="text-red-500">
                                    <small>No available products</small>
                                </p>
                            )}
                            <form onSubmit={addProduct} className="mt-3">
                                <input
                                    onChange={(e) => setSold(e.target.value)}
                                    value={sold}
                                    type="number"
                                    className="input input-bordered input-info w-full max-w-xs mb-2"
                                />
                                <input
                                    disabled={errorInfo}
                                    className="btn btn-primary w-full"
                                    type="submit"
                                    value="Submit"
                                />
                            </form>
                        </div>
                    </div>
                    <div className="modal-action">
                        <label htmlFor="my-modal" className="btn">
                            Close
                        </label>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default MyModal;

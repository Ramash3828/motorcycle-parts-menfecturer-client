import React, { useEffect, useState } from "react";
import { CardElement, useElements, useStripe } from "@stripe/react-stripe-js";

const CheckoutForm = ({ product }) => {
    const _id = product?._id;
    const stripe = useStripe();
    const elements = useElements();
    const [cardError, setCardError] = useState("");
    const [cardSuccess, setCardSuccess] = useState("");
    const [transactionId, setTransactionId] = useState("");
    const [process, setProcess] = useState(false);
    const [clientSecret, setClientSecret] = useState("");

    const price = product?.price;

    useEffect(() => {
        fetch(`/create-payment-intent`, {
            method: "POST",
            headers: {
                authorization: `Bearer ${localStorage.getItem("accessToken")}`,
                "Content-type": "application/json",
            },
            body: JSON.stringify({ price: price }),
        })
            .then((res) => res.json())
            .then((data) => {
                if (data?.clientSecret) {
                    console.log(data?.clientSecret);
                    setClientSecret(data?.clientSecret);
                }
            });
    }, [product, price]);

    const handleSubmit = async (event) => {
        event.preventDefault();

        if (!stripe || !elements) {
            return;
        }
        const card = elements.getElement(CardElement);

        if (card === null) {
            return;
        }
        const { error, paymentMethod } = await stripe.createPaymentMethod({
            type: "card",
            card,
        });

        if (error) {
            console.log("[error]", error);
            setCardError(error?.message);
        } else {
            setCardError("");
            console.log("[PaymentMethod]", paymentMethod);
            setCardSuccess("");
            setProcess(true);
        }
        // Confirm Payment
        const { paymentIntent, payError } = await stripe.confirmCardPayment(
            clientSecret,
            {
                payment_method_types: {
                    card: card,
                    billing_details: {
                        name: product?.userName,
                        email: product?.userEmail,
                        address: product?.address,
                    },
                },
            }
        );

        if (payError) {
            setCardError(payError?.message);
            setProcess(false);
        } else {
            setCardError("");
            setTransactionId(paymentIntent?.id);
            console.log(paymentIntent);
            setCardSuccess("Congratulation !!!");
            const payment = {
                bookingId: _id,
                transactionId: paymentIntent.id,
            };
            fetch(`http://localhost:5000/booking/${_id}`, {
                method: "PATCH",
                headers: {
                    "content-type": "application/json",
                    authorization: `Bearer ${localStorage.getItem(
                        "accessToken"
                    )}`,
                },
                body: JSON.stringify(payment),
            })
                .then((res) => res.json())
                .then((data) => {
                    setProcess(false);
                    console.log(data);
                });
        }
    };

    return (
        <>
            <form onSubmit={handleSubmit}>
                <CardElement
                    options={{
                        style: {
                            base: {
                                fontSize: "16px",
                                color: "#424770",
                                "::placeholder": {
                                    color: "#aab7c4",
                                },
                            },
                            invalid: {
                                color: "#9e2146",
                            },
                        },
                    }}
                />
                <button
                    className="btn btn-sm btn-success"
                    type="submit"
                    disabled={!stripe || !clientSecret}
                >
                    Pay
                </button>
            </form>
            {cardError && <p className="text-red-500">{cardError}</p>}
            {cardSuccess && (
                <div className="text-green-500">
                    <p>{cardSuccess}</p>
                    <p>
                        Transaction ID :{" "}
                        <span className="text-red-500">{transactionId}</span>
                    </p>
                </div>
            )}
        </>
    );
};

export default CheckoutForm;

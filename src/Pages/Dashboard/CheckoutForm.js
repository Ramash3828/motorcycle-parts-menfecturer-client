import React, { useEffect, useState } from "react";
import { CardElement, useElements, useStripe } from "@stripe/react-stripe-js";

const CheckoutForm = ({ product }) => {
    // const { userName, userEmail, address } = product;
    const [cardError, setCardError] = useState("");
    const [cardSuccess, setCardSuccess] = useState("");
    const [transactionId, setTransactionId] = useState("");
    const [clientSecret, setClientSecret] = useState("");
    const stripe = useStripe();
    const elements = useElements();
    const price = product?.price;

    useEffect(() => {
        fetch(`/create-payment-intent`, {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ price: price }),
        })
            .then((res) => res.json())
            .then((data) => {
                if (data.clientSecret) {
                    console.log(data.clientSecret);
                    setClientSecret(data.clientSecret);
                }
            });
    }, [product, price]);

    const handleSubmit = async (event) => {
        event.preventDefault();

        if (!stripe || !elements) {
            return;
        }
        const card = elements.getElement(CardElement);

        if (card == null) {
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
        }
        setCardSuccess("");
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
        console.log(clientSecret);
        if (payError) {
            setCardError(payError?.message);
        } else {
            setCardError("");
            setTransactionId(paymentIntent?.id);
            console.log(paymentIntent);
            setCardSuccess("Congratulation !!!");
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

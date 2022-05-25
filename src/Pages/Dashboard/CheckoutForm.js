import React, { useState } from "react";
import {
    CardElement,
    Elements,
    useStripe,
    useElements,
} from "@stripe/react-stripe-js";

const CheckoutForm = () => {
    const [cardError, setCardError] = useState("");
    const stripe = useStripe();
    const elements = useElements();

    const handleSubmit = async (event) => {
        event.preventDefault();

        if (!stripe || !elements) {
            // Stripe.js has not loaded yet. Make sure to disable
            // form submission until Stripe.js has loaded.
            return;
        }

        // Get a reference to a mounted CardElement. Elements knows how
        // to find your CardElement because there can only ever be one of
        // each type of element.
        const card = elements.getElement(CardElement);

        if (card == null) {
            return;
        }

        // Use your card Element with other Stripe.js APIs
        const { error, paymentMethod } = await stripe.createPaymentMethod({
            type: "card",
            card,
        });

        if (error) {
            console.log("[error]", error);
            setCardError(error.message);
        } else {
            setCardError("");
            console.log("[PaymentMethod]", paymentMethod);
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
                    disabled={!stripe}
                >
                    Pay
                </button>
            </form>
            {cardError && <p className="text-red-500">{cardError}</p>}
        </>
    );
};

export default CheckoutForm;

import React from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { useQuery } from "react-query";
import auth from "../../firebase.init";
import Loading from "../../Shared/Loading/Loading";
import OrdersRow from "./OrdersRow";

const MyOrder = () => {
    const [user] = useAuthState(auth);
    const {
        data: orders,
        isLoading,
        refetch,
    } = useQuery(["order", user], () =>
        fetch(
            `https://agile-reef-29566.herokuapp.com/my-orders/${user.email}`,
            {
                method: "GET",
                headers: {
                    authorization: `Bearer ${localStorage.getItem(
                        "accessToken"
                    )}`,
                    "Content-type": "application/json",
                },
            }
        ).then((res) => res.json())
    );

    if (isLoading) {
        return <Loading />;
    }

    return (
        <div>
            <h2 className="text-secondary font-bold text-2xl mb-3 bg-accent">
                My Orders
            </h2>
            <div className="overflow-x-auto">
                <table className="table w-full">
                    <thead>
                        <tr>
                            <th>SL.</th>
                            <th>Product Name</th>
                            <th>Picture</th>
                            <th>Order(QTY)</th>
                            <th>price</th>
                            <th>Product QTY</th>
                            <th>Action</th>
                        </tr>
                    </thead>

                    <tbody>
                        {orders?.map((order, index) => (
                            <OrdersRow
                                key={order?._id}
                                index={index}
                                order={order}
                                refetch={refetch}
                            />
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default MyOrder;

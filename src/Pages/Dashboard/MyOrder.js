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
    } = useQuery(["orders", user], () =>
        fetch(`http://localhost:5000/my-orders/${user.email}`).then((res) =>
            res.json()
        )
    );
    const { data: count } = useQuery("reviewCount", () =>
        fetch(`http://localhost:5000/add-review/count`).then((res) =>
            res.json()
        )
    );
    const reviewCount = count?.reviewCount;
    if (isLoading) {
        return <Loading />;
    }

    return (
        <div>
            <h2 className="text-secondary font-bold text-2xl mb-3">My Order</h2>
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
                                key={order._id}
                                reviewCount={reviewCount}
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

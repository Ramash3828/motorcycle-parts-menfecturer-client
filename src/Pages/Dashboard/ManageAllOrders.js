import React from "react";
import { useQuery } from "react-query";
import Loading from "../../Shared/Loading/Loading";
import ManageAllOrdersRow from "./ManageAllOrdersRow";

const ManageAllOrders = () => {
    const {
        data: allOrders,
        isLoading,
        refetch,
    } = useQuery("allOrders", () =>
        fetch(`http://localhost:5000/all-orders`, {
            method: "GET",
            headers: {
                authorization: `bearer ${localStorage.getItem("accessToken")}`,
            },
        }).then((res) => res.json())
    );
    if (isLoading) {
        return <Loading />;
    }
    return (
        <div>
            <h2 className="text-secondary font-bold text-2xl mb-3">
                Manage All Orders
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
                            <th>User Name</th>
                            <th>Email</th>
                            <th>Address</th>
                            <th>Phone</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {allOrders?.map((allOrder, index) => (
                            <ManageAllOrdersRow
                                key={allOrder._id}
                                allOrder={allOrder}
                                refetch={refetch}
                                index={index}
                            />
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default ManageAllOrders;

import React from "react";
import { useQuery } from "react-query";

const ManageProduct = () => {
    const { data: allOrders, isloading } = useQuery("allOrders", () =>
        fetch(`http://localhost:5000/all-orders`).then((res) => res.json())
    );

    return (
        <div>
            <h2 className="text-secondary font-bold text-2xl">All Orders</h2>
            <div className="overflow-x-auto">
                <table className="table w-full">
                    <thead>
                        <tr>
                            <th>SL.</th>
                            <th>Product Name</th>
                            <th>Picture</th>
                            <th>Order(QTY)</th>
                            <th>price</th>
                            <th>Total</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody></tbody>
                </table>
            </div>
        </div>
    );
};

export default ManageProduct;

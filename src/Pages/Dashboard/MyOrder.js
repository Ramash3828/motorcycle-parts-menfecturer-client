import React from "react";
import { useQuery } from "react-query";
import Loading from "../../Shared/Loading/Loading";

const MyOrder = () => {
    const { data: orders, isLoading } = useQuery("orders", () =>
        fetch(`http://localhost:5000/my-orders/jacklin@gmail.com`).then((res) =>
            res.json()
        )
    );
    if (isLoading) {
        return <Loading />;
    }

    return (
        <div>
            <h2>My Order: {orders.length}</h2>
            <div class="overflow-x-auto">
                <table class="table w-full">
                    <thead>
                        <tr>
                            <th></th>
                            <th>Product Name</th>
                            <th>Picture</th>
                            <th>Quantity</th>
                            <th>price</th>
                            <th>Total</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <th>1</th>
                            <td>ProductName</td>
                            <td>
                                {" "}
                                <div class="avatar">
                                    <div class="w-16 rounded">
                                        <img
                                            src="https://api.lorem.space/image/face?hash=77703"
                                            alt="Tailwind-CSS-Avatar-component"
                                        />
                                    </div>
                                </div>
                            </td>
                            <td>Quantity</td>
                            <td>price</td>
                            <td>Total</td>
                            <td>
                                <button className="btn btn-xs">Delete</button>
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default MyOrder;

import React from "react";
import { Link } from "react-router-dom";
import { toast } from "react-toastify";

const OrdersRow = ({ index, order, refetch }) => {
    const handleDelete = () => {
        const confirmMessage = window.confirm("Are you shore delete Order?");
        if (confirmMessage) {
            fetch(
                `https://agile-reef-29566.herokuapp.com/delete-orders/${order?._id}`,
                {
                    method: "DELETE",
                }
            ).then((res) =>
                res.json().then((data) => {
                    toast.success(data?.message);
                    refetch();
                })
            );
        }
    };
    return (
        <tr key={index}>
            <th>{index + 1}</th>
            <td>{order?.name}</td>
            <td>
                {" "}
                <div className="avatar">
                    <div className="w-16 rounded">
                        <img src={order?.img} alt={order?.name} />
                    </div>
                </div>
            </td>
            <td>{order?.order}</td>
            <td>${order?.price}</td>
            <td>${order?.quantity}</td>
            <td>
                <button className="btn btn-xs bg-secondary">
                    {" "}
                    <Link to={`/dashboard/payment/${order?._id}`}>Payment</Link>
                </button>
                <button className="btn btn-xs bg-purple-500">
                    <Link to={`/dashboard/add-review/${order?._id}`}>
                        Review
                    </Link>
                </button>
                <button
                    onClick={handleDelete}
                    className="btn btn-xs bg-red-400"
                >
                    Delete
                </button>
            </td>
        </tr>
    );
};

export default OrdersRow;

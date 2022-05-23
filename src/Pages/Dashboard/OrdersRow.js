import React from "react";
import { toast } from "react-toastify";

const OrdersRow = ({ index, order, refetch }) => {
    const { _id } = order;
    const handleDelete = () => {
        const confirmMessage = window.confirm("Are you shore delete Order?");
        if (confirmMessage) {
            fetch(`http://localhost:5000/delete-orders/${_id}`, {
                method: "DELETE",
            }).then((res) =>
                res.json().then((data) => {
                    toast.success(data.message);
                    refetch();
                })
            );
        }
    };
    return (
        <tr key={index}>
            <th>{index + 1}</th>
            <td>{order.name}</td>
            <td>
                {" "}
                <div className="avatar">
                    <div className="w-16 rounded">
                        <img src={order.img} alt={order.name} />
                    </div>
                </div>
            </td>
            <td>{order.order}</td>
            <td>{order.price}</td>
            <td>{order.gradTotal}</td>
            <td>
                <button onClick={handleDelete} className="btn btn-xs">
                    Delete
                </button>
            </td>
        </tr>
    );
};

export default OrdersRow;

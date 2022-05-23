import React from "react";

const ManageProductRow = ({ allOrder, refetch, index }) => {
    const { name, img, price, order, email, grandTotal } = allOrder;

    return (
        <tr>
            <th>{index + 1}</th>
            <td>{name}</td>
            <td>
                {" "}
                <div className="avatar">
                    <div className="w-16 rounded">
                        <img src={img} alt={name} />
                    </div>
                </div>
            </td>
            <td>{email}</td>
            <td>{order}</td>
            <td>${price}</td>
            <td>${grandTotal}</td>
            <td>
                <button className="btn btn-xs bg-secondary">pending</button>
            </td>
        </tr>
    );
};

export default ManageProductRow;

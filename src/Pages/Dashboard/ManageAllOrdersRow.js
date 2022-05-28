import React from "react";

const ManageAllOrdersRow = ({ allOrder, refetch, index }) => {
    const { name, img, price, order, email, userName, address, phone } =
        allOrder;

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
            <td>{order}</td>
            <td>${price}</td>
            <td>{userName}</td>
            <td>{email}</td>
            <td>{address}</td>
            <td>${phone}</td>
            <td>
                <button className="btn btn-xs bg-secondary">pending</button>
                <button className="btn btn-xs bg-secondary">Cancel</button>
            </td>
        </tr>
    );
};

export default ManageAllOrdersRow;

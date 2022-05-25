import React from "react";

const ManageProductsRow = () => {
    return (
        <tr>
            <td></td>
            <td></td>

            <td></td>
            <td>$</td>
            <td>$</td>
            <td>
                <button className="btn btn-xs bg-secondary">
                    {" "}
                    {/* <Link to={`/dashboard/payment/${_id}`}>Payment</Link> */}
                </button>
                <button className="btn btn-xs bg-purple-500">
                    {/* <Link to={`/dashboard/add-review/${_id}`}>Review</Link> */}
                </button>
                <button className="btn btn-xs bg-red-400">Delete</button>
            </td>
        </tr>
    );
};

export default ManageProductsRow;

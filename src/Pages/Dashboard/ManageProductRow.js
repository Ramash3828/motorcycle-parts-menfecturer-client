import React from "react";

const ManageProductRow = () => {
    return (
        <div>
            <tr>
                <th>{}</th>
                <td>{}</td>
                <td>
                    {" "}
                    <div className="avatar">
                        <div className="w-16 rounded">
                            <img src="" alt="" />
                        </div>
                    </div>
                </td>
                <td>{}</td>
                <td>{}</td>
                <td>{}</td>
                <td>
                    <button className="btn btn-xs">pending</button>
                </td>
            </tr>
        </div>
    );
};

export default ManageProductRow;

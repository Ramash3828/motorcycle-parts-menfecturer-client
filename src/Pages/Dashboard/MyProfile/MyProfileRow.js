import React from "react";
import { Link } from "react-router-dom";

const MyProfileRow = ({ user, index, refetch }) => {
    const { name, email, address, phone } = user;

    return (
        <tr>
            <td>{index + 1}</td>
            <td>{name}</td>
            <td>{email}</td>
            <td>{address ? address : " cannot updated"}</td>
            <td>{phone ? phone : " cannot updated"}</td>

            <td>
                <button className="btn btn-xs bg-secondary">
                    <Link to={`/dashboard/update-profile/${user._id}`}>
                        Update
                    </Link>
                </button>
            </td>
        </tr>
    );
};

export default MyProfileRow;

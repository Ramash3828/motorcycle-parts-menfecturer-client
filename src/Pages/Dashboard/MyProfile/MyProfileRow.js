import React from "react";
import { Link } from "react-router-dom";

const MyProfileRow = ({ user, index, refetch }) => {
    const { name, email, address, phone } = user;

    return (
        <tr key={index}>
            <td>{index + 1}</td>
            <td>{name}</td>
            <td>{email}</td>
            <td>
                {address ? (
                    address
                ) : (
                    <small className="text-info">Cannot Updated</small>
                )}
            </td>
            <td>
                {phone ? (
                    phone
                ) : (
                    <small className="text-info">Cannot Updated</small>
                )}
            </td>

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

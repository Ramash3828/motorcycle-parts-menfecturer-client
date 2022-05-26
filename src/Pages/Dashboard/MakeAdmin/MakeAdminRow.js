import React from "react";
import { toast } from "react-toastify";

const MakeAdminRow = ({ user, index, refetch }) => {
    const { name, email } = user;

    const makeAdmin = () => {
        fetch(`http://localhost:5000/user/admin/${email}`, {
            method: "PUT",
            headers: {
                authorization: `bearer ${localStorage.getItem("accessToken")}`,
            },
        })
            .then((res) => {
                if (res.status === 403) {
                    toast.error("You cannot make an Admin");
                }
                return res.json();
            })
            .then((data) => {
                if (data.modifiedCount > 0) {
                    toast.success("You made Admin successfully");
                    refetch();
                }
            });
    };

    return (
        <tr>
            <td>{index + 1}</td>
            <td>{name}</td>
            <td>{email}</td>

            <td>
                {!user.role && (
                    <button
                        onClick={makeAdmin}
                        className="btn btn-xs bg-secondary"
                    >
                        Make Admin
                    </button>
                )}
            </td>
        </tr>
    );
};

export default MakeAdminRow;

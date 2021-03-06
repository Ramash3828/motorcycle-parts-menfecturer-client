import React from "react";
import { toast } from "react-toastify";

const MakeAdminRow = ({ userData, index, refetch }) => {
    console.log(userData);

    const makeAdmin = () => {
        fetch(
            `https://agile-reef-29566.herokuapp.com/user/admin/${userData?.email}`,
            {
                method: "PUT",
                headers: {
                    authorization: `Bearer ${localStorage.getItem(
                        "accessToken"
                    )}`,
                },
            }
        )
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
            <td>{userData?.name}</td>
            <td>{userData?.email}</td>

            <td>
                {!userData?.role && (
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

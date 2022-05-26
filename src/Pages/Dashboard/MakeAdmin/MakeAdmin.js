import React from "react";
import { useQuery } from "react-query";
import Loading from "../../../Shared/Loading/Loading";
import MakeAdminRow from "./MakeAdminRow";

const MakeAdmin = () => {
    const {
        data: userData,
        isLoading,
        refetch,
    } = useQuery("user", () =>
        fetch(`http://localhost:5000/users`, {
            method: "GET",
            headers: {
                authorization: `bearer ${localStorage.getItem("accessToken")}`,
            },
        }).then((res) => res.json())
    );
    if (isLoading) {
        return <Loading />;
    }

    return (
        <div>
            <h2 className="text-secondary font-bold text-2xl mb-3 bg-accent">
                Login users are here
            </h2>
            <div className="overflow-x-auto">
                <table className="table w-full">
                    <thead>
                        <tr>
                            <th>SL.</th>
                            <th>User Name</th>

                            <th>user Email</th>

                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {userData.map((user, index) => (
                            <MakeAdminRow
                                key={user._id}
                                index={index}
                                user={user}
                                refetch={refetch}
                            />
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default MakeAdmin;

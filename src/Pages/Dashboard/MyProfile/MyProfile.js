import React from "react";
import { useQuery } from "react-query";
import Loading from "../../../Shared/Loading/Loading";
import MyProfileRow from "./MyProfileRow";

const MyProfile = () => {
    const {
        data: userData,
        isLoading,
        refetch,
    } = useQuery("user", () =>
        fetch(`http://localhost:5000/users`, {
            method: "GET",
            headers: {
                authorization: `Bearer ${localStorage.getItem("accessToken")}`,
                "Content-type": "application/json",
            },
        }).then((res) => res.json())
    );
    if (isLoading) {
        return <Loading />;
    }
    return (
        <div>
            <h2 className="text-secondary font-bold text-2xl mb-3 bg-accent">
                User Profile
            </h2>
            <div className="overflow-x-auto">
                <table className="table w-full">
                    <thead>
                        <tr>
                            <th>SL.</th>
                            <th>User Name</th>

                            <th>user Email</th>
                            <th>Address</th>
                            <th>Phone</th>

                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {userData.map((user, index) => (
                            <MyProfileRow
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

export default MyProfile;

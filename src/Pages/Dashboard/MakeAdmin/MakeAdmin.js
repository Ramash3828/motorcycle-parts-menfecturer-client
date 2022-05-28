import React from "react";
import { useQuery } from "react-query";
import Loading from "../../../Shared/Loading/Loading";
import MakeAdminRow from "./MakeAdminRow";

const MakeAdmin = () => {
    const {
        data: usersData,
        isLoading,
        refetch,
    } = useQuery("user", () =>
        fetch(`https://agile-reef-29566.herokuapp.com/users`, {
            method: "GET",
            headers: {
                authorization: `Bearer ${localStorage.getItem("accessToken")}`,
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
                        {usersData?.map((userData, index) => (
                            <MakeAdminRow
                                key={userData._id}
                                index={index}
                                userData={userData}
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

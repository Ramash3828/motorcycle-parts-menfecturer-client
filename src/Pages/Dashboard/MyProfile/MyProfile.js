import React from "react";

const MyProfile = () => {
    return (
        <div>
            <h2 className="text-secondary font-bold text-2xl mb-3 bg-accent">
                My Orders
            </h2>
            <div className="overflow-x-auto">
                <table className="table w-full">
                    <thead>
                        <tr>
                            <th>SL.</th>
                            <th>User Name</th>
                            <th>User Email</th>
                            <th>Address</th>
                            <th>Phone</th>
                            <th>Action</th>
                        </tr>
                    </thead>

                    <tbody></tbody>
                </table>
            </div>
        </div>
    );
};

export default MyProfile;

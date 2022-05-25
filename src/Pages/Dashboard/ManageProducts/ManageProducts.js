import React from "react";

const ManageProducts = () => {
    return (
        <div>
            <h2>Manage All Products</h2>
            <div className="overflow-x-auto">
                <table className="table w-full">
                    <thead>
                        <tr>
                            <th>SL.</th>
                            <th>User Name</th>

                            <th>user Email</th>
                            <th>price</th>

                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody></tbody>
                </table>
            </div>
        </div>
    );
};

export default ManageProducts;

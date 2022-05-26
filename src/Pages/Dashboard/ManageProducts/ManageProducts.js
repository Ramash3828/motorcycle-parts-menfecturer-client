import React from "react";
import { useQuery } from "react-query";
import Loading from "../../../Shared/Loading/Loading";
import ManageProductsRow from "./ManageProductsRow";

const ManageProducts = () => {
    const url = `http://localhost:5000/get-product`;
    const {
        data: products,
        isLoading,
        refetch,
    } = useQuery("products", () =>
        fetch(url, {
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
                Manage All Products
            </h2>
            <div className="overflow-x-auto">
                <table className="table w-full">
                    <thead>
                        <tr>
                            <th>SL.</th>
                            <th> Image</th>
                            <th> Name</th>
                            <th> Details</th>
                            <th>price</th>
                            <th>Quantity</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {products?.map((product, index) => (
                            <ManageProductsRow
                                key={product._id}
                                product={product}
                                index={index}
                                refetch={refetch}
                            />
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default ManageProducts;

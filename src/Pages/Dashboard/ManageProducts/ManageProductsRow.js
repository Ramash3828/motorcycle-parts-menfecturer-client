import React from "react";
import { Link } from "react-router-dom";
import { toast } from "react-toastify";

const ManageProductsRow = ({ product, index, refetch }) => {
    const { name, img, desc, price, quantity, _id } = product;

    const handleProductDelete = () => {
        const url = `http://localhost:5000/product-delete/${_id}`;
        fetch(url, {
            method: "DELETE",
            headers: {
                authorization: `bearer ${localStorage.getItem("accessToken")}`,
            },
        })
            .then((res) => res.json())
            .then((data) => {
                toast.success(data.message);
                refetch();
            });
    };

    return (
        <tr>
            <td>{index + 1}</td>
            <td>
                {" "}
                <div class="avatar">
                    <div class="w-16 rounded">
                        <img src={img} alt={name} />
                    </div>
                </div>
            </td>
            <td>{name}</td>
            <td>{desc}</td>
            <td>${price}</td>
            <td>{quantity}</td>
            <td>
                <button className="btn btn-xs bg-purple-500">
                    <Link to={`/dashboard/add-product/${_id}`}>Update</Link>
                </button>
                <button
                    onClick={handleProductDelete}
                    className="btn btn-xs bg-red-400"
                >
                    Delete
                </button>
            </td>
        </tr>
    );
};

export default ManageProductsRow;

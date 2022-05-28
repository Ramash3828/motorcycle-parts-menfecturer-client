import React from "react";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";

import { toast } from "react-toastify";
// https://agile-reef-29566.herokuapp.com/
const AddProduct = () => {
    const {
        register,
        handleSubmit,

        formState: { errors },
    } = useForm();
    const navigate = useNavigate();

    const imagebbKey = "78b51101c93df6505232dd1a07d4af99";

    const onSubmit = async (data) => {
        const image = data.image[0];
        const formData = new FormData();
        formData.append("image", image);
        const url = `https://api.imgbb.com/1/upload?key=${imagebbKey}`;
        fetch(url, {
            method: "POST",
            body: formData,
        })
            .then((res) => res.json())
            .then((result) => {
                if (result.success) {
                    const img = result.data.url;
                    const product = {
                        name: data.partsName,
                        desc: data.partsDesc,
                        quantity: data.partsQty,
                        img: img,
                        price: data.partsPrice,
                    };
                    fetch(`http://localhost:5000/add-product`, {
                        method: "POST",
                        body: JSON.stringify(product),
                        headers: {
                            "Content-type": "application/json; charset=UTF-8",
                            authorization: `Bearer ${localStorage.getItem(
                                "accessToken"
                            )}`,
                        },
                    })
                        .then((res) => res.json())
                        .then((data) => {
                            if (data.insertedId) {
                                toast.success(`Data insert successfully`);

                                navigate("/dashboard/add-product");
                            }
                        });
                }
            });
    };
    return (
        <div className="card mx-auto lg:max-w-lg bg-base-100 shadow-xl mt-4 p-4">
            <h2 className="text-1xl font-bold text-secondary">Add Product</h2>
            <form onSubmit={handleSubmit(onSubmit)}>
                <div className="form-control w-full ">
                    <label className="label">
                        <span className="label-text">Name</span>
                    </label>
                    <input
                        type="text"
                        placeholder="Product Name"
                        className="input input-bordered w-full "
                        {...register("partsName", {
                            required: {
                                value: true,
                                message: "Product Name is required",
                            },
                        })}
                    />
                    <label className="label">
                        <span className="label-text-alt text-red-500">
                            {errors.partsName?.type === "required" && (
                                <p>{errors?.partsName.message}</p>
                            )}
                        </span>
                    </label>
                </div>
                <div className="form-control w-full ">
                    <label className="label">
                        <span className="label-text">Product Quantity</span>
                    </label>
                    <input
                        type="number"
                        placeholder="Product Quantity"
                        className="input input-bordered w-full "
                        {...register("partsQty", {
                            required: {
                                value: true,
                                message: "Product Quantity is required",
                            },
                        })}
                    />
                    <label className="label">
                        <span className="label-text-alt text-red-500">
                            {errors.partsQty?.type === "required" && (
                                <p>{errors?.partsQty.message}</p>
                            )}
                        </span>
                    </label>
                </div>
                <div className="form-control w-full ">
                    <label className="label">
                        <span className="label-text">Product Price</span>
                    </label>
                    <input
                        type="text"
                        placeholder="Product Price"
                        className="input input-bordered w-full "
                        {...register("partsPrice", {
                            required: {
                                value: true,
                                message: "Product Price is required",
                            },
                        })}
                    />
                    <label className="label">
                        <span className="label-text-alt text-red-500">
                            {errors.partsPrice?.type === "required" && (
                                <p>{errors?.partsPrice.message}</p>
                            )}
                        </span>
                    </label>
                </div>
                <div className="form-control w-full ">
                    <label className="label">
                        <span className="label-text">Product Description</span>
                    </label>
                    <input
                        type="text"
                        placeholder="Product Description"
                        className="input input-bordered w-full "
                        {...register("partsDesc", {
                            required: {
                                value: true,
                                message: "Product Description is required",
                            },
                        })}
                    />
                    <label className="label">
                        <span className="label-text-alt text-red-500">
                            {errors.partsDesc?.type === "required" && (
                                <p>{errors?.partsDesc.message}</p>
                            )}
                        </span>
                    </label>
                </div>
                <div className="form-control w-full ">
                    <label className="label">
                        <span className="label-text">Product Image</span>
                    </label>
                    <input
                        type="file"
                        placeholder="Upload Image"
                        className="input input-bordered w-full "
                        {...register("image", {
                            required: {
                                value: true,
                                message: "Product Image is required",
                            },
                        })}
                    />
                    <label className="label">
                        <span className="label-text-alt text-red-500">
                            {errors.image?.type === "required" && (
                                <p>{errors?.image.message}</p>
                            )}
                        </span>
                    </label>
                </div>
                <input
                    type="submit"
                    value="Add"
                    className="btn  w-full text-white bg-primary"
                />
            </form>
        </div>
    );
};

export default AddProduct;

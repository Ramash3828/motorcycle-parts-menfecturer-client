import React, { useState } from "react";
import { useEffect } from "react";
import { useForm } from "react-hook-form";

import { useNavigate, useParams } from "react-router-dom";

import { toast } from "react-toastify";

// https://agile-reef-29566.herokuapp.com/

const UpdateProduct = () => {
    const imagebbKey = "78b51101c93df6505232dd1a07d4af99";
    const { id } = useParams();
    const [products, setProducts] = useState([]);
    const [newItem, setNewItem] = useState([]);
    const navigate = useNavigate();
    const {
        register,
        handleSubmit,
        reset,
        formState: { errors },
    } = useForm();

    useEffect(() => {
        const url = `https://agile-reef-29566.herokuapp.com/get-product`;
        fetch(url, {
            method: "GET",
            headers: {
                authorization: `Bearer ${localStorage.getItem("accessToken")}`,
            },
        })
            .then((res) => res.json())
            .then((result) => {
                setNewItem(result);
            });
    }, [id]);
    const item = newItem?.find((p) => p._id === id);

    useEffect(() => {
        setProducts({
            partsName: item?.name,
            partsPrice: item?.price,
            partsQty: item?.quantity,
            partsDesc: item?.desc,
            image: item?.img,
        });
    }, [item?.name, item?.price, item?.quantity, item?.desc, item?.img]);
    useEffect(() => {
        reset(products);
    }, [reset, products]);

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
                    fetch(
                        `https://agile-reef-29566.herokuapp.com/update-product/${id}`,
                        {
                            method: "PUT",
                            body: JSON.stringify(product),
                            headers: {
                                "Content-type":
                                    "application/json; charset=UTF-8",
                                authorization: `Bearer ${localStorage.getItem(
                                    "accessToken"
                                )}`,
                            },
                        }
                    )
                        .then((res) => res.json())
                        .then((UpdateData) => {
                            if (UpdateData.result.acknowledged) {
                                toast.success(UpdateData.message);
                                navigate("/dashboard/manage-products");
                            }
                        });
                }
            });
    };
    return (
        <div className="card mx-auto lg:max-w-lg bg-base-100 shadow-xl mt-4 p-4">
            <h2 className="text-1xl font-bold text-secondary uppercase">
                Update Product
            </h2>
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
                        type="number"
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

export default UpdateProduct;

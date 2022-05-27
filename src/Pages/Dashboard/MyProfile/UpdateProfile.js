import React, { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { useQuery } from "react-query";
import { Link, useNavigate, useParams } from "react-router-dom";
import { toast } from "react-toastify";
import Loading from "../../../Shared/Loading/Loading";

const UpdateProfile = () => {
    const { register, handleSubmit, reset } = useForm();
    const [inputData, setInputData] = useState("");
    const { updateId } = useParams();
    const navigate = useNavigate();

    const { data: userData, isLoading } = useQuery("user", () =>
        fetch(`http://localhost:5000/users`, {
            method: "GET",
            headers: {
                authorization: `bearer ${localStorage.getItem("accessToken")}`,
            },
        }).then((res) => res.json())
    );
    const singleUser = userData?.find((user) => user._id === updateId);
    const email = singleUser?.email;
    useEffect(() => {
        setInputData({
            userName: singleUser?.name,
            userEmail: singleUser?.email,
            address: singleUser?.address,
            phone: singleUser?.phone,
        });
    }, [
        singleUser?.name,
        singleUser?.email,
        singleUser?.address,
        singleUser?.phone,
    ]);

    useEffect(() => {
        reset(inputData);
    }, [inputData, reset]);

    if (isLoading) {
        return <Loading />;
    }

    const onSubmit = (data) => {
        delete singleUser._id;
        const user = {
            name: data.userName,
            email: data.userEmail,
            address: data?.address,
            phone: data?.phone,
        };

        fetch(`http://localhost:5000/add-user/${email}`, {
            method: "PUT",
            body: JSON.stringify(user),
            headers: {
                "Content-type": "application/json",
                authorization: `bearer ${localStorage.getItem("accessToken")}`,
            },
        })
            .then((res) => res.json())
            .then((data) => {
                toast.success("Your Profile updated successfully");
                navigate("/dashboard/my-profile");
            });
    };

    return (
        <div className=" mx-auto lg:max-w-lg w-full  bg-base-100 shadow-xl mt-4">
            <div className="card-body text-center">
                <h2 className="text-2xl font-bold uppercase">
                    {" "}
                    <span className="text-secondary">{singleUser?.name} </span>
                    update your profile
                </h2>
                <div className="text-right">
                    <button className="btn btn-outline btn-secondary">
                        <Link to="/dashboard/my-profile">
                            View Profile List
                        </Link>
                    </button>
                </div>
                <form onSubmit={handleSubmit(onSubmit)}>
                    <div className="form-control w-full ">
                        <label className="label">
                            <span className="label-text">Your Name</span>
                        </label>
                        <input
                            type="text"
                            placeholder="Your Name"
                            className="input input-bordered w-full "
                            {...register("userName")}
                        />
                    </div>
                    <div className="form-control w-full ">
                        <label className="label">
                            <span className="label-text">Your Email</span>
                        </label>
                        <input
                            type="text"
                            disabled
                            className="input input-bordered w-full "
                            {...register("userEmail")}
                        />
                    </div>
                    <div className="form-control w-full ">
                        <label className="label">
                            <span className="label-text">Address</span>
                        </label>
                        <input
                            type="text"
                            placeholder="Your Address"
                            className="input input-bordered w-full "
                            {...register("address")}
                        />
                    </div>
                    <div className="form-control w-full ">
                        <label className="label">
                            <span className="label-text">Phone</span>
                        </label>
                        <input
                            type="number"
                            placeholder="Your Phone"
                            className="input input-bordered w-full "
                            {...register("phone")}
                        />
                    </div>
                    <input
                        type="submit"
                        value="Update"
                        className="btn  w-full text-white bg-primary my-4"
                    />
                </form>
            </div>
        </div>
    );
};

export default UpdateProfile;

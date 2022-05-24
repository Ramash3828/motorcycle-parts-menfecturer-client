import React from "react";
import { useForm } from "react-hook-form";

const Reviews = () => {
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm({
        defaultValues: {
            email: "Ramash",
            password: "Hello",
        },
    });

    const onSubmit = (data) => {
        console.log(data);
    };
    return (
        <div>
            <h2>Reviews Page</h2>
            <form onSubmit={handleSubmit(onSubmit)}>
                <div className="form-control w-full ">
                    <label className="label">
                        <span className="label-text">Email</span>
                    </label>
                    <input
                        type="email"
                        placeholder="Your Email"
                        className="input input-bordered w-full "
                        {...register("email", {
                            required: {
                                value: true,
                                message: "Email is required",
                            },
                            pattern: {
                                value: /[a-z0-9][-a-z0-9._]+@([-a-z0-9]+.)+[a-z]{2,5}$/,
                                message: "Provide your valid email",
                            },
                        })}
                    />
                    <label className="label">
                        <span className="label-text-alt text-red-500">
                            {errors.email?.type === "required" && (
                                <p>{errors?.email.message}</p>
                            )}
                            {errors.email?.type === "pattern" && (
                                <p>{errors?.email.message}</p>
                            )}
                        </span>
                    </label>
                </div>
                <div className="form-control w-full ">
                    <label className="label">
                        <span className="label-text">Password</span>
                    </label>
                    <input
                        type="password"
                        placeholder="Your Password"
                        className="input input-bordered w-full "
                        {...register("password", {
                            required: {
                                value: true,
                                message: "Password is required",
                            },
                            pattern: {
                                value: /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{6,32}$/,
                                message:
                                    "Minimum six characters, at least one letter and one number",
                            },
                        })}
                    />
                    <label className="label">
                        <span className="label-text-alt text-red-500">
                            {errors.password?.type === "required" && (
                                <p>{errors.password?.message}</p>
                            )}
                            {errors.password?.type === "pattern" && (
                                <p>{errors.password?.message}</p>
                            )}
                        </span>
                    </label>
                </div>
                <input
                    type="submit"
                    value="Login"
                    className="btn  w-full text-white bg-primary"
                />
            </form>
        </div>
    );
};

export default Reviews;

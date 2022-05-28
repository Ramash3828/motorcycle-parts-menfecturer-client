import React from "react";
import { useSendPasswordResetEmail } from "react-firebase-hooks/auth";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import auth from "../../firebase.init";
import Loading from "../../Shared/Loading/Loading";

const ResetPassword = () => {
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm();

    const [sendPasswordResetEmail, sending, resetError] =
        useSendPasswordResetEmail(auth);

    const navigate = useNavigate();
    let errMessage;
    if (resetError) {
        errMessage = (
            <p className="text-red-500 text-left my-2">
                {resetError?.message}{" "}
            </p>
        );
    }
    if (sending) {
        return <Loading></Loading>;
    }

    const onSubmit = async (data) => {
        // Reset Password

        if (data.email) {
            console.log(data.email);
            await sendPasswordResetEmail(data.email);
            toast("Sent email");
            navigate("/login");
        } else {
            toast("Please Enter your email.");
        }
    };
    return (
        <div>
            <div className="card-body text-center w-1/3  mx-auto">
                <h2 className="text-2xl font-bold uppercase">
                    Reset Your Password
                </h2>
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
                    {errMessage}
                    <input
                        type="submit"
                        value="Reset"
                        className="btn  w-full text-white bg-primary"
                    />
                </form>
            </div>
        </div>
    );
};

export default ResetPassword;

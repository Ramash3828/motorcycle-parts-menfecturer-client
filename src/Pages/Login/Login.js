import React, { useEffect } from "react";
import { useForm } from "react-hook-form";
import { Link, useLocation, useNavigate } from "react-router-dom";
import auth from "../../firebase.init";

import Loading from "../../Shared/Loading/Loading";
import SocialLogin from "./SocialLogin";
import { useSignInWithEmailAndPassword } from "react-firebase-hooks/auth";

const Login = () => {
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm();
    const [signInWithEmailAndPassword, user, loading, error] =
        useSignInWithEmailAndPassword(auth);

    const navigate = useNavigate();
    const location = useLocation();
    const from = location.state?.from?.pathname || "/";

    useEffect(() => {
        if (user) {
            const email = user?.user.email;
            const name = user?.user.displayName;
            const currentUser = {
                email: email,
                name: name,
            };
            fetch(`http://localhost:5000/add-user/${email}`, {
                method: "PUT",
                body: JSON.stringify(currentUser),
                headers: {
                    "Content-type": "application/json",
                },
            })
                .then((res) => res.json())
                .then((data) => {
                    const accessToken = data?.token;
                    localStorage.setItem("accessToken", accessToken);
                });
        }
    }, [from, navigate, user]);

    if (loading) {
        return <Loading></Loading>;
    }
    let errMessage;
    if (error) {
        errMessage = (
            <p className="text-red-500 text-left my-2">{error.message}</p>
        );
    }

    const onSubmit = (data) => {
        signInWithEmailAndPassword(data.email, data.password);
        navigate(from, { replace: true });
    };
    return (
        <div className="card mx-auto lg:max-w-lg bg-base-100 shadow-xl mt-4">
            <div className="card-body text-center">
                <h2 className="text-2xl font-bold uppercase">Login</h2>
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
                    {errMessage}
                </form>
                <p className="text-left">
                    New to PHM Parts Co.?{" "}
                    <Link className="text-secondary" to="/signup">
                        Please Sign Up
                    </Link>
                </p>
                <SocialLogin></SocialLogin>
            </div>
        </div>
    );
};

export default Login;

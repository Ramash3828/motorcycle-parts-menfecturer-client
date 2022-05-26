import React, { useEffect } from "react";
import { useSignInWithGoogle } from "react-firebase-hooks/auth";
import { useLocation, useNavigate } from "react-router-dom";
import auth from "../../firebase.init";

const SocialLogin = () => {
    const [signInWithGoogle, user, loading, googleError] =
        useSignInWithGoogle(auth);
    const navigate = useNavigate();
    const location = useLocation();
    const from = location.state?.from?.pathname || "/";

    let errorInfo;
    if (googleError) {
        errorInfo = (
            <p className="text-red-500 text-left">
                Error: {googleError?.message}
            </p>
        );
    }

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
            navigate(from, { replace: true });
        }
    }, [from, navigate, user]);
    if (loading) {
        return <p>Loading....</p>;
    }
    const googleSignin = () => {
        signInWithGoogle();
    };
    return (
        <div>
            {errorInfo}
            <div className="divider my-4">OR</div>
            <button onClick={googleSignin} className="btn btn-outline w-full">
                Login with Google
            </button>
        </div>
    );
};

export default SocialLogin;

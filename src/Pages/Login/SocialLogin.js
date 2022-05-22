import React, { useEffect } from "react";
import { useSignInWithGoogle } from "react-firebase-hooks/auth";
import { useNavigate } from "react-router-dom";
import auth from "../../firebase.init";
import Loading from "../../Shared/Loading/Loading";

const SocialLogin = () => {
    const [signInWithGoogle, user, loading, googleError] =
        useSignInWithGoogle(auth);
    const navigate = useNavigate();
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
            navigate("/");
        }
    }, [user, navigate]);
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

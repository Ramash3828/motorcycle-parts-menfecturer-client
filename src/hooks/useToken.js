import { useEffect } from "react";
import { useState } from "react";

const useToken = (user) => {
    const [token, setToken] = useState("");
    useEffect(() => {
        const email = user?.user?.email;
        const name = user?.user?.displayName;
        const currentUser = {
            email: email,
            name: name,
        };

        if (email) {
            fetch(`http://localhost:5000/user/${email}`, {
                method: "PUT",
                body: JSON.stringify(currentUser),
                headers: {
                    "Content-type": "application/json",
                },
            })
                .then((res) => res.json())
                .then((data) => {
                    console.log(data.token);
                    const accessToken = data?.token;
                    localStorage.setItem("accessToken", accessToken);
                    setToken(accessToken);
                });
        }
    }, [user]);

    return [token, setToken];
};

export default useToken;

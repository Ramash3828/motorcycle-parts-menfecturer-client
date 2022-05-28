import { useEffect } from "react";
import { useState } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import auth from "../firebase.init";

const useAdmin = () => {
    const [admin, setAdmin] = useState("");
    const [admins, setAdmins] = useState("");
    const [adminLoading, setAdminLoading] = useState(true);
    const [user] = useAuthState(auth);
    fetch(`http://localhost:5000/admin/${user?.email}`, {
        method: "GET",
        headers: {
            "Content-type": "application/json",
            authorization: `Bearer ${localStorage.getItem("accessToken")}`,
        },
    })
        .then((res) => res.json())
        .then((data) => {
            setAdmins(data.admin);
            setAdminLoading(false);
        });

    useEffect(() => {
        const [adminUser] = admins;
        setAdmin(adminUser);
    }, [admins]);
    return [admin, adminLoading];
};

export default useAdmin;

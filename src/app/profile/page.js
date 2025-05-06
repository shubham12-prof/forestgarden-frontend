"use client";

import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import axios from "axios";

const baseURL = process.env.NEXT_PUBLIC_API_BASE_URL;

const Profile = () => {
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);
    const router = useRouter();

    useEffect(() => {
        const fetchUserData = async () => {
            try {
                const token = localStorage.getItem("token");
                if (!token) {
                    setLoading(false);
                    router.push("/login");
                    return;
                }

                const response = await axios.get(`${baseURL}/api/users/profile`, {
                    headers: {
                        "Content-Type": "application/json",
                        Authorization: `Bearer ${token}`,
                    },
                });

                setUser(response.data);
                console.log("response", response);
            } catch (error) {
                console.error("Error fetching profile:", error);
                setUser(null);
            } finally {
                setLoading(false);
            }
        };

        fetchUserData();
    }, [router]);

    if (loading) {
        return <div>Loading...</div>;
    }

    if (!user) {
        return <div>No user data found. Please log in.</div>;
    }

    return (
        <div className="mt-50">
            <h1>Profile Page</h1>
            <p><strong>Username:</strong> {user.username}</p>
            <p><strong>Email:</strong> {user.email}</p>
        </div>
    );
};

export default Profile;

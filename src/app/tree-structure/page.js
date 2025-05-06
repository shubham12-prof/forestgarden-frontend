"use client";
import { useEffect, useState } from "react";
import { TreeWithFocus } from "../dashboard/TreeNode";

const baseURL = process.env.NEXT_PUBLIC_API_BASE_URL;

const TreeStructurePage = () => {
    const [tree, setTree] = useState(null);

    useEffect(() => {
        const fetchTree = async () => {
            try {
                const res = await fetch(`${baseURL}/api/users/tree`, {
                    headers: {
                        Authorization: `Bearer ${localStorage.getItem("token")}`,
                    },
                });
                const data = await res.json();
                setTree(data);
            } catch (err) {
                console.error("Failed to fetch tree:", err.message);
            }
        };

        fetchTree();
    }, []);

    return (
        <div className="h-full w-full overflow-auto p-6 bg-gray-50 rounded-xl shadow">
            <h1 className="text-2xl font-extrabold text-center mb-12 mt-4 text-transparent bg-clip-text bg-gradient-to-r from-green-600 via-emerald-500 to-lime-400 tracking-wide animate-fade-in uppercase">
                🌳 User Tree Structure
            </h1>
            <div className="">
                <div className="min-w-max mx-auto px-4 h-full pb-12">
                    {tree && tree.name && tree.email ? (
                        <TreeWithFocus initialNode={tree} />
                    ) : (
                        <p className="text-center text-gray-500">Loading tree...</p>
                    )}
                </div>
            </div>
        </div>
    );
};

export default TreeStructurePage;
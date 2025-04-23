"use client";

import React, { useEffect, useState } from "react";
import axios from "axios";
import { useRouter } from "next/navigation";
import KYCForm from "../components/KYCForm";
import AddedUsersList from "../components/AddedUsersList";
import UserDetailsModal from "../components/UserDetailsModal";
import TreeNode from "./TreeNode";

const Dashboard = () => {
  const [formData, setFormData] = useState({
    name: "",
    fatherName: "",
    dob: "",
    gender: "",
    maritalStatus: "",
    phone: "",
    email: "",
    nomineeName: "",
    nomineeRelation: "",
    nomineePhone: "",
    address: "",
    pinCode: "",
    bankName: "",
    branchAddress: "",
    accountNo: "",
    accountType: "",
    ifscCode: "",
    micrNo: "",
    panNo: "",
    aadhaarNo: "",
    sponsorName: "",
    sponsorId: "",
    password: "",
    isAdmin: false,
  });

  const [myAddedUsers, setMyAddedUsers] = useState([]);
  const [selectedUser, setSelectedUser] = useState(null);
  const [tree, setTree] = useState(null);
  const [message, setMessage] = useState("");
  const [editFormData, setEditFormData] = useState({});
  const router = useRouter();

  const baseURL = process.env.NEXT_PUBLIC_API_BASE_URL;

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

  const fetchMyAddedUsers = async () => {
    try {
      const token = localStorage.getItem("token");
      const res = await fetch(`${baseURL}/api/users/my-children`, {
        headers: { Authorization: `Bearer ${token}` },
      });
      const data = await res.json();
      setMyAddedUsers(data.children || []);
    } catch (error) {
      console.error("Failed to fetch added users", error);
    }
  };

  const handleChange = (e) => {
    const { name, type, checked, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value,
    }));
  };

  const handleUserAdd = async () => {
    if (!formData.email || !/\S+@\S+\.\S+/.test(formData.email)) {
      setMessage("Please enter a valid email address.");
      alert("Please enter an email address.");
      return;
    }

    if (!formData.password || formData.password.length < 6) {
      setMessage("Password must be at least 6 characters long.");
      alert("Please enter a Password");
      return;
    }

    try {
      const token = localStorage.getItem("token");
      const cleanedFormData = { ...formData };
      if (!cleanedFormData.sponsorId) delete cleanedFormData.sponsorId;

      await axios.post(`${baseURL}/api/users/add-user`, cleanedFormData, {
        headers: { Authorization: `Bearer ${token}` },
      });

      setMessage("User added successfully!");
      setFormData(
        Object.keys(formData).reduce((acc, key) => ({ ...acc, [key]: "" }), {})
      );
      fetchTree();
      fetchMyAddedUsers();
    } catch (error) {
      console.error(
        "Failed to add user:",
        error.response?.data || error.message
      );
      setMessage("Failed to add user. Please try again.");
    }
  };

  const handleEditUser = (userId) => {
    const userToEdit = myAddedUsers.find((user) => user._id === userId);
    if (userToEdit) setEditFormData(userToEdit);
  };

  const handleSaveEditedUser = async () => {
    try {
      const token = localStorage.getItem("token");
      const userId = editFormData._id;

      await axios.put(
        `${baseURL}/api/users/update-user/${userId}`,
        editFormData,
        {
          headers: { Authorization: `Bearer ${token}` },
        }
      );

      setMessage("User details updated successfully!");
      setEditFormData({});
      fetchTree();
      fetchMyAddedUsers();
    } catch (error) {
      console.error(
        "Failed to update user:",
        error.response?.data || error.message
      );
      setMessage("Failed to update user. Please try again.");
    }
  };

  useEffect(() => {
    fetchTree();
    fetchMyAddedUsers();
  }, []);

  return (
    <div className="max-w-6xl mx-auto p-6 space-y-6">
      <h1 className="text-2xl font-bold text-center">Dashboard</h1>

      <KYCForm
        formData={formData}
        handleChange={handleChange}
        handleUserAdd={handleUserAdd}
        message={message}
        myAddedUsers={myAddedUsers}
      />

      <div className="w-full overflow-auto p-6 bg-gray-50 rounded-xl shadow">
        <h1 className="text-2xl font-extrabold text-center mb-12 mt-4 text-transparent bg-clip-text bg-gradient-to-r from-green-600 via-emerald-500 to-lime-400 tracking-wide animate-fade-in uppercase">
          🌳 User Tree Structure
        </h1>
        <div className="min-w-max mx-auto">
          {tree ? (
            <TreeNode node={tree} />
          ) : (
            <p className="text-center text-gray-500">Loading tree...</p>
          )}
        </div>
      </div>

      <AddedUsersList
        users={myAddedUsers}
        onUserClick={setSelectedUser}
        onEditUser={handleEditUser}
      />

      <UserDetailsModal
        selectedUser={selectedUser}
        onClose={() => setSelectedUser(null)}
        onSaveEdit={handleSaveEditedUser}
        editFormData={editFormData}
        setEditFormData={setEditFormData}
      />
    </div>
  );
};

export default Dashboard;

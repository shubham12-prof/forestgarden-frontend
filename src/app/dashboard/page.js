"use client";

import React, { useEffect, useState } from "react";
import axios from "axios";
import KYCForm from "../components/KYCForm";
import AddedUsersList from "../components/AddedUsersList";
import UserDetailsModal from "../components/UserDetailsModal";
import Sidebar from "../sidebar/page";
import TreeStructurePage from "../tree-structure/page";

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
  const [message, setMessage] = useState("");
  const [editFormData, setEditFormData] = useState({});
  const [selectedSide, setSelectedSide] = useState("");
  const [activeSection, setActiveSection] = useState("kyc");
  const baseURL = process.env.NEXT_PUBLIC_API_BASE_URL;

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
      alert("Please enter an email address first.");
      return;
    }

    if (!formData.password || formData.password.length < 6) {
      setMessage("Password must be at least 6 characters long.");
      alert("Please enter a Password");
      return;
    }

    if (!selectedSide) {
      setMessage("Please select a side (left or right).");
      alert("Please select a side (left or right).");
      return;
    }

    try {
      const token = localStorage.getItem("token");

      if (!token) {
        setMessage("User is not authenticated.");
        alert("You need to be logged in.");
        return;
      }

      const cleanedFormData = { ...formData, side: selectedSide };

      if (!cleanedFormData.sponsorId) delete cleanedFormData.sponsorId;

      await axios.post(`${baseURL}/api/users/add-user`, cleanedFormData, {
        headers: { Authorization: `Bearer ${token}` },
      });

      setMessage("User added successfully!");
      setFormData(
        Object.keys(formData).reduce((acc, key) => ({ ...acc, [key]: "" }), {})
      );
      setSelectedSide("");
      fetchMyAddedUsers();
    } catch (error) {
      const errorMessage =
        error.response?.data?.message || "Something went wrong while adding user.";

      console.error("Failed to add user:", errorMessage);

      if (
        errorMessage.includes("duplicate key error") ||
        errorMessage.toLowerCase().includes("email already exists")
      ) {
        setMessage("This email is already in use. Please use a different one.");
        alert("This email is already in use.");
      } else {
        setMessage(`Failed to add user. Reason: ${errorMessage}`);
        alert(`Error: ${errorMessage}`);
      }
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
    fetchMyAddedUsers();
  }, []);

  return (
    <div className="min-h-screen flex mt-28">
      <Sidebar activeSection={activeSection} setActiveSection={setActiveSection} />

      <div className="w-full lg:w-3/4 p-6 space-y-6 bg-white rounded-lg shadow-lg overflow-hidden">
        {activeSection === "kyc" && (
          <>
            <KYCForm
              formData={formData}
              handleChange={handleChange}
              handleUserAdd={handleUserAdd}
              message=""
              myAddedUsers={myAddedUsers}
              setMyAddedUsers={setMyAddedUsers}
              selectedSide={selectedSide}
              setSelectedSide={setSelectedSide}
            />
          </>
        )}

        {activeSection === "users" && (
          <AddedUsersList
            users={myAddedUsers}
            onUserClick={setSelectedUser}
          />
        )}

        {activeSection === "tree" && <TreeStructurePage />}

        {selectedUser && (
          <UserDetailsModal
            selectedUser={selectedUser}
            onClose={() => setSelectedUser(null)}
          />
        )}
      </div>
    </div>
  );
};

export default Dashboard;

"use client";

import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import {
  FaPhoneAlt,
  FaEnvelope,
  FaUser,
  FaUserFriends,
  FaMapMarkerAlt,
} from "react-icons/fa";
import { MdExpandMore, MdExpandLess } from "react-icons/md";

const AddedUsersList = () => {
  const [myAddedUsers, setMyAddedUsers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [expandedUserIds, setExpandedUserIds] = useState([]);

  const fetchAddedUsers = async () => {
    try {
      setLoading(true);
      const response = await fetch(
        `${process.env.NEXT_PUBLIC_API_BASE_URL}/api/users/my-children`,
        {
          headers: {
            Authorization: `Bearer ${localStorage.getItem("token")}`,
          },
        }
      );

      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(errorData.message || "Failed to fetch added users");
      }

      const data = await response.json();
      setMyAddedUsers(data.children || []);
    } catch (err) {
      setError(err.message || "Failed to fetch added users");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchAddedUsers();
  }, []);

  const toggleExpand = (userId) => {
    setExpandedUserIds((prev) =>
      prev.includes(userId)
        ? prev.filter((id) => id !== userId)
        : [...prev, userId]
    );
  };

  if (loading) return <p className="text-gray-500">Loading...</p>;
  if (error) return <p className="text-red-500">{error}</p>;

  return (
    <div className="min-h-screen bg-gray-100 dark:bg-gray-900 text-gray-800 dark:text-gray-200 p-6">
      <h2 className="text-3xl font-semibold mb-6 text-center text-green-600">
        Users You Added
      </h2>

      <button
        onClick={fetchAddedUsers}
        className="mb-8 px-4 py-2 bg-green-600 hover:bg-green-700 text-white rounded-lg shadow transition duration-200"
      >
        Refresh
      </button>

      {myAddedUsers.length > 0 ? (
        <div className="space-y-6">
          {myAddedUsers.map((user) => {
            const isExpanded = expandedUserIds.includes(user._id);

            return (
              <motion.div
                key={user._id}
                layout
                className="bg-white dark:bg-gray-800 border border-green-200 dark:border-green-700 shadow-md rounded-xl p-4"
              >
                <div
                  onClick={() => toggleExpand(user._id)}
                  className="flex items-center justify-between cursor-pointer"
                >
                  <div className="flex items-center gap-2">
                    <FaUser className="text-green-500" />
                    <span className="font-medium text-lg">{user.name}</span>
                  </div>
                  {isExpanded ? (
                    <MdExpandLess className="text-xl text-green-500" />
                  ) : (
                    <MdExpandMore className="text-xl text-green-500" />
                  )}
                </div>

                {isExpanded && (
                  <motion.div
                    layout
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4 text-sm"
                  >
                    <p>
                      <strong>Father:</strong> {user.fatherName}
                    </p>
                    <p>
                      <strong>DOB:</strong> {user.dob}
                    </p>
                    <p>
                      <strong>Gender:</strong> {user.gender}
                    </p>
                    <p>
                      <strong>Status:</strong> {user.maritalStatus}
                    </p>
                    <p className="flex items-center gap-2">
                      <FaPhoneAlt /> {user.phone}
                    </p>
                    <p className="flex items-center gap-2">
                      <FaEnvelope /> {user.email}
                    </p>
                    <p>
                      <strong>Nominee:</strong> {user.nomineeName}
                    </p>
                    <p>
                      <strong>Nominee Phone:</strong> {user.nomineePhone}
                    </p>
                    <p className="flex items-center gap-2">
                      <FaMapMarkerAlt /> {user.address}
                    </p>
                    <p>
                      <strong>Pin:</strong> {user.pinCode}
                    </p>
                    <p>
                      <strong>Bank:</strong> {user.bankName}
                    </p>
                    <p>
                      <strong>Branch:</strong> {user.branchAddress}
                    </p>
                    <p>
                      <strong>Account:</strong> {user.accountNo}
                    </p>
                    <p>
                      <strong>Type:</strong> {user.accountType}
                    </p>
                    <p>
                      <strong>IFSC:</strong> {user.ifscCode}
                    </p>
                    <p>
                      <strong>MICR:</strong> {user.micrNo}
                    </p>
                    <p>
                      <strong>PAN:</strong> {user.panNo}
                    </p>
                    <p>
                      <strong>Aadhaar:</strong> {user.aadhaarNo}
                    </p>
                    <p className="flex items-center gap-2">
                      <FaUserFriends /> {user.sponsorName}
                    </p>
                    <p>
                      <strong>Sponsor ID:</strong> {user.sponsorId}
                    </p>
                  </motion.div>
                )}
              </motion.div>
            );
          })}
        </div>
      ) : (
        <p className="text-center text-gray-600 dark:text-gray-400">
          No users added.
        </p>
      )}
    </div>
  );
};

export default AddedUsersList;

import React, { useEffect, useState } from "react";
import axios from "axios";

const UserDetailsModal = ({ selectedUserId, onClose }) => {
  const [userDetails, setUserDetails] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (selectedUserId) {
      setLoading(true);
      axios
        .get(`${process.env.NEXT_PUBLIC_API_BASE_URL}/users/${selectedUserId}`)
        .then((response) => {
          setUserDetails(response.data);
          setLoading(false);
        })
        .catch((error) => {
          console.error("Error fetching user by ID:", error);
          setLoading(false);
        });
    }
  }, [selectedUserId]);

  if (!selectedUserId) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
      <div className="bg-white dark:bg-gray-900 text-gray-900 dark:text-gray-100 p-6 rounded-lg max-w-md w-full shadow-lg border border-gray-200 dark:border-gray-700">
        <h2 className="text-xl font-bold mb-4 text-center">User Details</h2>

        {loading ? (
          <p className="text-center text-gray-600 dark:text-gray-400">
            Loading...
          </p>
        ) : userDetails ? (
          <div className="space-y-2 text-sm">
            <p>
              <span className="font-semibold">Name:</span> {userDetails.name}
            </p>
            <p>
              <span className="font-semibold">Email:</span> {userDetails.email}
            </p>
            <p>
              <span className="font-semibold">Phone:</span> {userDetails.phone}
            </p>
            <p>
              <span className="font-semibold">Address:</span>{" "}
              {userDetails.address}
            </p>
          </div>
        ) : (
          <p className="text-red-500 text-center">
            Failed to load user details.
          </p>
        )}

        <button
          onClick={onClose}
          className="mt-6 w-full bg-red-600 hover:bg-red-700 text-white py-2 px-4 rounded transition"
        >
          Close
        </button>
      </div>
    </div>
  );
};

export default UserDetailsModal;

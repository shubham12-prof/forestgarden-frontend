"use client";
import React from "react";

const KYCForm = ({
  formData,
  handleChange,
  handleUserAdd,
  message,
  myAddedUsers,
  theme = "light",
  setMyAddedUsers,
}) => {
  const isDark = theme === "dark";

  const handleDeleteUser = async (userId) => {
    if (!window.confirm("Are you sure you want to delete this user?")) return;

    try {
      const res = await fetch(
        `${process.env.NEXT_PUBLIC_API_BASE_URL}/api/users/delete/${userId}`,
        {
          method: "DELETE",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${localStorage.getItem("token")}`,
          },
        }
      );

      const data = await res.json();

      if (res.ok) {
        alert("User deleted successfully!");
        setMyAddedUsers((prev) => prev.filter((u) => u._id !== userId));
      } else {
        alert(`Failed to delete: ${data.message}`);
      }
    } catch (err) {
      console.error("Error deleting user:", err);
      alert("Something went wrong while deleting.");
    }
  };

  return (
    <section
      className={`p-6 rounded-md shadow-lg max-w-4xl mx-auto ${
        isDark ? "bg-gray-900 text-white" : "bg-gray-100 text-gray-800"
      }`}
    >
      <h2 className="text-2xl font-semibold mb-4 text-center">
        KYC/Registration Form
      </h2>

      {myAddedUsers?.length >= 2 ? (
        <div
          className={`text-center p-4 border-l-4 rounded-md mb-6 ${
            isDark
              ? "bg-green-900 border-green-400 text-green-300"
              : "bg-green-100 border-green-500 text-green-600"
          }`}
        >
          <p className="text-lg font-semibold">
            You have already added 2 users!
          </p>
          <p>You cannot add more users at the moment.</p>
        </div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {Object.entries(formData).map(([key, value]) => {
            if (key === "gender" || key === "maritalStatus") {
              const options =
                key === "gender"
                  ? ["Male", "Female", "Other"]
                  : ["Married", "Single"];
              return (
                <div key={key} className="flex flex-col space-y-2">
                  <label className="mb-1 font-medium">
                    {key === "gender" ? "Gender" : "Marital Status"}
                  </label>
                  <div className="flex space-x-6">
                    {options.map((option) => (
                      <label
                        key={option}
                        className="flex items-center space-x-2"
                      >
                        <input
                          type="radio"
                          name={key}
                          value={option}
                          checked={formData[key] === option}
                          onChange={handleChange}
                          className={`${
                            isDark ? "accent-blue-400" : "accent-blue-600"
                          }`}
                        />
                        <span>{option}</span>
                      </label>
                    ))}
                  </div>
                </div>
              );
            }

            return (
              <div key={key} className="flex flex-col">
                <label className="mb-1 font-medium">
                  {key.replace(/([A-Z])/g, " $1")}
                </label>
                <input
                  type={key === "password" ? "password" : "text"}
                  name={key}
                  placeholder={key.replace(/([A-Z])/g, " $1")}
                  value={value}
                  onChange={handleChange}
                  className={`p-3 border rounded-md focus:outline-none focus:ring-2 ${
                    isDark
                      ? "bg-gray-800 border-gray-600 text-white focus:ring-blue-400"
                      : "border-gray-300 focus:ring-blue-500"
                  }`}
                />
              </div>
            );
          })}
        </div>
      )}

      <div className="text-center mt-6">
        <button
          onClick={handleUserAdd}
          disabled={myAddedUsers?.length >= 2}
          className={`px-6 py-3 rounded-md text-white font-semibold ${
            myAddedUsers?.length >= 2
              ? "bg-gray-400 cursor-not-allowed"
              : "bg-blue-600 hover:bg-blue-700"
          }`}
        >
          Add User
        </button>
      </div>

      {myAddedUsers.map((user) => (
        <div
          key={user._id}
          className={`p-4 rounded shadow mt-4 ${
            isDark ? "bg-gray-800 text-white" : "bg-white text-gray-800"
          }`}
        >
          <p>
            <strong>Name:</strong> {user.name}
          </p>
          <p>
            <strong>Email:</strong> {user.email}
          </p>
          <button
            onClick={() => handleDeleteUser(user._id)}
            className="mt-2 bg-red-500 hover:bg-red-600 text-white py-1 px-3 rounded"
          >
            🗑️ Delete User
          </button>
        </div>
      ))}

      {message && (
        <p className="mt-4 text-sm text-center text-red-500">{message}</p>
      )}
    </section>
  );
};

export default KYCForm;

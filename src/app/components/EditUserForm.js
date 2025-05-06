"use client";
import React from "react";

const EditUserForm = ({
  editFormData,
  setEditFormData,
  handleSaveChanges,
  handleCancel,
}) => {
  const renderInput = (label, key, type = "text", isAdminField = false) => (
    <div className="mb-3">
      <label className="block text-sm font-medium text-gray-700 dark:text-gray-300">
        {label}
      </label>
      {isAdminField ? (
        <div className="flex items-center justify-between mt-2">
          <label
            htmlFor={key}
            className="text-sm font-medium text-gray-700 dark:text-gray-300"
          >
            {editFormData.isAdmin ? "On" : "Off"}
          </label>
          <label className="relative inline-flex items-center cursor-pointer">
            <input
              type="checkbox"
              id={key}
              checked={editFormData.isAdmin || false}
              onChange={(e) =>
                setEditFormData({
                  ...editFormData,
                  isAdmin: e.target.checked,
                })
              }
              className="sr-only peer"
            />
            <div className="w-11 h-6 bg-gray-300 peer-focus:outline-none peer-focus:ring-2 peer-focus:ring-green-500 dark:peer-focus:ring-green-800 rounded-full peer dark:bg-gray-700 peer-checked:bg-green-600 transition-all duration-300"></div>
            <div className="absolute left-1 top-1 bg-white w-4 h-4 rounded-full transition peer-checked:translate-x-full peer-checked:bg-white"></div>
          </label>
        </div>
      ) : (
        <input
          type={type}
          value={editFormData[key] || ""}
          onChange={(e) =>
            setEditFormData({ ...editFormData, [key]: e.target.value })
          }
          className="mt-1 p-2 w-full border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-700 text-black dark:text-white rounded-lg"
          aria-label={label}
        />
      )}
    </div>
  );

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-40 z-50">
      <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md max-w-2xl w-full max-h-[90vh] overflow-y-auto">
        <h3 className="text-2xl font-semibold mb-4 text-center text-green-600">
          Edit User Details
        </h3>
        <form onSubmit={handleSaveChanges}>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {renderInput("Name", "name")}
            {renderInput("Father Name", "fatherName")}
            {renderInput("DOB", "dob", "date")}
            {renderInput("Gender", "gender")}
            {renderInput("Marital Status", "maritalStatus")}
            {renderInput("Phone", "phone")}
            {renderInput("Email", "email")}
            {renderInput("Nominee Name", "nomineeName")}
            {renderInput("Nominee Phone", "nomineePhone")}
            {renderInput("Address", "address")}
            {renderInput("Pin Code", "pinCode")}
            {renderInput("Bank Name", "bankName")}
            {renderInput("Branch Address", "branchAddress")}
            {renderInput("Account No", "accountNo")}
            {renderInput("Account Type", "accountType")}
            {renderInput("IFSC Code", "ifscCode")}
            {renderInput("MICR No", "micrNo")}
            {renderInput("PAN No", "panNo")}
            {renderInput("Aadhaar No", "aadhaarNo")}
            {renderInput("Sponsor Name", "sponsorName")}
            {renderInput("Sponsor ID", "sponsorId")}
            {renderInput("Admin", "isAdmin", "checkbox", true)}
          </div>

          <div className="flex justify-between mt-6">
            <button
              type="button"
              onClick={handleCancel}
              className="px-4 py-2 bg-gray-500 hover:bg-gray-600 text-white rounded-lg"
            >
              Cancel
            </button>
            <button
              type="submit"
              className="px-4 py-2 bg-green-600 hover:bg-green-700 text-white rounded-lg"
            >
              Save Changes
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default EditUserForm;

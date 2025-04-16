import React, { useState } from "react";
import AddedUsersList from "./AddedUsersList";
const ParentComponent = () => {
  const [selectedUser, setSelectedUser] = useState(null);

  return (
    <div>
      <AddedUsersList setSelectedUser={setSelectedUser} />

      {selectedUser && (
        <div>
          <h3>Selected User ID: {selectedUser}</h3>
        </div>
      )}
    </div>
  );
};

export default ParentComponent;

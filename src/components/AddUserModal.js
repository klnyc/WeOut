import { useState } from "react";
import { updateCircle } from "../services";

export const AddUserModal = ({ currentCircle, fetchUser }) => {
  const [newUser, setNewUser] = useState("");

  const handleNewUser = (event) => setNewUser(event.target.value);

  const handleAddUser = async () => {
    await updateCircle({ circleId: currentCircle.id, userToAdd: newUser });
    fetchUser();
    setNewUser("");
  };

  return (
    <div className="modal fade" id="addUserModal">
      <div className="modal-dialog">
        <div className="modal-content">
          <div className="modal-body">
            <input
              name="newUser"
              className="form-control"
              placeholder="Screen name of new member"
              value={newUser}
              onChange={handleNewUser}
            />
          </div>
          <div className="modal-footer">
            <button
              type="button"
              className="btn btn-secondary"
              data-bs-dismiss="modal"
            >
              Close
            </button>
            <button
              type="button"
              className="btn btn-primary"
              data-bs-dismiss="modal"
              onClick={handleAddUser}
            >
              Add
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

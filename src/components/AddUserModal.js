import { useState } from "react";
import { updateCircle, listCircles } from "../services";

export const AddUserModal = ({ user, currentCircle, setCircles }) => {
  const [newUser, setNewUser] = useState("");

  const fetchCircles = async () => {
    const response = await listCircles(user.circles);
    setCircles(response);
  };

  const handleNewUser = (event) => setNewUser(event.target.value);

  const handleAddUser = async () => {
    await updateCircle({ circleId: currentCircle.id, userToAdd: newUser });
    fetchCircles();
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

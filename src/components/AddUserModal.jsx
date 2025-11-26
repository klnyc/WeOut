import { useState } from "react";
import { updateChat } from "../services.js";

export const AddUserModal = ({ currentChat }) => {
  const [newUser, setNewUser] = useState("");

  const handleNewUser = (event) => setNewUser(event.target.value);

  const handleAddUser = async () => {
    await updateChat({ chatId: currentChat.id, userToAdd: newUser });
    setNewUser("");
  };

  if (!currentChat) {
    return null;
  }

  return (
    <div className="modal fade" id="add-user-modal">
      <div className="modal-dialog">
        <div className="modal-content">
          <div className="modal-header">
            <h5 className="modal-title">{`Add new member to ${currentChat.name}`}</h5>
            <button
              type="button"
              className="btn-close"
              data-bs-dismiss="modal"
              aria-label="Close"
            ></button>
          </div>
          <div className="modal-body">
            <input
              name="newUser"
              className="form-control"
              value={newUser}
              onChange={handleNewUser}
            />
            <div>
              <div className="pt-3 fw-bold">Current members:</div>
              {currentChat.users.map((user) => (
                <div key={user}>{user}</div>
              ))}
            </div>
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

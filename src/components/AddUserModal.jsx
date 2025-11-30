import { useState } from "react";
import { updateChat } from "../services.js";
import { ErrorAlert } from "./ErrorAlert.jsx";
import { closeModal } from "../utility.js";
import { ImSpinner9 } from "../icons.js";

export const AddUserModal = ({ currentChat }) => {
  const [newUser, setNewUser] = useState("");
  const [error, setError] = useState("");
  const [submitting, setSubmitting] = useState(false);

  const handleNewUser = (event) => {
    setNewUser(event.target.value);
    if (currentChat.users.includes(event.target.value)) {
      setError("User is already a member of this chat.");
    } else {
      setError("");
    }
  };

  const handleAddUser = async () => {
    try {
      setSubmitting(true);
      await updateChat({ chatId: currentChat.id, userToAdd: newUser });
      closeModal("add-user-modal");
    } catch (error) {
      setError(error.message);
    } finally {
      setSubmitting(false);
      setNewUser("");
    }
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
              className="form-control mb-3"
              value={newUser}
              onChange={handleNewUser}
              placeholder="Enter screen name"
            />
            {error && <ErrorAlert errorMessage={error} />}
            <div className={error ? "pt-3" : ""}>
              <div className="fw-bold">Current members:</div>
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
              onClick={handleAddUser}
              disabled={!newUser.trim() || error}
            >
              {submitting ? (
                <ImSpinner9 className="spinner-icon" size={24} />
              ) : (
                "Add"
              )}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

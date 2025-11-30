import { useState } from "react";
import { createChat } from "../services.js";
import { closeModal } from "../utility.js";
import { ImSpinner9 } from "../icons.js";

export const AddChatModal = ({ user, fetchUser }) => {
  const [chatName, setChatName] = useState("");
  const [error, setError] = useState("");
  const [submitting, setSubmitting] = useState(false);

  const handleChatName = (event) => setChatName(event.target.value);

  const handleAddChat = async () => {
    try {
      setSubmitting(true);
      await createChat(chatName, user.screenName);
      fetchUser();
      closeModal("add-chat-modal");
    } catch (error) {
      setError(error.message);
    } finally {
      setSubmitting(false);
      setChatName("");
    }
  };

  return (
    <div className="modal fade" id="add-chat-modal">
      <div className="modal-dialog">
        <div className="modal-content">
          <div className="modal-header">
            <h5 className="modal-title">Create new chat</h5>
            <button
              type="button"
              className="btn-close"
              data-bs-dismiss="modal"
              aria-label="Close"
            ></button>
          </div>
          <div className="modal-body">
            <input
              name="chatName"
              className="form-control mb-3"
              value={chatName}
              onChange={handleChatName}
              placeholder="Enter chat name"
            />
            {error && <ErrorAlert errorMessage={error} />}
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
              onClick={handleAddChat}
              disabled={!chatName.trim()}
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

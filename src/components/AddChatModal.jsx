import { useState } from "react";
import { createChat } from "../services.js";

export const AddChatModal = ({ user, fetchUser }) => {
  const [chatName, setChatName] = useState("");

  const handleChatName = (event) => setChatName(event.target.value);

  const handleAddChat = async () => {
    await createChat(chatName, user.screenName);
    fetchUser();
    setChatName("");
  };

  return (
    <div className="modal fade" id="add-chat-modal">
      <div className="modal-dialog">
        <div className="modal-content">
          <div className="modal-body">
            <input
              name="chatName"
              className="form-control"
              placeholder="Name of new chat"
              value={chatName}
              onChange={handleChatName}
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
              onClick={handleAddChat}
            >
              Add
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

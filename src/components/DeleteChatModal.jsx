import { deleteChat } from "../services.js";

export const DeleteChatModal = ({ fetchUser, currentChat }) => {
  const handleDeleteChat = async (chatId) => {
    await deleteChat(chatId);
    fetchUser();
  };

  return (
    <div className="modal fade" id="delete-chat-modal">
      <div className="modal-dialog">
        <div className="modal-content">
          <div className="modal-body">
            This chat and all of its messages will be deleted forever.
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
              onClick={() => handleDeleteChat(currentChat.id)}
            >
              Delete
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

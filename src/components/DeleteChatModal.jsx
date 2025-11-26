import { deleteChat } from "../services.js";

export const DeleteChatModal = ({ fetchUser, currentChat }) => {
  const handleDeleteChat = async (chatId) => {
    await deleteChat(chatId);
    fetchUser();
  };

  if (!currentChat) {
    return null;
  }

  return (
    <div className="modal fade" id="delete-chat-modal">
      <div className="modal-dialog">
        <div className="modal-content">
          <div className="modal-header">
            <h5 className="modal-title">{`Delete ${currentChat.name}`}</h5>
            <button
              type="button"
              className="btn-close"
              data-bs-dismiss="modal"
              aria-label="Close"
            ></button>
          </div>
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

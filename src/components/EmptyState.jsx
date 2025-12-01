import { BiMessageRoundedAdd } from "../icons.js";

export const EmptyState = () => {
  return (
    <div className="d-flex flex-column justify-content-center align-items-center h-100 gap-2">
      <BiMessageRoundedAdd size={48} />
      <button
        type="button"
        data-bs-toggle="modal"
        data-bs-target="#add-chat-modal"
        className="btn btn-primary"
      >
        <div>Create a new chat</div>
      </button>
    </div>
  );
};

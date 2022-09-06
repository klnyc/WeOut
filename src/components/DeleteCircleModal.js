import { deleteCircle } from "../services";

export const DeleteCircleModal = ({ fetchUser, currentCircle }) => {
  const handleDeleteCircle = async (circleId) => {
    await deleteCircle(circleId);
    fetchUser();
  };

  return (
    <div className="modal fade" id="deleteCircleModal">
      <div className="modal-dialog">
        <div className="modal-content">
          <div className="modal-body">
            This circle and all of its messages will be deleted forever.
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
              onClick={() => handleDeleteCircle(currentCircle.id)}
            >
              Delete
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

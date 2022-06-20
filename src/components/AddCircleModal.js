import { useState } from "react";

export const AddCircleModal = () => {
  const [circleName, setCircleName] = useState("");

  const handleCircleNameChange = (event) => setCircleName(event.target.value);

  return (
    <div className="modal fade" id="addCircleModal">
      <div className="modal-dialog">
        <div className="modal-content">
          <div className="modal-header">
            <h5 className="modal-title">New circle</h5>
            <button
              type="button"
              className="btn-close"
              data-bs-dismiss="modal"
              aria-label="Close"
            ></button>
          </div>
          <div className="modal-body">
            <input
              name="circleName"
              className="form-control"
              placeholder="Circle name"
              value={circleName}
              onChange={handleCircleNameChange}
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
            <button type="button" className="btn btn-primary">
              Add
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

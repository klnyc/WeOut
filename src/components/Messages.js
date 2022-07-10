import "../styles/Messages.scss";
import { AddUserModal } from "./AddUserModal";

export const Messages = ({
  currentCircle,
  setShowCircleBar,
  showCircleBar,
}) => {
  return (
    <div className="col messages--component">
      <div className="row">
        <div className="col-4" onClick={() => setShowCircleBar(!showCircleBar)}>
          Toggle bar
        </div>
        <div className="col-4 text-center">
          {currentCircle && currentCircle.name}
        </div>
        <div className="col-4 text-end">
          <button
            type="button"
            data-bs-toggle="modal"
            data-bs-target="#addUserModal"
          >
            Add people
          </button>
        </div>
      </div>
      <div className="p-4">
        {currentCircle &&
          currentCircle.messages.map((message, index) => {
            return (
              <div key={index}>
                {message.screenName}: {message.message}
              </div>
            );
          })}
      </div>

      {<AddUserModal currentCircle={currentCircle} />}
    </div>
  );
};

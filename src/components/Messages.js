import "../styles/Messages.scss";
import { AddUserModal } from "./AddUserModal";
import { HiUserAdd, HiMenu, RiChatDeleteLine } from "../icons";

export const Messages = ({
  currentCircle,
  setShowCircleBar,
  showCircleBar,
}) => {
  const renderIcons = () => {
    return (
      <div className="col-4 text-end">
        <button
          type="button"
          data-bs-toggle="modal"
          data-bs-target="#addUserModal"
          className="mx-2 border-0 icon"
        >
          <HiUserAdd />
        </button>
        <RiChatDeleteLine className="mx-2" />
      </div>
    );
  };

  const renderHeader = () => {
    return (
      <div className="row pb-3">
        <div className="col-4" onClick={() => setShowCircleBar(!showCircleBar)}>
          <HiMenu className="messages--button-circleBar-toggle" />
        </div>
        <div className="col-4 text-center">
          {currentCircle && currentCircle.name}
        </div>
        {renderIcons()}
      </div>
    );
  };

  return (
    <div className="col messages--component">
      {renderHeader()}
      <div>
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

import "../styles/Messages.scss";
import { AddUserModal } from "./AddUserModal";
import { HiUserAdd, HiMenu, RiChatDeleteLine } from "../icons";
import { deleteCircle } from "../services";

export const Messages = ({
  currentCircle,
  setShowCircleBar,
  showCircleBar,
  fetchUser,
  user,
}) => {
  const handleDeleteCircle = async (circleId) => {
    await deleteCircle(circleId, user.screenName);
    fetchUser();
  };

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
        <RiChatDeleteLine
          className="mx-2 icon"
          onClick={() => handleDeleteCircle(currentCircle.id)}
        />
      </div>
    );
  };

  const renderHeader = () => {
    return (
      <div className="row pb-3">
        <div className="col-4" onClick={() => setShowCircleBar(!showCircleBar)}>
          <HiMenu className="icon" />
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

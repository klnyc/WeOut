import "../styles/Messages.scss";
import { AddUserModal } from "./AddUserModal";
import { HiUserAdd, HiMenu, RiChatDeleteLine, BiExit } from "../icons";
import { useEffect } from "react";
import { DeleteCircleModal } from "./DeleteCircleModal";
import { SignOutModal } from "./SignOutModal";

export const Messages = ({
  currentCircle,
  setShowCircleBar,
  showCircleBar,
  fetchUser,
  user,
  setUser,
}) => {
  useEffect(() => {
    const element = document.getElementById("messages--component");
    element.scrollTop = element.scrollHeight;
  }, [currentCircle]);

  const renderIcons = () => {
    return (
      <div className="col-4 text-end">
        <button
          type="button"
          data-bs-toggle="modal"
          data-bs-target="#addUserModal"
          className="mx-2 icon"
        >
          <HiUserAdd />
        </button>
        <button
          type="button"
          data-bs-toggle="modal"
          data-bs-target="#deleteCircleModal"
          className="mx-2 icon"
        >
          <RiChatDeleteLine />
        </button>
        <button
          type="button"
          data-bs-toggle="modal"
          data-bs-target="#signOutModal"
          className="mx-2 icon"
        >
          <BiExit />
        </button>
      </div>
    );
  };

  const renderHeader = () => {
    return (
      <div className="row py-2 fs-6 sticky-top messages--header">
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
    <div id="messages--component" className="col">
      {renderHeader()}
      <div>
        {currentCircle &&
          currentCircle.messages.map((message, index) => {
            const isUserMessage = message.screenName === user.screenName;
            return (
              <div
                key={index}
                className={`messages--message ${
                  isUserMessage ? "user" : "member"
                }`}
              >
                {message.screenName}: {message.message}
              </div>
            );
          })}
      </div>

      {<SignOutModal setUser={setUser} />}
      {<AddUserModal currentCircle={currentCircle} />}
      {
        <DeleteCircleModal
          fetchUser={fetchUser}
          currentCircle={currentCircle}
        />
      }
    </div>
  );
};

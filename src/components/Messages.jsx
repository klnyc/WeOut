import "../styles/Messages.scss";
import { AddUserModal } from "./AddUserModal.jsx";
import {
  HiUserAdd,
  HiMenu,
  RiChatDeleteLine,
  BiExit,
  BiMessageRoundedAdd,
} from "../icons.js";
import { useEffect } from "react";
import { DeleteChatModal } from "./DeleteChatModal.jsx";
import { SignOutModal } from "./SignOutModal.jsx";
import { AddChatModal } from "./AddChatModal.jsx";

export const Messages = ({
  currentChat,
  setShowSideBar,
  showSideBar,
  fetchUser,
  user,
  setUser,
}) => {
  useEffect(() => {
    const element = document.getElementById("message-window");
    element.scrollTop = element.scrollHeight;
  }, [currentChat]);

  const renderIcons = () => {
    const headerIconClass = "mx-2 icon";

    return (
      <div className="col-4 text-end">
        <button
          type="button"
          data-bs-toggle="modal"
          data-bs-target="#add-chat-modal"
          className={headerIconClass}
        >
          <BiMessageRoundedAdd />
        </button>
        <button
          type="button"
          data-bs-toggle="modal"
          data-bs-target="#add-user-modal"
          className={headerIconClass}
        >
          <HiUserAdd />
        </button>
        <button
          type="button"
          data-bs-toggle="modal"
          data-bs-target="#delete-chat-modal"
          className={headerIconClass}
        >
          <RiChatDeleteLine />
        </button>
        <button
          type="button"
          data-bs-toggle="modal"
          data-bs-target="#log-out-modal"
          className={headerIconClass}
        >
          <BiExit />
        </button>
      </div>
    );
  };

  const renderHeader = () => {
    return (
      <div className="row py-2 fs-6 sticky-top message-window-header">
        <div className="col-4" onClick={() => setShowSideBar(!showSideBar)}>
          <HiMenu className="icon" />
        </div>
        <div className="col-4 text-center fw-bold">
          {currentChat && currentChat.name}
        </div>
        {renderIcons()}
      </div>
    );
  };

  return (
    <div id="message-window" className="col">
      {renderHeader()}
      <div>
        {currentChat &&
          currentChat.messages.map((message, index) => {
            const isUserMessage = message.screenName === user.screenName;
            return (
              <div
                key={index}
                className={`message-bubble ${
                  isUserMessage ? "user" : "member"
                }`}
              >
                <span>
                  {message.screenName}: {message.message}
                </span>
                <span className="float-end">{message.timestamp}</span>
              </div>
            );
          })}
      </div>

      {<AddChatModal user={user} fetchUser={fetchUser} />}
      {<AddUserModal currentChat={currentChat} />}
      {<SignOutModal setUser={setUser} />}
      {<DeleteChatModal fetchUser={fetchUser} currentChat={currentChat} />}
    </div>
  );
};

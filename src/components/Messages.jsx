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
    const tooltipTriggerList = document.querySelectorAll(
      '[data-bs-toggle="tooltip"]'
    );
    const tooltipList = [...tooltipTriggerList].map(
      (tooltipTriggerEl) => new bootstrap.Tooltip(tooltipTriggerEl)
    );
    return () => {
      tooltipList.map((t) => t.dispose());
    };
  }, []);

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
          <div
            data-bs-toggle="tooltip"
            data-bs-placement="bottom"
            title="Add chat"
          >
            <BiMessageRoundedAdd />
          </div>
        </button>

        <button
          type="button"
          data-bs-toggle="modal"
          data-bs-target="#add-user-modal"
          className={headerIconClass}
        >
          <div
            data-bs-toggle="tooltip"
            data-bs-placement="bottom"
            title="Add member"
          >
            <HiUserAdd />
          </div>
        </button>
        <button
          type="button"
          data-bs-toggle="modal"
          data-bs-target="#delete-chat-modal"
          className={headerIconClass}
        >
          <div
            data-bs-toggle="tooltip"
            data-bs-placement="bottom"
            title="Delete chat"
          >
            <RiChatDeleteLine />
          </div>
        </button>
        <button
          type="button"
          data-bs-toggle="modal"
          data-bs-target="#sign-out-modal"
          className={headerIconClass}
        >
          <div
            data-bs-toggle="tooltip"
            data-bs-placement="bottom"
            title="Sign out"
          >
            <BiExit />
          </div>
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
                <div className="container p-0 m-0">
                  <div className="row pb-1">
                    <div className="col fw-bold">{message.screenName}</div>
                    <div className="col text-end">{message.timestamp}</div>
                  </div>
                  <div className="row">
                    <div className="col">{message.message}</div>
                  </div>
                </div>
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

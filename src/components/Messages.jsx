import { useEffect } from "react";
import "../styles/Messages.scss";
import { Header } from "./Header.jsx";
import { AddUserModal } from "./AddUserModal.jsx";
import { AddChatModal } from "./AddChatModal.jsx";
import { DeleteChatModal } from "./DeleteChatModal.jsx";
import { SignOutModal } from "./SignOutModal.jsx";

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

  return (
    <div id="message-window" className="col">
      <Header
        currentChat={currentChat}
        setShowSideBar={setShowSideBar}
        showSideBar={showSideBar}
      />
      <div>
        {currentChat &&
          currentChat.messages.map((message, index) => {
            const isOwnerMessage = message.screenName === user.screenName;
            return (
              <div
                key={index}
                className={`message-bubble ${
                  isOwnerMessage ? "owner" : "member"
                }`}
              >
                <div className="w-100 p-0 m-0">
                  <div className="row pb-1">
                    <div className="col-6 fw-bold text-truncate text-nowrap">
                      {message.screenName}
                    </div>
                    <div className="col-6 text-end text-truncate text-nowrap">
                      {message.timestamp}
                    </div>
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

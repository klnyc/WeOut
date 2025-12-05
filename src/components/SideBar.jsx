import "../styles/SideBar.scss";
import { ImBubbles } from "../icons.js";

export const SideBar = ({
  user,
  chats,
  currentChat,
  setCurrentChat,
  showSideBar,
}) => {
  return (
    <div
      className={`pt-0 overflow-auto offcanvas offcanvas-start side-bar-panel ${
        showSideBar && "show"
      }`}
    >
      <div className="pt-2 pb-3 fs-6 sticky-top fw-bold text-truncate text-nowrap">
        <span className="pe-2">
          <ImBubbles id="weout-logo-sidebar" />
        </span>
        {user.screenName}
      </div>
      <div id="side-bar-chats">
        {chats.map((chat) => {
          if (!chat) return null;
          const isActiveChat = currentChat && currentChat.id === chat.id;
          return (
            <div
              key={chat.id}
              className={`side-bar-chat-name text-truncate text-nowrap ${
                isActiveChat ? "active-chat" : ""
              }`}
              onClick={() => setCurrentChat(chat)}
            >
              {chat.name}
            </div>
          );
        })}
      </div>
    </div>
  );
};

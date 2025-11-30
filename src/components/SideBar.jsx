import "../styles/SideBar.scss";
import { AddChatModal } from "./AddChatModal.jsx";
import { BiMessageRoundedAdd } from "../icons.js";

export const SideBar = ({
  user,
  chats,
  currentChat,
  setCurrentChat,
  showSideBar,
  fetchUser,
}) => {
  return (
    <div
      className={`pt-0 overflow-auto offcanvas offcanvas-start side-bar-panel ${
        showSideBar && "show"
      }`}
    >
      <div className="pt-2 pb-3 fs-6 sticky-top text-center fw-bold">
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

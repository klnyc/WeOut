import "../styles/SideBar.scss";
import { AddChatModal } from "./AddChatModal.jsx";
import { BiMessageRoundedAdd } from "../icons.js";

export const SideBar = ({
  user,
  chats,
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
      <div className="text-center fw-bold pt-2 pb-3 fs-6">
        {user.screenName}
      </div>
      <div id="side-bar-chats">
        {chats.map((chat) => {
          if (!chat) return null;
          return (
            <div
              key={chat.id}
              className="side-bar-chat-name"
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

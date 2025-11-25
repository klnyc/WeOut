import "../styles/ChatRoom.scss";
import { Messages } from "./Messages.jsx";
import { TextArea } from "./TextArea.jsx";

export const ChatRoom = ({
  user,
  currentChat,
  showSideBar,
  setShowSideBar,
  fetchUser,
  setUser,
}) => {
  return (
    <div
      className={`row row-cols-1 chat-room ${
        showSideBar && "shrink"
      }`}
    >
      <Messages
        currentChat={currentChat}
        setShowSideBar={setShowSideBar}
        showSideBar={showSideBar}
        fetchUser={fetchUser}
        user={user}
        setUser={setUser}
      />
      {currentChat && <TextArea user={user} currentChat={currentChat} />}
    </div>
  );
};

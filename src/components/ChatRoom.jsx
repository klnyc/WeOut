import "../styles/ChatRoom.scss";
import { Messages } from "./Messages.jsx";
import { TextArea } from "./TextArea.jsx";
import { Header } from "./Header.jsx";
import { AddUserModal } from "./AddUserModal.jsx";
import { AddChatModal } from "./AddChatModal.jsx";
import { DeleteChatModal } from "./DeleteChatModal.jsx";
import { SignOutModal } from "./SignOutModal.jsx";
import { EmptyState } from "./EmptyState.jsx";

export const ChatRoom = ({
  user,
  currentChat,
  showSideBar,
  setShowSideBar,
  fetchUser,
  setUser,
  loaded,
}) => {
  return (
    <div className={`chatroom ${showSideBar && "shrink"}`}>
      <Header
        currentChat={currentChat}
        setShowSideBar={setShowSideBar}
        showSideBar={showSideBar}
      />

      {currentChat && <Messages currentChat={currentChat} user={user} />}
      {currentChat && <TextArea user={user} currentChat={currentChat} />}
      {!currentChat && loaded && <EmptyState />}

      {<AddChatModal user={user} fetchUser={fetchUser} />}
      {<AddUserModal currentChat={currentChat} />}
      {<SignOutModal setUser={setUser} />}
      {<DeleteChatModal fetchUser={fetchUser} currentChat={currentChat} />}
    </div>
  );
};

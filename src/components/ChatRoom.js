import "../styles/ChatRoom.scss";
import { Messages } from "./Messages";
import { TextArea } from "./TextArea";

export const ChatRoom = ({
  user,
  currentCircle,
  showCircleBar,
  setShowCircleBar,
  fetchUser,
  setUser,
}) => {
  return (
    <div
      className={`row row-cols-1 chatRoom--component ${
        showCircleBar && "shrink"
      }`}
    >
      <Messages
        currentCircle={currentCircle}
        setShowCircleBar={setShowCircleBar}
        showCircleBar={showCircleBar}
        fetchUser={fetchUser}
        user={user}
        setUser={setUser}
      />
      {currentCircle && <TextArea user={user} currentCircle={currentCircle} />}
    </div>
  );
};

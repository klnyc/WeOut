import "../styles/ChatRoom.scss";
import { Messages } from "./Messages";
import { TextArea } from "./TextArea";

export const ChatRoom = ({
  user,
  currentCircle,
  showCircleBar,
  setShowCircleBar,
  fetchUser,
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
      />
      {currentCircle && (
        <TextArea
          user={user}
          currentCircle={currentCircle}
          fetchUser={fetchUser}
        />
      )}
    </div>
  );
};

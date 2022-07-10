import "../styles/ChatRoom.scss";
import { Messages } from "./Messages";
import { TextArea } from "./TextArea";

export const ChatRoom = ({
  user,
  currentCircle,
  showCircleBar,
  setShowCircleBar,
  setCircles,
}) => {
  return (
    <div
      className={`row row-cols-1 chatRoom--component ${
        showCircleBar && "shrink"
      }`}
    >
      <Messages
        user={user}
        currentCircle={currentCircle}
        setShowCircleBar={setShowCircleBar}
        showCircleBar={showCircleBar}
        setCircles={setCircles}
      />
      {currentCircle && (
        <TextArea
          user={user}
          currentCircle={currentCircle}
          setCircles={setCircles}
        />
      )}
    </div>
  );
};

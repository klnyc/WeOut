import "../styles/ChatRoom.scss";
import { Messages } from "./Messages";
import { TextArea } from "./TextArea";

export const ChatRoom = ({ showCircleBar, setShowCircleBar }) => {
  return (
    <div
      className={`row row-cols-1 chatRoom--component ${
        showCircleBar && "shrink"
      }`}
    >
      <Messages
        setShowCircleBar={setShowCircleBar}
        showCircleBar={showCircleBar}
      />
      <TextArea />
    </div>
  );
};

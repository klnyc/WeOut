import "../styles/ChatRoom.scss";

export const ChatRoom = ({ showCircleBar, setShowCircleBar }) => {
  return (
    <div className={`chatRoom--component ${showCircleBar && "shrink"}`}>
      <button className="m-3" onClick={() => setShowCircleBar(!showCircleBar)}>
        Open bar
      </button>
    </div>
  );
};

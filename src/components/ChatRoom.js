import "../styles/ChatRoom.scss";

export const ChatRoom = ({ showCircleBar, setShowCircleBar }) => {
  return (
    <div
      className={`container chatRoom--component ${showCircleBar && "shrink"}`}
    >
      <div className="row row-cols-1">
        <div className="col">
          Messages{" "}
          <button
            className="m-3"
            onClick={() => setShowCircleBar(!showCircleBar)}
          >
            Toggle bar
          </button>
        </div>
        <div className="col textArea--component">Text Area</div>
      </div>
    </div>
  );
};

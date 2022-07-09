import "../styles/Messages.scss";

export const Messages = ({
  currentCircle,
  setShowCircleBar,
  showCircleBar,
}) => {
  return (
    <div className="col messages--component">
      <div className="row">
        <div className="col-4" onClick={() => setShowCircleBar(!showCircleBar)}>
          Toggle
        </div>
        <div className="col-4 text-center">
          {currentCircle && currentCircle.name}
        </div>
      </div>
      <div className="p-4">
        {currentCircle &&
          currentCircle.messages.map((message, index) => {
            return <div key={index}>{message.screenName}: {message.message}</div>;
          })}
      </div>
    </div>
  );
};

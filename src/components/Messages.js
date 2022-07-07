import "../styles/Messages.scss";

export const Messages = ({ setShowCircleBar, showCircleBar }) => {
  return (
    <div className="col messages--component">
      <button className="m-3" onClick={() => setShowCircleBar(!showCircleBar)}>
        Toggle bar
      </button>
    </div>
  );
};

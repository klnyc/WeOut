import { useEffect } from "react";
import "../styles/Messages.scss";

export const Messages = ({ currentChat, user }) => {
  useEffect(() => {
    const element = document.getElementById("message-window");
    element.scrollTop = element.scrollHeight;
  }, [currentChat]);

  return (
    <div id="message-window" className="col">
      {currentChat.messages.map((message, index) => {
        const isOwnerMessage = message.screenName === user.screenName;
        return (
          <div
            key={index}
            className={`message-bubble ${isOwnerMessage ? "owner" : "member"}`}
          >
            <div className="w-100 p-0 m-0">
              <div className="row pb-1">
                <div className="col-6 fw-bold text-truncate text-nowrap">
                  {message.screenName}
                </div>
                <div className="col-6 text-end text-truncate text-nowrap">
                  {message.timestamp}
                </div>
              </div>
              <div className="row">
                <div className="col">{message.message}</div>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
};

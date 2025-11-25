import { useEffect, useState } from "react";
import "../styles/TextArea.scss";
import { updateChat } from "../services.js";

export const TextArea = ({ user, currentChat }) => {
  const [textArea, setTextArea] = useState("");

  useEffect(() => {
    const sendMessage = async () => {
      const message = {
        screenName: user.screenName,
        message: textArea,
        timestamp: new Date().toLocaleString(),
      };
      const request = {
        chatId: currentChat.id,
        message,
      };
      await updateChat(request);
    };

    const handleEnter = (event) => {
      if (event.key === "Enter") {
        event.preventDefault();
        if (textArea) {
          sendMessage(textArea);
          setTextArea("");
        }
      }
    };

    document.addEventListener("keydown", handleEnter);

    return () => {
      document.removeEventListener("keydown", handleEnter);
    };
  });

  const handleTextAreaChange = (event) => {
    setTextArea(event.target.value);
  };

  return (
    <textarea
      className="col form-control no-focus message-text-area border-0 rounded-0"
      value={textArea}
      onChange={handleTextAreaChange}
      placeholder="Press enter to send..."
    ></textarea>
  );
};

import { useState } from "react";
import "../styles/TextArea.scss";
import { updateChat } from "../services.js";
import { getTimestamp } from "../utility.js";

export const TextArea = ({ user, currentChat }) => {
  const [textArea, setTextArea] = useState("");

  const sendMessage = async (text) => {
    if (!currentChat || !text.trim()) return;

    const message = {
      screenName: user.screenName,
      message: text,
      timestamp: getTimestamp(),
    };
    const request = {
      chatId: currentChat.id,
      message,
    };
    await updateChat(request);
  };

  const handleKeyDown = async (event) => {
    if (event.key === "Enter" && !event.shiftKey) {
      event.preventDefault();
      if (textArea.trim()) {
        await sendMessage(textArea);
        setTextArea("");
      }
    }
  };

  const handleTextAreaChange = (event) => {
    setTextArea(event.target.value);
  };

  return (
    <textarea
      className="col form-control no-focus message-text-area border-0 rounded-0"
      value={textArea}
      onChange={handleTextAreaChange}
      onKeyDown={handleKeyDown}
      placeholder="Press enter to send..."
    ></textarea>
  );
};

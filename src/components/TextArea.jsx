import { useState } from "react";
import "../styles/TextArea.scss";
import { updateChat } from "../services.js";
import { getTimestamp } from "../utility.js";
import { MdSend } from "../icons.js";

export const TextArea = ({ user, currentChat }) => {
  const [textArea, setTextArea] = useState("");
  const disableSendButton = textArea.trim().length === 0;

  const sendMessage = async (text) => {
    if (!text.trim()) return;

    const message = {
      screenName: user.screenName,
      message: text,
      timestamp: getTimestamp(),
    };

    const request = {
      chatId: currentChat.id,
      message,
    };

    setTextArea("");
    await updateChat(request);
  };

  const handleKeyDown = async (event) => {
    if (event.key === "Enter") {
      event.preventDefault();
      if (textArea.trim()) {
        await sendMessage(textArea);
      }
    }
  };

  const handleTextAreaChange = (event) => {
    setTextArea(event.target.value);
  };

  return (
    <div className="d-flex p-0">
      <textarea
        className="form-control no-focus message-text-area rounded-0 border-start-0 border-end-0 border-bottom-0"
        value={textArea}
        onChange={handleTextAreaChange}
        onKeyDown={handleKeyDown}
        placeholder="Press enter to send..."
      ></textarea>
      <button
        className={`send-message-icon ${disableSendButton ? "disabled" : ""}`}
        onClick={async () => await sendMessage(textArea)}
        disabled={disableSendButton}
      >
        <MdSend size={24} />
      </button>
    </div>
  );
};

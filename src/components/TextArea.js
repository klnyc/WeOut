import { useEffect, useState } from "react";
import "../styles/TextArea.scss";
import { updateCircle } from "../services";

export const TextArea = ({ user, currentCircle, fetchUser }) => {
  const [textArea, setTextArea] = useState("");

  useEffect(() => {
    const sendMessage = async () => {
      const message = { screenName: user.screenName, message: textArea };
      const request = { circleId: currentCircle.id, message };
      await updateCircle(request);
      fetchUser();
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
      className="col form-control textArea--component"
      value={textArea}
      onChange={handleTextAreaChange}
      placeholder="Press enter to send..."
    >
      <button>Send</button>
    </textarea>
  );
};

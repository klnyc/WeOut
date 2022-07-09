import { useState } from "react";
import "../styles/TextArea.scss";

export const TextArea = () => {
  const [textArea, setTextArea] = useState("");

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

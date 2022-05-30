import { useState } from "react";
import { CircleBar } from "../components/CircleBar";
import { ChatRoom } from "../components/ChatRoom";

export const Home = ({ user }) => {
  const [showCircleBar, setShowCircleBar] = useState(true);

  return (
    <div className="home--page">
      <CircleBar
        user={user}
        showCircleBar={showCircleBar}
        setShowCircleBar={setShowCircleBar}
      />
      <ChatRoom
        showCircleBar={showCircleBar}
        setShowCircleBar={setShowCircleBar}
      />
    </div>
  );
};

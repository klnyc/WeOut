import { useState } from "react";
import { CircleBar } from "../components/CircleBar";
import { ChatRoom } from "../components/ChatRoom";

export const Home = ({ user, setUser, fetchUser }) => {
  const [showCircleBar, setShowCircleBar] = useState(true);

  return (
    <div className="home--page">
      <CircleBar
        user={user}
        showCircleBar={showCircleBar}
        setShowCircleBar={setShowCircleBar}
        setUser={setUser}
        fetchUser={fetchUser}
      />
      <ChatRoom
        showCircleBar={showCircleBar}
        setShowCircleBar={setShowCircleBar}
      />
    </div>
  );
};

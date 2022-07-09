import { useEffect, useState } from "react";
import { CircleBar } from "../components/CircleBar";
import { ChatRoom } from "../components/ChatRoom";
import { listCircles } from "../services";

export const Home = ({ user, setUser, fetchUser }) => {
  const [showCircleBar, setShowCircleBar] = useState(true);
  const [circles, setCircles] = useState([]);
  const [currentCircle, setCurrentCircle] = useState();

  useEffect(() => {
    const fetchCircles = async () => {
      const response = await listCircles(user.circles);
      setCircles(response);
      setCurrentCircle(response[0]);
    };
    fetchCircles();
  }, [user.circles]);

  return (
    <div className="home--page">
      <CircleBar
        user={user}
        circles={circles}
        setCurrentCircle={setCurrentCircle}
        showCircleBar={showCircleBar}
        setShowCircleBar={setShowCircleBar}
        setUser={setUser}
        fetchUser={fetchUser}
      />
      <ChatRoom
        currentCircle={currentCircle}
        showCircleBar={showCircleBar}
        setShowCircleBar={setShowCircleBar}
      />
    </div>
  );
};

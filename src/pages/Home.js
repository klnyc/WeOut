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
    };
    fetchCircles();
  }, [user]);

  useEffect(() => {
    if (!circles.length) return;
    if (!currentCircle) {
      setCurrentCircle(circles[0]);
    } else {
      const updatedCircle = circles.find(
        (circle) => circle.id === currentCircle.id
      );
      setCurrentCircle(updatedCircle);
    }
  }, [circles, currentCircle]);

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
        user={user}
        currentCircle={currentCircle}
        showCircleBar={showCircleBar}
        setShowCircleBar={setShowCircleBar}
        setCircles={setCircles}
      />
    </div>
  );
};

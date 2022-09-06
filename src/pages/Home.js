import { useEffect, useState } from "react";
import { CircleBar } from "../components/CircleBar";
import { ChatRoom } from "../components/ChatRoom";
import { listCircles } from "../services";
import { firestore } from "../firebase";
import { doc, onSnapshot } from "firebase/firestore";
import { CIRCLES } from "../utility";

export const Home = ({ user, setUser, fetchUser }) => {
  const [showCircleBar, setShowCircleBar] = useState(true);
  const [circles, setCircles] = useState([]);
  const [currentCircle, setCurrentCircle] = useState();
  const [loaded, setLoaded] = useState(false);

  const fetchCircles = async () => {
    const response = await listCircles(user.circles);
    setCircles(response);
  };

  // Refresh circles when user adds a new circle
  useEffect(() => {
    console.log("fetching circles");
    fetchCircles();
  }, [user]); // eslint-disable-line react-hooks/exhaustive-deps

  // Set current circle when circles are loaded or first circle is added
  useEffect(() => {
    console.log("set current circle");
    if (!circles.length) return;
    if (!currentCircle) {
      setCurrentCircle(circles[0]);
    } else {
      const updatedCircle = circles.find((circle) => {
        if (!circle) return false;
        return circle.id === currentCircle.id;
      });
      setCurrentCircle(updatedCircle);
    }
  }, [circles]); // eslint-disable-line react-hooks/exhaustive-deps

  // If data is loaded, set flag that data is loaded
  useEffect(() => {
    console.log("set load state");
    if (currentCircle && !loaded) setLoaded(true);
  }, [currentCircle, loaded]);

  // If data is loaded, attach listeners to all circles to display live messages
  useEffect(() => {
    console.log("add listeners");
    if (loaded && user.circles.length) {
      user.circles.map((circle) => {
        const circleDoc = doc(firestore, CIRCLES, circle);
        const unsubscribe = onSnapshot(circleDoc, () => {
          fetchCircles();
        });
        return () => {
          unsubscribe();
        };
      });
    }
  }, [loaded, user.circles]); // eslint-disable-line react-hooks/exhaustive-deps

  return (
    <div className="home--page">
      <CircleBar
        user={user}
        circles={circles}
        setCurrentCircle={setCurrentCircle}
        showCircleBar={showCircleBar}
        setShowCircleBar={setShowCircleBar}
        fetchUser={fetchUser}
      />
      <ChatRoom
        user={user}
        currentCircle={currentCircle}
        showCircleBar={showCircleBar}
        setShowCircleBar={setShowCircleBar}
        setCircles={setCircles}
        fetchUser={fetchUser}
        setUser={setUser}
      />
    </div>
  );
};

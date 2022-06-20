import "../styles/CircleBar.scss";
import { signOutUser } from "../services";
import { SCREEN_NAME } from "../utility";
import { useEffect, useState } from "react";
import { AddCircleModal } from "./AddCircleModal";

export const CircleBar = ({ user, showCircleBar, setUser }) => {
  const mock = [
    { circleId: "1", name: "Church" },
    { circleId: "11", name: "Ball" },
    { circleId: "12", name: "Hockey" },
    { circleId: "13", name: "Dinner" },
  ];
  const [circles, setCircles] = useState([]);

  useEffect(() => {
    setCircles(mock);
    console.log("!");
  }, []);

  const handleSignOut = async () => {
    await signOutUser();
    setUser();
    window.sessionStorage.removeItem(SCREEN_NAME);
  };

  return (
    <div>
      <div
        className={`offcanvas offcanvas-start circleBar--panel ${
          showCircleBar && "show"
        }`}
      >
        <div>{user.screenName}</div>
        <div>
          {circles.map((circle) => {
            return (
              <div key={circle.circleId} className="circleBar--circle">
                {circle.name}
              </div>
            );
          })}
          <div className="circleBar--circle">
            <button
              type="button"
              data-bs-toggle="modal"
              data-bs-target="#addCircleModal"
            >
              +
            </button>
          </div>
          <button
            type="button"
            className="btn btn-light"
            onClick={handleSignOut}
          >
            Sign out
          </button>

          {<AddCircleModal />}
        </div>
      </div>
    </div>
  );
};

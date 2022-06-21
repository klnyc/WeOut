import "../styles/CircleBar.scss";
import { signOutUser, listCircles, deleteCircle } from "../services";
import { SCREEN_NAME } from "../utility";
import { useEffect, useState } from "react";
import { AddCircleModal } from "./AddCircleModal";

export const CircleBar = ({ user, showCircleBar, setUser, fetchUser }) => {
  const [circles, setCircles] = useState([]);

  const handleSignOut = async () => {
    await signOutUser();
    setUser();
    window.sessionStorage.removeItem(SCREEN_NAME);
  };

  const handleDeleteCircle = async (circleId) => {
    await deleteCircle(circleId, user.screenName);
    fetchUser();
  };

  useEffect(() => {
    const fetchCircles = async () => {
      const response = await listCircles(user.circles);
      setCircles(response);
    };
    fetchCircles();
  }, [user.circles]);

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
              <div key={circle.id} className="circleBar--circle">
                {circle.name}
                <div onClick={() => handleDeleteCircle(circle.id)}>x</div>
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

          {<AddCircleModal user={user} fetchUser={fetchUser} />}
        </div>
      </div>
    </div>
  );
};

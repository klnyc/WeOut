import "../styles/CircleBar.scss";
import { signOutUser } from "../services";
import { SCREEN_NAME } from "../utility";
import { useEffect, useState } from "react";

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
    console.log("!")
  }, []);

  const handleSignOut = async () => {
    await signOutUser();
    setUser();
    window.sessionStorage.removeItem(SCREEN_NAME);
  };

  const AddCircleModal = () => (
    <div
      className="modal fade"
      id="exampleModal"
      aria-labelledby="exampleModalLabel"
      aria-hidden="true"
    >
      <div className="modal-dialog">
        <div className="modal-content">
          <div className="modal-header">
            <h5 className="modal-title" id="exampleModalLabel">
              Modal title
            </h5>
            <button
              type="button"
              className="btn-close"
              data-bs-dismiss="modal"
              aria-label="Close"
            ></button>
          </div>
          <div className="modal-body">...</div>
          <div className="modal-footer">
            <button
              type="button"
              className="btn btn-secondary"
              data-bs-dismiss="modal"
            >
              Close
            </button>
            <button type="button" className="btn btn-primary">
              Save changes
            </button>
          </div>
        </div>
      </div>
    </div>
  );

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
              data-bs-target="#exampleModal"
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

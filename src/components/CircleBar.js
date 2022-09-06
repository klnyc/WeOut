import "../styles/CircleBar.scss";
import { AddCircleModal } from "./AddCircleModal";
import { BiMessageRoundedAdd } from "../icons";

export const CircleBar = ({
  user,
  circles,
  setCurrentCircle,
  showCircleBar,
  fetchUser,
}) => {
  return (
    <div
      className={`pt-0 overflow-auto offcanvas offcanvas-start circleBar--panel ${
        showCircleBar && "show"
      }`}
    >
      <div className="text-center fw-bold pt-2 pb-3 fs-6">
        {user.screenName}
      </div>
      <div>
        {circles.map((circle) => {
          if (!circle) return null;
          return (
            <div
              key={circle.id}
              className="circleBar--circle"
              onClick={() => setCurrentCircle(circle)}
            >
              {circle.name}
            </div>
          );
        })}
        <div className="circleBar--circle">
          <button
            type="button"
            data-bs-toggle="modal"
            data-bs-target="#addCircleModal"
            className="icon fs-4"
          >
            <BiMessageRoundedAdd />
          </button>
        </div>

        {<AddCircleModal user={user} fetchUser={fetchUser} />}
      </div>
    </div>
  );
};

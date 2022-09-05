import "../styles/CircleBar.scss";
import { signOutUser } from "../services";
import { SCREEN_NAME } from "../utility";
import { AddCircleModal } from "./AddCircleModal";
import { BiMessageRoundedAdd } from "../icons";

export const CircleBar = ({
  user,
  circles,
  setCurrentCircle,
  showCircleBar,
  setUser,
  fetchUser,
}) => {
  const handleSignOut = async () => {
    await signOutUser();
    setUser();
    window.sessionStorage.removeItem(SCREEN_NAME);
  };

  return (
    <div
      className={`pt-0 offcanvas offcanvas-start circleBar--panel ${
        showCircleBar && "show"
      }`}
    >
      <div className="text-center fw-bold pb-3">{user.screenName}</div>
      <div>
        {circles.map((circle) => {
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
            className="border-0 icon fs-4"
          >
            <BiMessageRoundedAdd />
          </button>
        </div>
        <button type="button" className="btn btn-light" onClick={handleSignOut}>
          Sign out
        </button>

        {<AddCircleModal user={user} fetchUser={fetchUser} />}
      </div>
    </div>
  );
};

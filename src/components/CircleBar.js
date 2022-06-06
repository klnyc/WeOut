import "../styles/CircleBar.scss";
import { signOutUser } from "../services";

export const CircleBar = ({ user, showCircleBar, setUser }) => {
  const handleSignOut = async () => {
    await signOutUser();
    setUser();
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
          {user.circles.length &&
            user.circles.map((circleName) => {
              return (
                <div key={circleName} className="circleBar--circle">
                  {circleName}
                </div>
              );
            })}
          <div className="circleBar--circle">+</div>
          <button
            type="button"
            className="btn btn-light"
            onClick={handleSignOut}
          >
            Sign out
          </button>
        </div>
      </div>
    </div>
  );
};

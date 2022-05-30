import "../styles/CircleBar.scss";

export const CircleBar = ({ user, showCircleBar }) => {
  return (
    <div>
      <div
        className={`offcanvas offcanvas-start circleBar--panel ${
          showCircleBar && "show"
        }`}
        tabindex="-1"
      >
        <div>{user.screenName}</div>
        <div>
          {user.circles.map((circleName) => {
            return (
              <div key={circleName} className="circleBar--circle">
                {circleName}
              </div>
            );
          })}
          <div className="circleBar--circle">+</div>
        </div>
      </div>
    </div>
  );
};

import "../styles/Navigation.scss";

export const Navigation = ({ user }) => {
  return (
    <div className="navigation--panel">
      <div>{user.screenName}</div>
      <div>
        {user.circles.map((circleName) => {
          return (
            <div key={circleName} className="navigation--circle">
              {circleName}
            </div>
          );
        })}
        <div className="navigation--circle">+</div>
      </div>
    </div>
  );
};

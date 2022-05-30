import { useState } from "react";
import "../styles/CircleBar.scss";

export const CircleBar = ({ user }) => {
  const [showCircleBar, setShowCircleBar] = useState(true);

  return (
    <div>
      <button onClick={() => setShowCircleBar(true)}>Open Bar</button>
      <div
        className={`offcanvas offcanvas-start navigation--panel ${
          showCircleBar && "show"
        }`}
        tabindex="-1"
      >
        <button onClick={() => setShowCircleBar(false)}>Close Bar</button>
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
    </div>
  );
};

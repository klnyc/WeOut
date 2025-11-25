import { signOutUser } from "../services.js";
import { SCREEN_NAME } from "../utility.js";

export const SignOutModal = ({ setUser }) => {
  const handleSignOut = async () => {
    await signOutUser();
    setUser();
    window.sessionStorage.removeItem(SCREEN_NAME);
  };

  return (
    <div className="modal fade" id="log-out-modal">
      <div className="modal-dialog">
        <div className="modal-content">
          <div className="modal-body">Log out?</div>
          <div className="modal-footer">
            <button
              type="button"
              className="btn btn-secondary"
              data-bs-dismiss="modal"
            >
              Close
            </button>
            <button
              type="button"
              className="btn btn-primary"
              data-bs-dismiss="modal"
              onClick={handleSignOut}
            >
              Log out
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

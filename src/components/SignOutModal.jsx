import { signOutUser } from "../services.js";
import { SCREEN_NAME } from "../utility.js";

export const SignOutModal = ({ setUser }) => {
  const handleSignOut = async () => {
    await signOutUser();
    setUser();
    window.sessionStorage.removeItem(SCREEN_NAME);
  };

  return (
    <div className="modal fade" id="sign-out-modal">
      <div className="modal-dialog">
        <div className="modal-content">
          <div className="modal-header">
            <h5 className="modal-title">Sign out</h5>
            <button
              type="button"
              className="btn-close"
              data-bs-dismiss="modal"
              aria-label="Close"
            ></button>
          </div>
          <div className="modal-body">Would you like to sign out?</div>
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
              Sign out
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

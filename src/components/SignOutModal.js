import { signOutUser } from "../services";
import { SCREEN_NAME } from "../utility";

export const SignOutModal = ({ setUser }) => {
  const handleSignOut = async () => {
    await signOutUser();
    setUser();
    window.sessionStorage.removeItem(SCREEN_NAME);
  };

  return (
    <div className="modal fade" id="signOutModal">
      <div className="modal-dialog">
        <div className="modal-content">
          <div className="modal-body">Sign out?</div>
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

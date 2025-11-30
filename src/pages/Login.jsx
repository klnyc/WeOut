import { useState } from "react";
import "../styles/App.scss";
import "../styles/Login.scss";
import { authenticateUser, createUser, getUser } from "../services.js";
import { SCREEN_NAME } from "../utility.js";
import { ImSpinner9 } from "../icons.js";
import { ErrorAlert } from "../components/ErrorAlert.jsx";

export const Login = ({ setUser }) => {
  const [credentials, setCredentials] = useState({
    screenName: "",
    password: "",
  });
  const [loginState, setLoginState] = useState(true);
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const handleCredentialChange = (event) => {
    setCredentials({ ...credentials, [event.target.name]: event.target.value });
  };

  const handleLogin = async (event) => {
    const { screenName, password } = credentials;
    event.preventDefault();

    if (error) {
      setError("");
    }

    if (!screenName || !password) {
      setError("Please fill in all fields.");
      setLoading(false);
      return;
    }

    try {
      setLoading(true);
      loginState
        ? await authenticateUser(screenName, password)
        : await createUser(screenName, password);
      const user = await getUser(screenName);
      setUser(user);
      window.sessionStorage.setItem(SCREEN_NAME, screenName);
    } catch (error) {
      setError(error.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div id="login-page">
      <form className="login-form-panel" onSubmit={handleLogin}>
        <div className="text-center fs-4 fw-semibold">WeOut</div>
        <div className="form-group mb-3">
          <label>Screen name</label>
          <input
            name="screenName"
            className="form-control"
            onChange={handleCredentialChange}
            value={credentials.screenName}
          />
        </div>
        <div className="form-group mb-3">
          <label>Password</label>
          <input
            name="password"
            type="password"
            className="form-control"
            onChange={handleCredentialChange}
            value={credentials.password}
          />
        </div>
        {loading ? (
          <div className="text-center pt-3">
            <ImSpinner9 className="spinner-icon" size={24} />
          </div>
        ) : (
          <div className="d-grid gap-2 text-center w-100 pt-3 mb-3">
            <button type="submit" className="btn btn-primary">
              {loginState ? "Login" : "Sign Up"}
            </button>
            <button
              type="button"
              className="btn btn-link"
              onClick={() => setLoginState(!loginState)}
            >
              {loginState ? "Create account" : "Login"}
            </button>
          </div>
        )}

        {error && <ErrorAlert errorMessage={error} />}
      </form>
    </div>
  );
};

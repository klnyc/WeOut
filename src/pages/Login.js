import { useEffect, useState } from "react";
import "../styles/App.scss";
import "../styles/Login.scss";

export const Login = () => {
  const [credentials, setCredentials] = useState({
    screenName: "",
    password: "",
  });
  const [loginState, setLoginState] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    try {
    } catch (error) {
      setError(error);
    }
  }, []);

  const handleCredentialChange = (event) => {
    setCredentials({ ...credentials, [event.target.name]: event.target.value });
  };

  const handleLogin = () => {};

  return (
    <div className="login--page">
      <form className="login--form_panel" onSubmit={handleLogin}>
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
        <div className="text-center mb-3">
          <button type="submit" className="btn btn-primary">
            {loginState ? "Login" : "Sign Up"}
          </button>
        </div>
        <div className="text-center mb-3">
          <button
            className="btn btn-link"
            onClick={() => setLoginState(!loginState)}
          >
            {loginState ? "Create account" : "Login"}
          </button>
        </div>
        <div className="login--error">{error}</div>
      </form>
    </div>
  );
};

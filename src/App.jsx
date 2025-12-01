import { useEffect, useState } from "react";
import "./styles/App.scss";
import { Login } from "./pages/Login.jsx";
import { Home } from "./pages/Home.jsx";
import { getUser } from "./services";
import { SCREEN_NAME } from "./utility";
import { ImSpinner9 } from "./icons.js";

const App = () => {
  const [user, setUser] = useState();
  const [loading, setLoading] = useState(true);

  const screenName = window.sessionStorage.getItem(SCREEN_NAME);

  const fetchUser = async () => {
    setLoading(true);
    const user = await getUser(screenName);
    setUser(user);
    setLoading(false);
  };

  useEffect(() => {
    if (screenName && !user) {
      fetchUser();
    } else {
      setLoading(false);
    }
  }, [screenName]);

  return (
    <div className="app">
      {loading ? (
        <div className="d-flex justify-content-center align-items-center h-100">
          <ImSpinner9 className="spinner-icon" size={48} />
        </div>
      ) : user ? (
        <Home user={user} setUser={setUser} fetchUser={fetchUser} />
      ) : (
        <Login setUser={setUser} />
      )}
    </div>
  );
};

export default App;

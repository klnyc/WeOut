import { useEffect, useState } from "react";
import "./styles/App.scss";
import { Login } from "./pages/Login";
import { Home } from "./pages/Home";
import { getUser } from "./services";
import { SCREEN_NAME } from "./utility";

const App = () => {
  const [user, setUser] = useState();

  const screenName = window.sessionStorage.getItem(SCREEN_NAME);

  const fetchUser = async () => {
    const user = await getUser(screenName);
    setUser(user);
  };

  useEffect(() => {
    if (screenName && !user) {
      fetchUser();
    }
  });

  const renderApp = () => {
    if (!user) {
      return <Login setUser={setUser} />;
    } else {
      return <Home user={user} setUser={setUser} />;
    }
  };

  return <div className="app">{renderApp()}</div>;
};

export default App;

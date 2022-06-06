import { useEffect, useState } from "react";
import "./styles/App.scss";
import { Login } from "./pages/Login";
import { Home } from "./pages/Home";
import { getUser } from "./services";

// const mock = {
//   screenName: "klai",
//   circles: ["Church", "Ball", "Little John's Birthday Party"],
// }

const App = () => {
  const [user, setUser] = useState();

  useEffect(() => {
    const screenName = window.sessionStorage.getItem("screenName");

    const fetchUser = async () => {
      const user = await getUser(screenName);
      setUser(user);
    };

    if (screenName && !user) {
      fetchUser();
    }
  }, [user]);

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

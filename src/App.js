import { useState } from "react";
import "./styles/App.scss";
import { Login } from "./pages/Login";
import { Home } from "./pages/Home";

// const mock = {
//   screenName: "klai",
//   circles: ["Church", "Ball", "Little John's Birthday Party"],
// }

const App = () => {
  const [user, setUser] = useState();

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

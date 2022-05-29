import { useState } from "react";
import "./styles/App.scss";
import { Login } from "./pages/Login";
import { Home } from "./pages/Home";

const App = () => {
  const [user, setUser] = useState(undefined);

  const renderApp = () => {
    if (!user) {
      return <Login setUser={setUser} />;
    } else {
      return <Home />;
    }
  };

  return <div className="app">{renderApp()}</div>;
};

export default App;

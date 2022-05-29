import "./styles/App.scss";
import { Login } from "./pages/Login";
import { useState } from "react";

const App = () => {
  const [user, setUser] = useState(undefined);

  const renderApp = () => {
    if (!user) {
      return <Login setUser={setUser} />;
    } else {
      return <div>Chat room</div>;
    }
  };

  return <div className="app">{renderApp()}</div>;
};

export default App;

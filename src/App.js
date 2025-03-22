import { useEffect, useState } from "react";
import "../src/assets/styles/App.css";
import LoginForm from "./components/LoginForm";
import Main from "./components/Main";

function App() {
  const [isLoginned, setIsLoginned] = useState(false);
  useEffect(() => {
    setIsLoginned(localStorage.getItem("isLoginned"));
  }, []);

  return (
    <div className="App">
      {!isLoginned && <LoginForm setIsLoginned={setIsLoginned} />}
      {isLoginned && <Main />}
    </div>
  );
}

export default App;

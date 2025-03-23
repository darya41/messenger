import { useEffect, useState } from "react";
import "../src/assets/styles/App.css";
import "./assets/styles/App.css";
import LoginForm from "./components/LoginForm";
import Main from "./components/Main";

function App() {
  const [isLoginned, setIsLoginned] = useState(false);

  const [login, setLogin] = useState("");
  const [password, setPassword] = useState("");

  useEffect(() => {
    setIsLoginned(localStorage.getItem("isLoginned") === "true");
    console.log(isLoginned);
  }, []);

  return (
    <div className="App">
      {isLoginned === false ? (
        <LoginForm
          setIsLoginned={setIsLoginned}
          setLogin={setLogin}
          login={login}
          password={password}
          setPassword={setPassword}
        />
      ) : (
        <Main login={login} />
      )}
    </div>
  );
}

export default App;

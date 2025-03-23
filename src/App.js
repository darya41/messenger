import React, { useEffect, useRef, useState } from "react";
import { CSSTransition, SwitchTransition } from "react-transition-group";
import "../src/assets/styles/App.css";
import "./assets/styles/App.css";
import "./assets/styles/Transitions.css";
import LoginForm from "./components/LoginForm";
import Main from "./components/Main";
import RegistrationForm from "./components/RegistrationForm";

function App() {
  const [isLoginned, setIsLoginned] = useState(false);
  const [login, setLogin] = useState("");
  const [password, setPassword] = useState("");
  const [isRegPage, setIsRegPage] = useState(false);

  const loginRef = useRef(null);
  const registerRef = useRef(null);

  useEffect(() => {
    setIsLoginned(localStorage.getItem("isLoginned") === "true");
    console.log(isLoginned);
  }, []);

  return (
    <div className="App">
      {isLoginned === false ? (
        <SwitchTransition mode="out-in">
          <CSSTransition
            key={isRegPage ? "register" : "login"}
            timeout={300}
            classNames="fade"
            nodeRef={isRegPage ? registerRef : loginRef}
          >
            <div ref={isRegPage ? registerRef : loginRef}>
              {isRegPage ? (
                <RegistrationForm setIsRegPage={setIsRegPage} />
              ) : (
                <LoginForm
                  setIsLoginned={setIsLoginned}
                  setLogin={setLogin}
                  login={login}
                  password={password}
                  setPassword={setPassword}
                  setIsRegPage={setIsRegPage}
                />
              )}
            </div>
          </CSSTransition>
        </SwitchTransition>
      ) : (
        <Main login={login} />
      )}
    </div>
  );
}

export default App;

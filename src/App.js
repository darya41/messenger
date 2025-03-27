import React, { useEffect, useRef, useState } from "react";
import { CSSTransition, SwitchTransition } from "react-transition-group";
import "../src/assets/styles/App.css";
import "./assets/styles/App.css";
import "./assets/styles/Transitions.css";
import LoginForm from "./components/LoginForm";
import Main from "./components/Main";
import RegistrationForm from "./components/RegistrationForm";
import ResetPasswordForm from "./components/ResetPasswordForm";

function App() {
  const [isLoginned, setIsLoginned] = useState(false);
  const [id, setId] = useState("");
  const [isRegPage, setIsRegPage] = useState(false);
  const [isResetPasswordPage, setIsResetPasswordPage] = useState(false);

  const loginRef = useRef(null);
  const registerRef = useRef(null);
  const resetRef = useRef(null);

  useEffect(() => {
    setIsLoginned(localStorage.getItem("isLoginned") === "true");
    console.log(isLoginned);
  }, []);

  return (
    <div className="App">
      {isLoginned === false ? (
        <SwitchTransition mode="out-in">
          <CSSTransition
            key={
              isRegPage ? "register" : isResetPasswordPage ? "reset" : "login"
            }
            timeout={300}
            classNames="fade"
            nodeRef={
              isRegPage
                ? registerRef
                : isResetPasswordPage
                ? resetRef
                : loginRef
            }
          >
            <div
              ref={
                isRegPage
                  ? registerRef
                  : isResetPasswordPage
                  ? resetRef
                  : loginRef
              }
            >
              {isRegPage ? (
                <RegistrationForm setIsRegPage={setIsRegPage} />
              ) : isResetPasswordPage ? (
                <ResetPasswordForm
                  setIsResetPasswordPage={setIsResetPasswordPage}
                />
              ) : (
                <LoginForm
                  setIsLoginned={setIsLoginned}
                  setId={setId}
                  setIsRegPage={setIsRegPage}
                  setIsResetPasswordPage={setIsResetPasswordPage}
                />
              )}
            </div>
          </CSSTransition>
        </SwitchTransition>
      ) : (
        <Main id={id} />
      )}
    </div>
  );
}

export default App;

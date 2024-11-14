import React from "react";
import Logo from "../../assets/Logo";

const Login = () => {
  function disableBackAndForward() {
    history.pushState(null, document.title, window.location.href);
  }

  disableBackAndForward();

  window.addEventListener("popstate", function () {
    disableBackAndForward(); // Push the same state on back navigation
    window.location.reload(); // Reloads the page if back or forward is clicked
  });
  return (
    <div className="login">
      <Logo />
      <div className="circle">
        <div className="circle-inner"></div>
        <div className="circle-inner"></div>
        <div className="circle-inner"></div>
      </div>
      <div className="main">
        <div className="left">
          <p>Sebelum lanjut, Login dulu yuk!</p>
          <div className="baAduh-img">
            <img src="baSenang.png" alt="Brand Ambassador" />
          </div>
        </div>
        <div className="right">
          <h1>time to login</h1>
          <p className="desc">please create an account to continue</p>
          <form action="/home">
            <div className="input-group">
              <label className="label" htmlFor="email">
                email
              </label>
              <div className="input-element">
                <input type="email" name="email" required />
                <img src="email.svg" alt="Email" />
              </div>
            </div>
            <div className="input-group">
              <label htmlFor="password">password</label>
              <div className="input-element">
                <input type="password" name="password" required />
                <img src="lock.svg" alt="Lock" />
              </div>
            </div>
            <button type="submit">sign in</button>
            <p className="switch-auth">
              didn't have an account? <a href="/register">sign up</a>
            </p>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;

import React from "react";
import Logo from "../../assets/Logo";

const Register = () => {
  return (
    <div className="register">
      <Logo />
      <div className="circle">
        <div className="circle-inner"></div>
        <div className="circle-inner"></div>
        <div className="circle-inner"></div>
      </div>
      <div className="main">
        <div className="left">
          <p>Duh kamu belum punya akun ya? <br /> Buat dulu yuk!!!</p>
          <div className="baAduh-img">
            <img src="baAduh.png" alt="Brand Ambassador" />
          </div>
        </div>
        <div className="right">
          <h1>create account</h1>
          <p className="desc">please create an account to continue</p>
          <form action="/login">
            <div className="input-group">
              <label className="label" htmlFor="email">email</label>
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
            <div className="input-group">
              <label htmlFor="confPas">confirm password</label>
              <div className="input-element">
                <input type="confPas" name="confPas" required />
                <img src="lock.svg" alt="Lock" />
              </div>
            </div>
            <button type="submit">sign up</button>
            <p className="switch-auth">already have an account? <a href="/login">sign in</a></p>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Register;

import React from "react";
import Logo from "../../assets/Logo";

const Landing = () => {
  return (
    <div className="landing">
      <Logo />
      <main className="main">
        <div className="left">
          <h1>
            welcome to
            <br />
            skensa tsm
          </h1>
          <p>skensa siap disiplin berkompeten dan beretika</p>
          <div className="buttons">
            <a href="/login">login</a>
            <a href="/register">register</a>
          </div>
        </div>
        <div className="right">
          <div className="dashed">
            <img src="dashed.png" alt="Dashed Circle" />
          </div>
          <div className="ba">
            <div className="ba-img">
              <img src="baBeri.png" alt="Brand Ambassador" />
            </div>
            <div className="particle">
              <img src="love.png" alt="Love" />
              <img src="gear.png" alt="Gear" />
              <img src="lines.png" alt="Lines" />
              <img src="circle.png" alt="Circle" />
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Landing;

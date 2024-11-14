import React from "react";

const LogOutModal = ({onClose}) => {
  return (
    <div className="logout-modal" onClick={onClose}>
      <img src="/alert.png" alt="Alert" />
      <h1>logout account?</h1>
      <p>Logging out will end your current session. Do you want to proceed?</p>
      <div className="buttons">
        <button onClick={onClose}>cancel</button>
        <button>
          <a href="/">logout</a>
        </button>
      </div>
    </div>
  );
};

export default LogOutModal;

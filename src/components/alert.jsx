import React, { useState, useEffect, useContext } from "react";
import { CSSTransition } from "react-transition-group";
import { AlertContext } from "../context/alert/alertContext";
const Alert = () => {
  const { alert, hide } = useContext(AlertContext);
  const [progress, changeProgress] = useState(100);
  const doTimer = () => {
    let x = alert.duration + 1;
    let interval = setInterval(() => {
      changeProgress((progress) =>  progress - (100 / alert.duration) <= 0 ? 0 :progress - (100 / alert.duration))
      x -= 1;
      if (x === 0) hide();
      if (x < 0) {
        clearInterval(interval);
        changeProgress(100);
      }
    }, 1000);
  };
  if (alert.visible && progress === 100) {
    doTimer();
  }

  return (
    <CSSTransition
      in={alert.visible}
      mountOnEnter
      unmountOnExit
      timeout={{
        enter: 500,
        exit: 350,
      }}
      classNames={"alert"}
    >
      <div
        className={`alert withered alert-${alert.type || "warning"} alert-dismissible  `}
      >
        <strong>огогошеньки!</strong>
        <p>{alert.text}</p>
        <button
          onClick={hide}
          type="button"
          className="close"
          aria-label="Close"
        >
          <span aria-hidden="true">×</span>
        </button>
        <div className="prog">
          <div
            className="prog-bar"
            style={{ width: `${progress}%` }}
          ></div>
        </div>
      </div>
    </CSSTransition>
  );
};

export default Alert;

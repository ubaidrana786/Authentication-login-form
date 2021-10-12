import React from "react";
import classes from "./ErrorModel.module.css";
export const ErrorModel = (props) => {
  return (
    <div className={classes.modal} onClick={props.onconfirm}>
      <header className={classes.header}>
        <h2>{props.title}</h2>
      </header>
      <div className={classes.content}>
        <p>{props.message}</p>
      </div>
      <footer className={classes.actions}>
        <button className="btn btn-primary">{props.onConfirm}Okay</button>
      </footer>
    </div>
  );
};

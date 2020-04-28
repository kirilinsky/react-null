import React, { useState, useContext } from "react";
import { AlertContext } from "../context/alert/alertContext";
import { FirebaseContext } from "../context/firebase/firebaseContext";

const Form = () => {
  const [value, setValue] = useState("");

  const alert = useContext(AlertContext);
  const firebase = useContext(FirebaseContext);

  const submitHandler = (e) => {
    e.preventDefault();

    if (value.trim()) {
      firebase
        .addUser(value.trim())
        .then(() => alert.show(`ты добавил ${value}`, "success"))
        .catch(err=>{
          alert.show(`ошибка ${err}`, "danger");
        })

      setValue("");
    } else {
      alert.show("пусто чет", "danger");
    }
  };
  return (
    <form onSubmit={submitHandler}>
      <div className="form-group">
        <input
          type="text"
          className="form-control"
          id="formGroupExampleInput"
          placeholder="user name"
          value={value}
          onChange={(e) => setValue(e.target.value)}
        />{" "}
        <label htmlFor="formGroupExampleInput">
          <small>add new user</small>{" "}
        </label>
      </div>
    </form>
  );
};

export default Form;

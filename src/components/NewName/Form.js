import React, { useState } from "react";
import styles from "./Form.module.css";

const Form = (props) => {
  const [enteredName, setEnteredName] = useState("");
  const [enteredAge, setEnteredAge] = useState("");
  const [message, setMessage] = useState("");

  const NameChangeHandler = (e) => {
    setEnteredName(e.target.value);
  };

  const AgeChangeHandler = (e) => {
    setEnteredAge(e.target.value);
  };
  const messageChangeHandler = (e) => {
    setMessage(e);
  };
  const submitHandler = (e) => {
    e.preventDefault();
    const nameData = {
      name: enteredName,
      age: enteredAge,
    };
    if (nameData.name == "" && nameData.age == "") {
     return messageChangeHandler("Please Inter The Name & Age!");
    } else if (nameData.age == "") {
     return messageChangeHandler("Please Inter The Age!");
    } else if (nameData.name == "") {
     return messageChangeHandler("Please Inter The Name!");
    } else {
      messageChangeHandler("");
    }
    props.onSaveNameData(nameData);
    setEnteredName("");
    setEnteredAge("");
  };
  return (
    <div className={styles['form-father']}>
      <form onSubmit={submitHandler} className={styles['form-container']}>
        <div className={styles['form-head']}>
          <div className="">
            <label>Name</label>
            <input
              onChange={NameChangeHandler}
              value={enteredName}
              type="text"
            />
          </div>
          <div className="">
            <label>Age</label>
            <input
              onChange={AgeChangeHandler}
              type="number"
              value={enteredAge}
              min="8"
              step="1"
              max="99"
            />
          </div>
        </div>
        <div className="">
          <button className={styles['submit-button']} type="submit">Add New</button>
        </div>
      </form>
      <div>
        <h2 className={styles['warn-message-style']}>{message}</h2>
      </div>
    </div>
  );
};
export default Form;

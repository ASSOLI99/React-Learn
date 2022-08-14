import { useState } from "react";

const SimpleInput = (props) => {
  const [enteredName, setEnteredName] = useState("");
  const [enteredNameIsTuched, setEnterdNameIsTuched] = useState(false);
  const enteredNameIsValid = enteredName !== "";
  const nameInputIsValid = !enteredNameIsValid && enteredNameIsTuched;
  const changeNameHandler = (e) => {
    setEnteredName(e.target.value);
  };
  const formSubmitionHandler = (e) => {
    e.preventDefault();
    setEnterdNameIsTuched(true);
    if (!enteredName) {
      return;
    }

    setEnteredName("");
    setEnterdNameIsTuched(false);
  };

  const nameInputClasses = nameInputIsValid
    ? "form-control invalid"
    : "form-control";
  const blurNameHandler = (e) => {
    setEnterdNameIsTuched(true);
  };
  return (
    <form onSubmit={formSubmitionHandler}>
      <div className={nameInputClasses}>
        <label htmlFor="name">Your Name</label>
        <input
          type="text"
          id="name"
          onBlur={blurNameHandler}
          onChange={changeNameHandler}
        />
        {nameInputIsValid && (
          <p className="error-text">Name must not be empty</p>
        )}
      </div>
      <div className="form-actions">
        <button>Submit</button>
      </div>
    </form>
  );
};

export default SimpleInput;

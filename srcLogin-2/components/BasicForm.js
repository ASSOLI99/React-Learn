import { useState } from "react";
const BasicForm = () => {
  // firstName
  const [firstName, setFirstName] = useState("");
  const [firstNameIsValid, setFirstNameIsValid] = useState(false);
  const [firstNameErrors, setFirstNameErrors] = useState("");
  //lastName
  const [lastName, setLastName] = useState("");
  const [lastNameIsValid, setLastNameIsValid] = useState(false);
  const [lastNameErrors, setLastNameErrors] = useState("");
  //email
  const [email, setEmail] = useState("");
  const [emailIsValid, setEmailIsValid] = useState(false);
  const [emailErrors, setEmailErrors] = useState("");

  const setFirstNameHandler = (e) => {
    setFirstName(e.target.vlaue);
    if (String(e.target.value).trim() !== "") {
      if (String(e.target.value).trim().length >= 3) {
        setFirstNameIsValid(true);
        setFirstNameErrors("");
        return;
      }
      setFirstNameErrors("first Name is short");
    } else {
      setFirstNameErrors("first Name must not be empty");
    }
  };
  const setLastNameHandler = (e) => {
    setLastName(e.target.vlaue);
    if (String(e.target.value).trim() !== "") {
      if (String(e.target.value).trim().length >= 3) {
        setLastNameIsValid(true);
        setLastNameErrors("");
        return;
      }
      setLastNameErrors("Last Name is short");
    } else {
      setLastNameErrors("Last Name must not be empty");
    }
  };
  const setEmailHandler = (e) => {
    setEmail(e.target.vlaue);
    if (String(e.target.value).trim() !== "") {
      if (String(e.target.value).includes("@")) {
        setEmailIsValid(true);
        setEmailErrors("");
        return;
      }
      setEmailErrors("wrong email format");
    } else {
      setEmailErrors("Email must not be empty");
    }
  };
  const submitHandler = (e) => {
    e.preventDefault();
    if (emailIsValid && lastNameIsValid && firstNameIsValid) {
      console.log("done");
    }
  };
  return (
    <form onSubmit={submitHandler}>
      <div className="control-group">
        <div className="form-control">
          <label htmlFor="name">First Name</label>
          <input
            onBlur={setFirstNameHandler}
            onChange={setFirstNameHandler}
            type="text"
            id="name"
          />
          {firstNameErrors && <p style={{ color: "red" }}>{firstNameErrors}</p>}
        </div>
        <div className="form-control">
          <label htmlFor="name">Last Name</label>
          <input
            onBlur={setLastNameHandler}
            onChange={setLastNameHandler}
            type="text"
            id="name"
          />
          {lastNameErrors && <p style={{ color: "red" }}>{lastNameErrors}</p>}
        </div>
      </div>
      <div className="form-control">
        <label htmlFor="name">E-Mail Address</label>
        <input
          onBlur={setEmailHandler}
          onChange={setEmailHandler}
          type="email"
          id="name"
        />
        {emailErrors && <p style={{ color: "red" }}>{emailErrors}</p>}
      </div>
      <div className="form-actions">
        <button>Submit</button>
      </div>
    </form>
  );
};

export default BasicForm;

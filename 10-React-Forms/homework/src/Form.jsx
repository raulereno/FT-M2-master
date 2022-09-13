import React, { useState } from "react";

export const validate = (input) => {
  let errors = {};
  if (!input.username) {
    errors.username = "Username is required";
  } else if (!/\S+@\S+\.\S+/.test(input.username)) {
    errors.username = "Username is invalid";
  }
  if (!input.password) {
    errors.password = "Password is required";
  } else if (!/(?=.*[0-9])/.test(input.password)) {
    errors.password = "Password is invalid";
  }

  return errors;
};

export default function Form() {
  const [form, setForm] = useState({
    username: "",
    password: "",
  });
  const [error, setError] = useState({});

  const changeHandler = (event) => {
    let input = event.target.name;
    let value = event.target.value;

    if (input === "username") {
      setForm({ ...form, [input]: value });
    } else if (input === "password") {
      setForm({ ...form, [input]: value });
    }

    setError(
      validate({
        ...input,
        [input]: value,
      })
    );
  };

  return (
    <div>
      <form
        onSubmit={(event) => {
          event.preventDefault();
        }}
      >
        <div>
          <label>Username:</label>
          <input
            type="text"
            name="username"
            value={form.username}
            onChange={changeHandler}
            className={error.username && "danger"}
          />
          {error.username && <p className="danger">{error.username} </p>}
        </div>
        <div>
          <label>Password:</label>
          <input
            type="password"
            name="password"
            value={form.password}
            onChange={changeHandler}
            className={error.password && "danger"}
          />
          {error.password && <p className="danger">{error.password} </p>}
        </div>
        <button type="submit" disabled={false}>
          Submit
        </button>
      </form>
    </div>
  );
}

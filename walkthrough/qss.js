import { useState } from 'react'

export default function App() {
    const [user, setUser] = useState({ email: "", mobile: "" });
    // const [error,setError] = useState("");
    const handleForm = (e) => {
        e.preventDefault();
        const checkMobile = /^\+?(\d{1,3})?[-.\s]?(\(?\d{2,4}?\)?)[-.\s]?(\d{3,4})[-.\s]?(\d{4})$/
        if (!checkMobile.test(user.mobile)) {
            alert("Please enter correct mobile")
        }
        const checkEmail = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/
        if (!checkEmail.test(user.email)) {
            alert("pls enter correct email")
        }
        console.log(user.email)
        console.log(user.mobile)
    }
    const onChangeHandle = (e) => {
        setUser({ ...user, [e.target.name]: e.target.value })
    }

    return (
        <>
            <h1>Form</h1>
            <form method="post" onSubmit={handleForm}>
                <label>Email</label>
                <input type="email" value={user.email} name="email" onChange={onChangeHandle} />
                <br />
                <label>Mobile Number</label>
                <input type="number" value={user.mobile} name="mobile" onChange={onChangeHandle} />
                <br />
                <button>Submit</button>
            </form>

        </>

    )
}




import React, { useState, useEffect } from "react";

export default function App() {
  const [user, setUser] = useState({ email: "", mobile: "" });
  const [errors, setError] = useState({ email: "", mobile: "" });
  const handleChange = (e) => {
    setUser({ ...user, [e.target.name]: e.target.value });
  };
  const formHandler = async (e) => {
    e.preventDefault();
    let formValid = true;
    const newErrors = { email: "", mobile: "" };
    const checkMobile =
      /^\+?(\d{1,3})?[-.\s]?(\(?\d{2,4}?\)?)[-.\s]?(\d{3,4})[-.\s]?(\d{4})$/;
    const checkEmail = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    if (!checkMobile.test(user.mobile)) {
      newErrors.mobile = "PLs enter valid mobile number";
      formValid = false;
    }
    if (!checkEmail.test(user.email)) {
      newErrors.email = "PLs enter valid Email Address";
      formValid = false;
    }
    if (formValid) {
      console.log("FORM SUBMITTED", user);
      setUser({ email: "", mobile: "" });
    }
    setError(newErrors);
  };

  return (
    <>
      <h1> Form </h1>
      <form method="post" onSubmit={formHandler}>
        <label>Email: </label>
        <input
          type="text"
          name="email"
          value={user.email}
          onChange={handleChange}
        />
        {errors.email && <span style={{ color: "red" }}>{errors.email}</span>}
        <br />
        <label>Mobile: </label>
        <input
          type="text"
          name="mobile"
          value={user.mobile}
          onChange={handleChange}
        />
        {errors.mobile && <span style={{ color: "red" }}>{errors.mobile}</span>}
        <br />
        <button>Submit</button>
      </form>
    </>
  );
}


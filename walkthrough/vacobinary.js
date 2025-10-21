// TLS module in node js
// instanceof in js
// generic object in js
// find 3rd highest salary in sql





import React, { useState } from 'react';

export default function App() {
  const [input, setInput] = useState({ in: '', us: '', euro: '' });
  const changeHAndler = (e) => {
    setInput({ ...input, [e.target.name]: e.target.value });
  };
  const handler = () => {
    if (input.task !== '') {
      const indianValue = parseInt(input.in);
      const usVAlue = 10;
      const euroVAlue = 20;
      const convertedUS = indianValue * usVAlue;
      const convertedEuro = indianValue * euroVAlue;
      setInput({in:indianValue,us: convertedUS, euro: convertedEuro });
    }
  };
  return (
    <>
      <h1>Converter</h1>
      <input
        type="number"
        name="in"
        value={input.in}
        onChange={changeHAndler}
      />
      <button onClick={handler}>Converter</button>
      <br />
      <input value={input.us} placeholder="US Value" readOnly />
      <br />
      <input value={input.euro} placeholder="EURO Value" readOnly />
    </>
  );
}



import React, { useState } from "react";

export default function App() {
  const [user, setUser] = useState({ indian: "", europe: "", us: "" });

  const changeHandler = (e) => {
    const { name, value } = e.target;
    setUser((prevState) => {
      const newUser = { ...prevState, [name]: value };
      if (name === "indian" && value !== "") {
        const usValue = 10;
        const euroValue = 20;
        const indianAmount = parseInt(value);
        if (!isNaN(indianAmount)) {
          const euroconverted = indianAmount * euroValue;
          const usConverted = indianAmount * usValue;
          newUser.europe = euroconverted;
          newUser.us = usConverted;
        } else {
          newUser.europe = "";
          newUser.us = "";
        }
      }
      return newUser;
    });
  };
  return (
    <>
      <h1>Form</h1>
      <form>
        <input
          type="number"
          name="indian"
          value={user.indian}
          placeholder="Enter indian rupee"
          onChange={changeHandler}
        />
        <br />
        <input
          name="europe"
          value={user.europe}
          placeholder="Enter europe dollar"
          readOnly
        />
        <br />
        <input
          name="us"
          value={user.us}
          placeholder="Enter US Dollar"
          readOnly
        />
      </form>
    </>
  );
}


import React, { useState } from "react";

export default function App() {
  const [input, setInput] = useState("");
  const [lists, setList] = useState([]);
  const chnageHAndler = (e) => {
    setInput(e.target.value);
  };
  const formHAndler = (e) => {
    e.preventDefault();
    setList([...lists, input]);
    setInput("");
  };
  const deleteHAndler = (i) => {
    const filterData = lists.filter((_, index) => index !== i);
    setList(filterData);
  };
  return (
    <>
      <h1>To DO List</h1>
      <form method="post" onSubmit={formHAndler}>
        <label>Element: </label>
        <input type="text" value={input} onChange={chnageHAndler} />
        <br />
        <button>Submit</button>
      </form>
      <br />
      {lists.length > 0 && <h2>Lists</h2>}
      <ul>
        {lists.length > 0 &&
          lists.map((value, index) => {
            return (
              <li key={index}>
                {value}
                <button onClick={() => deleteHAndler(index)}>delete</button>
              </li>
            );
          })}
      </ul>
    </>
  );
}

import React, { useState } from 'react';

export default function App() {
  const [input, setInput] = useState({ task: '' });
  const [lists, setList] = useState([]);
  const changeHAndler = (e) => {
    setInput({ ...input, [e.target.name]: e.target.value });
  };
  const handler = () => {
    if (input.task !== '') {
      setList([...lists, input]);
      setInput({ task: '' });
    }
  };
  const deleteHAndler = (i) => {
    const filterLists = lists.filter((_, index) => index !== i);
    setList(filterLists);
  };
  return (
    <>
      <h1>ToDo List</h1>
      <label>Add new task: </label>
      <input
        type="text"
        name="task"
        value={input.task}
        onChange={changeHAndler}
      />
      <br />
      <button onClick={handler}>Add</button>
      {lists.length > 0 && <h1>Lists:</h1>}
      {lists.length > 0 &&
        lists.map((list, index) => {
          return (
            <li key={index}>
              {list.task}
              <button onClick={() => deleteHAndler(index)}>Delete</button>
            </li>
          );
        })}
    </>
  );
}




import { useState } from "react";

function Form() {
  const [data, setData] = useState({
    name: "",
    password: "",
    email: "",
    salary: 0,
    roal: "",
  });

  const [val, setVal] = useState({
    name: "",
    password: "",
    email: "",
    salary: 0,
    roal: "",
  });
  function handel(e) {
    setData({ ...data, [e.target.name]: e.target.value });
  }

  function change(e) {
    e.preventDefault();
    setVal(data);
    setData({
      name: "",
      password: "",
      email: "",
      salary: 0,
      roal: "",
    });
  }

  return (
    <>
      <div className="container">
        <form>
          <div className="output">
            <input
              type="text"
              name="name"
              placeholder="Name ..."
              value={data.name}
              onChange={handel}
            />
            <br />
            <br />
            <input
              type="password"
              name="password"
              placeholder="Password ..."
              value={data.password}
              onChange={handel}
            />
            <br />
            <br />
            <input
              type="email"
              name="email"
              placeholder="email ..."
              value={data.email}
              onChange={handel}
            />
            <br />
            <br />
            <input
              type="Number"
              name="salary"
              placeholder="salary ..."
              value={data.salary}
              onChange={handel}
            />
            <br />
            <br />
            <input
              type="text"
              name="roal"
              placeholder="roal ..."
              value={data.roal}
              onChange={handel}
            />
            <button onClick={change}>Submit</button>
          </div>
        </form>
        <h1>Name: {val.name}</h1>
        <h1>Email: {val.email}</h1>
        <h1>Password: {val.password}</h1>
        <h1>Salary: {val.salary}</h1>
        <h1>Roal: {val.roal}</h1>
      </div>
    </>
  );
}

export { Form };

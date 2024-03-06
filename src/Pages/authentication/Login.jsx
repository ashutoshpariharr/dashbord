import React, { useState } from "react";
// import { Navigate } from "react-router-dom";

function Login() {

  const [user, setUser] = useState({
    username: "",
    email: "",
    phone: "",
    password: "",
  });

  const handleInput = (e) => {
    // console.log(e);
    const name = e.target.name;
    const value = e.target.value;

    setUser({
      ...user,
      [name]: value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log(user);

    // handle fetch data from the server

    try {
      const response = await fetch("http://localhost:5000/api/auth/register", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(user),
      });
      console.log(response);
      const res_data = await response.json();
      console.log("res from token", res_data);

      if (response.ok) {
        setUser({
          username: "",
          email: "",
          phone: "",
          password: "",
        });
        alert("Registration successfully");
        // Navigate("/");
      } else {
        alert("not workign");
      }
    } catch (error) {
      console.log("Register", error);
    }
  };

  return (
    <div className="form-container">
      <form onSubmit={handleSubmit}>
        <div className="reg-group">
          <input
            type="text"
            className="res-input"
            name="username"
            id="username"
            required
            autoComplete="off"
            onChange={handleInput}
            value={user.username}
          />
          <span className="highlight"></span>
          <label>Name</label>
        </div>
        <br />
        <div className="reg-group">
          <input
            required
            type="email"
            className="res-input"
            name="email"
            id="username"
            autoComplete="off"
            onChange={handleInput}
          />
          <span className="highlight"></span>
          <label>Email</label>
        </div>
        <br />
        <div className="reg-group">
          <input
            required
            className="res-input"
            type="number"
            name="phone"
            id="username"
            autoComplete="off"
            onChange={handleInput}
          />
          <span className="highlight"></span>
          <label>Mobile</label>
        </div>
        <br />
        <div className="reg-group">
          <input
            required
            type="password"
            className="res-input"
            name="password"
            id="username"
            autoComplete="off"
            onChange={handleInput}
          />
          <span className="highlight"></span>

          <label>Password</label>
        </div>
        <br />

        <div class="buttons">
          <button class="btn">
            <span></span>
            <p
              data-start="good luck!"
              data-text="Click"
              data-title="Register"
            ></p>
          </button>
        </div>
      </form>
    </div>
  );
}

export default Login;

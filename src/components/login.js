
import React, { useState, useEffect } from 'react';
import Profile from './profile';
import { Routes, Route, Link } from "react-router-dom"
import { useNavigate } from 'react-router-dom';
import Swal from 'sweetalert2';

function LoginForm(props) {
  const redirect = useNavigate()

  const [users, setUsers] = useState([]);
  const [loginData, setLoginData] = useState({});

  useEffect(() => {
    const storedUsers = localStorage.getItem("users");
    setUsers(storedUsers ? JSON.parse(storedUsers) : []);
  }, []);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setLoginData((prev) => ({ ...prev, [name]: value }));
  };

  function handleSubmit(event) {
    event.preventDefault();
    const user = users.find(
      (u) => u.email === loginData.email && u.password === loginData.password
    );

    if (user) {
      localStorage.setItem("user", JSON.stringify(user));
      redirect("/user");
    } else {
      Swal({
        icon: "error",
        text: "Invalid credentials",
      })
    }
  }


  return (
    <div className="App">
      <div className="card">
        <h2 className="card-header">Login Here</h2>
        <div className="form-group">
          <form onSubmit={handleSubmit}>
            <label className="form-control" htmlFor="email">Email:</label>
            <input
              type="email"
              id="email"
              placeholder="E-mail"
              onChange={handleInputChange}
              required
            />


            <label className="form-control" htmlFor="password">Password:</label>
            <input
              type="password"
              id="password"
              placeholder="Password"
              onChange={handleInputChange}
            />
            <br />
            <Link to="/profile">
              <button className="btn btn-primary" type="submit" onClick={() => redirect("/profile")}>Login</button></Link>
          </form>
        </div>
      </div>
      <Routes>
        <Route exact path="/login" component={LoginForm}></Route>
        <Route path="/profile" component={Profile}></Route>
      </Routes>
    </div>
  );
}

export default LoginForm;
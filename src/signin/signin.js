import React, { useEffect, useState } from "react";
import axois from "axios";
import "./signin.css";
import { Link } from "react-router-dom";

const Signin = () => {
  const [detail, setDetail] = useState({
    mail: "",
    password: "",
  });
  const [showPassword, setPassword] = useState(true);
  const Submit = async () => {
    if (detail.mail !== "" && detail.password !== "") {
      let dataz = { email: detail.mail, password: detail.password };
      try {
        let result = await axois.post("/users/login", dataz);
        console.log(result);
        localStorage.setItem("token", result.data.token);
        window.location.href=("/notes");
      } catch (e) {
        console.log(e);
        alert(e);
      }
    } else {
      alert("login failed");
    }
    setDetail({
      mail: "",
      password: "",
    });
  };

  console.log(detail);
  return (
    <div className="main">
      <div className="container">
        <div className="text">
          <h3>Google</h3>
          <h4>Signin</h4>
          <h5>to continue to Gmail</h5>
        </div>
        <div className="inp1">
          <input
            className="inp"
            value={detail.mail}
            onChange={(e) => {
              setDetail({ ...detail, mail: e.target.value });
            }}
            placeholder="Email or phone"
          />
          <button>Forgot email?</button>
        </div>
        <div className="inp1">
          <input
            className="inp"
            type={showPassword ? "password" : "text"}
            value={detail.password}
            onChange={(e) => {
              setDetail({ ...detail, password: e.target.value });
            }}
            placeholder=" Enter password"
          />
          <span style={{ display: "flex" }}>
            <input
              style={{ width: "3vw", height: "3vh" }}
              onClick={() => setPassword((prev) => !prev)}
              type="checkbox"
            />{" "}
            <h5>show password</h5>
          </span>
          <h5>Not your computer ? Use Guest mode to sign in privately</h5>
          <button>Learn more</button>
        </div>
        <div className="sub1">
          <Link to="/signup">
            {" "}
            <button>Create account</button>
          </Link>
          <Link to="/">
            {" "}
            <button onClick={Submit}>Next</button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Signin;

import React, { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "./firebase";
import "./Login.css";

const Login = () => {
  const [err, setErr] = useState(false);
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    const email = e.target[0].value;
    const password = e.target[1].value;

    try {
      await signInWithEmailAndPassword(auth, email, password);
      navigate("/")
    } catch (err) {
      setErr(true);
    }
  };
  return (
    <div className="formContainer1">
      <div className="formWrapper2">
        <span className="logo1">DhiSwastha Admin</span>
        <span className="title1">Login</span>
        <form className="form" onSubmit={handleSubmit}>
          <input className="in" type="email" placeholder="email" />
          <input className="in" type="password" placeholder="password" />
          <button className="btn1">Sign in</button>
          {err && <span>Something went wrong</span>}
        </form>
        
      </div>
    </div>
  );
};

export default Login;

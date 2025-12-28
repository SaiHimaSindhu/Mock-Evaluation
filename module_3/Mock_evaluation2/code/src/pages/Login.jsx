import React, { useState, useRef, useEffect } from "react";
import { useNavigate } from "react-router-dom";

const VALID_EMAIL = "admin@gmail.com";
const VALID_PASS = "admin1234";

export default function Login({ onSuccess }) {
  const [email, setEmail] = useState("");
  const [pass, setPass] = useState("");
  const emailRef = useRef(null);
  const navigate = useNavigate();

  useEffect(() => {
    if (emailRef.current) emailRef.current.focus();
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (email === VALID_EMAIL && pass === VALID_PASS) {
      alert("Login success");
      onSuccess();
      navigate("/admin");
    } else {
      alert("Wrong email or password");
    }
  };

  return (
    <div>
      <h1>Login</h1>
      <form onSubmit={handleSubmit}>
        <input
          ref={emailRef}
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <input
          type="password"
          placeholder="Password"
          value={pass}
          onChange={(e) => setPass(e.target.value)}
        />
        <button type="submit">Login</button>
      </form>
    </div>
  );
}

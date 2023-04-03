"use client";
import { useState } from "react";

export default function LogPage() {
  const [emailState, setEmailState] = useState("");
  const [passwordState, setPasswordState] = useState("");

  const handleClick = () => {
    console.log("email: ", emailState);
    console.log("password: ", passwordState);
  };

  return (
    <form action="" id="formOne" method="get" className="formContainer bg-bl">
      <labe className="lb">Email: </labe>
      <br />
      <input
        type="email"
        name="email"
        id="email"
        className="txt "
        value={emailState}
        onChange={(e) => setEmailState(e.target.value)}
      />

      <labe className="lb">Password: </labe>
      <br />
      <input
        type="password"
        name="password"
        id="password"
        className="txt "
        value={passwordState}
        onChange={(e) => setPasswordState(e.target.value)}
      />

      <button className="btn bg-rd" onClick={handleClick}>
        Get In
      </button>
    </form>
  );
}

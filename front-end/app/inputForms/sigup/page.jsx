"use client";
import { useState } from "react";
export default function SigPage() {
  const [nameState, setNameState] = useState("");
  const [emailState, setEmailState] = useState("");
  const [passwordState, setPasswordState] = useState("");
  const [passwordConfirmState, setPasswordConfirmState] = useState("");

  const handleClick = () => {
    console.log("name: ", nameState);
    console.log("email: ", emailState);
    console.log("password: ", passwordState);
    console.log("passwordConfirm: ", passwordConfirmState);
  };
  return (
    <form action="" id="formOne" method="get" className="formContainer bg-rd">
      <labe className="lb">Firts Name:</labe>
      <br />
      <input
        type="text"
        name="name"
        id="name"
        className="txt "
        value={nameState}
        onChange={(e) => setNameState(e.target.value)}
      />

      <labe className="lb">Email:</labe>
      <br />
      <input
        type="email"
        name="name"
        id="name"
        className="txt "
        value={emailState}
        onChange={(e) => setEmailState(e.target.value)}
      />

      <labe className="lb">Password</labe>
      <br />
      <input
        type="password"
        name="password"
        id="password"
        className="txt "
        value={passwordState}
        onChange={(e) => setPasswordState(e.target.value)}
      />

      <labe className="lb">Confirm Password</labe>
      <br />
      <input
        type="password"
        name="password"
        id="password"
        className="txt "
        value={passwordConfirmState}
        onChange={(e) => setPasswordConfirmState(e.target.value)}
      />

      <button className="btn bg-or txt-bl" onClick={handleClick}>
        Sig up
      </button>
    </form>
  );
}

import { Link } from "react-router-dom";
import "../CSS/global-style.css"
export default function LogIn() {
  return (
    <form
      action=""
      className="formOne bg-danger text-white "
      id="formOne"
      method="get"
    >
      <label>User Name:</label>
      <input
        type="text"
        name="userName"
        id="user"
        className="inpu text-Checkbox text-light bg-dark-50 m-3"
      />
      <label>Password:</label>
      <input
        name="password"
        type="password"
        className="text-password text-light bg-dark-50 m-3 inpu"
        id="pass"
      />
      <button
        id="submit"
        className="btn btn-Modal-in bg-warning"
        onclick="validate(SubmitEvent)"
      >
        Get In
      </button>
      <Link to="/" className="btn btn-dark ms-3">Cerrar</Link>
    </form>
  );
}

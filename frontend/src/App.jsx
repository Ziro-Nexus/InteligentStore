import { Link, Route, Routes } from "react-router-dom";
import LogIn from "./Components/JSX/LogIn.jsx";

function App() {
  return (
    <>
      <Routes>
        <Route phat = "/" />
        <Route path="/log" element={<LogIn />} />
      </Routes>

      <div className="row m-2 content ">
        <div className="col bg-dark news">{/** Aqui hay imagenes */}</div>
        <div className="col-2  bg-primary container-buttons">
          <h3 className="">InteligentStore</h3>
          <nav>
            <Link to="/log" className="btn logAndSig btn-danger">
              Entrar
            </Link>
            <button className="btn logAndSig btn-dark">
              Registrarme
            </button>
            <p>
              ¿Has olvidado la contraceña? <br /> tranquilo dale
              <Link to="/teOlvide" className="text-danger">
                {" "}
                aqui
              </Link>
            </p>
          </nav>
        </div>
      </div>
    </>
  );
}

export default App;

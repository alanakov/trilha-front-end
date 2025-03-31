import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import Trilha1 from "./pages/Trilha1/Trilha1";

function App() {
  return (
    <BrowserRouter>
      <div className="container">
        <nav className="navbar">
          <ul>
            <li>
              <Link to="/trilha1">Trilha 1</Link>
            </li>
            <li>
              <Link to="/trilha2">Trilha 2</Link>
            </li>
            <li>
              <Link to="/trilha3">Trilha 3</Link>
            </li>
            <li>
              <Link to="/trilha4">Trilha 4</Link>
            </li>
            <li>
              <Link to="/trilha5">Trilha 5</Link>
            </li>
          </ul>
        </nav>

        <main className="content">
          <Routes>
            <Route path="/" element={<Trilha1 />} />
            <Route path="/trilha1" element={<Trilha1 />} />
          </Routes>
        </main>
      </div>
    </BrowserRouter>
  );
}

export default App;

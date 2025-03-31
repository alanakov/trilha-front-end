import { BrowserRouter, Routes, Route, Link } from "react-router-dom";

import Trilha2Page from "./pages/Trilha2/Trilha2Page"; // Página container da Trilha 2
import Trilha3Page from "./pages/Trilha3/Trilha3Page"; // Página de menu da Trilha 3

import Home from "./pages/Trilha3/Navegação/Home";
import About from "./pages/Trilha3/Navegação/About";
import Contact from "./pages/Trilha3/Navegação/Contact";
import Animal from "./pages/Trilha3/Animal";
import Rooms from "./pages/Trilha3/ReservasDeHotel/Rooms";
import RoomDetails from "./pages/Trilha3/ReservasDeHotel/RoomDetails";
import BookingSuccess from "./pages/Trilha3/ReservasDeHotel/BookingSuccess";

function App() {
  return (
    <BrowserRouter>
      <div className="container">
        <nav className="navbar">
          <ul>
            <li>
              <Link to="/">Início App</Link>
            </li>
            <li>
              <Link to="/trilha2">Trilha 2</Link>
            </li>
            <li>
              <Link to="/trilha3">Trilha 3</Link>
            </li>
          </ul>
        </nav>

        <main className="content">
          <Routes>
            <Route path="/trilha2" element={<Trilha2Page />} />

            <Route path="/trilha3" element={<Trilha3Page />} />

            <Route path="/trilha3/navegacao/home" element={<Home />} />
            <Route path="/trilha3/navegacao/about" element={<About />} />
            <Route path="/trilha3/navegacao/contact" element={<Contact />} />

            <Route path="/trilha3/animal/:name" element={<Animal />} />

            <Route path="/trilha3/reservas/rooms" element={<Rooms />} />
            <Route
              path="/trilha3/reservas/room/:roomId"
              element={<RoomDetails />}
            />
            <Route
              path="/trilha3/reservas/booking-success"
              element={<BookingSuccess />}
            />

            <Route
              path="/"
              element={
                <div>
                  <h1>Página Inicial do App</h1>
                  <p>Selecione uma trilha.</p>
                </div>
              }
            />

            <Route
              path="*"
              element={
                <div>
                  <h1>A página não existe</h1>
                </div>
              }
            />
          </Routes>
        </main>
      </div>
    </BrowserRouter>
  );
}

export default App;

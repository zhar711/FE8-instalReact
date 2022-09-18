import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import { FavoritesProvider } from "./context/FavoritesProvider";
import DetailMovie from "./pages/DetailMovie";
import Favourite from "./pages/Favourite";
import Home from "./pages/Home";

function App() {
  return (
    <FavoritesProvider>
      <Router>
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route path="/detail/" element={<DetailMovie />} />
          <Route path="/favourite" element={<Favourite />} />
        </Routes>
      </Router>
    </FavoritesProvider>
  );
}

export default App;

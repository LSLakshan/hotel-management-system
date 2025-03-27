import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import RoomsList from "./pages/RoomsList";

export default function App() {
  return (
    <Router>
      <Navbar />
      <div className="container mx-auto p-4">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/rooms" element={<RoomsList />} />
        </Routes>
      </div>
    </Router>
  );
}

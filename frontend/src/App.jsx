import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import RoomsList from "./pages/RoomsList";
import AddRoom from "./pages/AddRoom";

export default function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/rooms" element={<RoomsList />} />
        <Route path="/add-room" element={<AddRoom />} />
      </Routes>
    </Router>
  );
}

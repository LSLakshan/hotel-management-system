import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <nav className="bg-gray-800 p-4 text-white">
      <div className="container mx-auto flex justify-between">
        <h1 className="text-lg font-bold">Hotel Dashboard</h1>
        <div className="space-x-4">
          <Link to="/" className="hover:text-gray-300">Home</Link>
          <Link to="/rooms" className="hover:text-gray-300">Rooms</Link>
          <Link to="/add-room" className="hover:text-gray-300">Add Room</Link>
        </div>
      </div>
    </nav>
  );
}

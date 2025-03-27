import { Link } from "react-router-dom";

export default function Home() {
  return (
    <div className="text-center p-10">
      <h1 className="text-2xl font-bold">Welcome to Our Hotel Booking System</h1>
      <p className="text-gray-600 mt-2">Find and book the best Rooms at the best prices.</p>
      <Link to="/rooms">
        <button className="bg-blue-500 text-white px-6 py-2 rounded mt-4">Browse Rooms</button>
      </Link>
    </div>
  );
}
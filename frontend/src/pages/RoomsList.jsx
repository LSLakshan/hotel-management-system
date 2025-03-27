import { useState, useEffect } from "react";
import axios from "axios";

export default function RoomsList() {
  const [rooms, setRooms] = useState([]);

  useEffect(() => {
    axios.get("http://localhost:5000/api/rooms").then((res) => setRooms(res.data));
  }, []);

  return (
    <div className="container mx-auto mt-5">
      <h2 className="text-xl font-bold mb-3">Rooms</h2>
      <div className="grid grid-cols-3 gap-4">
        {rooms.map((room) => (
          <div key={room._id} className="border p-4">
            <img src={room.image} alt={room.name} className="w-full h-40 object-cover" />
            <h3 className="font-bold">{room.name}</h3>
            <p>Price: ${room.price}</p>
            <p>{room.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

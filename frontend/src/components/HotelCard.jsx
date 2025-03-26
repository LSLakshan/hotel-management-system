export default function HotelCard({ hotel }) {
    return (
      <div className="border rounded-lg p-4 flex space-x-4 shadow-md">
        <img src={hotel.image} alt={hotel.name} className="w-40 h-32 rounded-md object-cover" />
        <div className="flex-1">
          <h2 className="text-lg font-bold text-blue-600">{hotel.name}</h2>
          <p className="text-gray-600">{hotel.location} · <a href="#" className="text-blue-500 underline">Show on map</a></p>
          <p className="text-sm text-gray-500">{hotel.description}</p>
          <p className="text-green-600 font-semibold">{hotel.price} LKR / night</p>
          <button className="bg-blue-500 text-white px-4 py-1 rounded mt-2">See availability</button>
        </div>
      </div>
    );
  }
// Removed incorrect function signature declaration for Navbar
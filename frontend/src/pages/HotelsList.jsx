import HotelCard from "../components/HotelCard";

const hotels = [
  {
    name: "Midigama Villa Resort",
    location: "Weligama",
    description: "Budget Double Room with 1 large double bed.",
    price: "1,482",
    image: "https://via.placeholder.com/150", 
  },
  {
    name: "Casa Luna Home Stay",
    location: "Dickwella",
    description: "Standard Double Room with Shared Bathroom.",
    price: "7,116",
    image: "https://via.placeholder.com/150",
  },
  {
    name: "Rainforest Mount Lodge",
    location: "Deniyaya",
    description: "Budget Double Room with breakfast included.",
    price: "5,559",
    image: "https://via.placeholder.com/150",
  },
  {
    name: "Lime & Co Hostel",
    location: "Weligama",
    description: "Standard Twin Room with 2 single beds.",
    price: "8,453",
    image: "https://via.placeholder.com/150",
  },
];

export default function HotelsList() {
  return (
    <div className="p-6">
      <h1 className="text-xl font-bold">Available Hotels</h1>
      <div className="mt-4 space-y-4">
        {hotels.map((hotel, index) => (
          <HotelCard key={index} hotel={hotel} />
        ))}
      </div>
    </div>
  );
}
import { useState } from "react";
import { Home, Inbox, Calendar, Search, Settings, Menu } from "lucide-react";

const Sidebar = () => {
  const [isOpen, setIsOpen] = useState(true);

  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };

  const menuItems = [
    { title: "Home", url: "#", icon: <Home /> },
    { title: "Inbox", url: "#", icon: <Inbox /> },
    { title: "Calendar", url: "#", icon: <Calendar /> },
    { title: "Search", url: "#", icon: <Search /> },
    { title: "Settings", url: "#", icon: <Settings /> },
  ];

  return (
    <div className="flex">
      {/* Sidebar */}
      <div className={`bg-gray-900 text-white h-screen p-5 transition-all duration-300 ${isOpen ? "w-64" : "w-16"}`}>
        <button onClick={toggleSidebar} className="mb-6 p-2 text-white">
          <Menu />
        </button>
        <ul>
          {menuItems.map((item) => (
            <li key={item.title} className="flex items-center gap-3 p-3 hover:bg-gray-700">
              {item.icon}
              {isOpen && <a href={item.url}>{item.title}</a>}
            </li>
          ))}
        </ul>
      </div>
      
    </div>
  );
};

export default Sidebar;

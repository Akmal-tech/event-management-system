import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";
import { Search } from "lucide-react"; // nice modern icon

export default function Navbar() {
  const [searchOpen, setSearchOpen] = useState(false);
  const [search, setSearch] = useState("");
  const navigate = useNavigate();

  const handleSearch = (e) => {
    e.preventDefault();
    if (search.trim() !== "") {
      navigate(`/services?search=${search}`);
      setSearch("");
      setSearchOpen(false); // close after search
    }
  };

  return (
    <nav className="fixed top-0 left-0 w-full bg-white shadow-md z-50">
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        {/* Logo */}
        <h1 className="text-2xl font-bold text-pink-600">Indian Events</h1>

        {/* Nav links */}
        <ul className="flex items-center space-x-6 font-medium">
          <li><Link to="/" className="hover:text-pink-600">Home</Link></li>
          <li><Link to="/services" className="hover:text-pink-600">Services</Link></li>
          <li><Link to="/about" className="hover:text-pink-600">About</Link></li>
          <li><Link to="/contact" className="hover:text-pink-600">Contact</Link></li>
          
          {/* Search Icon / Box */}
          <li className="relative">
            {!searchOpen ? (
              <button
                onClick={() => setSearchOpen(true)}
                className="text-white-600 hover:text-gray-600"
              >
                <Search size={20} />
              </button>
            ) : (
              <form onSubmit={handleSearch} className="flex items-center space-x-2">
                <input
                  type="text"
                  autoFocus
                  placeholder="Search..."
                  value={search}
                  onChange={(e) => setSearch(e.target.value)}
                  className="px-3 py-1 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-pink-500 transition-all duration-300 w-40 sm:w-64"
                />
                <button
                  type="button"
                  onClick={() => setSearchOpen(false)}
                  className="text-gray-500 hover:text-red-500"
                >
                  ✖
                </button>
              </form>
            )}
          </li>
        </ul>
      </div>
    </nav>
  );
}

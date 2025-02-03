import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="bg-blue-600 p-4 shadow-md">
      <div className="container mx-auto flex justify-between items-center">
        <Link to="/" className="text-white text-2xl font-bold">
          YDNB
        </Link>
        <div className="space-x-6">
          <Link to="/" className="text-white hover:text-gray-300">
            Home
          </Link>
          <Link to="/guide" className="text-white hover:text-gray-300">
            Guide
          </Link>
          <Link to="/budget" className="text-white hover:text-gray-300">
            Budget
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;

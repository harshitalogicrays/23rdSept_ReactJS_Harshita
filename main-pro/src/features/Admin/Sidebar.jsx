import { FaHome, FaUser, FaCog, FaListAlt } from 'react-icons/fa';
import { FaBagShopping } from 'react-icons/fa6';
import { Link } from 'react-router-dom';

const Sidebar = () => {
  return (
    <div className="w-20 sm:w-64 h-full bg-gray-800 text-white flex flex-col">
      <div className="flex items-center justify-center h-16 text-2xl font-bold">
        {/* Hide the title on small screens */}
        <span className="hidden sm:block">Admin Panel</span>
      </div>
      <nav className="flex flex-col mt-4">
        <a href="#" className="flex items-center p-4 hover:bg-gray-700">
          <FaHome className="mr-0 sm:mr-3" />
          <span className="hidden sm:block">Dashboard</span>
        </a>
        <Link to='/admin/add' className="flex items-center p-4 hover:bg-gray-700">
          <FaBagShopping className="mr-0 sm:mr-3" />
          <span className="hidden sm:block">Add Product</span>
        </Link>
        <Link to='/admin/view' className="flex items-center p-4 hover:bg-gray-700">
          <FaListAlt className="mr-0 sm:mr-3" />
          <span className="hidden sm:block">View Products</span>
        </Link>
      </nav>
    </div>
  );
};

export default Sidebar;

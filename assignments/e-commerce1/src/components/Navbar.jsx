import React from 'react'

const Navbar = () => {
  return (
    <nav className="bg-gradient-to-r from-blue-600 to-indigo-600 p-4 text-white shadow-lg sticky top-0 z-10">
      <div className="container mx-auto flex justify-between items-center">
        <h1 className="text-3xl font-extrabold tracking-tight cursor-pointer hover:text-blue-200 transition-colors duration-300">
          ShopEasy
        </h1>
        <ul className="flex space-x-8 text-lg font-medium">
          <li>
            <a href="#" className="hover:text-blue-200 transition-colors duration-300 relative group">
              Home
              <span className="absolute left-0 bottom-0 w-0 h-0.5 bg-white transition-all duration-300 group-hover:w-full"></span>
            </a>
          </li>
          <li>
            <a href="#" className="hover:text-blue-200 transition-colors duration-300 relative group">
              Products
              <span className="absolute left-0 bottom-0 w-0 h-0.5 bg-white transition-all duration-300 group-hover:w-full"></span>
            </a>
          </li>
          <li>
            <a href="#" className="hover:text-blue-200 transition-colors duration-300 relative group">
              Cart
              <span className="absolute left-0 bottom-0 w-0 h-0.5 bg-white transition-all duration-300 group-hover:w-full"></span>
            </a>
          </li>
          <li>
            <a href="#" className="hover:text-blue-200 transition-colors duration-300 relative group">
              Contact
              <span className="absolute left-0 bottom-0 w-0 h-0.5 bg-white transition-all duration-300 group-hover:w-full"></span>
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default Navbar

import React, { useState, useRef, useEffect } from 'react';
import { FaSearch, FaTimes } from 'react-icons/fa'; // Import both icons

function SearchDropdown() {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false); // State for dropdown visibility
  const [searchTerm, setSearchTerm] = useState(''); // State for the search input
  const dropdownRef = useRef(null); // Reference to the dropdown element

  // Toggle dropdown visibility on search icon or close icon click
  const toggleDropdown = () => {
    setIsDropdownOpen((prev) => !prev);
  };

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsDropdownOpen(false);
        setSearchTerm(''); // Clear the search term when closing
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [dropdownRef]);

  return (
    <div className="relative inline-block">
      {/* Conditional icon rendering */}
      <div className="cursor-pointer" onClick={toggleDropdown}>
        {isDropdownOpen ? (
          <FaTimes size={24} className="text-red-500" /> // Show close icon when open
        ) : (
          <FaSearch size={24} /> // Show search icon when closed
        )}
      </div>
      {/* Search input and dropdown */}
      {isDropdownOpen && (
        <div 
          ref={dropdownRef} 
          className="absolute right-0 w-48 mt-2 bg-white border border-gray-300 rounded shadow-lg transition-opacity duration-300 ease-in-out"
        >
          <div className="flex items-center p-2">
            <input
              type="text"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              placeholder="Search..."
              className="w-full p-2 border-gray-300 focus:outline-none"
            />
            {/* The close icon here is not needed since we have it in the top */}
          </div>
          {/* Placeholder for search results or any additional content */}
       
        </div>
      )}
    </div>
  );
}

export default SearchDropdown;

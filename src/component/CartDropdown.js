import React, { useState, useRef, useEffect } from 'react';
import { FaShoppingCart, FaTimes } from 'react-icons/fa'; // Importing icons

function CartDropdown() {
  const [cartItems, setCartItems] = useState([]);
  const [showEmptyMessage, setShowEmptyMessage] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false); // State for dropdown visibility
  const dropdownRef = useRef(null); // Reference to the dropdown element

  const addItemToCart = () => {
    const newItem = { 
      id: cartItems.length + 1, 
      name: `Item ${cartItems.length + 1}`, 
      price: `$${(cartItems.length + 1) * 10}` 
    };

    setCartItems((prevItems) => [...prevItems, newItem]);

    // Show empty message if cart was previously empty
    if (cartItems.length === 0) {
      setShowEmptyMessage(true);
      setTimeout(() => {
        setShowEmptyMessage(false);
      }, 2000); // Hide message after 2 seconds
    }
  };

  const removeItemFromCart = (id) => {
    setCartItems((prevItems) => prevItems.filter(item => item.id !== id));
  };

  // Toggle dropdown visibility on cart icon click
  const toggleDropdown = () => {
    setIsDropdownOpen((prev) => !prev);
  };

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsDropdownOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [dropdownRef]);

  return (
    <div className="relative inline-block">
      {/* Shopping cart icon */}
      <div className="cursor-pointer" onClick={toggleDropdown}>
        <FaShoppingCart size={24} />
      </div>
      {/* Dropdown menu */}
      {isDropdownOpen && ( // Conditionally render dropdown based on state
        <div 
          ref={dropdownRef} // Attach the ref to the dropdown
          className="absolute right-0 w-48 mt-2 bg-white border border-gray-300 rounded shadow-lg"
        >
          {cartItems.length > 0 ? (
            cartItems.map((item) => (
              <div key={item.id} className="flex justify-between p-2 hover:bg-gray-100">
                <span>{item.name}</span>
                <span>{item.price}</span>
                {/* Cross icon to remove item */}
                <FaTimes 
                  className="cursor-pointer text-red-500" 
                  onClick={() => removeItemFromCart(item.id)} 
                />
              </div>
            ))
          ) : (
            <div className="p-2 text-center text-gray-500">
              {showEmptyMessage ? "Item added!" : "No items in cart"}
            </div>
          )}
        </div>
      )}
    </div>
  );
}

export default CartDropdown;

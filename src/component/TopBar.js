import React from 'react';
import { GrFacebookOption } from "react-icons/gr";
import { RiInstagramLine } from "react-icons/ri";
import { RiTwitterXLine } from "react-icons/ri";
import CartDropdown from './CartDropdown';
import SearchDropdown from './SearchDropdown';

// import { MdEmail } from 'react-icons/md';

const TopBar = () => {
  return (
    <div className="flex justify-between items-center px-4 py-2 bg-white text-blue-700">
      <div className="flex space-x-4 items-center">

        <GrFacebookOption className="cursor-pointer hover:text-blue-900" />
<RiInstagramLine  className="cursor-pointer hover:text-blue-900" />
<RiTwitterXLine  className="cursor-pointer hover:text-blue-900" />


      </div>
      
      {/* Middle Section (Contact Info) */}
      {/* <div className="hidden sm:flex space-x-6 items-center">
        
      </div> */}
      
      {/* Right Section (Search, Cart, Language) */}
      <div className="flex items-center space-x-4">
      <div className="flex items-center space-x-1">
          <span>(222) 400-630</span>
        </div>
        <div className="flex items-center space-x-1">
          <span>contact@ekko-ebook.com</span>
        </div>
        {/* <FaSearch className="cursor-pointer hover:text-blue-900" />
        <FaShoppingCart className="cursor-pointer hover:text-blue-900" /> */}
        <div className="flex items-center space-x-1">
          {/* <img src="https://flagcdn.com/us.svg" alt="US Flag" className="w-5 h-5" /> */}
          <SearchDropdown/>
          <CartDropdown/>
          <span>EN</span>
        </div>
      </div>
    </div>
  );
};

export default TopBar;

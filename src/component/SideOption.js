import React from 'react'

function SideOption() {
  return (
    <div class="fixed top-1/4 right-0 bg-white shadow-lg w-16 py-4 flex flex-col items-center space-y-6 border-r border-gray-200">
    <div class="group relative text-gray-500 hover:text-blue-600 cursor-pointer">
        <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 10h.01M12 10h.01M16 10h.01M21 16.01L17.4 20.6a1 1 0 01-1.4 0L3 8.4a1 1 0 011.4-1.4L7 8m0 5h.01m-2.831 4.81A2 2 0 001 18.4L6.6 13a2 2 0 010-2.8L15.4 1a2 2 0 012.8 0l6.6 6.6a2 2 0 010 2.8l-10.4 10.4a2 2 0 01-2.8 0z" />
        </svg>
        <span class="absolute right-12 top-1/2 -translate-y-1/2 px-2 py-1 text-xs font-medium text-white bg-gray-700 rounded opacity-0 group-hover:opacity-100 transition-opacity duration-300 
                    before:content-[''] before:absolute before:-left-1.5 before:top-1/2 before:-translate-y-1/2 before:border-4 before:border-transparent before:border-r-gray-700">
            Message
        </span>
    </div>

    <div class="group relative text-gray-500 hover:text-blue-600 cursor-pointer">
        <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 1C7.6 1 4 4.6 4 9v6c0 2 1.8 4 4 4s4-1.8 4-4V9c0-4.4-3.6-8-8-8zm8 16a8 8 0 01-8 8v-2a6 6 0 106 6h2c0-4.4 3.6-8 8-8z" />
        </svg>
        <span class="absolute right-12 top-1/2 -translate-y-1/2 px-2 py-1 text-xs font-medium text-white bg-gray-700 rounded opacity-0 group-hover:opacity-100 transition-opacity duration-300 
                    before:content-[''] before:absolute before:-left-1.5 before:top-1/2 before:-translate-y-1/2 before:border-4 before:border-transparent before:border-r-gray-700">
            Support
        </span>
    </div>

    <div class="group relative text-gray-500 hover:text-blue-600 cursor-pointer">
        <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 20H4a2 2 0 01-2-2V4a2 2 0 012-2h8v16zM16 2h4a2 2 0 012 2v16a2 2 0 01-2 2h-4V2z" />
        </svg>
        <span class="absolute right-12 top-1/2 -translate-y-1/2 px-2 py-1 text-xs font-medium text-white bg-gray-700 rounded opacity-0 group-hover:opacity-100 transition-opacity duration-300 
                    before:content-[''] before:absolute before:-left-1.5 before:top-1/2 before:-translate-y-1/2 before:border-4 before:border-transparent before:border-r-gray-700">
            Library
        </span>
    </div>
</div>  )
}

export default SideOption
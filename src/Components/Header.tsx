import React from 'react'

const Header = () => {
    return (
        <div className="flex justify-between items-center px-10 py-6 shadow-md">
            <div>
                <h1 className=" text-xl font-bold text-orange-700">Agregar Technologies</h1>
            </div>

            <div className=" flex items-center space-x-4">
                <h1 className=" cursor-pointer">About Us</h1>
                <h1 className=" cursor-pointer">Contact Us</h1>
                <h1 className=" cursor-pointer">Blog</h1>
                <h1 className=" cursor-pointer">Pricing</h1>
            </div>
        </div>
    )
}

export default Header;
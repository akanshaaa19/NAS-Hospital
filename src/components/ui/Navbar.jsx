import React from 'react'
import { Button, Space } from 'antd';
import { BarsOutlined } from '@ant-design/icons';
const Navbar = () => {
  return (
    <nav className="bg-white  px-2 md:px-20 lg:px-20 py-4 shadow-xl">
             
            <div className=" mx-auto  flex justify-between items-center ">
            <Button type="text"className="flex md:hidden lg:hidden "><BarsOutlined /></Button>
                <ul className="flex space-x-4 font-semibold ">
                    <li><a href="#" className="text-black hover:underline hover:text-[#786281]">Home</a></li>
                    <li><a href="#" className="text-black hover:underline hover:text-[#786281]">Service</a></li>
                    <li><a href="#" className="text-black hover:underline hover:text-[#786281]">Contact Us</a></li>
                </ul>
                <ul className="space-x-4 text-bold hidden md:flex lg:flex">
                    <li> <button className="bg-[#ab95b4] hover:bg-[#3c3140] text-white font-semibold py-2 px-4 rounded-full shadow-md transition duration-300 ease-in-out transform hover:scale-105">Sign Up</button></li>
                    <li> <button className="bg-[#ab95b4] hover:bg-[#3c3140] text-white font-semibold py-2 px-4 rounded-full shadow-md transition duration-300 ease-in-out transform hover:scale-105">Login</button></li>
                </ul>
            </div>
        </nav>
  )
}

export default Navbar
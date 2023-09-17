export const Layout = ({ children }) => {
    return <section>
        <nav className="bg-white px-20 py-4">
            <div className=" mx-auto  flex justify-between items-center">
                <ul className="flex space-x-4 font-semibold">
                    <li><a href="#" className="text-black hover:underline hover:text-[#786281]">Home</a></li>
                    <li><a href="#" className="text-black hover:underline hover:text-[#786281]">Service</a></li>
                    <li><a href="#" className="text-black hover:underline hover:text-[#786281]">Contact Us</a></li>
                </ul>
                <ul className="flex space-x-4 text-bold">
                    <li> <button className="bg-[#ab95b4] hover:bg-[#3c3140] text-white font-semibold py-2 px-4 rounded-full shadow-md transition duration-300 ease-in-out transform hover:scale-105">Sign Up</button></li>
                    <li> <button className="bg-[#ab95b4] hover:bg-[#3c3140] text-white font-semibold py-2 px-4 rounded-full shadow-md transition duration-300 ease-in-out transform hover:scale-105">Login</button></li>
                </ul>
            </div>
        </nav>
        <section className=" relative hero  text-black flex  h-6/12 px-20  ">
            {children}
        </section>
    </section>
}
import React from 'react'
import { Layout } from '../components/ui/Layout'
// import './Home.css'
const Home = () => {
    return (
        <>

            <Layout>
                <div className=" text-center my-4 h-auto w-6/12 flex flex-col justify-center	items-start  ">
                    <h1 className="text-3xl font-semibold my-4 align-left">Welcome to Our Website</h1>
                    <p className='text-left'>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like).</p>
                    <div className='flex gap-3 space-between'>
                        <a href="#" className="btn bg-[#ab95b4] hover:bg-[#3c3140] text-white py-2 px-4 rounded-md inline-block mt-4">Learn More</a>
                        <a href="#" className="btn bg-[#ab95b4] hover:bg-[#3c3140] text-white py-2 px-4 rounded-md inline-block mt-4">Learn More</a>
                    </div>

                </div>
                <div className="h-full w-6/12 flex flex-col items-center justify-center" >



                    <img src="https://shrikrishnahrudayalaya.com/wp-content/uploads/2022/12/111-DxQieEVoW-transformed-Edited-1-768x666.png" alt="Doctor" className="w-full h-fit " />

                </div>
                <div className='absolute w-4/6 bg-[#cbbdd0]  h-20 bottom-10 left-10 rounded-md p-5 hover:bg-[#786281] hover:text-white '>
                    <h1 className='absolute top-0 py-2 font-semibold text-xl text-white'>Find a Doctor</h1>

                    <div className=" absolute bottom-[-10px] bg-white rounded-md w-6/12 py-3 px-6 shadow-lg text-black">
                        <input type="text" placeholder="Enter your address" className="w-full h-full bg-transparent focus:outline-none" />
                    </div>

                </div>

            </Layout>




        </>
    )
}

export default Home

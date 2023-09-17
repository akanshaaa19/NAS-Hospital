import React from 'react'
import { Layout } from '../components/ui/Layout'
import { Dropdown } from 'antd'
import { AiOutlineDown } from 'react-icons/ai'
import { UserOutlined } from '@ant-design/icons';
import { Input } from 'antd';
import { Button, Space } from 'antd';
import features from '../components/ui/features';
import { Carousel } from 'antd';
import CountUp from 'react-countup';
import { Col, Row, Statistic } from 'antd';
// import './Home.css'

const Home = () => {
    
const formatter = (value) => <CountUp className='text-3xl' end={value} separator="," />

    const contentStyle = {
        height: '160px',
        color: 'black',
        lineHeight: '160px',
        textAlign: 'center',
        background: 'black',

      };
    

    const items = [
        {
            key: '1',
            label: (
                <a target="_blank" rel="noopener noreferrer" href="https://www.antgroup.com">
                    Sign up as a Doctor
                </a>
            ),
        },
        {
            key: '2',
            label: (
                <a target="_blank" rel="noopener noreferrer" href="https://www.aliyun.com">
                    Sign up as a Diagnostic Lab

                </a>
            ),
        },

    ];
    const App = () => (
        <Dropdown
            menu={{
                items,
            }}
        >
            <a className='btn bg-[#ab95b4] hover:bg-[#3c3140] text-white py-2 px-4 rounded-md inline-block mt-4 flex items-center' onClick={(e) => e.preventDefault()}>
                Sign Up as a Doctor
                <AiOutlineDown />
            </a>
        </Dropdown>
    );
    return (
        <>
            <Layout>
                <div className='flex w-full h-auto justify-between'>
                    <div className='flex flex-col w-1/2 justify-center relativew-1/2	items-start'>
                        <div className=" text-left my- h-auto    ">
                            <h1 className="text-3xl font-semibold my-4 align-left">Welcome to Our Website</h1>
                            <p className='text-left'>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like).</p>

                            <div className='flex gap-4 w-full'>
                                <Dropdown
                                    menu={{
                                        items,
                                    }}
                                >
                                    <a className='btn bg-primary text-white hover:bg-[#3c3140] flex py-2 px-4 rounded-md mt-4  items-center' onClick={(e) => e.preventDefault()}>
                                        Sign Up for Professional
                                        <AiOutlineDown />
                                    </a>
                                </Dropdown>
                                <a href="#" className="btn bg-primary hover:bg-[#3c3140] text-white py-2 px-4 rounded-md inline-block mt-4">Browse Doctors</a>
                            </div>

                        </div>

                        {/* <div className='absolute bottom-0 bg-[#cbbdd0] my-4 mt-8  w-full rounded-md p-5 hover:bg-[#786281] hover:text-white '>
                            <h1 className=' top-0 py-2 font-semibold text-xl text-white'>Find a Doctor</h1>

                            <div className="  bottom-[-10px] bg-white rounded-md w-6/12 py-3 px-6 shadow-lg text-black">
                                <input type="text" placeholder="Enter your address" className="w-full h-full bg-transparent focus:outline-none" />
                            </div>
                        </div> */}
                    </div>
                    <div className="h-full w-1/2 flex flex-col items-center justify-center" >
                        <img src="https://shrikrishnahrudayalaya.com/wp-content/uploads/2022/12/111-DxQieEVoW-transformed-Edited-1-768x666.png" alt="Doctor" className="w-full h-fit " />
                    </div>
                </div>
                 <div className='bg-white h-24 w-10/12 shadow-lg rounded-xl p-1'>
                    <p className='font-semibold text-lg px-4'>Book an Appointment</p>
                    <form className='px-4 w-full gap-2 flex' >
                    <Input size="large" placeholder="Adress" prefix={<UserOutlined />} />
                    <Input size="large" placeholder="Specality" prefix={<UserOutlined />} />
                    <Button type="primary" className='bg-primary text-white hover:bg-primary'>Book</Button>
                    </form>
                </div>
                <div className='my-2'>
                
                <Carousel autoplay effect="scrollx" className='rounded-xl p-2'>
     <div className=" " >
        <div className="flex gap-4 justify-between items-center ">
        <img src='1.png' className='h-auto w-4/12 object-cover rounded-xl  '/>
        <img src='1.png' className='h-auto w-4/12 object-cover rounded-xl '/>
        <img src='1.png' className='h-auto w-4/12 object-cover rounded-xl '/>
        
        </div>
        
      
    </div>
    <div className="">
    <div className="flex gap-4 justify-between  ">
        <img src='2.png' className='h-auto w-4/12 object-cover rounded-xl '/>
        <img src='2.png' className='h-auto w-4/12 object-cover rounded-xl '/>
        <img src='2.png' className='h-auto w-4/12 object-cover rounded-xl '/>
        </div>
    </div>
    <div className="">
    <div className="flex gap-4 justify-between  ">
        <img src='3.png' className='h-auto w-4/12 object-cover rounded-xl '/>
        <img src='3.png' className='h-auto w-4/12 object-cover rounded-xl '/>
        <img src='3.png' className='h-auto w-4/12 object-cover rounded-xl '/>
        </div>
    </div>
    
  </Carousel>
                </div>
                <div>
                    <h1 className='text-3xl my-2'>Our Statistics</h1>
                <Row gutter={0} className="text-3xl justify-between items-center">
    <Col span={6}>
      <Statistic title="Active Users" value={112893} formatter={formatter} />
    </Col>
    <Col span={6}>
      <Statistic   title="Account Balance (CNY)" value={112893} precision={2} formatter={formatter} />
    </Col>
    <Col span={6}>
      <Statistic   title="Account Balance (CNY)" value={112893} precision={2} formatter={formatter} />
    </Col>
  </Row>
                </div>


            </Layout>




        </>
    )
}

export default Home

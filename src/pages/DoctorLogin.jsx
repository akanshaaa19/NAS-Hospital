import React, { useState } from 'react';
import { Button, message, Steps, theme } from 'antd';
import { Layout } from '../components/ui/Layout';
import { LoadingOutlined, SmileOutlined, SolutionOutlined, UserOutlined } from '@ant-design/icons';
const steps = [
  {
    title: 'Basic Information',
    content: 'First-content',
    
  },
  {
    title: 'Medical License',
    content: 'Second-content',
  },
  {
    title: 'Self Declaration',
    content: 'Last-content',
  },
];
const Doctorform= () => {
  const [name,setName]=useState("")
   const [email,setemail]=useState("")
   const [des,setdes]=useState("")

  const { token } = theme.useToken();
  const [current, setCurrent] = useState(0);
  const next = () => {
    setCurrent(current + 1);
  };
  const prev = () => {
    setCurrent(current - 1);
  };
  const items = steps.map((item) => ({
    key: item.title,
    title: item.title,
  }));
  const contentStyle = {
    lineHeight: '260px',
    textAlign: 'center',
    color: token.colorTextTertiary,
    backgroundColor: token.colorFillAlter,
    borderRadius: token.borderRadiusLG,
    border: `1px dashed ${token.colorBorder}`,
    marginTop: 16,
  };
  return (
    <>
    <Layout>
      <div className='block'>
      <p className='text-3xl font-semibold  '>Doctor Login </p>
      </div>
      
      <div className='shadow-lg p-3 rounded-xl   w-full'>
      <Steps current={current} items={items} className='mb-3 '/>
      <div className=''>
         {current==0 &&(
           <form className='flex-wrap' >
           <div class="mb-4">
               <label for="full_name" class="block text-gray-600 font-medium">Full Name</label>
               <input type="text" value={name} id="full_name" name="full_name" placeholder="John Doe"  onChange={(e)=>setName(e.target.value)} class="w-6/12 border-gray-300 rounded-md py-2 px-3 focus:outline-none focus:ring focus:border-blue-300" required/>
           </div>
           <div class="mb-4">
               <label for="suffix" class="block text-gray-600 font-medium">Doctor's Suffix or Titles</label>
               <input type="text" id="suffix" name="suffix" placeholder="MD, PhD" class="w-6/12border-gray-300 rounded-md py-2 px-3 focus:outline-none focus:ring focus:border-blue-300"/>
           </div>
           <div class="mb-4">
               <label for="email" class="block text-gray-600 font-medium">Email</label>
               <input type="email" id="email" name="email" placeholder="john@example.com" class="w-6/12 border-gray-300 rounded-md py-2 px-3 focus:outline-none focus:ring focus:border-blue-300" required/>
           </div>
           <div class="mb-4">
               <label for="phone" class="block text-gray-600 font-medium">Phone Number</label>
               <input type="tel" id="phone" name="phone" placeholder="123-456-7890" class="w-6/12border-gray-300 rounded-md py-2 px-3 focus:outline-none focus:ring focus:border-blue-300" required/>
           </div>
           <div class="mt-6">
               <button type="submit" class="w-full bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600 focus:outline-none focus:bg-blue-600">Register</button>
           </div>
       </form>
         )}
          {current==1 &&(
   <form className='flex-wrap' >
   <div class="mb-4">
       <label for="full_name" class="block text-gray-600 font-medium">Full Name</label>
       <input type="text" id="full_name" name="full_name" placeholder="John Doe" class="w-6/12 border-gray-300 rounded-md py-2 px-3 focus:outline-none focus:ring focus:border-blue-300" required/>
   </div>
   <div class="mb-4">
       <label for="suffix" class="block text-gray-600 font-medium">Doctor's Suffix or Titles</label>
       <input type="text" id="suffix" name="suffix" placeholder="MD, PhD" class="w-6/12border-gray-300 rounded-md py-2 px-3 focus:outline-none focus:ring focus:border-blue-300"/>
   </div>
   <div class="mb-4">
       <label for="email" class="block text-gray-600 font-medium">Email</label>
       <input type="email" id="email" name="email" placeholder="john@example.com" class="w-6/12 border-gray-300 rounded-md py-2 px-3 focus:outline-none focus:ring focus:border-blue-300" required/>
   </div>
   <div class="mb-4">
       <label for="phone" class="block text-gray-600 font-medium">Phone Number</label>
       <input type="tel" id="phone" name="phone" placeholder="123-456-7890" class="w-6/12border-gray-300 rounded-md py-2 px-3 focus:outline-none focus:ring focus:border-blue-300" required/>
   </div>
   <div class="mt-6">
       <button type="submit" class="w-full bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600 focus:outline-none focus:bg-blue-600">Register</button>
   </div>
</form>
         )}
         {current==2 &&(
             <form className='flex-wrap' >
             <div class="mb-4">
                 <label for="full_name" class="block text-gray-600 font-medium">Full Name</label>
                 <input type="text" id="full_name" name="full_name" placeholder="John Doe" class="w-6/12 border-gray-300 rounded-md py-2 px-3 focus:outline-none focus:ring focus:border-blue-300" required/>
             </div>
             <div class="mb-4">
                 <label for="suffix" class="block text-gray-600 font-medium">Doctor's Suffix or Titles</label>
                 <input type="text" id="suffix" name="suffix" placeholder="MD, PhD" class="w-6/12border-gray-300 rounded-md py-2 px-3 focus:outline-none focus:ring focus:border-blue-300"/>
             </div>
             <div class="mb-4">
                 <label for="email" class="block text-gray-600 font-medium">Email</label>
                 <input type="email" id="email" name="email" placeholder="john@example.com" class="w-6/12 border-gray-300 rounded-md py-2 px-3 focus:outline-none focus:ring focus:border-blue-300" required/>
             </div>
             <div class="mb-4">
                 <label for="phone" class="block text-gray-600 font-medium">Phone Number</label>
                 <input type="tel" id="phone" name="phone" placeholder="123-456-7890" class="w-6/12border-gray-300 rounded-md py-2 px-3 focus:outline-none focus:ring focus:border-blue-300" required/>
             </div>
             <div class="mt-6">
                 <button type="submit" class="w-full bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600 focus:outline-none focus:bg-blue-600">Register</button>
             </div>
         </form>
         )}






      </div>
      <div
        style={{
          marginTop: 24,
        }}
      >
        {current < steps.length - 1 && (
          <Button type="primary" 
          style={{
            margin: '0 8px',
            color:'',
            background:"purple"
          }}
          onClick={() => next()}>
            Next
          </Button>
        )}
        {current === steps.length - 1 && (
          <Button type="primary" 
          style={{
            margin: '0 8px',
            color:'',
            background:"purple"
          }}  onClick={() => message.success('Processing complete')}>
            Done
          </Button>
        )}
        {current > 0 && (
          <Button
            
            style={{
              margin: '0 8px',
              color:'white',
              background:"purple"
            }}
            onClick={() => prev()}
          >
            Previous
          </Button>
        )}
      </div>
      </div>
      </Layout>
    </>
  );
};
export default Doctorform;

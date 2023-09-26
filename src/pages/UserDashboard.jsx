
import React from 'react'
import { useRef,useEffect } from 'react'
import { useState } from 'react'
import { LayoutV2 } from '../components/ui/LayoutV2'
import { Collapse, Divider } from 'antd';
import { Avatar, List } from 'antd';


import Lists from '../components/ui/List';



const UserDashboard = () => {
    const [option,setOption]=useState(" All Appointments")
    const Appointment = [
        {
          title: 'Upcoming',
        },
        {
          title: 'Previous',
        },
        {
          title: 'All',
        },
      
      ];
      const MyReports= [
        {
          title: 'Upcoming',
        },
        {
          title: 'Previous',
        },
        {
          title: 'All',
        },
      
      ];
      const Prescription= [
        {
          title: 'Important',
        },
       
        {
          title: 'All',
        },
      
      ];
    const text="hey"
    const items = [
        {
          key: '1',
          label: 'My Appoiments',
          children: <div className='px-2 flex flex-col gap-3'>
             <List
    itemLayout="horizontal"
    dataSource={Appointment}
    renderItem={(item, index) => (
      <List.Item>
        <List.Item.Meta
          avatar={<Avatar src={`https://xsgames.co/randomusers/avatar.php?g=pixel&key=${index}`} />}
          title={<a href="https://ant.design">{item.title}</a>}
         
        />
      </List.Item>
    )}
  />
          </div>,
        },
        {
          key: '2',
          label: 'My Reports',
          children: <div className='px-2 flex flex-col gap-3 bg-sky-700	'>
          <List
 itemLayout="horizontal"
 dataSource={MyReports}
 renderItem={(item, index) => (
   <List.Item>
     <List.Item.Meta
       avatar={<Avatar src={`https://xsgames.co/randomusers/avatar.php?g=pixel&key=${index}`} />}
       title={<a href="https://ant.design">{item.title}</a>}
      
     />
   </List.Item>
 )}
/>
       </div>,
          
        },
        {
          key: '3',
          label: 'My Prescription',
          children:<div className='px-2 flex flex-col gap-3'>
          <List
 itemLayout="horizontal"
 dataSource={Prescription}
 renderItem={(item, index) => (
   <List.Item>
     <List.Item.Meta
       avatar={<Avatar src={`https://xsgames.co/randomusers/avatar.php?g=pixel&key=${index}`} />}
       title={<a href="https://ant.design">{item.title}</a>}
      
     />
   </List.Item>
 )}
/>
       </div>,
        },
      ];
   

  return (
   <LayoutV2>
     <div className='flex'>
       <div className='w-2/12 bg-white min-h-screen pl-2 '>
        <p className='text-primary font-semibold'>Menu</p>
        <Collapse defaultActiveKey={['1']} ghost items={items}  className="font-semibold px-2"/>
       </div>
       <div className='w-10/12 p-5 bg-light'>
        <p className='text-3xl font-semibold'>Hey Sanidhya Sharma,</p>
        <p className='text-lg '>Here are your {option}</p>
        <Lists/>
     </div>
     </div>
    
   
   </LayoutV2>
  )
}

export default UserDashboard

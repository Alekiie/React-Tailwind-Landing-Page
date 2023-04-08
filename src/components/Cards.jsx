import React from 'react'
import {AiOutlineUserAdd,AiOutlineUsergroupAdd} from 'react-icons/ai'
import {GrUserAdmin} from 'react-icons/gr' 

const Cards = () => {
  return (
    <div className='w-full bg-white py-[10rem] px-4'>
    <div className='w-full mx-auto grid md:grid-cols-3 gap-8'>
    {/**Card one */}
    <div className="w-full shadow-xl flex flex-col p-4 my-4 rounded-lg hover:scale-105 duration-300">
        <AiOutlineUserAdd className='text-[80px] mx-auto mt-[-3rem] bg-white ' />
        <h2 className='text-2xl font-bold text-center py-8'>Single user</h2>
        <p className='text-center font-bold text-4xl'>$120</p>
        <div className='font-medium text-center'>
            <p className='border-b py-2 mx-8 mt-8'>500 GB Storage</p>
            <p className='border-b py-2 mx-8'>1 Granted User</p>
            <p className='border-b py-2 mx-8'>Send upto 2 GB</p>
            
        </div>
        <button className='bg-[#00f9da] font-bold text-black  mx-auto px-6 py-3 my-6 rounded-md w-[200px]'>Start Trial</button>
    </div>
     {/**Card Two */}
    <div className="w-full shadow-xl flex flex-col p-4 my-4 rounded-lg hover:scale-105 duration-300 bg-gray-200">
        <GrUserAdmin className='text-[80px] mx-auto mt-[-3rem] bg-transparent ' />
        <h2 className='text-2xl font-bold text-center py-8'>Admin Only</h2>
        <p className='text-center font-bold text-4xl'>$200</p>
        <div className='font-medium text-center'>
            <p className='border-b py-2 mx-8 mt-8'>5 TB Storage</p>
            <p className='border-b py-2 mx-8'>1 Granted Admin</p>
            <p className='border-b py-2 mx-8'>Send upto 10 GB</p>
            
        </div>
        <button className='text-[#00f9da] font-bold bg-black  mx-auto px-6 py-3 my-6 rounded-md w-[200px]'>Start Trial</button>
    </div>
     {/**Card Three */}
    <div className="w-full shadow-xl flex flex-col p-4 my-4 rounded-lg hover:scale-105 duration-300">
        <AiOutlineUsergroupAdd className='text-[80px] mx-auto mt-[-3rem] bg-white ' />
        <h2 className='text-2xl font-bold text-center py-8'>Grouped Users</h2>
        <p className='text-center font-bold text-4xl'>$500</p>
        <div className='font-medium text-center'>
            <p className='border-b py-2 mx-8 mt-8'>Unlimited Storage</p>
            <p className='border-b py-2 mx-8'>All Granted users</p>
            <p className='border-b py-2 mx-8'>Send upto 20 GB</p>
            
        </div>
        <button className='bg-[#00f9da] font-bold text-black  mx-auto px-6 py-3 my-6 rounded-md w-[200px]'>Start Trial</button>
    </div>

    </div>
      
    </div>
  )
}

export default Cards

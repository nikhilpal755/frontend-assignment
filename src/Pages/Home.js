import React from 'react'
import { useNavigate } from 'react-router-dom'
export default function Home() {
    const navigate = useNavigate();
  return (
    <div className='w-full h-full flex justify-center'>
         <div className="w-1/2 flex flex-col items-center">

            <span className ="mt-24 font-mono text-4xl font-bold text-white text-center "> Student Managment System </span>
            <button
                className='h-10 mt-10 w-1/2  bg-purple-500 hover:bg-purple-700 text-white font-bold py-2 px-4 rounded'
                onClick={() => navigate('/chatbot')}
                >
                Enroll Now!
            </button>
         </div>

    </div>
  )
}

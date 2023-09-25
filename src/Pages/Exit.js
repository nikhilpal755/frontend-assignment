import React from 'react';
import { useSelector } from 'react-redux';

function Exit() {
  const { name, age } = useSelector((state) => state.student);
  return (
    <div>
      <p className='mt-24 font-mono text-4xl font-bold text-white text-center'>Student Enrollment System</p>

      <div className='w-full mt-10 flex items-center justify-center'>
        <div className='border-2 p-10 border-gray-100 text-yellow-500 '>
          <p>
            Your name <span className='capitalize font-medium text-green-500'>{name}</span>{' '}
            aged <span className='capitalize font-medium text-green-500'>{age}</span> has been
            added to student system. You may now exit.
          </p>
        </div>
      </div>
    </div>
  );
}

export default Exit;
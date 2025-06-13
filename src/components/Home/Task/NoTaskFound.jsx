import React from 'react';

const NoTaskFound = () => {
  return (
    <div className='min-w-full '>
      <p className='text-3xl text-red-500 text-center'>No Task Found!!</p>
      <p className='text-center text-gray-600 text-lg'>
        Please add to tidy up your tasks.
      </p>
    </div>
  );
};

export default NoTaskFound;

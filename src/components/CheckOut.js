import React from 'react';
import { useLoaderData } from 'react-router-dom';

const CheckOut = () => {

    const checkCourses = useLoaderData();
  const { title} = checkCourses;
    return (
        <div>
             <h2 className='text-4xl m-5'>Course Name : {title}</h2>
        </div>
    );
};

export default CheckOut;
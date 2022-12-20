import React from 'react';
import { useLoaderData } from 'react-router-dom';
import HomeLeftSideCard from './HomeLeftSideCard';

const Category = () => {
    const categoryNews = useLoaderData();
    return (
        <div>
            <div className='grid grid-cols-1 md:grid-cols-3 xl:grid-cols-4  gap-3 m-5 '>
            {categoryNews.map((news) => (
        <HomeLeftSideCard key={news._id} news={news}></HomeLeftSideCard>
      ))}
        </div>
        </div>
    );
};

export default Category;
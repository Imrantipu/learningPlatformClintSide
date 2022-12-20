import React from 'react';
import HomeLeftSideCard from './HomeLeftSideCard';

const HomeLeftSide = ({allNews}) => {
    return (
        <div className='grid grid-cols-1 md:grid-cols-3 xl:grid-cols-4 gap-3 m-5'>
      {allNews.map((news) => (
        <HomeLeftSideCard key={news._id} news={news}></HomeLeftSideCard>
      ))}
    </div>
    );
};

export default HomeLeftSide;
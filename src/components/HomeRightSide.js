import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

const HomeRightSide = () => {

    const [categories, setCategories] = useState([]);

    useEffect(() => {
        fetch(
          "http://localhost:5000/news-categories"
        )
          .then((res) => res.json())
          .then((data) => setCategories(data));
      }, []);
    return (
        <div >
        <div className="card w-96 glass mx-auto">
  <div className="card-body">
    <h2 className="card-title text-3xl text-bold"> Course Categories</h2>
    <div >
        {categories.map((category) => (
          <p key={category.id}>
            <Link
              to={`/category/${category.id}`}
            >
              {category.name}
            </Link>
          </p>
        ))}
      </div>
  </div>
</div>
        </div>
    );
};

export default HomeRightSide;
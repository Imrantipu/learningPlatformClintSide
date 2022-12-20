import React from "react";
import { useLoaderData } from "react-router-dom";
import HomeLeftSide from "./HomeLeftSide";
import HomeRightSide from "./HomeRightSide";

const Home = () => {
  const allNews = useLoaderData();
  return (
      <div>
        <div className="container mx-auto m-5">
        <HomeRightSide></HomeRightSide>
        </div>
  <div>
      <div>
        <HomeLeftSide allNews={allNews}></HomeLeftSide>
      </div>
    </div>
      </div>
    
  );
};

export default Home;

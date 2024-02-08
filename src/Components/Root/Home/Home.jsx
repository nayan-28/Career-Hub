import React from "react";
import Banner from "../../Banner/Banner";
import CategoryList from "../../CategoryList/CategoryList";
import FeaturedJobs from "../../FeaturedJobs/FeaturedJobs";

const Home = () => {
  return (
    <div>
      <Banner></Banner>
      <CategoryList></CategoryList>
      <FeaturedJobs></FeaturedJobs>
      <h3>This is Home</h3>
    </div>
  );
};

export default Home;

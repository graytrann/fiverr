import React from "react";
import Banner from "./Banner";
import Carousel from "./Carousel";
import Selling from "./Selling";
import Categories from "./Categories";
import Comment from "./Comment";

export default function Home() {
  return (
    <div>
      <div>
        <Banner />
        <Carousel />
        <Selling />
        <Categories />
        <Comment />
      </div>
    </div>
  );
}

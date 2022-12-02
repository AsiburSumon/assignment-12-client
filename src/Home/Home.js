import React from "react";
import Categories from "../Categories/Categories";
import ExtraSection from "../ExtraSection/ExtraSection";
import './Home.css';

const Home = () => {
  return (
    <div>
      <div className="carousel w-full mb-6">
        <div id="slide1" className="carousel-item relative w-full">
          <img src="https://1.bp.blogspot.com/-IODyjIJmvzo/XReAwxMEIOI/AAAAAAAADxQ/Hn4ZMywOVyEeCkqD3rp3Vn8uhkCLpGxHACLcBGAs/s1600/_MG_1329.JPG" className="w-full banner-img" alt="banner image"/>
          <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
            <a href="#slide4" className="btn btn-circle">
              ❮
            </a>
            <a href="#slide2" className="btn btn-circle">
              ❯
            </a>
          </div>
        </div>
        <div id="slide2" className="carousel-item relative w-full">
          <img src="https://i.ytimg.com/vi/Nq2PkZ6AplQ/maxresdefault.jpg" className="w-full banner-img" alt="banner image"/>
          <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
            <a href="#slide1" className="btn btn-circle">
              ❮
            </a>
            <a href="#slide3" className="btn btn-circle">
              ❯
            </a>
          </div>
        </div>
        <div id="slide3" className="carousel-item relative w-full">
          <img src="https://i.ytimg.com/vi/nOWR3No1Hm4/maxresdefault.jpg" className="w-full banner-img" alt="banner image"/>
          <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
            <a href="#slide2" className="btn btn-circle">
              ❮
            </a>
            <a href="#slide4" className="btn btn-circle">
              ❯
            </a>
          </div>
        </div>
        <div id="slide4" className="carousel-item relative w-full">
          <img src="https://bd.gaadicdn.com/upload/usedbikesimages/2020/08/5f2a75232e5ff.jpeg?tr=w-300" className="w-full banner-img" alt="banner image" />
          <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
            <a href="#slide3" className="btn btn-circle">
              ❮
            </a>
            <a href="#slide1" className="btn btn-circle">
              ❯
            </a>
          </div>
        </div>
      </div>
      <div>
        <Categories></Categories>
      </div>
      <div className="my-5">
        <ExtraSection></ExtraSection>
      </div>
    </div>
  );
};

export default Home;

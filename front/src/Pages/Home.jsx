import React from "react";
import { Outlet } from "react-router-dom";
import Navbar from "../Components/Navbar/Navbar";
import TitleH2 from "../Components/Title/TitleH2";
import Salutation from "../Components/Salutation/Salutation";
import Posts from "../Components/Posts/Posts";

const Home = () => {
  return (
    <div className="home w-full h-full bg-yellow text-blue pt-10 md:pt-36 pl-6">
      <Salutation username="Marine" />
      <TitleH2 title="Trending Now" />
      <Navbar />
      <Posts image="../public/micro.jpg" title="" text="lorem epsum"/>
      <Outlet />
    </div>
  );
};

export default Home;

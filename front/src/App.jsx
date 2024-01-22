import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./index.css";
import Register from "./Pages/Register";
import Home from "./Pages/Home";
import Search from "./Pages/Search";
import Profile from "./Pages/Profile";
import LoginForm from "./Components/LoginForm/LoginForm";
import SignInForm from "./Components/SignInForm/SignInForm";
import TitleH1 from "./Components/Logo/TitleH1";
import Navbar from "./Components/Navbar/Navbar";
import Post from "./Components/Post/Post";
import Posts from "./Components/Posts/Posts";
import Avatar from "./Components/Profile/Avatar";
import ProfileCard from "./Components/Profile/ProfileCard";
import Salutation from "./Components/Salutation/Salutation";
import TitleH2 from "./Components/Title/TitleH2";

function App() {
  return (
    <BrowserRouter>
    <Router>
      <Routes>
        <Route index element={<Register />} />
        <Route path="/login" element={<LoginForm />} />
        <Route path="/signin" element={<SignInForm />} />
        <Route path="/home" element={<Home />} />
        <Route path="/search" element={<Search />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/titleh1" element={<TitleH1 />} />
        <Route path="/navbar" element={<Navbar />} />
        <Route path="/post" element={<Post />} />
        <Route path="/posts" element={<Posts />} />
        <Route path="/avatar" element={<Avatar />} />
        <Route path="/profilecard" element={<ProfileCard />} />
        <Route path="/salutation" element={<Salutation />} />
        <Route path="/titileh2" element={<TitleH2 />} />
      </Routes>
    </Router>
    </BrowserRouter>
  );
}

export default App;

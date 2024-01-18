import React from 'react';
import Navbar from '../Components/Navbar/Navbar';
import ProfileCard from '../Components/Profile/ProfileCard';
import Posts from '../Components/Posts/Posts';

const Profile = () => {
    return (
        <div className='home w-full h-screen bg-yellow'>
            <Navbar />
            <ProfileCard image="../public/micro.jpg" />
            <Posts image="../public/micro.jpg" title="" text="lorem epsum"/>
        </div>
    );
};

export default Profile;
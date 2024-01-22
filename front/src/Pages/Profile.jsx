import React from 'react';
import Navbar from '../Components/Navbar/Navbar';
import ProfileCard from '../Components/Profile/ProfileCard';
import Posts from '../Components/Posts/Posts';

const Profile = () => {
    return (
        <div className='home w-full h-full bg-yellow'>
            <Navbar />
            <ProfileCard />
            <Posts />
        </div>
    );
};

export default Profile;
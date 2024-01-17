import React from "react";
import Avatar from "./Avatar";

const ProfileCard = (props) => {
    return (
        <section className="ProfileCard relative lg:w-1/2 md:w- lg:pt-20 mx-auto">
            <div>
                <img className="profile-top-card-background w-full h-64 object-cover rounded-t-lg" src={props.image} alt={props.title}/>
            </div>
            <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 translate-y-1/2">
                <Avatar size="medium"/>
            </div> 
            <div className="UserInfo h-48 p-1 border-2 border-blue border-opacity-70 rounded-b-lg text-blue shadow-lg">
                <div className="UserInfoLeft">
                    Username
                </div>
                <div className="UserInfoRight">
                    follow
                </div>
            </div>          
        </section>
    );
};

export default ProfileCard;
import React from "react";
import Avatar from "./Avatar";

const ProfileCard = (props) => {
    return (
        <section className="ProfileCard relative lg:w-1/2 lg:pt-20 mx-auto">
            <div className="relative">
                <div>
                    <img className="profile-top-card-background w-full h-36 md:h-36 lg:h-48 object-cover lg:rounded-t-lg" src={props.image} alt={props.title}/>
                </div>
                <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 translate-y-1/2">
                    <Avatar className="h-20 w-20 md:h-32 md:w-32 lg:h-38 lg:w-38"/>
                </div> 
            </div>
            <div className="ProfileContainer">
                <div className="UserInfo h-24 md:h-24 lg:h-28 p-1 border border-blue border-opacity-70 rounded-b-lg text-blue shadow-lg flex items-center justify-between">
                    <div className="UserInfoLeft pl-10 font-bold lg:text-2xl">
                        Username
                    </div>
                    <div className="UserInfoRight pr-10">
                        <button className="px-4 py-1 text-yellow bg-orange rounded-lg" type="submit">Follow</button>
                    </div>
                </div>
            </div>          
        </section>
    );
};

export default ProfileCard;
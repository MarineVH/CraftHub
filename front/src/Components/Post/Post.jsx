import React from "react";
import { Link } from "react-router-dom";
import Avatar from "../Profile/Avatar";
import { BiDotsHorizontalRounded } from "react-icons/bi";
import { FaHeart } from "react-icons/fa";
import { FaRegHeart } from "react-icons/fa";
import { MdOutlineChatBubbleOutline } from "react-icons/md";
import { FaShareAlt } from "react-icons/fa";

const Post = ({post}) => {

    const liked = false;

    return (
        <article className="post h-1/4 w-11/12 lg:w-1/2 lg: bg-yellow border text-blue border-blue border-opacity-70 rounded-lg mt-7 mx-auto flex flex-col items-center shadow-lg">
            <section className="user w-full pt-3 px-3 flex items-center justify-between">
                <section className="userInfo flex items-center ">
                    <Avatar className="h-10 w-10"/>
                    <section className="details flex flex-col">
                        <Link to={`/profile/${post.userId}`} className="">
                            <section className="username font-medium pl-2">{post.username}</section>
                        </Link>
                    </section>
                </section>
                <BiDotsHorizontalRounded />
            </section>
            <section className="content m-3">
                <p>{post.desc}</p>
                <img className="w-full" src={post.img} alt=""/>
            </section>
            <section className="info flex items-center w-full pl-3 mb-3 gap-4">
                <section className="item flex items-center cursor-pointer">
                    {liked ? <FaHeart />: <FaRegHeart />}
                    <p className="pl-1">12 Likes</p>
                </section>
                <section className="item flex items-center cursor-pointer">
                    <MdOutlineChatBubbleOutline />
                    <p className="pl-1">12 Comments</p>
                </section>
                <section className="item flex items-center cursor-pointer">
                    <FaShareAlt />
                    <p className="pl-1">Share</p>
                </section>
            </section>
        </article>
    );
};

export default Post;
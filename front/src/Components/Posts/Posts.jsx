import React from "react";
import Post from "../Post/Post";
import Avatar from "../Profile/Avatar";

const Posts = () => {
  const posts = [
    {
      id: 1,
      username: "Username",
      userId: 1,
      profilePic: <Avatar className="h-10 w-10"/>,
      desc: "Lorem ipsum",
      img: "micro.jpg",
    },
    {
      id: 2,
      username: "Username",
      userId: 2,
      profilePic: <Avatar className="h-12 w-12"/>,
      desc: "Tenetur iste",
      img: "micro.jpg",
    },
  ];

  return (
    <div className="posts flex flex-col">
      {posts.map(post=>(
        <Post post={post} key={post.id}/>
      ))}
      {posts.length === 0 && <p>No posts available</p>}
    </div>
  );
};

export default Posts;
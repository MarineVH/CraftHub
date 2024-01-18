import React from "react";

const Posts = (props) => {
  return (
    <figure className="h-1/4 w-11/12 lg:w-1/2 lg: bg-yellow border text-blue border-blue border-opacity-50 rounded-lg mt-7 mx-auto flex flex-col items-center shadow-lg">
      <p className="text-center p-4">{props.text}</p>
      <img className="object-cover w-full h-3/4" src={props.image} alt={props.title} />
    </figure>
  );
};

export default Posts;
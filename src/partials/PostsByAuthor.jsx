import React, { Fragment } from "react";
import { Link } from "react-router-dom";

export default function PostsByAuthor(props) {
  const { allPosts } = props;
  if (!allPosts || allPosts.length === 0) return (<Fragment />);
  return (
    <div className="mt-4">
      <h5>{allPosts.length + " more posts from the same author"}</h5>
      {
        allPosts.map(post => {
          return (
            <Link to={"/posts/" + post.id}>
              <p>{post.title} </p>
            </Link>
          );
        })}
    </div>
  )
}
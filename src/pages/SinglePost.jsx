import { all } from "q";
import React, { Fragment } from "react";

import PostsByAuthor from "../partials/PostsByAuthor";
import PostDiv from "../partials/PostDiv";

// !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
// To be able to pass props within the Router, must use the `useParams` hook
// to extract/match the id from the path/url
// https://reactrouter.com/web/api/Hooks/useparams
// !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
import { useParams } from "react-router-dom";
import RedirectButton from "../partials/RedirectButton";

export default function SinglePost(props) {
  const { id } = useParams();
  const postId = parseInt(id);
  const selectedPost = props.posts.find(post => post.id === postId);
  const author = props.authors.find(author => author.id == selectedPost.authorId);

  const allOtherPostsByAuthor = props.posts.filter(post => {
    return post.authorId === author.id && post.id !== postId;
  });

  console.log("author: ", author)
  // console.log("selectedPost: ", selectedPost)

  return (
    <div className="SinglePost m-3">
      <RedirectButton
        text="Back to all posts"
        path="/posts"
      />
      < PostDiv
        selectedPost={selectedPost}
        author={author}
        posts={props.posts}
      />
      <PostsByAuthor
        allPosts={allOtherPostsByAuthor}
      />
    </div>
  );
}


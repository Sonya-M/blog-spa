import React from "react";
import { ListGroup } from "react-bootstrap";
import PostItem from "../partials/PostItem";
import "./Home.scss";

export default function Home(props) {

  const handleDelete = (id) => {
    props.onDelete(id);
  };
  const handleLike = (id) => {
    props.onLike(id);
  };

  return (
    <div className="Home">
      <h1 className="display-3 text-center">All Posts</h1>
      <ListGroup>
        {props.posts.map((post => {
          return (<PostItem
            post={post}
            key={post.id}
            onDelete={handleDelete}
            onLike={() => handleLike(post.id)}
          />)
        }))
        }
      </ListGroup>
    </div>
  );
}


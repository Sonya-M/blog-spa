import React, { Fragment } from "react";
import { Link } from "react-router-dom";

import { truncateString } from "../shared/utils";

import { ListGroup, ListGroupItem } from "react-bootstrap";
import "./Home.scss";

export default function Home(props) {
  return (
    <div className="Home">
      <h1 className="display-3 text-center">All Posts</h1>
      <ListGroup>
        {props.posts.map((post =>
          <PostItem
            title={post.title}
            body={post.body}
            authorId={post.authorId}
            key={post.id}
            id={post.id}
          />))
        }
      </ListGroup>
    </div>
  );
}

function PostItem(props) {

  return (
    < ListGroupItem >
      <Link to={"/posts/" + props.id}>
        <p className="display-6">Title: {props.title}</p>
      </Link>
      <p>{truncateString(props.body, 10)}</p>
      <p>Author id: {props.authorId}</p>
    </ListGroupItem>

  )
}
import React from "react";
import { Link } from "react-router-dom";
import { truncateString } from "../shared/utils";
import { ListGroup, ListGroupItem } from "react-bootstrap";
import EditPostBtn from "../partials/EditPostBtn";
import "./Home.scss";

export default function Home(props) {

  const handleDelete = (id) => {
    props.onDelete(id);
  }
  return (
    <div className="Home">
      <h1 className="display-3 text-center">All Posts</h1>
      <ListGroup>
        {props.posts.map((post =>
          <PostItem
            post={post}
            key={post.id}
            onDelete={handleDelete}
          />))
        }
      </ListGroup>
    </div>
  );
}

function PostItem(props) {
  const { post } = props;
  return (
    < ListGroupItem >
      <Link to={"/posts/" + post.id}>
        <p className="display-6">{post.title}</p>
      </Link>
      <p>{truncateString(post.body, 40)}</p>
      <p>Author id: {post.authorId}</p>
      <EditPostBtn id={post.id} />
      {" "}
      <button className="btn btn-danger"
        onClick={() => props.onDelete(post.id)}>Delete</button>
    </ListGroupItem >

  )
}
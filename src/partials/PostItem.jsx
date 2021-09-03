
import React from "react";
import { Link } from "react-router-dom";
import { ListGroupItem, Button } from "react-bootstrap";
import { HeartFill } from "react-bootstrap-icons";

import { truncateString } from "../shared/utils";
// import "./PostItem.scss";

export default function PostItem(props) {
  const { post } = props;
  return (
    < ListGroupItem >
      <Link to={"/posts/" + post.id}>
        <p className="display-6">{post.title}</p>
      </Link>
      <p>{truncateString(post.body, 40)}</p>
      <p>Author ID: {post.authorId}</p>
      <Link to={"/new/" + post.id}>
        <Button size="sm" className="btn btn-primary">Edit</Button>
      </Link>
      {" "}
      <Button className="btn-danger btn-sm"
        onClick={() => props.onDelete(post.id)}>Delete</Button>
      {" "}
      < LikeBtn
        onLike={props.onLike}
        color={post.isLiked() ? "plum" : "lightgray"}
      />
    </ListGroupItem >

  )
}

const LikeBtn = (props) => {
  const cursorStyle = { cursor: "pointer" };
  const colorStyle = { color: props.color };
  return (
    <span >
      <HeartFill size="2rem"
        onClick={props.onLike}
        style={{ ...cursorStyle, ...colorStyle }}
      />
    </span>)
}
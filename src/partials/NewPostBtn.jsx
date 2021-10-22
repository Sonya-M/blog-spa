import React from "react";
import { Link } from "react-router-dom";
import { Button } from "react-bootstrap";

export default function NewPostBtn() {
  return (
    <Link to="/new/0">
      <Button size="sm" className="btn btn-info text-light m-1">
        {" "}
        New Post
      </Button>
    </Link>
  );
}

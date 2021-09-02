import React from "react";
import { Link } from "react-router-dom";
import { Button } from "react-bootstrap";

export default function EditPostBtn({ id }) {
  return (
    <Link to={"/new/" + id}>
      <Button className="btn btn-primary">Edit</Button>
    </Link>
  )
}
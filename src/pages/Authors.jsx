import React, { Fragment } from "react";
import { Link } from "react-router-dom";

import { ListGroup, ListGroupItem } from "react-bootstrap";
import "./Authors.scss";

export default function Authors(props) {

  return (
    <div className="Authors">
      <h1 className="display-3 text-center">All Authors</h1>
      <ListGroup>
        {props.authors.map((author) => {
          return (
            <AuthorListItem
              key={author.id}
              name={author.name}
              id={author.id}
            />
          );
        })}
      </ListGroup>
    </div>
  );
}


const AuthorListItem = (props) => {
  const path = "/authors/" + props.id;
  return (
    <ListGroupItem>
      <Link to={path}>

        <p className="display-6">
          {props.name}
        </p>

      </Link>
    </ListGroupItem>
  )
}
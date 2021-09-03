import React from "react";

// https://reactrouter.com/web/api/Hooks
import { useParams } from "react-router-dom";

import RedirectButton from "../partials/RedirectButton";

import { ListGroup, ListGroupItem } from "react-bootstrap";

export default function SingleAuthor(props) {

  let { id } = useParams(); // https://reactrouter.com/web/api/Hooks
  const authorId = parseInt(id);
  const author = props.authors.find((author) => author.id === authorId);

  return (
    <div className="m-3">
      <RedirectButton
        text="Back to all authors"
        path="/authors"
      />
      <h1>{author.name}</h1>
      <ListGroup>
        <ListGroupItem>username: {author.username}</ListGroupItem>
        <ListGroupItem>email: {author.email}</ListGroupItem>
        <ListGroupItem>phone: {author.phone}</ListGroupItem>
      </ListGroup>
      <div className="Address">
        <h4>Address</h4>
        <ListGroup>
          <ListGroupItem>street: {author.street}</ListGroupItem>
          <ListGroupItem>city: {author.city}</ListGroupItem>
          <ListGroupItem>zipcode: {author.zipcode}</ListGroupItem>
        </ListGroup>
        <Map
          street={author.street}
          latitude={author.latitude}
          longitude={author.longitude}
        />
      </div>
      <div className="Company">
        <h4>Company</h4>
        <ListGroup>
          <ListGroupItem>name: {author.companyName}</ListGroupItem>
          <ListGroupItem>slogan: {author.companySlogan}</ListGroupItem>

        </ListGroup>
      </div>

    </div>
  );
}

function Map(props) {

  return (
    <iframe
      width="100%"
      height="100%"
      scrolling="no"
      marginHeight="0"
      marginWidth="0"
      title={props.street}
      frameBorder="0"
      style={{ border: 0 }}
      src={`https://maps.google.com/maps?q=${props.latitude},${props.longitude}&z=15&output=embed`}
    />

  )
}
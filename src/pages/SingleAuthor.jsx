import React, { Fragment } from "react";

export default function SingleAuthor(props) {
  return (
    <Fragment>
      <h1>Single Author Page</h1>
      <h4>showing content for author {props.match.params.id}</h4>
    </Fragment>
  );
}
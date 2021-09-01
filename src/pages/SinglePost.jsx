import React, { Fragment } from "react";

export default function SinglePost(props) {
  return (
    <Fragment>
      <h1>Single Post</h1>
      <h4>showing content for post {props.match.params.id}</h4>
    </Fragment>
  );
}
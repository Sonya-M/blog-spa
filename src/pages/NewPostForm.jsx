import React, { useState } from "react";
import { useHistory, useParams } from "react-router-dom";
import { Form } from "react-bootstrap";

export default function NewPostForm(props) {

  let history = useHistory();
  let { id } = useParams(); // post ID

  let selectedPost = props.posts.find(post => post.id === (+id));

  const initialFormState = selectedPost
    ? { authorId: selectedPost.authorId, title: selectedPost.title, body: selectedPost.body }
    : { authorId: "", title: "", body: "" };
  const [postInput, setPostInput] = useState(initialFormState);
  const [message, setMessage] = useState("");

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setPostInput({ ...postInput, [name]: value });
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    if (!postInput.title || !postInput.body || !postInput.authorId) {
      setMessage("Please fill out all the fields!");
      return;
    }
    if (!props.validator(+postInput.authorId)) { // convert string input to number with a + sign!!!
      setMessage("Invalid author ID!");
      return;
    }
    props.onAddPost({ ...postInput, id: +id, authorId: +postInput.authorId });
    history.push("/");
  };

  return (
    <div className="m-5">
      <h1 className="display-3 text-center">New Post</h1>
      <form onSubmit={handleSubmit}>
        <Form.Control
          className="m-2"
          type="number"
          name="authorId"
          value={postInput.authorId}
          placeholder="Author id"
          onChange={handleInputChange}
        />
        <Form.Control
          className="m-2"
          type="text"
          name="title"
          value={postInput.title}
          placeholder="Title"
          onChange={handleInputChange}
        />
        <Form.Control
          className="m-2"
          as="textarea"
          rows="10"
          name="body"
          value={postInput.body}
          placeholder="Content"
          onChange={handleInputChange}
        />

        <p>{message}</p>
        <button className="btn btn-primary m-2">Submit</button>
      </form>
    </div >
  );
}
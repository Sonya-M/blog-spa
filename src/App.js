import React, { useState, useEffect } from "react";
import { Switch, Route, Redirect } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import NewPostForm from "./pages/NewPostForm";
import SinglePost from "./pages/SinglePost";
import Authors from "./pages/Authors";
import SingleAuthor from "./pages/SingleAuthor";
import BlogNav from "./partials/BlogNav";
import BlogFooter from "./partials/BlogFooter";
import ErrorDisplay from "./partials/ErrorDisplay";
import Post from "./entities/Post";
import Author from "./entities/Author";

import { Container } from "react-bootstrap";

import 'bootstrap/dist/css/bootstrap.min.css';
import "./App.scss";
import { propTypes } from "react-bootstrap/esm/Image";


const DUMMY_POSTS = [
  new Post(1, "Title 1", "Body body body body body 1", 1),
  new Post(1, "Title 2", "Body body body body body 2", 2),
  new Post(1, "Title 3", "Body body body body body 3", 3),
  new Post(2, "Title 4", "Body body body body body 4", 4),
  new Post(3, "Title 5", "Body body body body body 5", 5),
  new Post(3, "Title 6", "Body body body body body 6", 6),
];
const DUMMY_AUTHORS = [
  new Author(1, "Name 1", "username 1", "email 1", "phone 1", "street 1", "city 1", "zipcode 1", "latitude 1", "longitude 1", "company 1", "company slogan 1"),
  new Author(2, "Name 2", "username 2", "email 2", "phone 2", "street 2", "city 2", "zipcode 2", "latitude 2", "longitude 2", "company 2", "company slogan 2"),
  new Author(3, "Name 3", "username 3", "email 3", "phone 3", "street 3", "city 3", "zipcode 3", "latitude 3", "longitude 3", "company 3", "company slogan 3"),
];


function App() {

  const [posts, setPosts] = useState(DUMMY_POSTS);
  const [authors, setAuthors] = useState(DUMMY_AUTHORS);


  return (
    <Container fluid id="blog-sap">
      <BlogNav />
      <Switch>
        <Route exact path="/">
          <Home posts={posts} />
        </Route> {/* list all posts */}
        <Route exact path="/posts/new" component={NewPostForm} />

        {/* NB!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
        to match the id of the path, use the `useParams()` hook:
        (see also the implementation of SinglePost & SingleAuthor)
        https://reactrouter.com/web/api/Hooks/useparams */}
        <Route exact path="/posts/:id">
          <SinglePost
            posts={posts}
            authors={authors}
          />
        </Route>

        <Route exact path="/authors">
          <Authors authors={authors} />
        </Route>

        {/* !!! see comment for Route to SinglePost above !!! */}
        <Route exact path="/authors/:id">
          <SingleAuthor
            posts={posts}
            authors={authors}
          />
        </Route>

        <Route exact path="/about" component={About} />
        <Route exact path="/posts">
          <Redirect to="/" />
        </Route>
        <Route>
          <ErrorDisplay message="Page not found" />
        </Route>
      </Switch>
      <BlogFooter />
    </Container>

  );
}

export default App;

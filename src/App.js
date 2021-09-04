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
import Communicator from "./services/Communicator";
import { getQuickAndDirtyPostId } from "./shared/utils";

import { Container } from "react-bootstrap";
import 'bootstrap/dist/css/bootstrap.min.css';
import "./App.scss";

function App() {

  const [posts, setPosts] = useState([]);
  const [authors, setAuthors] = useState([]);

  function addPost(post) {
    //TODO: should communicate with server
    if (post.id) {
      editPost(post);
      return;
    }
    const newPost = new Post(post.authorId, post.title, post.body,
      getQuickAndDirtyPostId());
    setPosts((prevPosts) => (
      [newPost, ...prevPosts]
    ));
  }

  function postInDatabase(postId) {
    return posts.findIndex(p => p.id === postId) !== -1;
  }

  function editPost(post) {
    //TODO: should communicate with server
    console.assert(postInDatabase(post.id));

    console.log(typeof post.id === typeof posts[0].id); // true
    const liked = (posts.find(p => p.id === post.id)).isLiked();

    const newPost = new Post(post.authorId, post.title, post.body,
      post.id); // set new id
    if (liked) newPost.like();
    setPosts((prevPosts) => (
      [newPost, ...(prevPosts.filter(p => p.id !== post.id))]
    ));
  }

  function deletePost(postId) {
    //TODO: should communicate with server
    console.assert(postInDatabase(+postId));
    setPosts(posts.filter(p => p.id !== +postId));
  }

  const isValidAuthorId = (id) => {
    return (authors.findIndex(author => author.id === id) !== -1);
  };

  const handleLike = (id) => {
    console.assert(postInDatabase(id));
    setPosts(posts.map(p => {
      if (p.id === id) {
        if (p.isLiked()) p.unlike();
        else p.like();
      }
      return p;
    }));
  };

  useEffect(() => {
    Communicator.fetchAllPosts()
      .then((response) => {
        setPosts(response);
      });
  }, []);

  useEffect(() => {
    Communicator.fetchAllAuthors()
      .then((response) => {
        setAuthors(response);
      });
  }, []);


  if (!authors || authors.length === 0 || !posts || posts.length === 0) {
    return (
      <div>Loading...</div>
    );
  }
  return (
    <Container fluid id="blog-sap">
      <BlogNav />
      <Switch>
        <Route exact path="/">
          <Home
            posts={posts}
            onDelete={deletePost}
            onLike={handleLike}
          />
        </Route> {/* list all posts */}

        <Route exact path="/new/:id">
          <NewPostForm
            validator={isValidAuthorId}
            onAddPost={addPost}
            posts={posts}
          />
        </Route>

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

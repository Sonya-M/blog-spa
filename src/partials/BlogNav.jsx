import React from "react";
import { Link } from "react-router-dom";
import "./BlogNav.scss";

function BlogNav(props) {
  return (
    <nav
      className="BlogNav d-flex justify-content-end align-items-center">
      <span>
        <Link to="/posts">Posts</Link>
      </span>
      <span>
        <Link to="/authors">Authors</Link>
      </span>
      <span>
        <Link to="/about">About</Link>
      </span>
    </nav>
  )
}

export default BlogNav;
import React from "react";
import { Link } from "react-router-dom";
import NewPostBtn from "./NewPostBtn";

import "./BlogNav.scss";

function BlogNav(props) {
  return (
    <nav
      className="BlogNav d-flex align-items-center justify-content-between">
      <span className="mr-auto p-2">
        <NewPostBtn />
      </span>
      <div>
        <span>
          <Link to="/posts">Posts</Link>
        </span>
        <span>
          <Link to="/authors">Authors</Link>
        </span>
        <span>
          <Link to="/about">About</Link>
        </span>
      </div>
    </nav>
  )
}

export default BlogNav;
import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { PostsContext } from "../../store/posts-context";

const Layout = (props) => {
  const postsCtx = useContext(PostsContext);
  const totalPosts = postsCtx.totalPosts;

  return (
    <div>
      <ul style={{ listStyleType: "none", display: "flex" }}>
        <li style={{ paddingLeft: "20px", paddingTop: "40px" }}>
          <Link to="/" style={{ textDecoration: "none" }}>
            My minimal blog
          </Link>
        </li>
        <li style={{ paddingLeft: "150px", paddingTop: "40px" }}>
          <Link to="/newpost" style={{ textDecoration: "none" }}>
            Add New Post
          </Link>
        </li>
        <li
          style={{
            paddingLeft: "300px",
            paddingRight: "20px",
          }}
        >
          <h1>Total posts: {totalPosts}</h1>
        </li>
      </ul>
      {props.children}
    </div>
  );
};

export default Layout;

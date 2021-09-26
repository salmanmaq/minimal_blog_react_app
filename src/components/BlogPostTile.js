import React from "react";
import { Link } from "react-router-dom";

const BlogPostTile = (props) => {
  const postLink = `/blog/${props.id}`;
  return (
    <li key={props.id}>
      <Link to={postLink}>{props.title}</Link>
    </li>
  );
};

export default BlogPostTile;

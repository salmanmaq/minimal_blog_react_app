import React, { useContext } from "react";
import { Link } from "react-router-dom";
import BlogPostTile from "../components/BlogPostTile";
import { PostsContext } from "../store/posts-context";

const MainPage = () => {
  const postsCtx = useContext(PostsContext);
  const posts = postsCtx.posts;
  const totalPosts = postsCtx.totalPosts;

  let content;

  if (totalPosts === 0) {
    content = (
      <h1>
        No posts yet. Create a new post <Link to="/newpost">here</Link>
      </h1>
    );
  } else {
    content = (
      <ul style={{ listStyleType: "none" }}>
        {posts.map((post) => (
          <BlogPostTile title={post.title} id={post.id} />
        ))}
      </ul>
    );
  }

  return <div>{content}</div>;
};

export default MainPage;

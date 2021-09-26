import React, { useContext } from "react";
import { Link, useParams } from "react-router-dom";
import { PostsContext } from "../store/posts-context";

const BlogPostPage = (props) => {
  const { postId } = useParams();
  const postsCtx = useContext(PostsContext);
  const posts = postsCtx.posts;
  const totalPosts = postsCtx.totalPosts;

  const post = posts.filter((post) => {
    return post.id === postId;
  });
  let content;

  if (totalPosts === 0) {
    content = (
      <h1>
        No posts yet. Create a new post <Link to="/newpost">here</Link>
      </h1>
    );
  } else {
    content = (
      <>
        <div>{post[0].title}</div>
        <div>{post[0].content}</div>
      </>
    );
  }

  return <div>{content}</div>;
};

export default BlogPostPage;

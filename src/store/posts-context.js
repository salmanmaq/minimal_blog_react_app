import { createContext, useEffect, useState } from "react";

export const PostsContext = createContext({
  posts: [],
  totalPosts: 0,
  addBlogPost: (post) => {},
});

export const PostsContextProvider = (props) => {
  const [blogPosts, setBlogPosts] = useState([]);

  useEffect(() => {
    const posts = JSON.parse(localStorage.getItem("minimalBlog.posts"));
    if (posts) setBlogPosts(posts);
  }, []);

  useEffect(() => {
    localStorage.setItem("minimalBlog.posts", JSON.stringify(blogPosts));
  }, [blogPosts]);

  const handleAddBlogPost = (post) => {
    setBlogPosts((prevBlogPosts) => {
      return prevBlogPosts.concat(post);
    });
  };

  const context = {
    posts: blogPosts,
    totalPosts: blogPosts.length,
    addBlogPost: handleAddBlogPost,
  };

  return (
    <PostsContext.Provider value={context}>
      {props.children}
    </PostsContext.Provider>
  );
};

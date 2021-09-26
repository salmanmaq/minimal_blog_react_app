import React, { useContext, useRef } from "react";
import { useHistory } from "react-router";
import { PostsContext } from "../store/posts-context";

const NewPostPage = (props) => {
  const postsCtx = useContext(PostsContext);

  const history = useHistory();

  const idInputRef = useRef();
  const titleInputRef = useRef();
  const contentInputRef = useRef();

  const handleOnSubmit = (event) => {
    event.preventDefault();

    const enteredId = idInputRef.current.value;
    const enteredTitle = titleInputRef.current.value;
    const enteredContent = contentInputRef.current.value;

    const newPost = {
      id: enteredId,
      title: enteredTitle,
      content: enteredContent,
    };

    postsCtx.addBlogPost(newPost);
    history.replace("/");
  };

  return (
    <form onSubmit={handleOnSubmit}>
      <div>
        <label htmlFor="id">Post ID</label>
        <input id="id" type="number" ref={idInputRef} required></input>
      </div>
      <br />
      <div>
        <label htmlFor="title">Post Title</label>
        <input id="title" type="text" ref={titleInputRef} required></input>
      </div>
      <br />
      <div>
        <label htmlFor="content">Conent</label>
        <textarea
          id="content"
          rows="10"
          ref={contentInputRef}
          required
        ></textarea>
      </div>
      <div>
        <button>Submit</button>
      </div>
    </form>
  );
};

export default NewPostPage;

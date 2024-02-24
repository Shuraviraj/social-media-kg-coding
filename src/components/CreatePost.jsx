import React from "react";
import { useContext } from "react";
import { useRef } from "react";
import { PostListContext } from "../store/post-list-store";
import { useId } from "react";

const CreatePost = () => {
  const { addPostList } = useContext(PostListContext);
  const userId = useRef();
  const title = useRef();
  const content = useRef();
  const reaction = useRef();
  const hashtags = useRef();
  const id = useId();

  const onSubmit = (e) => {
    e.preventDefault();
    if (!title.current.value || !content.current.value) return;
    const newPost = {
      id: id,
      title: title.current.value,
      body: content.current.value,
      reaction: Number.parseInt(reaction.current.value) || 0,
      userId: userId.current.value || "unknown",
      tags: hashtags.current.value.split(" "),
    };
    title.current.value = "";
    content.current.value = "";
    reaction.current.value = "";
    hashtags.current.value = "";
    userId.current.value = "";
    addPostList(newPost);
  };

  return (
    <form className="create-post" onSubmit={onSubmit}>
      <div className="mb-3">
        <label htmlFor="userId" className="form-label">
          ID
        </label>
        <input
          type="text"
          className="form-control"
          id="userId"
          placeholder="Enter your user ID....."
          ref={userId}
        />
      </div>

      <div className="mb-3">
        <label htmlFor="title" className="form-label">
          Post Title
        </label>
        <input
          type="text"
          className="form-control"
          id="title"
          placeholder="How you are feeling today....."
          ref={title}
        />
      </div>

      <div className="mb-3">
        <label htmlFor="body" className="form-label">
          Post Content
        </label>
        <textarea
          type="text"
          rows={4}
          className="form-control"
          id="body"
          placeholder="Describe your feeling....."
          ref={content}
        />
      </div>

      <div className="mb-3 d-flex justify-content-around gap-5">
        <div className="w-25">
          <label htmlFor="reaction" className="form-label">
            Initial Reaction
          </label>
          <input
            type="text"
            className="form-control"
            id="reaction"
            placeholder="ex. 2, 5, 10"
            ref={reaction}
          />
        </div>
        <div className="w-75">
          <label htmlFor="tags" className="form-label">
            Hash Tags
          </label>
          <input
            type="text"
            className="form-control"
            id="tags"
            placeholder="Add HashTags with ex.space enjoying entertaining Love"
            ref={hashtags}
          />
        </div>
      </div>

      <button type="submit" className="btn btn-primary w-100">
        POST
      </button>
    </form>
  );
};

export default CreatePost;

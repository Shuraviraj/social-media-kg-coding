import React, { useId } from "react";
import { MdDelete } from "react-icons/md";
import { IoIosHeart } from "react-icons/io";
import { useContext } from "react";
import { PostListContext } from "../store/post-list-store";

const Post = ({ post }) => {
  const { deletePostList, addPostHeart } = useContext(PostListContext);
  return (
    <div
      className="card post-card"
      style={{ width: "45rem", marginTop: "50px" }}
    >
      <div className="card-body">
        <h5 className="card-title">
          {post.title}
          <span
            className="position-absolute top-0 start-0 translate-middle badge rounded-pill bg-success mouse-hover-pointer "
            onClick={() => addPostHeart(post.id)}
          >
            <IoIosHeart /> {post.reaction}
          </span>
          <span
            className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger"
            onClick={() => deletePostList(post.id)}
          >
            <MdDelete />
          </span>
        </h5>
        <p className="card-text">{post.body}</p>
        {post.tags.map((tag) => (
          <span key={tag} className="badge text-bg-info mx-1">
            {tag}
          </span>
        ))}
      </div>
    </div>
  );
};

export default Post;

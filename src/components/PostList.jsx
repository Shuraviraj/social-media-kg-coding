import React, { useContext } from "react";
import { PostListContext } from "../store/post-list-store";
import Post from "./Post";

const PostList = () => {
  const { posts } = useContext(PostListContext);
  return (
    <>
      {posts.map((post) => {
        return <Post key={post.id} post={post} />;
      })}
    </>
  );
};

export default PostList;

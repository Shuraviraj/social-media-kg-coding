import { createContext, useReducer } from "react";

const DEFAULT_POST_LIST = [
  {
    id: "1",
    title: "Studying React",
    body: "Studying react and learning a lot of stuff",
    reaction: 2,
    userId: "user-9",
    tags: ["react", "study", "reactjs"],
  },
  {
    id: "2",
    title: "Watching Youtube",
    body: "Watching Movie on youtube Premium and learning a lot of stuff",
    reaction: 5,
    userId: "user-15",
    tags: ["movie", "youtube", "premium"],
  },
];

export const PostListContext = createContext({
  posts: [],
  addPostList: () => {},
  deletePostList: () => {},
  addPostHeart: () => {},
});

const postListReducer = (currPostList, action) => {
  let updatedPostList = currPostList;
  if (action.type === "DELETE_POST") {
    updatedPostList = currPostList.filter(
      (post) => post.id !== action.payload.postId
    );
  } else if (action.type === "ADD_POST_HEART") {
    updatedPostList = currPostList.map((post) => {
      if (post.id === action.payload.postId) {
        post.reaction = post.reaction + 0.5;
      }
      return post;
    });
  } else if (action.type === "ADD_POST") {
    updatedPostList = [action.payload.post, ...currPostList];
  }
  return updatedPostList;
};

export default function PostListProvider({ children }) {
  const [posts, dispatchPostList] = useReducer(
    postListReducer,
    DEFAULT_POST_LIST
  );

  const addPostList = (post) => {
    dispatchPostList({
      type: "ADD_POST",
      payload: {
        post,
      },
    });
  };

  const deletePostList = (postId) => {
    dispatchPostList({
      type: "DELETE_POST",
      payload: {
        postId,
      },
    });
  };

  const addPostHeart = (postId) => {
    dispatchPostList({
      type: "ADD_POST_HEART",
      payload: {
        postId,
      },
    });
  };

  return (
    <PostListContext.Provider
      value={{ posts, addPostList, deletePostList, addPostHeart }}
    >
      {children}
    </PostListContext.Provider>
  );
}

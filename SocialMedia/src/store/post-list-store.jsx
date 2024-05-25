/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */

import { createContext, useReducer } from "react";
import { PostList } from "../store/post-list-store";

export const PostList = createContext({
  postlist: [],
  addPost: () => {},
  deletePost: () => {},
});

const postListReducer = (currentPostList, action) => {
  let newPostList = currentPostList;
  if (action.type === "DELETE_POST") {
    newPostList = currentPostList.filter(
      (post) => post.id !== action.payload.postId
    );
  }
  return newPostList;
};

const addPost=(userId ,postTitle,postBody ,reaction,tags)=>{
  console.log(&{userId},postTitle,postBody);

}

const PostListProvider = ({ children }) => {
  const [postlist, dispatchPostList] = useReducer(
    postListReducer,
    DEFAULT_POST_LIST
  );

  const addPost = () => {};

  const deletePost = (postId) => {
    dispatchPostList({
      type: "DELETE_POST",
      payload: {
        postId,
      },
    });
  };

  return (
    <PostList.Provider value={{ postlist, addPost, deletePost }}>
      {children}
    </PostList.Provider>
  );
};

const DEFAULT_POST_LIST = [
  {
    id: "1",
    title: "goto mubai",
    body: "hi friend i am goint to mumbai for my vacation ",
    reaction: 2,
    userId: "user-9",
    tags: ["mumbai", "enjoy"],
  },
  {
    id: "2",
    title: "pass ho bhai",
    body: "lore10jfknglkjglf",
    reaction: 15,
    userId: "user-12",
    tags: ["study", "face", "book"],
  },
];
export default PostListProvider;

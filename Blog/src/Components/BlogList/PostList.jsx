/* eslint-disable react/prop-types */

import "./PostList.css";
import Post from "./Post";
import { PostContext } from "../../Context/PostProvider";
import { useContext } from "react";
import CreatePost from "./CreatePost";

function PostList() {
  const { posts } = useContext(PostContext);
  // console.log("PostList posts: "+posts)
  return (
    <div className="PostListContainer">
      {posts.map((post, index) => (
        <Post
          key={index}
          language={post.language}
          title={post.title}
          content={post.content}
        />
      ))}

<CreatePost />
    </div>
  );
}

export default PostList;

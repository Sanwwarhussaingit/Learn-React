/* eslint-disable react/prop-types */
import { useState,createContext } from "react";

export const PostContext = createContext();

function PostProvider({children}){
    const [posts,setPosts] = useState([]);

    const addPost = function(post){
        setPosts([...posts,post]);  
    }
    return(
        <PostContext.Provider value={{posts,addPost}}>
            {children}
        </PostContext.Provider>
    )
}

export default PostProvider;
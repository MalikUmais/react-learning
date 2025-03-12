import { useEffect } from "react";
import { useCallback } from "react";
import { createContext, useReducer,useState } from "react";

export const PostList = createContext({
  postList: [],
  addPost: () => {},
  fetching: false,
  deletePost: () => {},
});
const PostListReducer = (currPostList, action) => {
  let newPostList = currPostList;
  if (action.type === "DELETE_POST") {
    newPostList = currPostList.filter(
      (post) => post.id !== action.payload.postId
    );
  }else if(action.type==="ADD_INITIAL_POSTS"){
    newPostList=action.payload.posts;
  }
  else if(action.type==="ADD_POST"){
    newPostList=[action.payload,...currPostList]
  }
  return newPostList;
};
const PostListProvider = ({ children }) => {
  const [postList, dispatchPostList] = useReducer(
    PostListReducer,
    []
  );
  const [fetching, setFetching] = useState(false);
  
  const addPost = (post) => {
    dispatchPostList({
      type: "ADD_POST",
      payload:post,
    })
  };
  const addInitialPosts = (posts) => {
    dispatchPostList({
      type: "ADD_INITIAL_POSTS",
      payload: {
        posts,
      },
    });
  };
  const deletePost =useCallback ((postId) => {
    dispatchPostList({ type: "DELETE_POST", payload: { postId } });
  },[dispatchPostList]);

  useEffect(() => {
    setFetching(true);
    const controller=new AbortController();
    const signal=controller.signal;
    fetch("https://dummyjson.com/posts",{signal})
      .then((res) => res.json())
      .then((data) => {
        const modifiedPosts = data.posts.map((post) => ({
          ...post,
          reactions: post.reactions.likes, // Extract only likes
        }));
        addInitialPosts(modifiedPosts);
        setFetching(false);
      });
      
      return () => {
        controller.abort();
      }
  }, []);
  return (
    <PostList.Provider value={{ postList,fetching, addPost, deletePost }}>
      {children}
    </PostList.Provider>
  );
};

export default PostListProvider;


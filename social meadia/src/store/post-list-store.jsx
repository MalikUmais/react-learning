import { createContext, useReducer } from "react";

export const PostList = createContext({
  postList: [],
  addPost: () => {},
  deletePost: (postId) => {},
});
const PostListReducer = (currPostList, action) => {
  let newPostList = currPostList;
  if (action.type === "DELETE_POST") {
    newPostList = currPostList.filter(
      (post) => post.id !== action.payload.postId
    );
  }else if(action.type==="ADD_POST"){
    newPostList=[action.payload,...currPostList]
  }
  return newPostList;
};
const PostListProvider = ({ children }) => {
  const [postList, dispatchPostList] = useReducer(
    PostListReducer,
    DEFAULT_POST_LIST
  );
  const addPost = (userId,postTitle,postBody,reactions,tags) => {
    dispatchPostList({
      type: "ADD_POST",
      payload: {
        id: Date.now(),
        title: postTitle,
        body: postBody,
        reactions: reactions,
        userID: userId,
        tags: tags,
      },
    })
  };
  const deletePost = (postId) => {
    dispatchPostList({ type: "DELETE_POST", payload: { postId } });
  };

  return (
    <PostList.Provider value={{ postList, addPost, deletePost }}>
      {children}
    </PostList.Provider>
  );
};
const DEFAULT_POST_LIST = [
  {
    id: "1",
    title: "Going to the market",
    body: "Hi I am going to the market to buy some fruits",
    reactions: 2,
    userID: "user_1",
    tags: ["#fruits", "#market"],
  },
  {
    id: "2",
    title: "Pass ho bhai",
    body: "Degree complete ho gae h yaor",
    reactions: 12,
    userID: "user_12",
    tags: ["#Graduating", "#Unbelievable"],
  },
];
export default PostListProvider;

import { useContext, useEffect, useState } from "react";
import Post from "./Post";
import { PostList as PostListData } from "../store/post-list-store";
import WelcomeMessage from "./WelcomeMessage";
import { useLoaderData } from "react-router-dom";

const PostList = () => {
  const postList=useLoaderData();

  return (
    <>
      
      { postList.length === 0 && <WelcomeMessage></WelcomeMessage>}
      { postList.map((post) => (
        <Post key={post.id} post={post} />
      ))}
    </>
  );
};
export const postLoader = () => {
  return fetch("https://dummyjson.com/posts")
  .then((res) => res.json())
  .then((data) => {
    const modifiedPosts = data.posts.map((post) => ({
      ...post,
      reactions: post.reactions.likes, // Extract only likes
    }));
    return modifiedPosts; 
  });
}
export default PostList;

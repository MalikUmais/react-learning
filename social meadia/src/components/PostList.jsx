import { useContext, useEffect } from "react";
import Post from "./Post";
import { PostList as PostListData } from "../store/post-list-store";
import WelcomeMessage from "./WelcomeMessage";

const PostList = () => {
  const { postList, addInitialPosts } = useContext(PostListData);
useEffect(() => {
  fetch("https://dummyjson.com/posts")
    .then((res) => res.json())
    .then((data) => {
      const modifiedPosts = data.posts.map((post) => ({
        ...post,
        reactions: post.reactions.likes, // Extract only likes
      }));
      addInitialPosts(modifiedPosts);
    });
  
}, []);
  

  const handleGetPostsClick = () => {};
  return (
    <>
      {postList.length === 0 && <WelcomeMessage></WelcomeMessage>}
      {postList.map((post) => (
        <Post key={post.id} post={post} />
      ))}
    </>
  );
};
export default PostList;

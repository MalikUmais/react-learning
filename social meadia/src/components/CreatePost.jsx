import { useContext, useRef } from "react";
import { PostList } from "../store/post-list-store";
const CreatePost = () => {
  const{addPost}=useContext(PostList);
  const userIdElement=useRef();
  const postTitleElement=useRef();
  const postBodyElement=useRef();
  const reactionsElement=useRef();
  const tagsElement=useRef();
  const handleSubmit=(event)=>{
    event.preventDefault();
    const userId=userIdElement.current.value;
    const postTitle=postTitleElement.current.value;
    const postBody=postBodyElement.current.value;
    const reactions=reactionsElement.current.value;
    const tags=tagsElement.current.value.split(" ");
    userIdElement.current.value="";
    postTitleElement.current.value="";
    postBodyElement.current.value="";
    reactionsElement.current.value="";
    tagsElement.current.value="";

    fetch('https://dummyjson.com/posts/add', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        // title: 'I am in love with someone.',
        userId: userId,
        title: postTitle,
        body: postBody,
        reactions: reactions,
        userID: userId,
        tags: tags,
        /* other post data */
      })
    })
    .then(res => res.json())
    .then(post => addPost(post));

    
  }
  return (
    <form className="create-post" onSubmit={handleSubmit}>
      <div className="mb-3">
        <label htmlFor="userId" className="form-label">
          Enter your User Id here
        </label>
        <input
          type="text"
          ref={userIdElement}
          className="form-control"
          id="userId"
          placeholder="Your User Id"
        />
      </div>
      <div className="mb-3">
        <label htmlFor="title" className="form-label">
          Post Title
        </label>
        <input
          type="text"
          ref={postTitleElement}
          className="form-control"
          id="text"
          placeholder="Express your thoughts..."
        />
      </div>
      <div className="mb-3">
        <label htmlFor="body" className="form-label">
          Post Content
        </label>
        <textarea rows="4"
          type="text"
          ref={postBodyElement}
          className="form-control"
          id="body"
          placeholder="Tell us more..."
        />
      </div>
      <div className="mb-3">
        <label htmlFor="reactions" className="form-label">
          Number of Reactions
        </label>
        <input 
          type="text"
          ref={reactionsElement}
          className="form-control"
          id="reactions"
          placeholder="How many people reacted to this post"
        />
      </div>
      <div className="mb-3">
        <label htmlFor="tags" className="form-label">
          Enter your Hashtags
        </label>
        <input 
          type="text"
          ref={tagsElement}
          className="form-control"
          id="tags"
          placeholder="Please Enter tags using space"
        />
      </div>

      <button type="Post" className="btn btn-primary">
        Post
      </button>
    </form>
  );
};
export default CreatePost;

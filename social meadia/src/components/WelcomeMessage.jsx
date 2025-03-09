const WelcomeMessage = ({onGetPostsClick}) => {
  return (
    <center className="welcome-message">
      <h1 className="text-center ">No Posts</h1>
      <button type="button" className="btn btn-secondary" onClick={onGetPostsClick}>
        Fetch Posts
      </button>
    </center>
  );
};
export default WelcomeMessage;

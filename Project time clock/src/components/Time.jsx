let Time = () => {
  let time = new Date();
  return (
    <p className="lead">
      Current Time:{time.toLocaleDateString()} || {time.toLocaleTimeString()}    
    </p>
  );
};
export default Time;

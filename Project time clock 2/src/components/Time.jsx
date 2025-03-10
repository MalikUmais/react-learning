import { useEffect, useState } from "react";

let Time = () => {
  const [time, setTime] = useState(new Date());
  useEffect(() => {
    const intervalId = setInterval(() => {
      setTime(new Date());
    }, 1000);
    return () => {
      clearInterval(intervalId);
    };
  }, []);

  return (
    <p className="lead">
      Current Time:{time.toLocaleDateString()} || {time.toLocaleTimeString()}
    </p>
  );
};
export default Time;
